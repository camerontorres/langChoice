import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
  return (
    
<div id="footer" className='footerContainer'>
    <div class="container">
        <div class="row">
            <section class="col-4 col-6-narrower col-12-mobilep text-center">
                <h3>Pages</h3>
                <ul class="links">
                <li className=''>
                    <Link to='/'>
                        home
                    </Link>
                </li>
                <li className=''>
                    <Link to='/Languages'>
                        languages
                    </Link>
                </li>
                <li className=''>
                    <Link to='/Pricing'>
                        Pricing
                    </Link>
                </li>
                <li className=''>
                    <Link to='/About'>
                        about
                    </Link>
                </li>
                    
                    
                </ul>
            </section>
            <section class="col-4 col-6-narrower col-12-mobilep text-center">
                <h3>Languages</h3>
                <ul class="links">
                <li className=''>
                    <Link to='/Languages/Mandarin'>
                        Mandarin
                    </Link>
                </li>
                <li className=''>
                    <Link to='/Languages/Spanish'>
                        Spanish
                    </Link>
                </li>
                <li className=''>
                    <Link to='/Languages/English'>
                        French
                    </Link>
                </li>
                <li className=''>
                    <Link to='/Languages/Hindi'>
                        Hindi
                    </Link>
                </li>
                <li className=''>
                    <Link to='/Languages/Japanese'>
                        Japanese
                    </Link>
                </li>
                    
                </ul>  
            </section>
            <section class="col-4 col-6-narrower col-12-mobilep text-center">
                <h3>More</h3>
                <ul class="links">
                <li className=''>
                <a href="https://github.com/camerontorres" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /> Github</a>
                </li>
                <li className=''>
                <a href="https://www.linkedin.com/in/hello-its-cameron/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /> Linkedin</a>
                </li>
                <li className=''>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /> Twitter</a>
                </li>
                
                    
                </ul>  
            </section>
           
            <div class="copyright text-center">
            <ul class="menu">
                <li>&copy; LangChoice All rights reserved</li><li>Design: Cameron Torres</li>
            </ul>
        </div>
        </div>
        

    </div>
      
    </div>
            )}
