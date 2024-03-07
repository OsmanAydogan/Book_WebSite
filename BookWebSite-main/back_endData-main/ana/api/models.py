from django.db import models


class Favoriler(models.Model):
    favoriid = models.AutoField(db_column='favoriID', primary_key=True)  
    kullaniciid_fav = models.ForeignKey('AuthUser', models.DO_NOTHING, db_column='kullaniciID_fav')  
    kitapid_fav = models.ForeignKey('Kitap', models.DO_NOTHING, db_column='kitapID_fav')  

    class Meta:
        managed = False
        db_table = 'FAVORILER'

    def __str__(self):
        return f"{self.favoriid}"
    
    

class Inceleme(models.Model):
    incelemeid = models.AutoField(db_column='incelemeID', primary_key=True)  
    kullaniciid_inceleme = models.ForeignKey('AuthUser', models.DO_NOTHING, db_column='kullaniciID_inceleme')  
    kitapid_inceleme = models.ForeignKey('Kitap', models.DO_NOTHING, db_column='kitapID_inceleme')  
    yazarid_inceleme = models.ForeignKey('Yazarlar', models.DO_NOTHING, db_column='yazarID_inceleme')  
    puan = models.IntegerField(blank=True, null=True)
    yorum = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'INCELEME'

    def __str__(self):
        return f"{self.incelemeid}"

class Kategori(models.Model):
    kategoriid = models.AutoField(db_column='kategoriID', primary_key=True)  
    kategori = models.TextField(unique=True)

    class Meta:
        managed = False
        db_table = 'KATEGORI'

    def __str__(self):
        return f"{self.kategoriid}"
    
    def __str__(self):
        return self.kategori

class Kitap(models.Model):
    kitapid = models.AutoField(db_column='kitapID', primary_key=True)  
    kitapad = models.TextField(db_column='kitapAd')  
    yazarid_kitap = models.ForeignKey('Yazarlar', models.DO_NOTHING, db_column='yazarID_kitap')  
    yayintarihi = models.TextField(db_column='yayinTarihi')  
    sayfasayisi = models.IntegerField(db_column='sayfaSayisi')  
    ozet = models.TextField()
    kategoriid_kitap = models.ForeignKey(Kategori, models.DO_NOTHING, db_column='kategoriID_kitap')  
    kitap_img = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'KITAP'

    def __str__(self):
        return f"{self.kitapid}"
    
    def __str__(self):
        return self.kitapad 
       

class Okunacaklarlistesi(models.Model):
    okunacaklarlistesiid = models.AutoField(db_column='okunacaklarListesiID', primary_key=True)  
    kitapid_okunacaklar = models.ForeignKey(Kitap, models.DO_NOTHING, db_column='kitapID_okunacaklar')  
    kullaniciid_okunacaklar = models.ForeignKey('AuthUser', models.DO_NOTHING, db_column='kullaniciID_okunacaklar')  

    class Meta:
        managed = False
        db_table = 'OKUNACAKLARLISTESI'

    def __str__(self):
        return f"{self.okunacaklarlistesiid}"

class Okunanlarlistesi(models.Model):
    okunanlarlistesiid = models.AutoField(db_column='okunanlarListesiID', primary_key=True)  
    kitapid_okunanlar = models.ForeignKey(Kitap, models.DO_NOTHING, db_column='kitapID_okunanlar')  
    kullaniciid_okunanlar = models.ForeignKey('AuthUser', models.DO_NOTHING, db_column='kullaniciID_okunanlar')  

    class Meta:
        managed = False
        db_table = 'OKUNANLARLISTESI'

    def __str__(self):
        return f"{self.okunanlarlistesiid}"

class Yazarlar(models.Model):
    yazarid = models.AutoField(db_column='yazarID', primary_key=True)  
    yazaradi = models.TextField(db_column='yazarAdi')  
    yazardogumtarihi = models.TextField(db_column='yazarDogumTarihi')  
    yazarbiyografi = models.TextField(db_column='yazarBiyografi')  
    yazarfoto = models.TextField(db_column='yazarFoto')  
    oduller = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'YAZARLAR'

    def __str__(self):
        return f"{self.yazarid}"
    
    def __str__(self):
        return self.yazaradi

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
    username = models.CharField(unique=True, max_length=150) # *
    id = models.AutoField(db_column='id', primary_key=True)
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


    def __str__(self):
        return f"{self.id}"
    
    def __str__(self): #*
        return self.username
   
    
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
