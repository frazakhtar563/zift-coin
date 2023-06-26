import React from 'react'
// import {Col, Container, Row} from 'react-bootstrap'
import Facbook from '../../video/ZiftCoin2.gif'
// import cartoon from '../../assets/banner-shape-13.png'
import './Release.css'
const Release = () => {
  return (
    <section className='release-container'>
     
  <div className="container pt-5">
     <div className="row pt-lg-5 mt-lg-5">
<div className="col-lg-6 col-sm-12 mt-5"
data-aos="fade-left"
data-aos-anchor-placement="center-bottom"
data-aos-duration="3000"
data-aos-easing="linear"
>
<h2 className='text-light fs-1 releas-sd'>
The Big Release!</h2>
   <span className="mt-1 mb-3 text-light releas-sd">We deliver up-to-date, breaking crypto news about the latest ZiftCoin.

</span> 

</div>
<div className="col-lg-6 col-sm-12">
  
      
<img src={Facbook} alt="" className="img-fluid mt-4 releas-sd" />
 
         </div>
</div> 
  </div>

     </section>
  )
}

export default Release


