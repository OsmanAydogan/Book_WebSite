
import okuduk from '../images/ookud.png'
import React, { useEffect, useState } from 'react';
import OkuduklarımService from '../services/okuduklarımService';
export default function ContactUs() {
  const [userIdf, setuserIdf] = useState(1);
  const [favories, setFavories] = useState([]); // State'i dizi olarak başlat

  useEffect(() => {
    const okuduklarımService1 = new OkuduklarımService();

    okuduklarımService1.getFavorite(userIdf)
      .then(response => {
        const booksList = response.data;
        const bookObjects = booksList.map(item => item.kitapid_fav);
        setFavories(bookObjects);
      })
      .catch(error => {
        console.error('Arama Hatası:', error);
      });
  }, []);
  return (
    <>
     <div>
          <main id="main">
            {favories.map((kitap) => (
              <div key={kitap.kitapad} className="movie">
                <img src={kitap.kitap_img} alt={kitap.kitapad} />
                <div className="movie-info">
            <h3>{kitap.kitapad}</h3>
            <span className="green">{kitap.sayfasayisi}</span>
          </div>
                <div className="overview2">{kitap.ozet}</div>
              </div>
            ))}
          </main>
        </div>
    </>
  )
}
