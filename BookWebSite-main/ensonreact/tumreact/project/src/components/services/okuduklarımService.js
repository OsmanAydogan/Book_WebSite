
import axios from "axios";

export default class OkuduklarımService {
  // Kitap arama fonksiyonu
  getFavorite(userId) {
    return axios.get(`http://127.0.0.1:8000/books/favs/${userId}`).
    then(response=>{
        return response
    }).catch(response=>{
        console.log("hata",response);
    })
  
  }


  // addFavorites(userId,kitapId) {
  //   const url = `http://127.0.0.1:8000/books/favs/`; // Giriş yapma API endpoint'i

  //   return axios.post(url, userId,kitapId)
  //     .then(response => {
  //       console.log(response.data); // Başarılı yanıtı konsola yazdır
  //       return response.data;
  //     })
  //     .catch(error => {
  //       console.error('Hata:', error); // Hata yanıtını konsola yazdır
  //       throw error; // Hata durumunda bu hatayı yakalamak için dışarıya fırlat
  //     });
  // }
  addFavorites(userId, kitapid) {
    const url = `http://127.0.0.1:8000/books/favs/${userId}`; // Favori ekleme API endpoint'i
  
    const data = {
      kullaniciid_fav: userId,
      kitapid_fav: kitapid
    };
  
    return axios.post(url, data)
      .then(response => {
        console.log(response.data); // Başarılı yanıtı konsola yazdır
        return response.data;
      })
      .catch(error => {
        console.error('Hata:', error); // Hata yanıtını konsola yazdır
        throw error; // Hata durumunda bu hatayı yakalamak için dışarıya fırlat
      });
  }
  
}

