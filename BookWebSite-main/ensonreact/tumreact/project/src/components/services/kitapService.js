import axios from "axios"

export default class KitapService{
  getKitap(){
    return axios.get("http://127.0.0.1:8000/books/list/")
  }
}