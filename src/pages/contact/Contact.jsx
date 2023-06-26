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
        <h1 className='mb-lg-5 contac_heading'>Contact Us</h1>

       
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d79473.25101719813!2d-0.119545!3d51.503325!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTHCsDMwJzEyLjAiTiAwwrAwNycxMC40Ilc!5e0!3m2!1sen!2sus!4v1686293007405!5m2!1sen!2sus"
        width="100%"
        height="590"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>

      <div className="container contact-container p-5">
        <div className="row mt-lg-5 mb-4">
          <div className="col-lg-6 col-sm-12">

            <span className='text-light mb-2'>Contact us</span>
            <h1 className='text-light mb-3 fs-1 d-block bold lh-1'>Have Questions? Get in touch!</h1>
            <span className='text-light'>Simply send us an email anytime you want. If you have any questions, please feel free to contact us.</span>
           <div className="d-flex mt-3">
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
           </div>




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
          <div className="col-lg-4 col-sm-12">
            <Button variant="outline-success">
              <div className="d-flex">
                <BsSend className='send'/>
                   <span className='ms-lg-2 ps-2'>
                Get in Touch

                   </span>
              </div>

            </Button>
          </div>
          <div className="col-lg-8 col-sm-12 ag_input pt-2">
          <label><input type="checkbox" name="acceptance" value="1" aria-invalid="false" class="inited" /><span class="text-light ms-2">I agree that my submitted data is <a className="text-danger" href="/privacy-policy/">collected and stored</a>.</span></label>
          </div>
        </div>
          </div>
        </div>
      </div>
    </section> 
  )
}

export default Contact