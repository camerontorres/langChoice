import React from 'react'
import '../App.css'
import './LangHeader.css'



export default function LangHeader({header , subtext , BG}) {
    return(

        <>
        <div className='hero-container bgColor pt-5 pb-5' style={{background: {BG},}}>
            <h1 className='text-light text-right pt-4'>{header}</h1>
            <p className='text-light '>{subtext}</p>
                <div className='d-flex flex-row justify-content-center pt-5'>
                    
                 </div>
    </div>
        
        
        
        </>
    )
}

   
