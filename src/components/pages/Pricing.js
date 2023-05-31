import React from 'react';
import '../../App.css'
import Footer from '../Footer';
import LangHeader from '../LangHeader';


export default function Pricing() {

  const headerText = 'Find the plan that suits you!'
  return (

    
    <>
    <LangHeader header={headerText}/>
    <div>
    <div>
       
        
        <div className='row'>
          <div className="col-md-4 priceCol">
              <ul class="price">
                <li className="header">free</li>
                <li className="grey">$ 9.99 / year</li>
                <li>One language</li>
                <li>Forum access</li>
                <li>LangChoice classes</li>
                <li>Teacher support</li>
                <li className="grey"><a href="#" class="button">Sign Up</a></li>
              </ul>
          </div>
          <div className="col-md-4 priceCol">
              <ul class="price">
                <li className="header">Basic</li>
                <li className="grey">$ 4.99 / month</li>
                <li>Up to 3 languages</li>
                <li>24 hour support</li>
                <li>Class chat practice</li>
                <li>In-depth lessons</li>
                <li className="grey"><a href="#" class="button">Sign Up</a></li>
              </ul>
          </div>
          <div className="col-md-4 priceCol">
              <ul className="price">
                <li className="header">Pro</li>
                <li className="grey">$ 16.99 / month</li>
                <li>All access pass</li>
                <li>LangChoice Pro resources</li>
                <li>1 on 1 lessons</li>
                <li>Pro lessons</li>
                <li className="grey"><a href="#" class="button">Sign Up</a></li>
              </ul>
          </div>
        </div>
    </div>
      
    </div>
    <Footer/>
    </>


    
  )
}

  
  



