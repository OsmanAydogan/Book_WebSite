import React from 'react'
import './Login.css'
import '../../App.css';
import {FaLock, FaMailBulk, FaUser, FaVoicemail} from "react-icons/fa";
import {motion} from 'framer-motion'
import  { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserService from '../services/userService';

export default function Login() {







// api bağlama KAYIT OLMA
//  const history = useNavigate();
const [userId, setuserId] = useState(0)

   const [userData,setUserData]=useState({
    username:'',
    email: '',
    password:'',
    password2:'',
   });
   const [userDataM,setUserDataM]=useState({
    username:'',
    password:'',
   });
   const userService = new UserService();
   //const history = useNavigate();
   const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
    setUserDataM((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    })
    );
  };
//GİRİŞ YAPMA 
  const handleLogin = (e) => {
     e.preventDefault();

    userService
    .loginUser(userDataM)
    .then((response) => {
      console.log(response)
      if (response.answer !=true) {
        console.log(response);
        console.log('Giriş yapılamadı. Hata:', response.error);
        setError('Giriş işlemi başarısız oldu. Lütfen tekrar deneyin.');
      } 
      else {
        console.log('Giriş başarıyla yapıldı.');
        setuserId(response.id)
       
        setUserDataM({
          username: '',
          password: '',
        });
        setError(null);
        // history('/kategori1');
      }
    })
    .catch((error) => {
      console.error('Giriş yapılırken hata oluştu:', error);
      setError('Giriş işlemi başarısız oldu. Lütfen tekrar deneyin.');
    }); 
  }
// giriş yapma bitiş 
 

  const handleRegister = (e) => {
    // e.preventDefault();

    userService.addUser(userData)
      .then((respnse) => {
        
       console.log(respnse);
        
        alert('Üye başarıyla eklendi.');
        setUserData({
            username: '',
            email: '',
            password: '',
            password2: '',
          });
          setError(null);
      })
      .catch((error) => {
        
        console.error('Üye eklenirken hata oluştu:', error);
        setError('Kayıt olma işlemi başarısız oldu. Lütfen tekrar deneyin.');

      });
  }
  const [error, setError] = useState(null);


//api bağlama bitiş KAYIT OLMA
    useEffect(() => {
        const signUpBtnLink = document.querySelector('.signUpBtn-link');
        const signInBtnLink = document.querySelector('.signInBtn-link');
        const wrapper = document.querySelector('.wrapper');
    
        signUpBtnLink.addEventListener('click', () => {
          wrapper.classList.toggle('active');
        });
         signInBtnLink.addEventListener('click', () => {
             wrapper.classList.toggle('active');
           });
    }, []);
  return (
   
      <>
    
    <div className="background-image" >
    
   
      <div className='wrapper'>
        <div className='form-wrapper sign-in'>
    <form action="">
        <h1>Giriş</h1>
        <div className="input-box">
            <input type="text" name="username"  placeholder='isim' 
              value={userData.username}
              onChange={handleChange}
            required/>
          
            <FaUser className='icon'/>
        </div>
        <div className="input-box">
            <input type="Password"  name="password"  placeholder='şifre'
            value={userData.password}
            onChange={handleChange}
            required/>
           
            <FaLock className='icon' />
        </div>
        <div className="remember">
            <label><input type="checkbox"/>Beni hatırla</label>
            <a href="#">Şifreni mi unuttun?</a>
        </div>
        <button type = "submit" onClick={handleLogin}>Giriş Yap</button>
        <div className="signUp-link">
            <p>Bir hesabın yok mu ? <a href ="#" className='signUpBtn-link'>Kaydol</a></p>
        </div>
        <div className='social-platform'>
            <p> or sign in with </p>
            <div className='social-icons'>
                <a href='#'><i className='fa-brands fa-google'></i></a>
            </div>
            
        </div>
    </form>
      </div>
      
        <div className='form-wrapper sign-up'>
    <form action="">

        <h1>Kaydol</h1>
        <div className="input-box">
            <input type="text"   name="username"  placeholder='isim' value={userData.username} required
               onChange={handleChange}
          />
          
            {/* <FaUser className='icon'/> */}
        </div>
        <div className="input-box">
            <input type="email" name="email" placeholder='E-mail'
             value={userData.email}    onChange={handleChange}
             required/>
          

            {/* <FaLock className='icon' /> */}
        </div>
        <div className="input-box">
            <input type="Password" name="password" placeholder='şifre' 
             value={userData.password}    onChange={handleChange}
            required/>
{/*            
            <FaLock className='icon' /> */}
        </div>
        <div className="input-box">
            <input type="Password"  name="password2" placeholder='şifre'
            value={userData.password2}    onChange={handleChange}
            required/>
{/*            
            <FaLock className='icon' /> */}
        </div>
        <div className="remember">
            <label><input type="checkbox" required />Kullanıcı sözleşmesini kabul ediyorum</label>
            
        </div>
        <button type = "submit" onClick={handleRegister}>Kaydol</button>
        <div className="signUp-link">
            <p>Zaten bir hesabın mı var? <a href ="#" className='signInBtn-link'>Giriş Yap</a></p>
        </div>
       

    </form> 
    

      </div>
     
           
      </div>
      

      </div>
      
          
          
      </>
    
  )
          }