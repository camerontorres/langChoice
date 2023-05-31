import React from 'react'
import '../App.css'
import './LangCard.css'

import spokenLanguages from './LangDB'
import Emoji from 'react-emoji-render'
import { useState } from 'react'

import { Link } from 'react-router-dom'
import image1 from './images/ChinaCardCopy.jpg';











export default function LangCard() {
    

        
    
    return(
        spokenLanguages.map((language) => (
            
             
      
            
        <>
        
        
        
        <div className='langCard  zoom-effect' >
        <Link to={`${language.link}` } key={language.id} >
            
            <div className='innerCard p-5 bg-light '  onMouseEnter={(e) => { 

                        e.currentTarget.style.background = `linear-gradient(to top, ${language.bg}, #FBFBFB)`;
                        e.currentTarget.style.backgroundSize = '100% 25%';
                        e.currentTarget.style.backgroundPosition = 'bottom';
                        e.currentTarget.style.backgroundRepeat = 'no-repeat'; }} 

                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = '#FBFBFB'; 
                            e.currentTarget.style.backgroundSize = '100% 50%'; 
                            e.currentTarget.style.backgroundRepeat = 'repeat'; }} >
                                    
      
            
                <h1 className='text-center p-0 m-0'>{language.name}{language.emoji}</h1>
                
                 
                
                <p  className='text-dark text-center'style={{paddingRight: 0}}>
                    {language.shortDesc}
                    </p>
                    
            </div> 
            </Link>
        </div>
        
        
        </>

       
    ))
    ) 

}


//this goes in the innerCard  style={{ backgroundImage: `url(${getBackgroundImage(language.cardBg)})`}}

//Below code helps get the background images for each card
/*function getBackgroundImage(cardBg) { 
    switch (cardBg) {
      case './images/ChinaCardCopy.jpg':
        return image1;
      case './images/SpainCardTrans.jpg':
        return image2;
        case './images/ParisCardTrans.jpg':
        return image3;
        case './images/IndiaCardTrans.jpg':
        return image4;
        case './images/JapanCardTrans.jpg':
        return image5;
      // Add other cases for different images
      default:
        return null; // Return a default image or null if no matching case is found 
    } 
  }
 */