import React from 'react'
import Add1 from '../../assets/Screenshot_2022-10-24_140105-removebg-preview.png'
import Add2 from '../../assets/Screenshot_2022-10-24_140117-removebg-preview.png'
import Add3 from '../../assets/Screenshot_2022-10-24_140133-removebg-preview.png'
import Add4 from '../../assets/Screenshot_2022-10-24_140144-removebg-preview.png'
import Add5 from '../../assets/Screenshot_2022-10-24_140154-removebg-preview.png'
import Add6 from '../../assets/Screenshot_2022-10-24_140144-removebg-preview.png'
import './Top.css'
const Top = () => {
  return (
   <section className='Top-bg'>
     <div className="container pt-5">
        <div className="row justify-content-center">
            <div className="col-6" data-aos="fade-left"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="3000"
            data-aos-easing="linear">
                <h1 className='text-white lh-1 fs-1 mb-lg-3 mt-lg-5 bold top-sd'>
Check our top
clients & partners</h1>
            </div>
            <div className="col-lg-6 pt-5">
                <span className='mt-lg-5 text-light   top-sd'>
                ZiftCoin.com Institutional Markets is a full-stack crypto services platform that works with crypto-native businesses and institutional clients on lending, trading, and custody solutions tailored to your needs.
                </span>
            </div>
        </div>
        <div data-aos="zoom-in" data-aos-offset="400" className='row justify-content-between'>
            <div 
      className='col-lg-12 col-sm-6 col-md-12 d-sm-block d-lg-flex justify-content-between text-center'>
            <img className='client-img' width={128} height={123} src={Add1} alt="" />
            <img className='client-img' width={128} height={123} src={Add2} alt="" />
            <img className='client-img' width={128} height={123} src={Add3} alt="" />
            <img className='client-img' width={128} height={123} src={Add4} alt="" />
            <img className='client-img' width={128} height={123} src={Add5} alt="" />
            <img className='client-img' width={128} height={123} src={Add6} alt="" />
           
            </div>
        </div>
    </div>
   </section>
  )
}

export default Top
