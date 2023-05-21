import React from 'react'
import '../App.css'
import './LangCard.css'

import spokenLanguages from './LangDB'

import { Link } from 'react-router-dom'






export default function LangCard() {
    

  
    
    return(
        spokenLanguages.map((language) => (
             
      
            
        <>
        
        
        
        <div className='langCard' >
            
            <div className='innerCard' key={language.id}>
            <Link to={`${language.link}`} >click here for {language.name}</Link>
                <h1 className='text-center p-0 m-0'>{language.name}</h1>
                
                <p  class='text-secondary'style={{paddingRight: 0}}>French is a Romance language spoken 
                    by millions of people around the world,
                     especially in France, Canada, and parts 
                     of Africa. It is known for its elegant sound, 
                     complex grammar, and rich cultural history, with 
                     a legacy of literature, art, and philosophy. French
                      is also an official language of many international 
                      organizations, including the United Nations, making 
                      it an important language for diplomacy and global
                       communication.</p>
            </div> 
        </div>
        
        
        </>

       
    ))
    ) 

}
