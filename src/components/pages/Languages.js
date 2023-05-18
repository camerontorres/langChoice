import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import LangHeader from '../LangHeader';
import LangCard from '../LangCard.js';






function Languages () {

        // Add more languages as needed
        
      

    return (
        <>
        <LangHeader/>
        
        <div className='row emptySpace'>
            
            
            <div className='p-0 m-0 rowInner' >
            
                
                
                 <LangCard/>
                    
                    
            </div>
            
        </div>
        <Footer/>
        </>
    );
}

export default Languages;