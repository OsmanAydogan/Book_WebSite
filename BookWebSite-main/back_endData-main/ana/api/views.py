from django.shortcuts import render
from api.serializer import *
from .models import *
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
import jwt, datetime
from django.contrib.auth import get_user_model

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
    
@api_view(['GET','POST'])
def Users(request):
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
    elif request.method=='GET':
        kullanicilar=User.objects.all()
        serializer=UserSerializer(kullanicilar, many=True)
        return Response(serializer.data)
    else:
        return Response({'error': 'Invalid request method'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)
    
    
@api_view(['GET','PUT','DELETE'])
def UserActivity(request,id):
    try:
        kullanici=User.objects.get(pk=id)
    except:
        return Response({"hata":"eşleşen bir kayıt bulunamadı"}, status=status.HTTP_404_NOT_FOUND)
    if request.method=='GET':
        serializer=UserSerializer(kullanici)
        return Response(serializer.data)
    elif request.method=='PUT':
        serializer=UserSerializer(kullanici, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    elif request.method=='DELETE':
        kullanici.delete()
        return Response({'delete':True})

@api_view(['POST'])
def LoginView( request):
    username=request.data.get('username')
    password=request.data.get('password')

    user=User.objects.filter(username=username).first()

    if user is None:
        return Response({'error':'Geçersiz Kullanıcı Adı'})
    
    if not user.check_password(password):
        return Response({'error':'Geçersiz Şifre'})
    
    payload={
        'id':user.id,
        'exp':datetime.datetime.utcnow() + datetime.timedelta(hours=2),
        'iat':datetime.datetime.utcnow(),
        'answer':True
    }
    
    token = jwt.encode(payload, 'secret', algorithm='HS256')

    user_tokens = request.session.get('user_tokens', [])
    user_tokens.append(token)
    request.session['user_tokens'] = user_tokens


    response=Response()
    response.set_cookie(key='jwt', value=token, httponly=True)
    response.data={
        'jwt':token
    }
    return Response(payload)


@api_view(['GET'])
def UserView(request):
    token=request.COOKIES.get('jwt')
    if not token:
        return Response({'error':'Unauthenticated'})
    
    try:
        payload=jwt.decode(token,'secret', algorithms=['HS256'])
    except jwt.ExpiredSignatureError:
        return Response({'error':'Token Zaman Aşmıştır'})
    user=User.objects.filter(id=payload['id']).first()
    serializer=UserSerializer(user)
    return Response(serializer.data)

@api_view(['POST'])
def LogoutView(request):
    response=Response()
    response.delete_cookie('jwt')
    response.data={
        'Mesaj':'Çıkış Yapıldı'
    }
    return response


# @api_view(['GET', 'POST'])
# def favoriler(request, id):
#     if request.method == 'GET':
#         fav_books = Favoriler.objects.filter(kullaniciid_fav=id)
        
#         # Kitap bilgilerini almak için serializer'ı güncelle
#         serializer = FavoriSerializer(fav_books, many=True, context={'request': request})
#         return Response(serializer.data)
# @api_view(['GET', 'POST'])
# def favoriler(request, id):
#     if request.method == 'GET':
#         fav_books = Favoriler.objects.filter(kullaniciid_fav=id)
        
     
#         serializer = FavoriSerializer(fav_books, many=True, context={'request': request})
#         return Response(serializer.data)
#     elif request.method == 'POST':
       
#         data = request.data
#         kitap_id = data.get('kitapid_fav', None)

#         if kitap_id is not None:
#             kitap = Kitap.objects.get(pk=kitap_id)
#             Favoriler.objects.create(kitapid_fav=kitap, kullaniciid_fav_id=id)
#             return Response({"message": "Favori başarıyla eklendi."}, status=status.HTTP_201_CREATED)
#         else:
#             return Response({"error": "kitapid_fav alanı zorunlu."}, status=status.HTTP_400_BAD_REQUEST)
@api_view(['GET', 'POST'])
def favoriler(request, id):
    if request.method == 'GET':
        fav_books = Favoriler.objects.filter(kullaniciid_fav=id)
        serializer = FavoriSerializer(fav_books, many=True, context={'request': request})
        return Response(serializer.data)

    elif request.method == 'POST':
        data = request.data
        kitap_id = data.get('kitapid_fav', None)

        if kitap_id is not None:
            existing_favori = Favoriler.objects.filter(kitapid_fav=kitap_id, kullaniciid_fav_id=id).first()

            if existing_favori:
                return Response({"error": "Bu kitap zaten favori olarak eklenmiş."}, status=status.HTTP_400_BAD_REQUEST)
            else:
                kitap = Kitap.objects.get(pk=kitap_id)
                Favoriler.objects.create(kitapid_fav=kitap, kullaniciid_fav_id=id)
                return Response({"message": "Favori başarıyla eklendi."}, status=status.HTTP_201_CREATED)
        else:
            return Response({"error": "kitapid_fav alanı zorunlu."}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def filterByBar(request):
    arama_kelimesi = request.query_params.get('arama', None)
    kategori_adi = request.query_params.get('kategori', None)


    queryset = Kitap.objects.all()

    if arama_kelimesi:
        queryset = queryset.filter(
            models.Q(kitapad__icontains=arama_kelimesi) |
            models.Q(yazarid_kitap__yazaradi__icontains=arama_kelimesi)
        )
    if kategori_adi:
        queryset = queryset.filter(kategoriid_kitap__kategori__icontains=kategori_adi)


    serializer = KitapSerializer(queryset, many=True)
    return Response(serializer.data)

@api_view(['GET', 'POST'])
def okunanlar(request, id):
    if request.method == 'GET':
        okunan_books = Okunanlarlistesi.objects.filter(kullaniciid_okunanlar=id)
        serializer = OkunanlarSerializer(okunan_books, many=True, context={'request': request})
        return Response(serializer.data)

    elif request.method == 'POST':
        data = request.data
        kitap_id = data.get('kitapid_okunanlar', None)

        if kitap_id is not None:
            existing_okunan = Okunanlarlistesi.objects.filter(kitapid_okunanlar=kitap_id, kullaniciid_okunanlar_id=id).first()

            if existing_okunan:
                return Response({"error": "Bu kitap zaten okunanlar listesinde."}, status=status.HTTP_400_BAD_REQUEST)
            else:
                kitap = Kitap.objects.get(pk=kitap_id)
                Okunanlarlistesi.objects.create(kitapid_okunanlar=kitap, kullaniciid_okunanlar_id=id)
                return Response({"message": "Okunanlar listesine başarıyla eklendi."}, status=status.HTTP_201_CREATED)
        else:
            return Response({"error": "kitapid_okunanlar alanı zorunlu."}, status=status.HTTP_400_BAD_REQUEST)
# @api_view(['GET'])
# def filterByBar(request):
#     arama_kelimesi = request.query_params.get('arama', None)
#     kategori_adi = request.query_params.get('kategori', None)

#     queryset = Kitap.objects.all()

#     if arama_kelimesi:
#         queryset = queryset.filter(
#             models.Q(kitapad__icontains=arama_kelimesi) |
#             models.Q(yazarid_kitap_yazaradi_icontains=arama_kelimesi)
#         )
        
#     if kategori_adi:
#         queryset = queryset.filter(kategoriid_kitap_kategori_icontains=kategori_adi)

#     serializer = KitapSerializer(queryset, many=True)
#     return Response(serializer.data)
# @api_view(['GET'])
# def filterByBar(request):
#     arama_kelimesi = request.query_params.get('arama', None)
#     kategori_adi = request.query_params.get('kategori', None)

#     queryset = Kitap.objects.all()

#     if arama_kelimesi:
#         queryset = queryset.filter(
#             models.Q(kitapad__icontains=arama_kelimesi) |
#             models.Q(yazarid_kitap_yazaradi_icontains=arama_kelimesi)
#         )
        
#     if kategori_adi:
#         queryset = queryset.filter(kategoriid_kitap_kategori_icontains=kategori_adi)

#     serializer = KitapSerializer(queryset, many=True)
#     return Response(serializer.data)
# @api_view(['GET'])
# def filterByCate(request):
#     kategori_adi = request.query_params.get('kategori', None)

#     if kategori_adi:
#         queryset = queryset.filter(kategoriid_kitap_kategori_icontains=kategori_adi)

#     serializer = KitapSerializer(queryset, many=True)
#     return Response(serializer.data)




