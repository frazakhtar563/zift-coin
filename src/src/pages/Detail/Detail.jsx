import React, {useEffect} from 'react'
import {BsArrowLeft} from 'react-icons/bs'
import { NavLink } from 'react-router-dom';
const Detail = () => {
      useEffect(() => {
            window.scrollTo(0,0)
          },[]);
  return (
   <section className='bg'>
    <div className="container p-5">
     
      <div className="border-stak2 mt-5 mb-5">
     
      <div className="row ms-4">
      <div className="col-lg-4 col-md-6 col-sm-12 p-lg-3 mt-lg-4 card-stack">
            <span className='total_stack'>Total User</span>
            <br></br>
            <br></br>
            <span className='text-hpg'>0</span>
           </div>
      <div className="col-lg-4 col-md-6 col-sm-12 p-lg-3 mt-lg-4 card-stack">
            <span className='total_stack'>Total Direct Bonus</span>
            <br></br>
            <br></br>
            <span className='text-hpg'>0</span>
           </div>
      <div className="col-lg-4 col-md-6 col-sm-12 p-lg-3 mt-lg-4 card-stack">
            <span className='total_stack'>Total Deposit</span>
            <br></br>
            <br></br>
            <span className='text-hpg'>0</span>
           </div>
    
      </div>

    
      </div>
      <NavLink to="/stack">
<button className="btn btn-outline-warning m-1"><BsArrowLeft /></button>
</NavLink>
      <div className="border-stak2 mt-5 mb-5">

      <span className='text-light bold HPG'>DIRECTS DETAIL</span>
      <div className="row mb-4 ms-4">
      <div className="col-lg-3 col-md-6 col-sm-12 p-lg-3 mt-4">
            <span className='total_stack'>No</span>
            
           </div>
      <div className="col-lg-3 col-md-6 col-sm-12 p-lg-3 mt-lg-4">
            <span className='total_stack'>Addresst</span>
           
           </div>
      <div className="col-lg-3 col-md-6 col-sm-12 p-lg-3 mt-lg-4">
            <span className='total_stack'>Total Deposit</span>
           
           </div>
      <div className="col-lg-3 col-md-6 col-sm-12 p-lg-3 mt-lg-4">
            <span className='total_stack'>Generated Directs</span>
           
           </div>
      </div>
      </div>
      </div>
   </section>
  )
}

export default Detail