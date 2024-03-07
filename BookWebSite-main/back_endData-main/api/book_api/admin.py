from django.contrib import admin
from .models import *

@admin.register(Kitap)
class KitapAdmin(admin.ModelAdmin):
    list_display = ('kitapid','kitapad','yazarid_kitap','yayintarihi','dil','ozet','kategoriid_kitap','sayfasayisi')

@admin.register(Favoriler)
class FavorilerAdmin(admin.ModelAdmin):
    list_display = ('favoriid', 'kullaniciid_fav', 'kitapid_fav')

@admin.register(Inceleme)
class IncelemeAdmin(admin.ModelAdmin):
    list_display = ('incelemeid','kitapid_inceleme')

@admin.register(Okunacaklarlistesi)
class OkunacaklarlistesiAdmin(admin.ModelAdmin):
    list_display = ('okunacaklarlistesiid', 'kitapid_okunacaklar', 'kullaniciid_okunacaklar')

@admin.register(Okunanlarlistesi)
class OkunanlarlistesiAdmin(admin.ModelAdmin):
    list_display = ('okunanlarlistesiid', 'kitapid_okunanlar', 'kullaniciid_okunanlar')

@admin.register(Yazarlar)
class OkunanlarlistesiAdmin(admin.ModelAdmin):
    list_display = ('yazarid', 'yazaradi', 'yazardogumtarihi')    



