import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
//import { Button } from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons'


export default function Navbar() {

const [click, setClick] = useState(false)
const [button ,setButton] = useState(true);
const handleClick =() =>  setClick(!click)
const closeMobileMenu =() =>  setClick(false)

const showButton = () =>{
    if(window.innerWidth <= 960){
        setButton(false);
    }else{
        setButton(true)
    }
};

window.addEventListener('resize', showButton)

  return (
    <div className='navbar'>
        <div className=' nav navbar-container'>
        
            <Link to='/' className='navbar-logo navbar-brand'>LangChoice <FontAwesomeIcon icon={faCheckDouble} style={{color: "#ff6251",}} /></Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ?  'fa fa-times' :  'fa fa-bars'}></i>

            </div>
            <ul className={click ?  ' nav-menu active p-0' :  ' nav-menu'}>
                <li className='nav-item nav-link'>
                    <Link to='/' className='nav-link' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item nav-link'>
                    <Link to='/Languages' className='nav-link' onClick={closeMobileMenu}>
                        Languages
                    </Link>
                </li>
                <li className='nav-item nav-link'>
                    <Link to='/Pricing' className='nav-link' onClick={closeMobileMenu}>
                        Pricing
                    </Link>
                </li>
                <li className='nav-item nav-link'>
                    <Link to='/SignUp' className='nav-link' onClick={closeMobileMenu}>
                        Sign up
                    </Link>
                </li>
                
                

            </ul>
            {/*button && <Button buttonStyle='btn--outline'>SIGN UP</Button>*/}

        
        </div>
        
      
    </div>
  )
}
