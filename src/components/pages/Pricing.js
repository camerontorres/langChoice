import React from 'react';
import '../../App.css'
import Footer from '../Footer';
import LangHeader from '../LangHeader';
import TextSection from '../TextSection';


export default function Pricing() {

  const headerText = 'Find the plan that suits you!'
  const sectionText ='Explore our flexible and affordable price options designed to fit your language learning journey. Choose from a range of plans that cater to your needs, whether you\'re just starting out or looking to take your skills to the next level. With our competitive pricing, you can access high-quality language education at a budget-friendly cost. Select the plan that suits you best and embark on an enriching language learning experience without breaking the bank.'
const header = 'Options for any budget'

  return (


    
    <>
    <LangHeader header={headerText}/>
    <TextSection text={sectionText} headText={header} s/>
    <div>
    <div>
       
        
        <div className='row pt-4 pb-5'>
          <div className="col-md-4 priceCol">
              <ul class="price">
                <li className="header">Basic</li>
                <li className="grey">Free!</li>
                <li>One language</li>
                <li>Forum access</li>
                <li>LangChoice classes</li>
                <li>Teacher support</li>
                <li className="grey"><a href="#" class="button">Sign Up</a></li>
              </ul>
          </div>
          <div className="col-md-4 priceCol">
              <ul class="price">
                <li className="header">Subscriber</li>
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

  
  



