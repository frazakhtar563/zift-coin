import React from 'react'
import {Accordion} from 'react-bootstrap';
import Men from '../../assets/infographic-hologram-on-the-theme-of-crypto-assets-2023-03-23-03-59-07-utc_2 (online-video-cutter.com).gif'
import './Collection.css'
const Collection = () => {
  return (
    <section className='collection-bg'>
        <div className="container pt-lg-5">
            <div className="row  justify-content-center">


          
              
            <div className="col-lg-6 col-sm-12 col-xsm-12 mt-5">
                <h1 className='text-white lh-1 fs-1 mb-lg-3 mt-lg-5 bold collection-sd'>

                Get more value from your ZIFT collection</h1>
                <Accordion>
      <Accordion.Item eventKey="0" className='text-light accord-bg'>
        <Accordion.Header>Is ZIFT the same as ZIFT?</Accordion.Header>
        <Accordion.Body>
        ZiftCoin is not the same as BTC. ZiftCoin is a cryptocurrency that tracks all price and will often face different financial regulations to ZiftCoin in many jurisdictions.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1"  className='text-light accord-bg'>
        <Accordion.Header>How to buy ZiftCoin?</Accordion.Header>
        <Accordion.Body>
        ZiftCoin can be purchased directly on ZiftCoin.com with a USDT. You can also trade other cryptocurrencies for Ethereum on the different Exchanges.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2"  className='text-light accord-bg'>
        <Accordion.Header>What is ZIFT good for?</Accordion.Header>
        <Accordion.Body>
        Like other stablecoins, ZIFT is good for converting your crypto funds into something stable during times of high volatility. This can help you lock in prices and avoid fluctuations in the market. ZIFT is also commonly used in trading pairs, giving you direct access to many different coins on the market. If you don’t want to move funds off the blockchain, ZIFT can let you store your money on-chain with a lower risk of volatility.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
                </div>
                <div className="col-lg-6 col-sm-12 pt-5 element">
                <img className=' img-fluid ps-lg-4 mt-lg-5 rotate justify-content-center collection_gif ' src={Men} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Collection