import React, {useEffect} from 'react'
import {Button} from 'react-bootstrap'
import {SlEnvolope} from 'react-icons/sl'
// import {BsArrowRight} from 'react-icons/bs' 
import {RiContactsLine} from 'react-icons/ri' 
import {FiPhoneCall} from 'react-icons/fi' 
import {BiErrorCircle} from 'react-icons/bi' 
import {BsPencilFill} from 'react-icons/bs' 
import {TfiLocationPin} from 'react-icons/tfi' 
import {AiOutlineMobile} from 'react-icons/ai' 
import {BsSend} from 'react-icons/bs' 
import './Contact.css'

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  return (
    <section>
        <h1 className='contac_heading'>Contact Us</h1>

    

      <div className="container contact-container">
        <div className="row mt-lg-5 mb-4">
          <div className="col-lg-6 col-sm-12 mt-5">

            <span className='text-light mb-2'>Contact us</span>
            <h1 className='text-light mb-3 fs-1 d-block bold lh-1'>Have Questions? Get in touch!</h1>
            <span className='text-light'>Simply send us an email anytime you want. If you have any questions, please feel free to contact us.</span>
           {/* <div className="d-flex mt-3">
           <TfiLocationPin  className='l-icon'/> 
            <span className='text-light ms-3'>
226 E 57th St, New York, NY 10022</span>
           </div>
           <div className="d-flex mt-3">
           <AiOutlineMobile  className='l-icon'/> 
            <span className='text-light ms-3'>
            +1 800 123 45 67</span>
           </div>
           <div className="d-flex mt-3">
           <SlEnvolope  className='l-icon'/> 
            <span className='text-light ms-3'>
            info@ziftcoin.com</span>
           </div> */}




          </div>
          <div className="col-lg-6 col-sm-12 mt-5">
        <div className="row">
          <div className="col-6">  <form>
                <RiContactsLine className='far-icon'/>
                <input type="text" placeholder='Name' required />
              <span className="line"></span>
               </form></div>
          <div className="col-6">
          <form>
                <SlEnvolope className='far-icon'/>
                <input type="email" placeholder=' Email' required />
              
               </form>
          </div>
        </div>
        <div className="row">
          <div className="col-6">  <form>
                <FiPhoneCall className='far-icon'/>
                <input type="number" placeholder='Phone' required />
              
               </form></div>
          <div className="col-6">
          <form>
                <BiErrorCircle className='far-icon'/>
                <input type="text" placeholder='Subject' required />
              
               </form>
          </div>
        </div>
        <div className="row">
          <div className="col-12">  <form>
                <BsPencilFill className='far-icon'/>
                <input type="text" placeholder='How can we help you? Feel free to get in touch!' required />
              
               </form></div>
         
        </div>

        <div className="row">
          <div className="col-lg-12 col-sm-12 ag_input pt-2">
          <label><input type="checkbox" name="acceptance" value="1" aria-invalid="false" class="inited" /><span class="text-light ms-2">I agree that my submitted data is <a className="text-danger" href="/privacy-policy/">collected and stored</a>.</span></label>
          </div>
        </div>
        <Button className='btn btn2 mx-auto latest-sd' variant='0'>
              <div className="d-flex">
                <BsSend className='send'/>
                   <span className='ms-lg-2'>
                Get in Touch
                   </span>
              </div>

            </Button>
          </div>
        </div>
      </div>
    </section> 
  )
}

export default Contact