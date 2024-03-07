import React, {useState} from 'react'
import {Button} from './Button'
import{Link} from 'react-router-dom'
import'./Navbar.css'
import Dropdown from './Dropdown'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from 'react-icons/lib'
import { SidebarData } from './SidebarData'
function Navbar() {
  const [sidebar, setSidebar]=useState(false);

  const showSidebar = () => setSidebar (!sidebar)
    const [click ,setClick]=useState(false);
    const[dropdown, setDropdown]=useState(false);

    const handleClick =() => setClick(!click);
    const closeMobileMenu =() => setClick(false);

    const onMouseEnter = () => {
      if(window.innerWidth<960){
        setDropdown(false);
      }
      else{
        setDropdown(true);
      }
    };
    const onMouseLeave = () => {
      if(window.innerWidth<960){
        setDropdown(false);
      }
      else{
        setDropdown(false);
      }
    };
  return (<>
   

    <nav className='navbar'>
      {/*  sidebar*/}
      <Link to ="#" className='menu-bars'>
        <FaIcons.FaBars onClick={showSidebar} />
      </Link>
      
      {/*  sidebar*/}
      {/* responsive */}
      <Link to = '/' 
      className='navbar-logo'>
        Kitap <i className='fa-solid fa-book-open-reader '/>
      </Link>
      <div className='menu-icon' onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
      </div>
      
      <ul className={click ? 'nav-menu active' :'nav-menu'}>
        <li className='nav-item'>
          <Link to ='/' className='nav-links' onClick={closeMobileMenu}>
          Anasayfa
          </Link>
        </li>
        <li className='nav-item'
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        >
          <Link to ='/services' className='nav-links' onClick={closeMobileMenu}>
          Katogoriler <i className='fas fa-caret-down' />
          </Link>
          {dropdown && <Dropdown/>}
        </li>
        <li className='nav-item'>
          <Link to ='/favorilerimnavbar' className='nav-links'
           onClick={closeMobileMenu}>
          Favorilerim
          </Link>
        </li>
        <li className='nav-item'>
          <Link to ='/contact-us' className='nav-links'
           onClick={closeMobileMenu}>
          Hakkımızda
          </Link>
        </li>
        <li className='nav-item'>
          <Link to ='/sign-up' className='nav-links-mobile' 
          onClick={closeMobileMenu}>
          Sign Up
          </Link>
        </li>
      </ul>
        {/* responsive */}
      <Button/>
    </nav>
    <nav className={sidebar ? 'nav-menu2 active2': 'nav-menu2'}>
        <ul className='nav-menu2-items2' onClick={showSidebar}>
          <li className="navbar-toggle2">
            <Link to ="#" className='menu-bars'>
              <AiIcons.AiOutlineClose/>
            </Link>
          </li>
          {SidebarData.map((item,index)=> {
            return (
              <li key ={index} className={item.cName}>
               <Link to = {item.path}>
                {item.icon}
                <span>{item.title}</span>
               </Link>

              </li>
            )
          })}
        </ul>
      </nav>
       </>
       
  )
}

export default Navbar ; 
