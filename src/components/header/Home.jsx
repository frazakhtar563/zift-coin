import React, {useEffect} from 'react'
import AutoPlay from './HeaderSlider'


import './Home.css'

import { NavLink } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])

  return (
    <div className='bg_home'>
      
      {/* <Navigation /> */}
     <div className="container">
      <div className="row pt-5">
        <div className="col-lg-6 col-sm-12 mt-5">
        <h1 className='text-light fs-1 home-heading'
        data-aos="fade-right"
        data-aos-duration="3000"
        >
        Buy and Sell Digital Art: ZIFT Collection</h1>
  
           <NavLink to='Bycoin'>
           <button className="mt-3 mb-3 btn btn-outline-warning">Get ZiftCoin</button> 
                 </NavLink>
           <div className=" mb-3 bg-light"
           data-aos="fade-up"
           data-aos-easing="linear"
           data-aos-duration="3000"
           ><AutoPlay /></div>
        </div>
        <div className="col-lg-6 col-sm-12 mt-5">
          
          {/* <img className="img-fluid mt-5 banner" src={banner} alt="" />   */}
          
                </div>
      </div>
     </div>
    </div>
  )
}

export default Home


