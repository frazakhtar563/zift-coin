import React, {useEffect, useRef} from 'react'
// import React, {  } from 'react';

import stackBg from '../../assets/colorful-bitcoin-illustration-neon-splash-removebg-preview.png'
import {FaRegCopy} from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify';
import './Stack.css'
import Cards from './Cards/Cards/Cards';
import sponser from "../../assets/footer.ca581494.ca581494fb47e71a326f.png"
import sponder1 from '../../assets/PenCake_logo.caaabc72b5350befa1dc.png'
import sponder2 from '../../assets/Coinbase_logo.f8e6c7b9100d0af7651d.png'
import sponder3 from '../../assets/download.png'
// import { LinkContainer } from 'react-router-bootstrap';
import {BsArrowRight} from 'react-icons/bs'

import { NavLink } from 'react-router-dom';
const Stack = () => {

  useEffect(() => {
    window.scrollTo(0,0)
  },[]);

 
  return (
   <section className='bg_stak'>
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 col-sm-12 mt-lg-5 p-lg-5">
          <span className='text-light fs-1 fw-bold mb-lg-5 stak-sd' data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="3000">Staking</span>

          <p className='text-light mt-lg-3 stak-sd'>Sacred Farms offer multiple farming opportunities to you. Get double rewards by staking your HPG tokens in return for additional HPG tokens and earning high income.</p>

          <button className="btn btn2 stak-sd mt-2"  data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="3000">Learn how to start</button>
                  </div>
        <div className="col-lg-6 stak-sd col-sm-12"><img className='img-fluid' src={stackBg} alt="" /></div>
      </div>
      <div className="row">
        <div className='col-sm-12'>
        <div className="border-stak">

<h2 className='text-stack text-center mt-lg-5'>MAXIMUM CAPPING FOR ALL BONUS MARKETING</h2>
<p className="text-light text-center mt-lg-4 fw-light-bold">5x will need to renew their package same or bigger to enjoy more marketing profits.<br></br>
Bonus will be count : Direct commissions & 10 level commissions</p>
</div>
        </div>
       
      </div>
        <div className="border-stak2 mt-4 mb-5">
      <div className="row">
           <div className="col-lg-3 col-md-6 col-sm-12 mt-lg-4 p-lg-3 sm-stak ">
            <span className='total_stack'>Total Staked</span>
            <br></br>
            <br></br>
            <span className='text-hpg'>0.00 HPG</span>
           </div>
           <div className="col-lg-3 col-md-6 col-sm-12 mt-lg-4 p-lg-3 sm-stak">
            <span className='total_stack'>Your Directs Bonus</span>
            <br></br>
            <br></br>
            <span className='text-hpg'>0.00</span>
           </div>
           <div className="col-lg-3 col-md-6 col-sm-12 mt-lg-4 p-lg-3 sm-stak">
            <span className='total_stack'>Your Affiliate Reward
</span>
<br></br>
<br></br>
<span className='text-hpg'>0.00</span>
           </div>
           <div className="col-lg-3 col-md-6 col-sm-12 mt-lg-4 p-lg-3 sm-stak">
            <span className='total_stack'>Claimed staking reward</span>
            <br></br>
            <br></br>
            <span className='text-hpg'>0.00 HPG</span>
           </div>
           <div className="col-lg-3 col-md-6 col-sm-12 p-lg-3 sm-stak mt-lg-2">
            <span className='total_stack'>Withdraw Cap</span>
            <br></br>
            <br></br>
            <span className='text-hpg'>0.00 HPG</span>
           </div>
           <div className="col-lg-3 col-md-6 col-sm-12 p-lg-3 sm-stak mt-lg-2">
            <span className='total_stack'>Remaining Cap</span>
            <br></br>
            <br></br>
            <span className='text-hpg'>0.00 HPG</span>
           </div>
           <div className="col-lg-3 col-md-6 col-sm-12 p-lg-3 sm-stak mt-lg-2">
            <span className='total_stack'>Flush Amount
</span>
<br></br>
<br></br>
<span className='text-hpg'>0.00 HPG</span>
           </div>
           <div className="col-lg-3 col-md-6 col-sm-12 p-lg-3 mt-lg-2">
            <span className='total_stack'>Claimed Directs & Affiliate</span>
            <br></br>
            <br></br>
            <span className='text-hpg'>0.00 HPG</span>
           </div>
      </div>

      <h2 className='text-stack text-center mt-5'>Withdraw Directs and Affiliate Reward</h2>
      <div className="cta_stak mt-4">
      <button class="btn btn-outline-warning m-1">Withdraw</button>
   <NavLink to="level">
  <button class="btn btn-outline-warning m-1">  Level</button>
   </NavLink>
   <NavLink to="detail">
  <button class="btn btn-outline-warning m-1">  Details</button>
   </NavLink>
      
      </div>
      <h2 className='text-stack text-center mt-5'>Referral link</h2>
      
     <div className="stak-copy mt-3">
     <form>
        

        <input type="text"  value="https://zift-coin-umair0089560.vercel.app/stack" readOnly />
                  <button type='button' onClick={() => {navigator.clipboard.writeText('https://zift-coin-umair0089560.vercel.app/stack');toast.success('copied')}}><FaRegCopy  className='fas-btn'/></button>
        </form>
     </div>

        </div>
      <h2 className='text-stack text-center mt-5'>Please use this referral address if you are not registered</h2>
      <div className="stak-copy mt-3">
      <form className='input_reg'>
        

        <input type="text" placeholder='Register'/>
        <button1 class="m-1 text-light"><BsArrowRight /></button1>   
                
        </form>
       

        </div>

        <div className='text-center mb-5'>
          <span className='balance fs-5'>User Balance</span>
          <span className='text-dark balance text-center ms-5 fs-5 fw-bold'>0.00</span>
        </div>
          
<Cards />

<div className="border-stak4 p-5 mx-auto">
  <div className="row">
<span className='text-light mb-4'>  Total income: based on your tarrif plan ( <span className='text-warning'>from 0.16% to 0.33% daily</span> )
</span>
<span className='text-light mb-4'>
Basic interest rate: <span className='text-warning'>+0.5% every 24 hours</span> - only for new deposits
</span>

<span className='text-light mb-4'>Minimum deposit: <span className='text-warning'>100 HPG</span>, no maximum limit</span>
<span className='text-light mb-4'>
  
Minimum withdraw: <span className='text-warning'>100 HPG</span>, no maximum limit
</span>
<div>
  
</div>
  </div>
</div>

<h2 className='text-stack text-center mt-5 mb-lg-5'>SPONSORS</h2>
<div className='sponser1'>
<img className='img-fluid' src={sponser} alt="" />
</div>

<div className="cta_stak mt-lg-4">
      <img className='img-fluid sponser' width={176} height={44} src={sponder1} alt="" />
      <img className='img-fluid sponser' width={176} height={44} src={sponder2} alt="" />
      <img className='img-fluid sponser' width={176} height={44} src={sponder3} alt="" />

      </div>

    </div>
   </section>
  )
}

export default Stack
