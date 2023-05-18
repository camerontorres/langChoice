import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    
<div id="footer" className='footerContainer'>
    <div class="container">
        <div class="row">
            <section class="col-3 col-6-narrower col-12-mobilep">
                <h3>Pages</h3>
                <ul class="links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/info">What is mead?</a></li>
                    <li><a href="/products">Products</a></li>
                    <li><a href="/about">About us</a></li>
                    <li><a href="/signUp">Join the Newsletter</a></li>
                    <li><a href="/careers">Careers</a></li>
                    <li><a href="/nature">Sustainability</a></li>
                    
                </ul>
            </section>
            <section class="col-3 col-6-narrower col-12-mobilep">
                <h3>Our Top Products</h3>
                <ul class="links">
                    <li><a href="/products/productPage/6456c756553c049bad72ec17">Traditional</a></li>
                    <li><a href="/products/productPage/64570f3a553c049bad72ec18">Melomel</a></li>
                    <li><a href="/products/productPage/645717ce553c049bad72ec19">Cyser</a></li>
                    <li><a href="/products/productPage/64571809553c049bad72ec1a">Braggot</a></li>
                    <li><a href="/products/productPage/64571838553c049bad72ec1b">Pyment</a></li>
                    <li><a href="/products/productPage/64571865553c049bad72ec1c">Metheglin</a></li>
                    
                </ul>  
            </section>
            <section class="col-6 col-12-narrower">
                <h3>Get In Touch</h3>
                <form>
                    <div class="row gtr-50">
                        <div class="col-6 col-12-mobilep">
                            <input type="text" name="name" id="name" placeholder="Name" />
                        </div>
                        <div class="col-6 col-12-mobilep">
                            <input type="email" name="email" id="email" placeholder="Email" />
                        </div>
                        <div class="col-12">
                            <textarea name="message" id="message" placeholder="Message" rows="5"></textarea>
                        </div>
                        <div class="col-12">
                            <ul class="actions">
                                <li><input type="submit" class="button alt" value="Send Message" /></li>
                            </ul>
                        </div>
                    </div>
                </form>
            </section>
            <div class="copyright">
            <ul class="menu">
                <li>&copy; LangChoice All rights reserved</li><li>Design: Cameron Torres</li>
            </ul>
        </div>
        </div>
        

    </div>
      
    </div>
            )}
