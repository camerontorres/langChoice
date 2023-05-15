import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import LangHeader from '../LangHeader';
import LangCard from '../LangCard';


function Languages () {
    return (
        <>
        <LangHeader/>
        <div className='row'>
            <div className='col-md-6 p-0 m-0' >
                 <LangCard/>
            </div>
            <div className='col-md-6 p-0 m-0'>
                 <LangCard/>
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default Languages;