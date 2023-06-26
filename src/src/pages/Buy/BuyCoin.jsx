import React, {useState, useEffect} from 'react'
import {BsArrowLeft} from 'react-icons/bs'
import {BsArrowRight} from 'react-icons/bs'
import ape from '../../assets/ape-2.33787833.jpeg'
import './BuyCoin.css'
const BuyCoin = () => {

 

    const [count, setCount] = useState(10);
  const increment = () => {
  if (count < 10000000000000000) {
    setCount(count + 1);
  }
}
const decrement = () => {
  if (count > 10) {
    setCount(count - 1);
  }
}

useEffect(() => {
    window.scrollTo(0,0)
  },[]);
    return (
        <section>
            <h1 className='mb-lg-2 p-lg-3 buy_heading'>Buy ZiftCoin</h1>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-12 mb-4">
                        <div className="border-stak2 mt-lg-5 mb-lg-5" style={{height: "798px"}}>
                            <img className='img-fluid mb-lg-5' src={ape} alt="" />
                            <br></br>
                            <span className='text-light mb-lg-4 mt-lg-5'> You MUST connect a Wallet to Buy Tokens.
                            </span>
                            <br></br>
                            <br></br>
                            <span className='text-light mb-lg-4 mt-lg-5'> Transactions will be done via the connected wallet.
                            </span>
                            <br></br>
                            <br></br>
                            <span className='text-light mb-lg-4 mt-lg-5'> You Must have BNB to pay gas fee when it comes to make transactions.
                            </span>
                            <br></br>
                            <br></br>
                            <span className='text-light mb-lg-4 mt-lg-5'> The number of mints per transaction is set according to each sales round.
                            </span>
                            <br></br>
                            <br></br>
                            <span className='text-light mt-lg-3'> Use <span className='text-warning'>0x33...F842</span> as a referral if you have got no Referral.
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="border-stak2 mt-lg-5 mb-lg-5">
                            <div className='mb-lg-5'>
                                <span className='text-warning mb-lg-4'>Your Balance:</span>
                                <br></br>

                                <div className="card-stack">
                                <span className='text-light'>BUSD : </span> <span className='text-warning'>0</span>
                                </div>
                                <br></br>
                             <div className="card-stack">
                             <span className='text-light'>HPG :</span>  <span className='text-warning'>0</span>
                             </div>
                            </div>
                            <div className="mt-lg-2">
                                <div className="border_coin"></div>

                            </div>
                            <div className='mb-lg-5 '>

                             <div className="card-stack">
                             <span className='text-light'>Min Buying:</span>
                                <span className='text-warning ms-lg-5'>10 <span className='text-light'>BUSD</span> </span>
                             </div>
                                <br></br>
                                <br></br>

                              <div className="card-stack">
                              <span className='text-light'>Price :</span>
                                 <span className='text-warning ms-lg-5'>0</span> 
                              </div>
                            </div>
                            <div className="mt-lg-2">
                                <div className="border_coin"></div>

                            </div>
                            {/* /////Next ///// */}
                            <div className='mb-lg-5'>
                                <span className='text-light'>
                                    My Referral Address:</span>
                                    <input type="text" className='buy_input mt-lg-3'/>
                                    <button className="btn btn2 buy_btn mt-3">Copy</button>
                            </div>
                            <div className='mb-lg-5 mt-lg-5'>
                                <span className='text-light'>
                                Amount:</span>
                                <div className=' mx-auto level-container'>
      <button className="btn btn-outline-warning m-2" onClick={decrement}><BsArrowLeft /></button>
      <span className='text-light fs-3 buy_border'>{count}</span>
      <button className="btn btn-outline-warning m-2" onClick={increment}><BsArrowRight /></button>

    </div>
                                    <button className="btn btn2 buy_btn mt-lg-3">Buy ZiftCoin</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BuyCoin