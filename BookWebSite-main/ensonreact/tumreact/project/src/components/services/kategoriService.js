import axios from "axios";

export default class KategoriService {
  // Kitap arama fonksiyonu
  getKitap(aramaKelimesi) {
    return axios.get(`http://127.0.0.1:8000/books/search/filter/?kategori=${aramaKelimesi}`).
    then(response=>{
        return response
    }).catch(response=>{
        console.log("hata",response);
    })
  }
}
