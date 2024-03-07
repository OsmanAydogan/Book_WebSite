from django.shortcuts import render
from book_api.serializer import KitapSerializer
from .models import Kitap
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

@api_view(['GET','POST'])
def books(request):
    if request.method=='GET':
        books=Kitap.objects.all()
        serializer=KitapSerializer(books, many=True)
        return Response(serializer.data)
    elif request.method=='POST':
        serializer=KitapSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)
        
        
@api_view(['GET', 'PUT', 'DELETE'])
def book(request, id):
    try:
        book=Kitap.objects.get(pk=id)
    except:
        return Response({"hata":"eşleşen bir kayıt bulunamadı"}, status=status.HTTP_404_NOT_FOUND)
    if request.method=='GET':
        serializer=KitapSerializer(book)
        return Response(serializer.data)
        
    elif request.method=='PUT':
        serializer=KitapSerializer(book,data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    elif request.method=='DELETE':
        book.delete()
        return Response({'delete':True})
    
@api_view(['POST'])
def register(request):
    if request.method == 'POST':
        username = request.data.get('username')
        email = request.data.get('email')
        password = request.data.get('password')
        password2 = request.data.get('password2')

        if password == password2:
            if User.objects.filter(email=email).exists():
                return Response({'error': 'Email zaten var.'}, status=status.HTTP_400_BAD_REQUEST)
            elif User.objects.filter(username=username).exists():
                return Response({'error': 'Kullanıcı adı zaten var.'}, status=status.HTTP_400_BAD_REQUEST)
            else:
                user = User.objects.create_user(username=username, email=email, password=password)
                user.save()
                return Response({'message': 'Kullanıcı başarıyla eklendi.'}, status=status.HTTP_201_CREATED)
        else:
            return Response({'error': 'Şifre aynı değil.'}, status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response({'error': 'Invalid request method'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)
