import React, { useEffect, useState } from 'react'
import Logo from '../../assets/zift-coin-logo-2.png'
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap';

import { loadWeb3 } from '../../connectivity/connectivity'
import './Navigation.css'
import { walletShortFormer } from '../../utils'
import tokenAbi from '../../contract/abis/tokenAbi.json';
import ziftCoinContractAbi from '../../contract/abis/ziftCoinContractAbi.json';
import { tokenAdress, ziftCoinContractAddress } from '../../contract/addresses/address';
import { updateWalletInfo } from '../../store/slice/wallet/walletSlice';
import { toast } from 'react-toastify';

const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);
    const { isConnected, acc } = useSelector((state) => state.wallet)
    const dispatch = useDispatch()

    const handleScroll = () => {
        const offset = window.scrollY
        if (offset > 50) {
            setScrolled(true)
        } else {
            setScrolled(false)

        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    }, []);

    const getaccount = async () => {
        let acc = await loadWeb3();

        if (acc == "No Wallet") {
            toast.error('please install metamask')
        }
        else if (acc == "Wrong Network") {
            toast.error('Wrong Network connect to binance testnet')
        } else {
            dispatch(updateWalletInfo(acc))


        }
    }
    
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className={`sticky bgs p-2 ${scrolled ? 'sticky-header' : ''}`}>
                <Container>
                    <LinkContainer to="/">
                        <Nav.Link><Navbar.Brand>
                            <img className='logo_image' src={Logo} alt="" />

                        </Navbar.Brand></Nav.Link>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto justify-content-center flex-grow-1 pe-3">
                            <LinkContainer to="/">
                                <Nav.Link className="text-white center" href="./">Home</Nav.Link>

                            </LinkContainer>
                            <LinkContainer to="about">
                                <Nav.Link className="text-white center" href="#">About Us</Nav.Link>

                            </LinkContainer>
                            <LinkContainer to="history">
                                <Nav.Link className="text-white center" href="#">History</Nav.Link>

                            </LinkContainer>
                            <LinkContainer to="blog">
                                <Nav.Link className="text-white center" href="#">Blog</Nav.Link>

                            </LinkContainer>

                            <LinkContainer to="stack">
                                <Nav.Link className="text-white center" href="#">Staking</Nav.Link>

                            </LinkContainer>
                            <LinkContainer to="contact">
                                <Nav.Link className="text-white center" href="#pricing">
                                    Contact Us</Nav.Link>
                            </LinkContainer>
                        </Nav>
                        <Nav.Link> <button className='btn btn-outline-warning me-2' onClick={getaccount}> {isConnected ? <>{walletShortFormer(acc)}</> : <>Connect Wallet</>}</button></Nav.Link>

                        <LinkContainer to="ByCoin">

                            <Nav.Link> <button className='btn btn-outline-warning'>Buy ZiftCoin</button></Nav.Link>
                        </LinkContainer>

                    </Navbar.Collapse>

                </Container>
            </Navbar>

        </>
    )
}

export default Navigation



