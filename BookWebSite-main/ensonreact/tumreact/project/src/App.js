import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
//import { Router } from 'react-router-dom';
import { BrowserRouter as Router,Routes , Route} from 'react-router-dom';
// import Carousel from 'react-multi-carousel'; 
import'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import Services from './components/pages/Services';
import Favorilerimnavbar from './components/pages/Favorilerimnavbar';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Home from './components/pages/Home';
import Kategori2 from './components/pages/Kategori2';
import Kategori1 from './components/pages/Kategori1';
import Okuduklarım from './components/pages/Okuduklarım';
import Okuyacalarım from './components/pages/Okuyacaklarım';
import Favorites from './components/pages/Favorites';
import Support from './components/pages/Support';
import LogOut from './components/pages/LogOut';
import Login from './components/pages/Login';
import Deneme from './components/pages/Deneme';
function App() {
  return (

<Router> 
  <Navbar/>
    <Routes>
      <Route path ='/' element={<Home/>} />
      <Route path ='/services' element={<Services/>} />
      <Route path ='/favorilerimnavbar' element={<Favorites/>} />
      <Route path ='/contact-us' element={<ContactUs/>} />
      <Route path ='/sign-up' element={<SignUp/>} />
      <Route path ='/kategori2' element={<Kategori2/>} />
      <Route path ='/kategori1' element={<Kategori1/>} />
      <Route path ='/okuduklarım' element={<Okuduklarım/>} />
      <Route path ='/okuyacaklarım' element={<Okuyacalarım/>} />
      <Route path ='/favorites' element={<Favorites/>} />
      <Route path ='/support' element={<Deneme/>} />
      <Route path ='/logOut' element={<LogOut/>} />
      <Route path ='/login' element={<Login/>} />
      
        
      
    </Routes>
</Router>
  );
}

export default App;
