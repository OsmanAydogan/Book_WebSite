from rest_framework import serializers
from api.models import *
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model


# class KitapSerializer(serializers.Serializer):
#     kitapad=serializers.CharField()
#     kitapid=serializers.IntegerField()
#     yayintarihi=serializers.DateField()
#     sayfasayisi=serializers.IntegerField()
#     ozet=serializers.CharField()
#     kategori_ad = serializers.SerializerMethodField()
#     yazar_ad = serializers.SerializerMethodField()
#     kitap_img=serializers.CharField()

    

#     def get_yazar_ad(self, obj):

#         return obj.yazarid_kitap.yazaradi
    
#     def get_kategori_ad(self, obj):
       
#         return obj.kategoriid_kitap.kategori 


#     def create(self, validated_data):
#         return Kitap.objects.create(**validated_data)
    

#     def update(self, instance, validated_data):
#         instance.kitapad=validated_data.get("kitapad", instance.kitapad)
#         instance.sayfasayisi=validated_data.get("sayfasayisi", instance.sayfasayisi)
#         instance.yayintarihi=validated_data.get("yayintarihi", instance.yayintarihi)
#         instance.save()
#         return instance
class KitapSerializer(serializers.Serializer):
    kitapad=serializers.CharField()
    kitapid=serializers.IntegerField()
    yayintarihi=serializers.DateField()
    sayfasayisi=serializers.IntegerField()
    ozet=serializers.CharField()
    kategori_ad = serializers.SerializerMethodField()
    yazar_ad = serializers.SerializerMethodField()
    kitap_img=serializers.CharField()

    

    def get_yazar_ad(self, obj):

        return obj.yazarid_kitap.yazaradi
    
    def get_kategori_ad(self, obj):
       
        return obj.kategoriid_kitap.kategori 


    def create(self, validated_data):
        return Kitap.objects.create(**validated_data)
    

    def update(self, instance, validated_data):
        instance.kitapad=validated_data.get("kitapad", instance.kitapad)
        instance.sayfasayisi=validated_data.get("sayfasayisi", instance.sayfasayisi)
        instance.yayintarihi=validated_data.get("yayintarihi", instance.yayintarihi)
        instance.save()
        return instance

class UserSerializer(serializers.ModelSerializer):
    username=serializers.CharField()
    email=serializers.CharField()
    password=serializers.CharField()
    password2 = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password', 'password2']

    def create(self, validated_data):
        password2 = validated_data.pop('password2', None)
        user = User(**validated_data)
        
        if password2 and user.password != password2:
            raise serializers.ValidationError({"password": "Şifre uyuşmuyor."})

        user.set_password(validated_data['password'])
        user.save()
        return user
    
    def update(self, instance, validated_data):
        instance.username=validated_data.get("username", instance.username)
        instance.email=validated_data.get("email", instance.email)
        instance.save()
        return instance
    
class IncelemeSerializer(serializers.ModelSerializer):
    incelemeid=serializers.IntegerField()
    puan=serializers.IntegerField()
    kitapad=serializers.SerializerMethodField()
    kullaniciad=serializers.SerializerMethodField()

    def get_kitapad(self, obj):
            return obj.kitapid.kitapad
        
    def get_kullaniciad(self,obj):
            return obj.user.username

    class Meta:
            model=Inceleme
class OkunanlarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Okunanlarlistesi
        fields = "__all__"

    #***
    kitapid_okunanlar = serializers.PrimaryKeyRelatedField(queryset=Kitap.objects.all()) 
    kitapid_okunanlar  = KitapSerializer()

    kullaniciid_okunanlar = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())

    def create(self, validated_data):
        kitap = validated_data.pop('kitapid_okunanlar')
        kullanici = validated_data.get('kullaniciid_okunanlar')
        okunanlar = Okunanlarlistesi.objects.create(kitapid_okunanlar=kitap, kullaniciid_okunanlar=kullanici)
        return okunanlar
class FavoriSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favoriler
        fields = "__all__"

    kitapid_fav = KitapSerializer()
    kullaniciid_fav = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())

    def create(self, validated_data):
        kitap = validated_data.pop('kitapid_fav')
        kullanici = validated_data.get('kullaniciid_fav')
        favori = Favoriler.objects.create(kitapid_fav=kitap, kullaniciid_fav=kullanici)
        return favori


