import React from 'react'
import '../../App.css';
import Çagir from '../images/video.mp4'
import * as IoIcons from "react-icons/io";

import AramaService from '../services/aramaService';
import  { useEffect } from 'react';
import { useState } from 'react';
import {FaLock, FaMailBulk, FaSearch, FaUser, FaVoicemail} from "react-icons/fa";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import KitapService from '../services/kitapService';
import FavoriService from '../services/favoriService';
// export default function Home() {
     // const aramaService = new AramaService();

     
  const AramaComponent = () => {
    const [userIdf, setuserIdf] = useState(1)
    const [kitaps, setKitaps]=useState([]);
    const settings = {
      
      dots: true,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 3,
      
      speed: 500,
      
      
  };
  
    useEffect(() => {
    let kitapService=new KitapService()
    kitapService.getKitap().then(result=>{
      setKitaps(result.data)
     
    }).catch(error => {
      console.error('Arama Hatası:', error);
    });
},[])
      
      
    
    



    
   
    const [aramaKelimesi, setAramaKelimesi] = useState('');
    const [aramaSonuclari, setAramaSonuclari] = useState([]);
    // const aramaService = new AramaService();
    const handleArama = (e) => {
      const arama=new AramaService()
      arama.getKitap(aramaKelimesi)
        .then(response => {
          // Arama sonuçlarını state'e atama
          console.log("melda");
          console.log(response.data);
          const booksList=(response.data);
          setAramaSonuclari(booksList)
          
        })
        .catch(error => {
          console.error('Arama Hatası:', error);
        });
    };
const addFavorites=(kitapId)=>{
  const favoriService=new FavoriService();
  favoriService.addFavorites(userIdf,kitapId)
  .then(result=>{
    console.log(result);
  }).catch(response=>{
    console.log("hasan");
  })
}
    
    return (
      <>
        <main>
          {/* Video ve diğer içerikler */}
          <video className='video' src={Çagir} autoPlay loop muted /> 
          <div className='sonuçgöster'>En Popülerler</div>
<div className="w-3/4 m-auto">
    <div className="mt-20">
      
    {/* divlerim */}   
    <main id ="main" > 
 <Slider {...settings} className='slider'> 
      {kitaps.map((kitap) => 
       <div key={kitap.id} className="movie"> 
          {/* <img src={kitap_img} alt={kitap.kitap_img} /> */}
          <img src={kitap.kitap_img} alt={kitap.kitapad} />

          <div className="movie-info">
            <h3>{kitap.kitapad}</h3>
            {/* <button onClick={addFavorites(kitap.id)}>bas</button> */}
            {/* <button onClick={() => addFavorites(kitap.kitapid)}>Favoriye Ekle</button> */}

            <span className="green"><button className="span.green" onClick={() => addFavorites(kitap.kitapid)}>Favoriye Ekle</button></span>
          </div>
          {/* <button onClick={addFavorites(kitap.kitapid)}> jkd</button> */}
        
          {/* <div className="overview">{kitap.ozet}</div> */}
        </div>
      )}
         </Slider>
         <div className='sonuçgöster'>sizin için seçtiklerimiz</div>
         <div className="w-3/4 m-auto">
    <div className="mt-20">
      
    {/* divlerim */}   
    <main id ="main" > 
 <Slider {...settings} className='slider'> 
      {kitaps.map((kitap) => (
       <div key={kitap.id} className="movie"> 
          {/* <img src={kitap_img} alt={kitap.kitap_img} /> */}
          <img src={kitap.kitap_img} alt={kitap.kitapad} />
          <div className="movie-info">
            <h3>{kitap.kitapad}</h3>

            <span className="green"><button className="span.green" onClick={() => addFavorites(kitap.kitapid)}>Favoriye Ekle</button></span>
          </div>
         
          {/* <div className="overview">{kitap.ozet}</div> */}
        </div>
      ))}
         </Slider>
   </main>   
   </div>
     </div>
    
  
   </main>   
   </div>
     </div>
    
     

</main>
          <div className='home'>
           
            <div className="input-box2">
              <input
                type="search"
                placeholder='Yazara veya Kitaba Göre Ara ...'
                value={aramaKelimesi}
                onChange={(e) => setAramaKelimesi(e.target.value)}
                required
              />
              <FaSearch onClick={handleArama} className='icon2' />
            </div>
           


  
            {/* <button onClick={handleArama}>Ara</button> */}
          </div>
   
          {/* Arama sonuçlarını gösterme */}
          <div className='sonuçgöster'>Arama Sonuçlarınız</div>
          <main id ="main">
   
   {aramaSonuclari.map((kitap,index) => (
<div key={kitap.id} >
 <div className="movie">  
 {/* <img src={kitap_img} alt={kitap.kitap_img} /> */}
 <img src={kitap.kitap_img} alt={kitap.kitapad} />

 <div className="movie-info">
   <h5>{kitap.kitapad}</h5>
   <span className="green">{kitap.sayfasayisi}</span>
 </div>
 <div ><button className="span.green" onClick={() => addFavorites(kitap.kitapid)}>Favoriye Ekle</button></div>
 <div ><button className="span.green" onClick={() => addFavorites(kitap.kitapid)}>okuduklarım Ekle</button></div>
</div> </div>
))}
        </main >
      </>
    );
  };
  export default AramaComponent;
  // }
 
           
  //    <>
   
  //   <div >
  //  <video className ='video'src={Çagir} autoPlay loop muted/>
  //  <div className='home'>
   
  //        <div className="input-box2">
  //           <input type="search"  placeholder='Yazara veya Kitaba Göre Ara ...' required/>
           
  //           < FaSearch className='icon2' />
  //       </div> 
     
  //  </div>
     

  //   </div>   </>
  

