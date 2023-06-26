import React from 'react'
import './Discover.css'
import Latest from './latest/Latest'
const Discover = () => {
  return (
   <section className='collection-bg'>
    <div className="container pt-lg-5">
    <div className="row  mt-5 justify-content-center">
            <div className="col-6"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="3000">
                <h1 className='text-white lh-1 fs-1 mt-lg-5 bold discover-sd'>

                Discover & purchase digital artwork</h1>
            </div>
            <div className="col-lg-6 pt-lg-5">
                <span className='mt-3 text-light discover-sd'>
                We have provided a very nice and user-friendly user interface of personal area for our partners which has been designed keeping in mind all the technologies and devices. With the help of which all users can easily 
                </span>
                <br></br>
                <button className='btn btn2 mt-lg-3 discover-sd'>
                Explore Now
            </button>
            </div>
        </div>
    </div>
    <Latest />
   </section>
  )
}

export default Discover
