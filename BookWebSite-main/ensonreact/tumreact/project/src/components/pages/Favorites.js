// import React, { useEffect } from 'react'
// import { useState } from 'react'
// import FavoriService from '../services/favoriService';


// export default function Favorites() {
//   const [userIdf, setuserIdf] = useState(7)
//   const [favories, setFavories]=useState({});
//   useEffect(() => {
//   const favoriService1=new FavoriService()

//   favoriService1.getFavorite(userIdf)
  
//   .then(response => {
//     // Arama sonuçlarını state'e atama
    
    
//     const booksList=(response.data);
//     const bookObject=booksList.map(item=>item.kitapid_fav)
//     console.log(bookObject);
//     setFavories(bookObject)
//   })
//   .catch(error => {
//     console.error('Arama Hatası:', error);
//   });
//   },[])
//   ;
//       return (
//       <>

//         <h1 className='favorites'> 
//         <div>
//         <main id ="main" > 
 
//  {favories.map((kitap) => (
//   <div key={kitap.kitapad  } className="movie"> 
     
//      <img src={kitap.kitap_img} alt={kitap.kitapad} />

// <div className="movie-info">
//   <h3>{kitap.kitapad}</h3>
//   {/* <button onClick={addFavorites(kitap.id)}>bas</button> */}
//   <span className="green">{kitap.sayfasayisi}</span>
// </div>
// {/* <button onClick={addFavorites(kitap.kitapid)}> jkd</button> */}

// <div className="overview">{kitap.ozet}</div>
//    </div>
//  ))}
    
// </main>   

//         </div>
//         </h1>
//       </>
//     )
//   }
import React, { useEffect, useState } from 'react';
import FavoriService from '../services/favoriService';
import '../../App.css';



export default function Favorites() {
  const [userIdf, setuserIdf] = useState(1);
  const [favories, setFavories] = useState([]); // State'i dizi olarak başlat

  useEffect(() => {
    const favoriService1 = new FavoriService();

    favoriService1.getFavorite(userIdf)
      .then(response => {
        const booksList = response.data;
        const bookObjects = booksList.map(item => item.kitapid_fav);
        setFavories(bookObjects);
      })
      .catch(error => {
        console.error('Arama Hatası:', error);
      });
  }, []);

  return (
    <> 
      
        <div>
          <main id="main">
            {favories.map((kitap) => (
              <div key={kitap.kitapad} className="movie">
                <img src={kitap.kitap_img} alt={kitap.kitapad} />
                <div className="movie-info">
            <h3>{kitap.kitapad}</h3>
            <span className="green">{kitap.sayfasayisi}</span>
          </div>
                <div className="overview2">{kitap.ozet}</div>
              </div>
            ))}
          </main>
        </div>
      
    </>
  );
}

