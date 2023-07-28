import React from 'react';
import '../../App.css'
import  {Button}  from '../Button'
import Footer from '../Footer';
import LangHeader from '../LangHeader';

const header1 = 'Welcome to the Family'
const sub = 'you\'ll love it here'


export default function SignUp() {
  return (
    <>
    <LangHeader header={header1} subtext={sub}/>
    <h1 className='pt-5 text-center p-0 m-0'>Your Journey Starts Today</h1>
    <div className="d-flex justify-content-center align-items-center p-0 m-0" style={{ height: '70vh' }}>
    <form className='d-flex flex-column p-0 m-0 '>
  <div class="form-group row justify-content-center container-fluid">
    <label class=""></label> 
        <div class="col-5 " >
          <input id="name" name="name" placeholder="First Name" type="text" class="form-control"/>
        </div>
        <div class="col-5 ">
          <input id="name" name="name" placeholder="Last Name" type="text" class="form-control"/>
        </div>
  </div>
  <div class="form-group row">
    <label class=""></label> 
        <div class="col-10 mx-auto">
          <input id="name" name="name" placeholder="email" type="text" class="form-control"/>
        </div>
      </div>  
  <div class="form-group row">
    <label class=""></label> 
          <div class="col-10 mx-auto">
            <input id="name" name="name" placeholder="Username" type="text" class="form-control"/>
          </div>
      </div> 

     <div class="form-group row">
      <label class=""></label> 
        <div class="col-10 mx-auto">
          <input id="name" name="name" placeholder="Password" type="text" class="form-control"/>
        </div>
      </div> 
     <div class="form-group row">
    <label class=""></label> 
    <div class="col-10 mx-auto">
      <input id="name" name="name" placeholder="Confirm Password" type="text" class="form-control"/>
    </div>
     </div> 
  <div class="form-group row p-0 m-0 mx-auto">
    <div class=" col-10 text-center">
      <Button name="submit" buttonStyle='btn--outline' buttonSize='btn--large' type="submit" class="btn  text-center submitBtn">Create Account</Button>
    </div>
  </div>
</form>
</div>
    <Footer/>
    </>


    
  )
}
