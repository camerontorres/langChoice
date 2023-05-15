import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
//import { Button } from './Button'


export default function Navbar() {

const [click, setClick] = useState(false)
const [button, setButton] = useState(true);
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
        
            <Link to='/' className='navbar-logo navbar-brand'>LangChoice <i className='fa fa-heart-o'></i></Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ?  'fa fa-times' :  'fa fa-bars'}></i>

            </div>
            <ul className={click ?  ' nav-menu active' :  ' nav-menu'}>
                <li className='nav-item nav-link'>
                    <Link to='/' className='nav-link' onClick={closeMobileMenu}>
                        home
                    </Link>
                </li>
                <li className='nav-item nav-link'>
                    <Link to='/Languages' className='nav-link' onClick={closeMobileMenu}>
                        languages
                    </Link>
                </li>
                <li className='nav-item nav-link'>
                    <Link to='/Quiz' className='nav-link' onClick={closeMobileMenu}>
                        quiz
                    </Link>
                </li>
                <li className='nav-item nav-link'>
                    <Link to='/About' className='nav-link' onClick={closeMobileMenu}>
                        about
                    </Link>
                </li>
                
                

            </ul>
            {/*button && <Button buttonStyle='btn--outline'>SIGN UP</Button>*/}

        
        </div>
        
      
    </div>
  )
}
