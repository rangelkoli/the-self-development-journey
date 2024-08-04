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
    print(request.data)
    jsonData = json.loads(request.body)
    email = jsonData['email']
    print(email)
    signup_waitlist = SignUpWaitlist(email=email)
    signup_waitlist.save()
    return Response({'message': 'Email added to waitlist!'})

@api_view(['GET'])
def home(request):
    return Response({'message': 'Hello, world!'})