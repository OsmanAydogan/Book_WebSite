import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Services() {
    const kategoriler = [
        
        ['Polisiye', 'Mizah', 'Biyografi', 'Tarih', 'Felsefe', 'Psikoloji', 'Edebiyat', 'Sanat', 'Spor', 'Gezi','Roman', 'Bilim Kurgu', 'Fantastik', 'Klasik', 'Aksiyon', 'Macera', 'Dram', 'Korku', 'Romantik', 'Bilim'],
        ['Çocuk Kitapları', 'Genç Yetişkin', 'Korku-Gerilim', 'Bilim ve Doğa', 'Din ve Mitoloji', 'Bilgisayar ve Teknoloji', 'Kariyer ve İş', 'Eğitim ve Referans', 'Hobi ve İlgi Alanları', 'Kişisel Gelişim'],
        ['Aşk ve İlişkiler', 'Sağlık ve Diyet', 'Yemek Kitapları', 'Moda ve Güzellik', 'Ev Dekorasyonu', 'Bahçe ve Bitkiler', 'Hayvanlar ve Doğa', 'Oyun ve Eğlence', 'Resimli Kitaplar', 'Müzik ve Dans'],
        ['Bilim Kurgu ve Fantastik', 'Polisiye ve Gerilim', 'Aksiyon ve Macera', 'Korku ve Gerilim', 'Romantik ve Aşk', 'Dram ve Yaşam', 'Komedi ve Mizah', 'Biyografi ve Anı', 'Tarih ve Politika', 'Edebiyat ve Eleştiri'],
            
      ];
      const linkStili = {
        color: 'blue', // Rengi değiştirmek için burayı ayarlayabilirsiniz
        textDecoration: 'none', // İsteğe bağlı olarak alt çizgiyi kaldırabilirsiniz
      };
return (
    
    <div className="">
      <div className="row">
      <h1>kategoriler</h1>
        {/* İlk Bölüm */}
        <div className="col-md-3" >
          <h2>Bölüm 1</h2>
          <ul>
            {kategoriler[0].map((kategori, index) => (
              <li key={index}><a href="#" style={linkStili}>{kategori}</a></li>
            ))}
          </ul>
        </div>

        {/* İkinci Bölüm */}
        <div className="col-md-3">
          <h2>Bölüm 2</h2>
          <ul>
            {kategoriler[1].map((kategori, index) => (
              <li key={index}><a href="#"  style={linkStili}>{kategori}</a></li>
            ))}
          </ul>
        </div>

        {/* Üçüncü Bölüm */}
        <div className="col-md-3">
          <h2>Bölüm 3</h2>
          <ul>
          {kategoriler[2].map((kategori, index) => (
              <li key={index}><a href="#" style={linkStili}>{kategori}</a></li>
            ))}
          </ul>
        </div>

        {/* Dördüncü Bölüm */}
        <div className="col-md-3">
          <h2>Bölüm 4</h2>
          <ul>
          {kategoriler[3].map((kategori, index) => (
              <li key={index}><a href="#" style={linkStili}>{kategori}</a></li>
            ))}          </ul>
        </div>

      </div>
    </div>
  );
}
