# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Favoriler(models.Model):
    favoriid = models.AutoField(db_column='favoriID', primary_key=True)  
    kullaniciid_fav = models.ForeignKey('AuthUser', models.DO_NOTHING, db_column='kullaniciID_fav')  
    kitapid_fav = models.ForeignKey('Kitap', models.DO_NOTHING, db_column='kitapID_fav')  

    def __str__(self):
        return f"{self.favoriid}"

    class Meta:
        managed = False
        db_table = 'FAVORILER'


class Inceleme(models.Model):
    incelemeid = models.AutoField(db_column='incelemeID', primary_key=True)  
    kullaniciid_inceleme = models.ForeignKey('AuthUser', models.DO_NOTHING, db_column='kullaniciID_inceleme')  
    kitapid_inceleme = models.ForeignKey('Kitap', models.DO_NOTHING, db_column='kitapID_inceleme')  
    yazarid_inceleme = models.ForeignKey('Yazarlar', models.DO_NOTHING, db_column='yazarID_inceleme')  
    puan = models.IntegerField(blank=True, null=True)

    def __str__(self):
        return f"{self.incelemeid}"
    
    class Meta:
        managed = False
        db_table = 'INCELEME'


class Kategori(models.Model):
    kategoriid = models.AutoField(db_column='kategoriID', primary_key=True)  
    kategori = models.TextField(unique=True)

    def __str__(self):
        return f"{self.kategoriid}"
    
    class Meta:
        managed = False
        db_table = 'KATEGORI'


class Kitap(models.Model):
    kitapid = models.AutoField(db_column='kitapID', primary_key=True)  
    kitapad = models.TextField(db_column='kitapAd')  
    yazarid_kitap = models.ForeignKey('Yazarlar', models.DO_NOTHING, db_column='yazarID_kitap')  
    yayintarihi = models.TextField(db_column='yayinTarihi')  
    sayfasayisi = models.IntegerField(db_column='sayfaSayisi')  
    dil = models.TextField()
    ozet = models.TextField()
    kategoriid_kitap = models.ForeignKey(Kategori, models.DO_NOTHING, db_column='kategoriID_kitap')  


    def __str__(self):
        return f"{self.kitapid}"
    
    class Meta:
        managed = False
        db_table = 'KITAP'


class Okunacaklarlistesi(models.Model):
    okunacaklarlistesiid = models.AutoField(db_column='okunacaklarListesiID', primary_key=True)  
    kitapid_okunacaklar = models.ForeignKey(Kitap, models.DO_NOTHING, db_column='kitapID_okunacaklar')  
    kullaniciid_okunacaklar = models.ForeignKey('AuthUser', models.DO_NOTHING, db_column='kullaniciID_okunacaklar')  

    def __str__(self):
        return f"{self.okunacaklarlistesiid}"
    

    class Meta:
        managed = False
        db_table = 'OKUNACAKLARLISTESI'


class Okunanlarlistesi(models.Model):
    okunanlarlistesiid = models.AutoField(db_column='okunanlarListesiID', primary_key=True)  
    kitapid_okunanlar = models.ForeignKey(Kitap, models.DO_NOTHING, db_column='kitapID_okunanlar')  
    kullaniciid_okunanlar = models.ForeignKey('AuthUser', models.DO_NOTHING, db_column='kullaniciID_okunanlar')  


    def __str__(self):
        return f"{self.okunanlarlistesiid}"
    

    class Meta:
        managed = False
        db_table = 'OKUNANLARLISTESI'


class Yazarlar(models.Model):
    yazarid = models.AutoField(db_column='yazarID', primary_key=True)  
    yazaradi = models.TextField(db_column='yazarAdi')  
    yazardogumtarihi = models.TextField(db_column='yazarDogumTarihi')  
    yazarbiyografi = models.TextField(db_column='yazarBiyografi')  
    yazarfoto = models.TextField(db_column='yazarFoto')  
    oduller = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.yazarid}"

    class Meta:
        managed = False
        db_table = 'YAZARLAR'


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)
    name = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.BooleanField()
    username = models.CharField(unique=True, max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.BooleanField()
    is_active = models.BooleanField()
    date_joined = models.DateTimeField()
    first_name = models.CharField(max_length=150)
    okunacaklarid_user = models.ForeignKey(Okunacaklarlistesi, models.DO_NOTHING, db_column='okunacaklarID_user', blank=True, null=True)  
    okunanlarid_user = models.IntegerField(db_column='okunanlarID_user', blank=True, null=True)  

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class DjangoAdminLog(models.Model):
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.PositiveSmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    action_time = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'
