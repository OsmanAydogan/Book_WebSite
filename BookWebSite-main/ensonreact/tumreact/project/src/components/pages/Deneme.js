import React from 'react'
import '../../App.css';
import { useState } from 'react';
import UserService from '../services/userService';

export default function Deneme() {
    const [userData, setUserData] = useState({
        // Kitap bilgileri buraya eklenir
        username: "hasan",
        email: "hsn@gmail.com",
        password: "hasankara",
        password2: "hasankara"
        // Diğer bilgiler...
      });
    
      const userService = new UserService();
      const handleChangeUser = () => {
        userService.addUser(userData)
          .then(() => {
           
            console.log('Kitap başarıyla eklendi.');
          })
          .catch(error => {
            // Hata durumunda yapılacak işlemler
            console.error('Kitap eklenirken hata oluştu:', error);
          });
      };
    return (
        <div className='deneme'>
        <div></div>
      <br></br>
      <br></br>
      <button onClick={handleChangeUser}>kdksl</button>
    </div>
  )
}
