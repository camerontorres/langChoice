import React from 'react'
import './SignUpBanner.css'
import { Button } from './Button'


export default function SignUpBanner(background) {

    
  return (
    <>
    <div className='wrapperbg signupBg textWrapper pb-4 pt-5 'style={{backgroundImage: `url(${background})`,}} >
        
        <div className='row justify-content-md-center  innerWrapper' >
            <div className='col-md-8 pb-3 text-center text-secondary'>
                <h1 className='text-center p-0 text-light'>What are you waiting for? </h1>
            </div>
            <div className='text-center pb-5'>
            <Button to='/Quiz' className='btns' buttonStyle='btn--outline' buttonSize='btn--large' > Click here to sign up!</Button>
            </div>

            
        </div>
        
    </div>

    </>
  )
}
