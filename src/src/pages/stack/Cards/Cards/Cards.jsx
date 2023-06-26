import React from 'react'
import logo from '../../../../assets/zift-coin-logo-2.png'
import './Cards.css'
const Cards = () => {
  return (
    <> 
        <div className="border-stak3 mb-4">
        <span className='text-light bold HPG'>Zift POOL</span>
   <div className="row mt-lg-4">
            
            <div className="col-lg-4 col-md-6 col-sm-12 mt-2"><img className='img-fluid mt-2 mb-2' src={logo} alt="" width={72} height={74} />
            <div className="card-stack">
            <span className='d-block stoki text-light mb-2'>Staked</span>
            <span className='d-block stoki text-bold mb-2'>99 Days</span>
            </div>
            <span className='text-danger'>Reward 0.16 % per day</span>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12"><span className='d-block stoki text-light'>Amount</span>
            <form className='mt-lg-4 mb-sm-4 card-stack'>
              <input className='mt-lg-3' placeholder='0'/>
              <button className='btn btn-outline-warning ms-4'>Stak HPG</button>
            </form>
            </div>
          
            <div className="col-lg-4 col-md-6 col-sm-12"><span className='d-block stoki text-light mt-sm-3'>HPG Earned</span>
            <form className='mt-lg-4 mb-lg-4 card-stack'>
              <input className='mt-3' placeholder='0'/>
              <button className='btn btn-outline-warning ms-4'>Claim</button>
            </form>
            <span className='text-light mt-3 '>Minimum deposit:</span>
            <span className='text-warning mt-3 ms-3'>100 HPG</span>

            </div>
        </div>
      </div>
        <div className="border-stak3 mb-5">
        <span className='text-light bold HPG'>Zift POOL</span>
   <div className="row mt-lg-4">
            
            <div className="col-lg-4 col-md-6 col-sm-12 mt-lg-2 mt-2 mb-2"><img className='img-fluid mt-2' src={logo} alt="" width={72} height={74} />
          <div className="card-stack">
          <span className='d-block stoki text-light mb-2'>Staked</span>
            <span className='d-block stoki text-bold mb-2'>195 Days</span>
          </div>
            <span className='text-danger'>Reward 0.23 % per day</span>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12"><span className='d-block stoki text-light'>Amount</span>
            <form className='mt-lg-4 card-stack'>
              <input className='mt-lg-3' placeholder='0'/>
              <button className='btn btn-outline-warning ms-4'>Stak HPG</button>
            </form>
            </div>
          
            <div className="col-lg-4 col-md-6 col-sm-12"><span className='d-block stoki text-light'>HPG Earned</span>
            <form className='mt-lg-4 mb-lg-4 card-stack'>
              <input className='mt-lg-3' placeholder='0'/>
              <button className='btn btn-outline-warning ms-4'>Claim</button>
            </form>
            <span className='text-light mt-3 '>Minimum deposit:</span>
            <span className='text-warning mt-lg-3 ms-3'>100 HPG</span>

            </div>
        </div>
      </div>
        <div className="border-stak3 mb-5">
        <span className='text-light bold HPG'>Zift POOL</span>
   <div className="row mt-lg-4">
            
            <div className="col-lg-4 col-md-6 col-sm-12 mt-lg-2 mt-2 mb-2"><img className='img-fluid mt-2' src={logo} alt="" width={72} height={74} />
              <div className="card-stack">
              <span className='d-block stoki text-light mb-2'>Staked</span>
            <span className='d-block stoki text-bold mb-2'>390 Days</span>
              </div>
            <span className='text-danger'>Reward 0.26 % per day</span>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12"><span className='d-block stoki text-light'>Amount</span>
            <form className='mt-lg-4 card-stack'>
              <input className='mt-lg-3' placeholder='0'/>
              <button className='btn btn-outline-warning ms-4'>Stak HPG</button>
            </form>
            </div>
          
            <div className="col-lg-4 col-md-6 col-sm-12"><span className='d-block stoki text-light'>HPG Earned</span>
            <form className='mt-lg-4 mb-lg-4 card-stack'>
              <input className='mt-3' placeholder='0'/>
              <button className='btn btn-outline-warning ms-4'>Claim</button>
            </form>
            <span className='text-light mt-lg-3 '>Minimum deposit:</span>
            <span className='text-warning mt-lg-3 ms-3'>100 HPG</span>

            </div>
        </div>
      </div>
        <div className="border-stak3 mb-5">
        <span className='text-light bold HPG'>Zift POOL</span>
   <div className="row mt-lg-4">
            
            <div className="col-lg-4 col-md-6 col-sm-12 mt-lg-2 mt-2"><img className='img-fluid mt-2' src={logo} alt="" width={72} height={74} />
          <div className="card-stack">
          <span className='d-block stoki text-light'>Staked</span>
            <span className='d-block stoki text-bold'>585 Days</span>
          </div>
            <span className='text-danger'>Reward 0.33 % per day</span>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12"><span className='d-block stoki text-light'>Amount</span>
            <form className='mt-lg-4 card-stack'>
              <input className='mt-lg-3' placeholder='0'/>
              <button className='btn btn-outline-warning ms-4'>Stak HPG</button>
            </form>
            </div>
        
            <div className="col-lg-4 col-md-6 col-sm-12"><span className='d-block stoki text-light'>HPG Earned</span>
            <form className='mt-lg-4 mb-lg-4 card-stack'>
              <input className='mt-lg-3' placeholder='0'/>
              <button className='btn btn-outline-warning ms-4'>Claim</button>
            </form>
            <span className='text-light mt-lg-3 '>Minimum deposit:</span>
            <span className='text-warning mt-lg-3 ms-3'>100 HPG</span>

            </div>
        </div>
      </div>

 </>
  )
}

export default Cards
