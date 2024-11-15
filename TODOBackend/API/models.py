from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.
class User(AbstractUser):
    pass


class Todo(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    description = models.TextField()
    completed = models.BooleanField(default=False)
    datetime = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title


class Priority(models.Model):
    title = models.ForeignKey(Todo, on_delete=models.CASCADE, related_name="priority")

    def __str__(self):
        return self.title.title
