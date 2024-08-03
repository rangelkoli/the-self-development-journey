from .models import SignUpWaitlist
from rest_framework import serializers

class SignUpWaitlistSerializer(serializers.ModelSerializer):
    class Meta:
        model = SignUpWaitlist
        fields = "__all__"

