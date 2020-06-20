from django.urls import path, include
from images import views
urlpatterns = [
    path('fetch/<str:username>', views.fetch),
    path('upload/<str:username>', views.fetch)
]