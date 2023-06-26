import React, {useEffect} from 'react'
import level from '../../assets/20371751_3d_rendering_business_illustration-removebg-preview.png'
import NumberCounter from './NumberCounter'
import './Level.css'
const Level = () => {

      useEffect(() => {
            window.scrollTo(0,0)
          },[]);
  return (
    <section className='bg'>
      <div className="container p-lg-5">
      <div className="row">
        <div className="col-lg-6 col-sm-12 mt-lg-5 p-lg-5">
          <span className='text-light fs-1 fw-bold mb-lg-5 level-sd'>Level Detail</span>

          <p className='text-light mt-lg-3 level-sd'>Sacred Farms offer multiple farming opportunities to you. Get double rewards by staking your HPG tokens in return for additional HPG tokens and earning high income.</p>
                  </div>
        <div className="col-lg-6 col-sm-12"><img className='img-fluid' src={level} alt="" /></div>
      </div>

      <NumberCounter />
      <div className="border-stak2 mt-5 mb-5">
     
      <div className="row ms-4">
      <div className="col-lg-3 col-md-6 col-sm-12 p-lg-3 mt-lg-4 card-stack">
            <span className='total_stack'>Total User</span>
            <br></br>
            <br></br>
            <span className='text-hpg'>0.00 HPG</span>
           </div>
      <div className="col-lg-3 col-md-6 col-sm-12 p-lg-3 mt-lg-4 card-stack">
            <span className='total_stack'>Total Deposit</span>
            <br></br>
            <br></br>
            <span className='text-hpg'>0.00 HPG</span>
           </div>
      <div className="col-lg-3 col-md-6 col-sm-12 p-lg-3 mt-lg-4 card-stack">
            <span className='total_stack'>Total Claim</span>
            <br></br>
            <br></br>
            <span className='text-hpg'>0.00 HPG</span>
           </div>
      <div className="col-lg-3 col-md-6 col-sm-12 p-lg-3 mt-lg-4 card-stack">
            <span className='total_stack'>Total Affiliate Reward</span>
            <br></br>
            <br></br>
            <span className='text-hpg'>0.00 HPG</span>
           </div>
      </div>

    
      </div>
      <div className="border-stak2 mt-5 mb-5">

      <span className='text-light bold level mb-4'>LEVEL DETAIL</span>
      <div className="row ms-4">
      <div className="col-lg-2 col-md-6 col-sm-12 p-lg-3 mt-4">
            <span className='total_stack'>No</span>
            
           </div>
      <div className="col-lg-2 col-md-6 col-sm-12 p-lg-3 mt-lg-4">
            <span className='total_stack'>Addresst</span>
           
           </div>
      <div className="col-lg-2 col-md-6 col-sm-12 p-lg-3 mt-lg-4">
            <span className='total_stack'>Reward</span>
           
           </div>
      <div className="col-lg-2 col-md-6 col-sm-12 p-lg-3 mt-lg-4">
            <span className='total_stack'>Current Deposit</span>
           
           </div>
      <div className="col-lg-2 col-md-6 col-sm-12 p-lg-3 mt-lg-4">
            <span className='total_stack'>Total Deposit</span>
           
           </div>
      <div className="col-lg-2 col-md-6 col-sm-12 p-lg-3 mt-lg-4">
            <span className='total_stack'>Affiliate Generated</span>
           
           </div>
      </div>
      </div>
      </div>
    </section>
  )
}

export default Level
