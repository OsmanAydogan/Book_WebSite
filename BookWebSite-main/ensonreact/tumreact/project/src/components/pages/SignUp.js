import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import { Button } from '../Button';
import PlanetOne from'../images/pngegg1.png'
import PlanetTwo from'../images/pngwing.com.png'
import PlanetThree from'../images/pngegg.png'
import { useNavigate } from 'react-router-dom';
const Section = styled.section`
height :100vh;
display:flex;
justify-content :center;
align-items : center;
background:#131313;
`;

const Container = styled.div `
display: grid ;
grid-template-columns:1fr 1fr;
height: 100vh;
padding: 3rem calc((100vw-1300px)/2);
@media screen and (max-width:768px){
 grid-template-columns:1fr;
}
`;
const ColumnLeft= styled.div`
display:flex;
color: #fff;
flex-direction: column;
justify-content:center;
align-items:flex-start;
padding:5rem 2rem;
h1{margin-bottom:0.5rem;
  font-size : 2rem;
}
p{
  margin:2rem 0;
  font-size:4rem;
  line-height:1.1;
}
`;
const StyledButton= styled(motion.button)` 
padding:1rem 3rem;
font-size:1rem;
border:2px solid #fff;
color: white;
border-radius:4px;
outline:none;
cursor: pointer;
background:transparent;
`;
const Image = styled(motion.img)`
position:absolute;
width: 100%;
height:100%;
max-width:250px;
max-height:200px;

`;
const ColumnRight= styled.div`
display:flex;
justify-content:center;
align-items:center;
padding:2rem;
position:relative;
${Image}:nth-child(1){
  top:100px;
  left:10px;

}
${Image}:nth-child(2){
  top:340px;
  left:340px;
  
}
${Image}:nth-child(3){
  top:540px;
  left:10px;
  
}
`;
const SignUp =()=> {
  
  const fadeLeft={
    hidden:{opacity:0, x:-100,},
       visible:{opacity:1 , x:0}
       
    }
     // 'Get Started' butonuna tıklandığında login sayfasına yönlendirmeyi yapmayı unutma
    //usehook yerine navigate gelmiş
    const navigate = useNavigate();
    const handleGetStarted = () => {
      // 'Get Started' butonuna tıklandığında login sayfasına yönlendirme
      navigate('/Login');
    };
   

  return (
    <>
      <Section>
        <Container>
          <ColumnLeft>
        <motion.h1
         initial={{ opacity:0}}
         animate={{opacity:1}}
         transition={{duration:3}}
        >Kitapların Dünyasına Hoşgeldiniz</motion.h1> 
        <motion.p
        variants={fadeLeft}
        initial='hidden'
        animate='visible'
        transition={{duration:1}}
        >Bilinmezliğe Yolculuk </motion.p>
       
        <StyledButton 
      
        whileHover={{scale:1.05}}
        whileTap={{scale:0.95,
        backgroundColor:'green', border:'none',color:'#000'}}
        initial={{opacity:0}}
        animate={{opacity:1,transition:{duration:1.5}}}
        onClick={handleGetStarted}
        >Hadi Başlayalım</StyledButton>    
        
       

          </ColumnLeft>
          <ColumnRight>
           <Image src ={PlanetOne} alt='planet'
            whileTap={{scale:0.9}} 
            drag={true}
            dragConstraints={{left:0,right:250,top:0,bottom:50}}
            initial={{opacity:0, y:-100}}
            animate={{opacity:1, y:0, transition:{duration:1}}}
            //serbest hareketi sağlıyor
            />
           <Image src ={PlanetTwo} alt='planet' 
             whileTap={{scale:0.6}} 
             drag={true}
             dragConstraints={{left:50,right:0,top:0,bottom:50}}
             initial={{opacity:0, x:100}}
             animate={{opacity:1, x:0, transition:{duration:1}}}
           />
 
           <Image src ={PlanetThree} alt='planet' 
             whileTap={{scale:0.6}} 
             drag={true}
             dragConstraints={{left:0,right:0,top:0,bottom:0}}
             initial={{opacity:0, y:100}}
             animate={{opacity:1, y:0, transition:{duration:1}}}
           />
          </ColumnRight>
        </Container>
      </Section> 

    </>
  )
}
export default SignUp