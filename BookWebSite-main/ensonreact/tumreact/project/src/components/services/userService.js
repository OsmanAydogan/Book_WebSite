import axios from 'axios';
export default class UserService {
  // Diğer fonksiyonlar burada olabilir

  addUser(userData) {
    const url = "http://127.0.0.1:8000/books/user";

    return axios.post(url, userData)
      .then(response => {
        console.log(response.data); // Başarılı yanıtı konsola yazdır
        return response.data;
      })
      .catch(error => {
        console.error('Hata:', error); // Hata yanıtını konsola yazdır
        throw error; // Hata durumunda bu hatayı yakalamak için dışarıya fırlat
      });
  }
  loginUser(userDataM) {
    const url = "http://127.0.0.1:8000/books/login"; // Giriş yapma API endpoint'i

    return axios.post(url, userDataM)
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


