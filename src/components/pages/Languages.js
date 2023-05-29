import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import LangHeader from '../LangHeader';
import LangCard from '../LangCard.js';
import SignUpBanner from '../SignupBanner';






function Languages () {


    const mainText = 'Browse the Available Languages!'
    const subText = 'New Languages are always being added!'

       
        
      

    return (
        <>
        <LangHeader header={mainText} subtext={subText}/>
        
        <div className='row emptySpace'>
            
            
            <div className='p-0 m-0 rowInner' >
            
                
                
                 <LangCard/>
                    
                    
            </div>
            
        </div>
        <SignUpBanner/>
        <Footer/>
        </>
    );
}

export default Languages;