import React from 'react'
import wipe from '../../assets/NFT-Market.gif'
import {SlEnvolope} from 'react-icons/sl'
import {BsArrowRight} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaDribbble} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FiMail} from 'react-icons/fi'
// import { Form, Button, Row, Col } from 'react-bootstrap';
// import { BsArrowRight } from 'react-icons/bs';
import './Footer.css'
const Footer = () => {
  return (
    <section className='footer-bg'>
        <div className="container">
            <div className="row">
            <h1 className='text-white lh-1 fs-2 mt-4 bold stak-sd'>A new place to collect Zero   Invincible Fungible Token</h1>
                <div className="col-lg-3 col-sm-6 stak-sd"><img className='img-fluid mt-lg-3' src={wipe} alt=""/></div>
                <div className="col-lg-3 col-sm-6 mt-lg-5">
                    <span className='text-light mb-lg-5 mt-3 stak-sd'>Say Hello</span><br></br>
                    <h5 className='text-light mt-lg-3 mb-lg-1 stak-sd' style={{textDecoration: "underline"}}>info@ziftcoin.com</h5>
                   <br></br>
                    <span className='stak-sd text-light mb-2'>+1 840 841 25 69</span>
                    </div>
            
                <div className="col-lg-3 col-sm-6 mt-lg-5">
                <h5 className='text-light mb-lg-4 mb-2 stak-sd'>Newsletter</h5>
               <form>
                <SlEnvolope className='far-icon'/>
                <input type="email" placeholder='Enter Your Email' required />
                <button type='submit'><BsArrowRight  className='fas-btn'/></button>
               </form>
                    </div>

                    <div className="col-lg-3 col-sm-6 mt-lg-5 stak-sd mb-2">
               

               <div className='social-icons ms-lg-5 mt-lg-4'>
               <span className='mt-lg-4 mb-lg-4 text-light icons'><a href="https://www.facebook.com/ZiftCoin?mibextid=ZbWKwL"><FaFacebookF  /></a></span>
               <br></br>
               <span className='text-light mt-lg-4 icons'><a href="https://twitter.com/CoinToken57?t=rAFu4t_NG3BcvDq_0yFNQg&s=09"><FaTwitter /></a></span>
               <br></br>
               <span className='mt-lg-4 mb-lg-4 text-light icons'><a href="#"><FaDribbble /></a></span>
               <br></br>
               <span className='text-light mt-lg-4 icons'><a href="https://instagram.com/ziftcoin?igshid=MzNlNGNkZWQ4Mg=="><FaInstagram /></a></span>
               <br></br>
               <span className='text-light mt-lg-4 icons'><a href="#"><FiMail /></a></span>
               </div>

               
               </div>
            </div>

          

        </div>
        <div className="bottom-bar sm-d-block">
                <div className="bottom-bar-content">
                    <div className="text-light">
                    ZiftCoin © 2023. All Rights Reserved.
                    </div>
                    <div className="text-warning text-center">
                    Terms and Conditions Privacy Policy

                    </div>
                </div>
            </div>
    </section>
  )
}

export default Footer
