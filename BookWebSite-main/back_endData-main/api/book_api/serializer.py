from rest_framework import serializers
from book_api.models import Kitap
from django.contrib.auth.models import User

class KitapSerializer(serializers.Serializer):
    kitapad=serializers.CharField()
    yayintarihi=serializers.DateField()
    sayfasayisi=serializers.IntegerField()
    dil=serializers.CharField()
    ozet=serializers.CharField()
    yazarid_kitap=serializers.IntegerField()
    kategoriid_kitap=serializers.IntegerField()
    


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