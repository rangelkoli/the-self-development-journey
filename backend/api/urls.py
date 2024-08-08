from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path("home/", views.home, name="home"),
    path("waitlist/", views.waitlist, name="waitlist"),
    path("waitlisted-users/", views.waitlistedUsers, name="waitlisted-users"),
    path("register/", views.Register.as_view(), name="register"),
    path("login/", views.Login.as_view(), name="login"),
    path("user/", views.UserView.as_view(), name="user"),
    path("logout/", views.LogoutView.as_view(), name="logout"),
]
