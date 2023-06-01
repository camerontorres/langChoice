import React, {useState} from 'react';
import '../../../App.css'


//import {  useParams } from 'react-router-dom'
import spokenLanguages from '../../LangDB';
import Footer from '../../Footer';



const test = () =>{
    
    const lang = spokenLanguages.find((item) => item.id === '1');
    //const hideElement = lang.param ===null ? 'hidden' : ''

   //Works the accordian
      const [activeSection, setActiveSection] = useState(null);
    
      const handleClick = (sectionId) => {
        setActiveSection((prevSection) => (prevSection === sectionId ? null : sectionId));
      };
   



    return (
      <>
      
      <div className='headerWrapper' style={{backgroundColor: lang.bg}}>

      <h1 className='text-center p-0 pt-5'>{lang.name}!</h1>
        

      </div>
      <div className='wrapper'>
        <div className='generalInfo row mb-3'> 
            <div className='col-sm-4 border border-primary'>
              <ul className='text-center p-0'>
                <li>link to section</li>
                <li>link to section</li>
                <li>link to section</li>
                <li>link to section</li>
                <li>link to section</li>
                <li>link to section</li>
              </ul>

            </div>
            <div className='col-sm-8'>
              <p>Spoken by {lang.speakers} people in {lang.countries} </p>
              <p> part of the {lang.languageFamily} language Family</p>
            </div>
          </div>
        <div className='mainText'>
          
          
          <p>intro</p>
          
        </div>



        <div id="accordion" class="p-5">
            <div class="card">
                <div class="card-header" id="headingOne">
                  <h5 class="mb-0">
                    <button className={`btn btn-link ${activeSection === 'collapseOne' ? 'collapsed' : ''}`} data-toggle="collapse"  aria-expanded={activeSection === 'collapseOne'}aria-controls="collapseOne" onClick={() => handleClick('collapseOne')}> {/**** COLLAPSE HEADING */}
                      History
                    </button>
                  </h5>
                </div>

                <div id="collapseOne" class="collapse" className={`collapse ${activeSection === 'collapseOne' ? 'show' : ''}`} aria-labelledby="headingOne" data-parent="#accordion">  {/**** COLLAPSE INNER */}
                  <div class="card-body">
                    put stuff here
                  </div>
                </div>
            </div>
  <div class="card">
        <div class="card-header" id="headingTwo">
          <h5 class="mb-0">
            <button className={`btn btn-link ${activeSection === 'collapseTwo' ? 'collapsed' : ''}`} data-toggle="collapse"  aria-expanded={activeSection === 'collapseTwo'} aria-controls="collapseTwo" onClick={() => handleClick('collapseTwo')}>  
              Grammar
            </button>
          </h5>
        </div>
        <div id="collapseTwo"  className={`collapse ${activeSection === 'collapseTwo' ? 'show' : ''}`}aria-labelledby="headingTwo" data-parent="#accordion">
          <div class="card-body">
          put stuff here
          </div>
        </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingThree">
      <h5 class="mb-0">
      <button className={`btn btn-link ${activeSection === 'collapseThree' ? 'collapsed' : ''}`} data-toggle="collapse"  aria-expanded={activeSection === 'collapseThree'} aria-controls="collapseThree" onClick={() => handleClick('collapseThree')}>
          Tips
        </button>
      </h5>
    </div>
    <div id="collapseThree"  className={`collapse ${activeSection === 'collapseThree' ? 'show' : ''}`}aria-labelledby="headingThree" data-parent="#accordion">
      <div class="card-body">
        <ul>
          put stuff here
        </ul>
      </div>
    </div>
  </div>
</div>
      </div>

      <Footer/>
      
      </>
  
  
      
    )
    
  
  

} 

export default test 
