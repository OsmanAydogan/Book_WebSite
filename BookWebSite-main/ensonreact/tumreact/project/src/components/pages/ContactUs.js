import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import vizyon from '../images/degerler.jpg'
import misyon from '../images/misyon.png'
import hakkında from '../images/vizyon-misyon.jpg'
import ulas from '../images/bizeulasın.png'

export default function ContactUs() {
  return (
    <>
    <main id ="hakkımız">
        <div className="vizyonmisyon">
        <img src={hakkında} alt=""/></div> <div className='renklen'><h1>VİZYONUMUZ, MİSYONUMUZ </h1> <Link className='link' to ="/">Ana Sayfa</Link>
        <p>/<Link className='link' to="/contact-us">Hakkımızda</Link></p>
        </div>
            <div className="vizyonmisyon-info">
            <div className="misyon">
        <img src={misyon} alt=""/></div>
        <div className='yazı'>
              <h3>Vizyonumuz</h3>
              <h4>Okuma tutkusunu paylaşan herkesi bir araya getirerek, kaliteli içeriklerle dolu bir okuma deneyimi sunmak; 
                bilgiye ulaşmayı, düşünce dünyamızı zenginleştirmeyi ve topluluk içinde güçlü bağlar kurmayı amaçlıyoruz.</h4></div>
                
                <div className="vizyon">
        <img src={vizyon} alt=""/></div>
        <div className='yazıvizyon'>
              <h3>Misyonumuz</h3>
              <h4>Her yaştan okuyucuya hitap eden geniş bir kitap koleksiyonu sunarak, farklı türlerdeki eserleri bir araya getiriyoruz. Misyonumuz,
                 insanların kitaplar aracılığıyla dünyayı daha iyi anlamalarına, bilgilerini artırmalarına ve eğlenmelerine katkıda bulunmaktır.</h4></div>
          

                 <div className="ulas">
        <img src={ulas} alt=""/></div>
        <div className='yazıulas'>
              <h3>Bize Ulaşın</h3>
              <h4>Soru, öneri veya geri bildirimleriniz için bizimle iletişime geçmekten çekinmeyin.
                 Size daha iyi hizmet verebilmek için her zaman buradayız.</h4>    
                 <div className='social-platform1'>
            <div className='social-icons1'>
                <a href='#'><i className='fab fa-linkedin'></i><h4>github.com/Meldaa5</h4> </a>
            </div>
        </div> 
        <div className='social-platform1'>
            <div className='social-icons1'>
                <a href='#'><i className='fab fa-linkedin'></i><h4>github.com/abdülkadiryılmaz</h4> </a>
            </div>
        </div> 
        <div className='social-platform1'>
            <div className='social-icons1'>
                <a href='#'><i className='fab fa-linkedin'></i><h4>github.com/enesyavuz</h4> </a>
            </div>
        </div> 
        <div className='social-platform1'>
            <div className='social-icons1'>
                <a href='#'><i className='fab fa-linkedin'></i><h4>github.com/osmanaydoğan</h4>    </a> 
            </div>
        </div> 
        </div>
              
            </div>
           
            
            
          
        
        </main>
       {/* <h1 className='contact-us'> CONTACT US


      </h1>  */}
    </>
  )
}
