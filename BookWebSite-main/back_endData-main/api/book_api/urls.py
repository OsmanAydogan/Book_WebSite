from django.urls import path
from . import views  

urlpatterns = [
    path('list/', views.books),
    path('<int:id>', views.book),
    path('register', views.register)
]
