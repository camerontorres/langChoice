import React from 'react'
import '../App.css'
import './LangCard.css'

import spokenLanguages from './LangDB'
import Emoji from 'react-emoji-render'

import { Link } from 'react-router-dom'
import image1 from './images/ChinaCardCopy.jpg';
import image2 from './images/SpainCardTrans.jpg';
import image3 from './images/ParisCardTrans.jpg';
import image4 from './images/IndiaCardTrans.jpg';
import image5 from './images/JapanCardTrans.jpg';










export default function LangCard() {
    

  
    
    return(
        spokenLanguages.map((language) => (
             
      
            
        <>
        
        
        
        <div className='langCard ' >
        <Link to={`${language.link}` } key={language.id} >
            
            <div className='innerCard pt-5 bg bg-light'  >
            
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