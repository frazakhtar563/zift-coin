import React from 'react'
import Logo from '../../assets/zift-coin-logo-2.png'
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';


import './Navigation.css'

const Navigation = () => {

    return (
        <>
        <Navbar collapseOnSelect expand="lg" className='p-2 ms-lg-5'>
            <Container>
             <LinkContainer to="/">
             <Nav.Link><Navbar.Brand>
                    <img className='logo_image' src={Logo} alt="" />
                    
                </Navbar.Brand></Nav.Link>
             </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto justify-content-center flex-grow-1 p-lg-3 ms-4">
                    <LinkContainer to="/">
                    <Nav.Link className="text-white center" href="./">Home</Nav.Link>
                    
                    </LinkContainer>
                    <LinkContainer to="about">
                    <Nav.Link className="text-white center"  href="#">About Us</Nav.Link>
                    
                    </LinkContainer>
                          <LinkContainer to="history">
                        <Nav.Link className="text-white center"  href="#">History</Nav.Link>
                          
                          </LinkContainer>
                            <LinkContainer to="blog">
                        <Nav.Link className="text-white center"  href="#">Blog</Nav.Link>
                            
                            </LinkContainer>

                           <LinkContainer to="stack">
                        <Nav.Link className="text-white center"  href="#">Staking</Nav.Link>
                           
                           </LinkContainer>                        
                      <LinkContainer to="contact">
                      <Nav.Link className="text-white center"  href="#pricing">
                            Contact Us</Nav.Link>
                      </LinkContainer>
                     
                    </Nav>
                    <LinkContainer to="ByCoin">
                        
                <Nav.Link> <button className='btn btn2 me-2'>Connect Wallet</button></Nav.Link>
                 </LinkContainer>
                    <LinkContainer to="ByCoin">
                        
                <Nav.Link> <button className='btn btn2'>Buy ZiftCoin</button></Nav.Link>
                 </LinkContainer>
                 
                </Navbar.Collapse>
             
            </Container>
        </Navbar>
 
       </>
    )
}

export default Navigation



