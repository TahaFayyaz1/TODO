from django.contrib import admin
from .models import Todo, Priority, User

# Register your models here.

admin.site.register(User)
admin.site.register(Todo)
admin.site.register(Priority)
