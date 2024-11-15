from rest_framework import serializers
from .models import Todo, Priority, User
from django.db import IntegrityError
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


# Now we can get access to username through the token in frontend
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token["username"] = user.username
        return token


class RegisterSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=150)
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)
    confirmation = serializers.CharField(write_only=True)

    def validate(self, data):
        if data["password"] != data["confirmation"]:
            raise serializers.ValidationError("Passwords must match.")
        return data

    def create(self, validated_data):
        try:
            user = User.objects.create_user(
                username=validated_data["username"],
                email=validated_data["email"],
                password=validated_data["password"],
            )
            return user
        except IntegrityError:
            raise serializers.ValidationError({"username": "Username already taken."})


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"


class TodoSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source="user.username")

    class Meta:
        model = Todo
        fields = "__all__"


class PrioritySerializer(serializers.ModelSerializer):
    title = TodoSerializer()

    class Meta:
        model = Priority
        fields = "__all__"
