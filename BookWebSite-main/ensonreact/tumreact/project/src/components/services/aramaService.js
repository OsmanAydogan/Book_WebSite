// import axios from "axios"

// export default class AramaService{
//   getKitap(aramaKelimesi){
//     return axios.get("http://127.0.0.1:8000/books/books/search/filter/?arama=${aramaKelimesi}")
//   }
// }
// import axios from "axios";

// class AramaService {
//   // Kitap arama fonksiyonu
//   getKitap(aramaKelimesi) {
//     return axios.get(`http://127.0.0.1:8000/books/books/search/filter/?arama=${aramaKelimesi}`);
//   }
// }

// export default new AramaService();
import axios from "axios";

export default class AramaService {
  // Kitap arama fonksiyonu
  getKitap(aramaKelimesi) {
    return axios.get(`http://127.0.0.1:8000/books/search/filter/?arama=${aramaKelimesi}`).
    then(response=>{
        return response
    }).catch(response=>{
        console.log("hata",response);
    })
  }
}

