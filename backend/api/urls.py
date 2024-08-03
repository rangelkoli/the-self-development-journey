from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [

    path("waitlist/", views.waitlist, name="waitlist"),
]
