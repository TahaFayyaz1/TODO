from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path("todo", views.todos, name="todos"),
    path("priority", views.priorities, name="priorities"),
    path("todo/<int:todo_id>", views.todo_id, name="todo_id"),
    path("priority/<int:todo_id>", views.priority, name="priority"),
    path("token/", views.MyTokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
]
