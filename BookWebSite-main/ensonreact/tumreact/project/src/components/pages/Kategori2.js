
// import myImage2 from '../images/cesur.jpg'
// import myImage3 from '../images/fahren.jpg'

//   const API_URl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=15005c48f2625def09dacd3d0fc01762&page=1';

// const IMG_Path = 'https://image.tmdb.org/t/p/w1280';

// const Search_Url = 'https://api.themoviedb.org/3/search/movie?api_key=15005c48f2625def09dacd3d0fc01762&query="';
//  const main=document.getElementById('main')
// const form=document.getElementById('form');
//  const search=document.getElementById('search');
//  getMovies(API_URl);
//  async function getMovies(url){
//   const res= await fetch (url);
//   const data = await res.json();
//    showMovies (data.result);
//  }
//   function showMovies (movies){
//     main.innerHTML='';
//     movies.forEach((movie)=>{
//       const{title, poster_path,vote_average,overview} =movie;
//       const movie=document.createElement('div');
//       movieEl.classList.add('movie');
//       movieEl.innerHTML=`
//       <div className="movie">
//           <img src="${IMG_Path + poster_path}" alt="${title}"/>
//               <div className="movie-info">
//                 <h3>${title}</h3>
//                 <span className="${getClassByRate(vote_average)}">${vote_average}</span>
//               </div>
//               <div className="overview">
//                ${overview}
//               </div>
//           </div>  `
//           main.appendChild(movieEl);
//     });
//   }
//   function getClassByRate(vote){
//     if(vote >=8){
//       return 'green'
//     }else if(vote >=5){
//       return 'orange'
//     }else{
//       return 'red';
//     }
//   }
//  form.addEventListener('submit',(e)=> {
//   e.preventDefault();
//   const searchTerm=search.value;
//   if(searchTerm && searchTerm !==''){
//     getMovies(Search_Url+searchTerm)
//     search.value='';
//   }else{
//     window.location.reload()
//   }
//  })
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React, { useState,useEffect } from 'react'
import '../../App.css';
import myImage from '../images/indir.jpeg'
import KitapService from '../services/kitapService';
export default function Kategori1() {
 
  const [kitaps, setKitaps]=useState([]);
  useEffect(() => {
  let kitapService=new KitapService()
  kitapService.getKitap().then(result=>setKitaps(result.data))
  },[]);
  
  const settings = {
    
      dots: true,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 3,
      
      speed: 500,
      
      
  };
  
  return (

    

<div className="w-3/4 m-auto">
    <div className="mt-20">
      
    {/* divlerim */}   
    {/* <main id ="main" >  */}
 <Slider {...settings} className='slider'> 
      {kitaps.map((kitap) => (
       <div key={kitap.id} className="movie"> 
          {/* <img src={kitap_img} alt={kitap.kitap_img} /> */}
          <img src={kitap.kitap_img} alt={kitap.kitapad} />

          <div className="movie-info">
            <h3>{kitap.kitapad}</h3>
            <span className="green">{kitap.sayfasayisi}</span>
          </div>
          <div className="overview2">{kitap.ozet}</div>
        </div>
      ))}
         </Slider>
   {/* </main>    */}
   </div>
     </div>
    
  );
}

     {/* <main id ="main">
        <div className="movie">
        <img src={myImage} alt=""/>
            <div className="movie-info">
              <h3>MELDA</h3>
              <span className="green">9,5</span>
            </div>
            <div className="overview">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          
        </div> */}
        {/* <div className="movie">
        <img src={myImage2} alt=""/>
          

            <div className="movie-info">
              <h3>MELDA</h3>
              <span className="orange">5,5</span>
            </div>
            <div className="overview">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          
        </div>
        <div className="movie">
        <img src={myImage3} alt=""/>
            <div className="movie-info">
              <h3>MELDA</h3>
              <span className="red">3,1</span>
            </div>
            <div className="overview">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.            
            </div>
        </div> */}
      {/* </main> */}
  