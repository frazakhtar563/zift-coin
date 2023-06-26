import React from 'react'
import wake from '../../../assets/WhatsApp-Image-2022-10-24-at-2.41.04-PM-1.jpeg'
import wake2 from '../../../assets/WhatsApp-Image-2022-10-24-at-2.40.47-PM.jpeg'
import wake3 from '../../../assets/Untitled-design.jpg'
import wake4 from '../../../assets/PinInstagram.jpg'
import './Latest.css'
const Latest = () => {
  return (
    
        <div className="container">
            <div className="row justify-content-center">
                <h1 className='text-white lh-1 fs-1 mt-5 bold mb-5'>Latest Zift</h1>
             
                <div className="col-lg-3 col-md-6 col-sm-12 query"><img className='img-fluid latest_img' src={wake} alt="" /></div>
                <div className="col-lg-3 col-md-6 col-sm-12 query"><img  className='img-fluid latest_img'src={wake2} alt="" /></div>
                <div className="col-lg-3 col-md-6 col-sm-12 query"><img  className='img-fluid latest_img'src={wake3} alt="" /></div>
                <div className="col-lg-3 col-md-6 col-sm-12 query"><img  className='img-fluid latest_img'src={wake4} alt="" /></div>
                {/* <div className="col-lg-3 col-md-6 col-sm-12 query ps-5 ms-5"></div> */}
               
                
            </div>
            <button className='btn btn2 mt-lg-4 mb-3 mx-auto latest-sd'>
                Find More
            </button>
        </div>

  )
}

export default Latest