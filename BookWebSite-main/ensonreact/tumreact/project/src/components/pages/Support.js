import React from 'react'
import '../../App.css';
import * as IoIcons from "react-icons/io";
import {FaLock, FaMailBulk, FaSearch, FaUser, FaVoicemail} from "react-icons/fa";
import hakkında from '../images/vizyon-misyon.jpg'
export default function Support() {
    return (
      <>
     
            <div className='wrappersup'>
             
              <div className='ilerle'>
                
    <form action="">
        <h1>Destek</h1>
        <div className="input-boxsup">
            <input type="text"  placeholder='isim' required/>
          
        </div>
        <div className="input-boxsup">
            <input type="Password"  placeholder='E-mail' required/>
           
           
        </div>
        <div className="input-boxsupbüyük">
            <input type="Password"  placeholder='mesajınız..' required/>
           
           
        </div>
        
        <button type = "submit">Gönder</button>
        
        
    </form></div>
      
      </div>
      </>
    )
  }
