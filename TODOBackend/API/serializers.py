from rest_framework import serializers
from .models import Todo, Priority, User
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


# Now we can get access to username through the token in frontend
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token["username"] = user.username
        return token


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = "__all__"


class PrioritySerializer(serializers.ModelSerializer):
    title = TodoSerializer()

    class Meta:
        model = Priority
        fields = "__all__"
