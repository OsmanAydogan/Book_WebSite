from django.contrib import admin
from .models import *

@admin.register(Favoriler)
class FavorilerAdmin(admin.ModelAdmin):
    list_display = ('favoriid', 'kitapid_fav')

@admin.register(Inceleme)
class IncelemeAdmin(admin.ModelAdmin):
    list_display = ('incelemeid', 'kullaniciid_inceleme', 'kitapid_inceleme', 'yazarid_inceleme', 'puan')

@admin.register(Kategori)
class KategoriAdmin(admin.ModelAdmin):
    list_display = ('kategoriid', 'kategori')

@admin.register(Kitap)
class KitapAdmin(admin.ModelAdmin):
    list_display = ('kitapid','kitapad','yazarid_kitap','yayintarihi','dil','ozet','kategoriid_kitap','sayfasayisi')

@admin.register(Okunacaklarlistesi)
class OkunacaklarlistesiAdmin(admin.ModelAdmin):
    list_display = ('okunacaklarlistesiid', 'kitapid_okunacaklar', 'kullaniciid_okunacaklar')

@admin.register(Okunanlarlistesi)
class OkunanlarlistesiAdmin(admin.ModelAdmin):
    list_display = ('okunanlarlistesiid', 'kitapid_okunanlar')

@admin.register(Yazarlar)
class YazarlarAdmin(admin.ModelAdmin):
    list_display = ('yazarid', 'yazaradi', 'yazardogumtarihi', 'yazarbiyografi', 'yazarfoto', 'oduller')


