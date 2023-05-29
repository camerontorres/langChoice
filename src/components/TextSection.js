import React from 'react'
import './TextSection.css'


export default function TextSection({text, background, img, headText}) {
  return (
    <>
    <div className='wrapperbg bg-light textWrapper pb-3  seperator'style={{backgroundImage: `url(${background})`,}} >
        <h1 className='text-center p-0 pb-1'>{headText}</h1>
        <div className='row justify-content-md-center  innerWrapper' >
            <div className='col-md-8 pb-3 text-center text-secondary'>
                {text}
            </div>

            
        </div>
        <div className='row justify-content-center innerWrapper'>
                <img id='globe'src={img}/>
        </div>
      
    </div>

    </>
  )
}
