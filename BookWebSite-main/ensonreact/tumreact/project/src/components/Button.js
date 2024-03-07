import React from 'react'
import './Button.css'
import {Link} from 'react-router-dom'
import { motion } from 'framer-motion';
import styled from 'styled-components';

export function Button (){
    return(
        <Link to = 'sign-up'>
            <button className='btn'>
                Sign Up
            </button>
        </Link>
        
    )
    
}







