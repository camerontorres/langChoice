import React from 'react'
import '../App.css'
import './LangHeader.css'
import banner from './images/memphisBanner.jpg'



export default function LangHeader({header , subtext , BG}) {
    return(

        <>
        <div className='langHeader d-flex flex-column  bgColor pt-5 pb-5' style={{backgroundImage: `url(${banner})`}}>
            <div className='headerBox  row container-fluid align-self-end '>
            <h1 className=' text-center col-md-10 p-3 langHeadText'>{header}</h1>
            </div>
            <div className='headerBox  row container-fluid align-self-end '>
            <p className='langHeadSub p-2'>{subtext}</p>
            </div>
            </div>
                
    
        
        
        
        </>
    )
}

   
