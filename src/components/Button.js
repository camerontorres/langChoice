import React from 'react'
import './Button.css'
import {Link } from  'react-router-dom'

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large']


export const Button  =  ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    to

}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) 
    ?   buttonStyle 
    : STYLES[0];

    const checkButtonSize = STYLES.includes(buttonSize) 
    ?   buttonStyle 
    : SIZES[0];

    return(
        <Link to={to} className='btn-mobile'>
            <button className={`btn ${checkButtonSize} ${checkButtonStyle}`} onClick={onclick} type={type}>
                {children}
            </button>
        </Link>
    )


}
