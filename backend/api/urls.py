from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path("home/", views.home, name="home"),
    path("waitlist/", views.waitlist, name="waitlist"),
    path("waitlisted-users/", views.waitlistedUsers, name="waitlisted-users"),
]
