import React from 'react';
import '../../App.css'


import {  useParams } from 'react-router-dom'
import spokenLanguages from '../LangDB';

const LangDetail = () =>{
    const  {name} = useParams()
    const lang = spokenLanguages.find((lang) => lang.name === name.toString());
    //const hideElement = lang.param ===null ? 'hidden' : ''




    return (
      <>
      <div className='headerWrapper' style={{backgroundColor: lang.bg}}>

      <h1 className='text-center p-0'>{lang.name}!</h1>
        

      </div>
      <div className='wrapper'>
        <div className='generalInfo row mb-3'> 
            <div className='col-md-4 border border-primary'>
              <ul className='text-center p-0'>
                <li>link to section</li>
                <li>link to section</li>
                <li>link to section</li>
                <li>link to section</li>
                <li>link to section</li>
                <li>link to section</li>
              </ul>

            </div>
            <div className='col-md-8'>
              <p>Spoken by {lang.speakers} people in {lang.countries} </p>
              <p> part of the {lang.languageFamily} language Family</p>
            </div>
          </div>
        <div className='mainText'>
          
          
          <p>{lang.history}</p>
          
        </div>
      </div>
      
      </>
  
  
      
    )
  
  

}

export default LangDetail
