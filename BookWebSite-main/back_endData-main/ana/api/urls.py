from django.urls import path
from . import views  

urlpatterns = [
    path('list/', views.books),
    path('<int:id>', views.book),   
    path('user', views.Users),
    path('user/<int:id>',views.UserActivity),
    path('login', views.LoginView),
    path('logout',views.LogoutView),
    path('userview',views.UserView),
    path('favs/<int:id>',views.favoriler),
    path('search/filter/',views.filterByBar),
    path('okunanlar/<int:id>', views.okunanlar)

]