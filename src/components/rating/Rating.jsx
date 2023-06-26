import React from 'react'
// import dummy from '
import staking from '../../assets/infographic-hologram-on-the-theme-of-crypto-assets-2023-03-23-03-59-07-utc (online-video-cutter.com).gif'
import './Rating.css'
const Rating = () => {
  return (

    <section className='rating-bg'>

      <div className="container pt-lg-5">
        <div className="row mt-lg-5">
          <div className="col-lg-6 col-sm-12 col-md-6 mt-lg-5">
            <h2 className='text-white fs-1 mb-lg-3 rating-sd'>
              Trade Like a Pro with ZiftCoin's Trading Option
            </h2>
            <span className='text-white-50 pt-lg-5 mt-lg-5 rating-sd'>
              Cryptocurrencies are digital currencies that use cryptography to encrypt and secure transactions.
            </span>
            <br></br>
            <span className='text-white fs-3 mt-lg-5'>Buying</span>
     
            <div className='text-white fs-4 text-end'>80%</div>

            <div class="progress">
              <div class="progress-bar bg-success" role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <br></br>
            <span className='text-white fs-3 mt-lg-5'>Selling</span>
           
            <div className='text-white fs-4 text-end'>90%</div>

            <div class="progress mb-3">
              <div class="progress-bar bg-danger" role="progressbar" style={{ width: "90%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 col-md-6 mt-lg-5 classing">
            <img className='img-fluid rating_gif' src={staking} alt="" />

            {/* <img src={dummy} alt="" /> */}

          </div>
        </div>
      </div>
    </section>
  )
}

export default Rating
