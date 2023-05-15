import React from 'react'
import '../App.css'
import  {Button}  from './Button'
import './HeroSection.css'



export default function HeroSection() {

   

  return (
    <div className='hero-container bgColor pt-5 pb-5'>
      <h1 className='text-light text-right'>Want to learn a languauge?</h1>
      <p className='text-light '>LangChoice is here to help!</p>
        <div className='d-flex flex-row justify-content-center pt-5'>
            <div className='hero-btns p-3'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'> Browse Languages</Button>
            </div>
            <div className='hero-btns p-3'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'> Take a Quiz!</Button>
            </div>
        </div>
    </div>
  )
}
