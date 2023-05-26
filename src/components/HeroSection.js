import React from 'react'
import '../App.css'
import  {Button}  from './Button'
import './HeroSection.css'
import learning from './images/learning.jpg'




export default function HeroSection() {


   

  return (

    

    <div className='hero-container bgColor bg-white pt-5 pb-5' style={{backgroundImage: `url(${learning})`,}}>
      <h1 className='text-dark text-right'>Want to learn a languauge?</h1>
      <p className='text-dark '>LangChoice is here to help!</p>
        <div className='d-flex flex-row justify-content-center pt-5'>
            <div className='hero-btns p-3'>
            
                <Button to='/Languages' className='btns' buttonStyle='btn--outline' buttonSize='btn--large'> Browse Languages</Button>
                </div>
            <div className='hero-btns p-3'>
                <Button to='/Quiz' className='btns' buttonStyle='btn--outline' buttonSize='btn--large' > Take a Quiz!</Button>
            </div>
        </div>
    </div>
  )
}
