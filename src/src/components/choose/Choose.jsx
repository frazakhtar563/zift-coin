import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import Card from './Card'
import './Choose.css'
const Choose  = () => {

  return (
   <section className='release-container'>
     
     <Container>
      <Row>
        <Col md={2}>
          {/* <img className='planet' src={Planet} alt="" /> */}
        </Col>
        <Col md={8} className='mt-5 col' 
        data-aos="fade-right"
        data-aos-duration="3000"
        >
          {/* <span className='gl-hero-lead-in mt-2'></span> */}
          <h1 className='container-8'>Why Choose Us</h1>
            <p className='gl-hero-body chose_pera'>The cryptocurrency industry has been volatile as well, with bitcoin going through several boom-and bust cycles.</p>

        </Col>
        <Col md={2}>
        {/* <img className='planets' src={Planets} alt="" /> */}

        </Col>
      </Row>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
   
      <Card />


        




    </Container>
   </section>

  )
}

export default Choose 