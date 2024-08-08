from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import SignUpWaitlist
from .serializers import SignUpWaitlistSerializer
import json
from rest_framework.views import APIView
from rest_framework import status
from .serializers import UserSerializer
from .models import User
import jwt
import datetime


@api_view(['GET'])
def hello_world(request):
    return Response({'message': 'Hello, world!'})

# Create your views here.

@api_view(['POST'])
def waitlist(request):
    print("data:", request.data)
    email = request.data['email']
    print("email:",email)
    signup_waitlist = SignUpWaitlist(email=email)
    signup_waitlist.save()
    return Response({'message': 'Email added to waitlist!'})

@api_view(['GET'])
def home(request):
    return Response({'message': 'Hello, world!'})

@api_view(['GET'])
def waitlistedUsers(request):
    waitlist = SignUpWaitlist.objects.all()
    count = waitlist.count()
    print("count:", count)
    
    return Response({'message': 'Waitlisted users', 'count': count})


class Register(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'User created successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def get(self, request):
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)
    

class Login(APIView):
    def post(self, request):
        email = request.data['email']
        password = request.data['password']
        user = User.objects.get(email=email)
        if user is None:
            return Response({'message': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
        if user.check_password(password):
            payload = {
                'id': user.id,
                'exp': datetime.datetime.now() + datetime.timedelta(days=15),
                'iat': datetime.datetime.now()

            }
            jwt_token = jwt.encode(payload, 'SECRET_KEY', algorithm='HS256')
            return Response({'jwt_token': jwt_token})
        return Response({'message': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
    
    def get(self, request):
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)
    
class UserView(APIView):
    def get(self, request):
        token = request.headers['Authorization']
        token = token.split(' ')[1]
        print("token:", token)
        try:
            payload = jwt.decode(token, 'SECRET_KEY', algorithms=['HS256'])
            user = User.objects.get(id=payload['id'])
            serializer = UserSerializer(user)
            return Response(serializer.data)
        except jwt.ExpiredSignatureError:
            return Response({'error': 'Token expired'}, status=status.HTTP_400_BAD_REQUEST)
        except jwt.DecodeError:
            return Response({'error': 'Invalid token'}, status=status.HTTP_400_BAD_REQUEST)
        except jwt.InvalidTokenError:
            return Response({'error': 'Invalid token'}, status=status.HTTP_400_BAD_REQUEST)
        except User.DoesNotExist:
            return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({'error': 'Something went wrong'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
        
class LogoutView(APIView):
    def post(self, request):
        resopnse = Response()
        resopnse.delete_cookie('jwt')
        resopnse.data = {
            'message': 'User logged out successfully'
        }
        return resopnse