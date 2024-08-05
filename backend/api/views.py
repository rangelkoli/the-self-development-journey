from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import SignUpWaitlist
from .serializers import SignUpWaitlistSerializer
import json



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
