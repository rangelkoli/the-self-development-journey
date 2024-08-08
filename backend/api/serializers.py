from .models import SignUpWaitlist, User, UserManager
from rest_framework import serializers

class SignUpWaitlistSerializer(serializers.ModelSerializer):
    class Meta:
        model = SignUpWaitlist
        fields = "__all__"


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"

    def create(self, validated_data):
        user = User.objects.create_user(
            email=validated_data['email'],
            password=validated_data['password'],
            name=validated_data['name'],
            
        )
        return user
    
    def update(self, instance, validated_data):
        instance.email = validated_data.get('email', instance.email)
        instance.set_password(validated_data.get('password', instance.password))
        instance.save()
        return instance
    
    def to_representation(self, instance):
        rep = super().to_representation(instance)
        rep.pop('password')
        return rep
    
    def validate(self, data):
        if self.instance is None and User.objects.filter(email=data['email']).exists():
            raise serializers.ValidationError("User with this email already exists")
        return data
    