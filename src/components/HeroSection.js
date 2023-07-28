import React from 'react'
import '../App.css'
import  {Button}  from './Button'
import './HeroSection.css'
import learning from './images/learning.jpg'




export default function HeroSection() {


   

  return (

    

    <div className='hero-container bgColor bg-white pt-5 pb-5' style={{backgroundImage: `url(${learning})`,}}>
      <h1 className='text-dark text-right bigText'>Want to learn a language?</h1>
      <p className=' subText '>LangChoice is here to help!</p>
        <div className='d-flex flex-row justify-content-center pt-5'>
            <div className='hero-btns p-3'>
            
                <Button to='/Languages' className='btns' buttonStyle='btn--outline' buttonSize='btn--large'> Browse Languages</Button>
                </div>
            <div className='hero-btns p-3'>
                <Button to='/SignUp' className='btns' buttonStyle='btn--outline' buttonSize='btn--large' > Sign Up!</Button>
            </div>
        </div>
    </div>
  )
}
