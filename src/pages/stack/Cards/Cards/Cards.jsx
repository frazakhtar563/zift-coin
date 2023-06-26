import React, { useState } from 'react'
import logo from '../../../../assets/zift-coin-logo-2.png'
import './Cards.css'
import axios from 'axios';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Countdown from 'react-countdown';
import { toast } from 'react-toastify';
const Cards = ({ symbol, handleStake, setTotalClaimed, tokenBalance }) => {
  const baseUrl = 'http://localhost:3344';
  const { isConnected, acc } = useSelector((state) => state.wallet)

  const [PoolInfo, setPoolInfo] = useState([
    {
      name: 'package1',
      levelAmount: '1-100000',
      levelRoi: '0.15',
      value: '',
      errorMessage: '',
      disable: true
    },
    {
      name: 'package2',
      levelAmount: '100001-500000',
      levelRoi: '0.17',
      value: '',
      errorMessage: '',
      disable: true
    },
    {
      name: 'package3',
      levelAmount: '500001-1000000',
      levelRoi: '0.19',
      value: '',
      errorMessage: '',
      disable: true
    },
    {
      name: 'package4',
      levelAmount: '1000001-2000000',
      levelRoi: '0.2',
      value: '',
      errorMessage: '',
      disable: true
    },
    {
      name: 'package5',
      levelAmount: '2000001-unlimited',
      levelRoi: '0.23',
      value: '',
      errorMessage: '',
      disable: true
    }
  ])
  const [userId, setUserId] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [userStaked, setUserStaked] = useState([])
  const handleInputChange = (index, event) => {
    if (event.target.value > tokenBalance) {
      const values = [...PoolInfo];
      values[index] = { ...values[index], value: event.target.value, errorMessage: 'You d.nt have enough token', disable: true }
      setPoolInfo(values);
      setErrorMessage('you d.nt have enough token')

    }
    else {

      const values = [...PoolInfo];
      values[index] = { ...values[index], value: event.target.value, errorMessage: '', disable: false }
      setPoolInfo(values);
    }
  };

  const checkUser = async () => {
    try {

      let response = await axios.get((`${baseUrl}/api/getWalletId/${acc}`))

      let status = response.data.success
      if (status) {

        setUserId(response?.data?.id)

        let responsed = await axios.get((`${baseUrl}/api/getUserinvestments/${response?.data?.id}`))

        setUserStaked(responsed.data)

      }
      else {
        let response = await axios.post((`${baseUrl}/api/newUser/`), {
          walletAddress: acc
        })
        setUserId(response.data._id)
      }
    } catch (error) {
      console.log('error', error)
    }
  }
  useEffect(() => {
    if (acc) {
      checkUser()
    }
  }, [acc]);


  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {

      return <Completionist checkUser={checkUser} />;
    } else {

      return <span>{hours}:{minutes}:{seconds}</span>;
    }
  };
  const claimed = async (id) => {
    try {

      let response = await axios.put((`${baseUrl}/api/investments/${id}/calculateReward`))
      if (response.data.success) {
        toast.success('calimed')
        checkUser()

      }

    } catch (error) {
      console.error('error while claim', error.message)
    }

  }
  useEffect(() => {
    if (userStaked.length > 0) {
      var sum = userStaked.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue['reward'];
      }, 0);
      setTotalClaimed(sum)
    }

  }, [userStaked]);

  return (
    <>
      {
        PoolInfo && PoolInfo.map((item, index) => {
          return (
            <div className="border-stak3 mb-4" key={item.levelRoi}>
              <span className='text-light bold HPG'>Zift POOL</span>
              <div className="row mt-lg-4">

                <div className="col-lg-4 col-md-6 col-sm-12 mt-2"><img className='img-fluid mt-2' src={logo} alt="" width={72} height={74} />
                  <div className="card-stack">
                    <span className='d-block stoki text-light'>Staked</span>
                    <span className='d-block stoki text-bold'>{item?.levelAmount}</span>
                  </div>
                  <span className='' style={{ color: '#ffba00' }}>Reward {item?.levelRoi} % per day</span>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12"><span className='d-block stoki text-light'>Amount</span>
                  <form className='mt-lg-4 mb-sm-4 card-stack'>
                    <input className='mt-lg-3' name={item.name} value={item.value} type="number" placeholder='0' onChange={event => handleInputChange(index, event)} />
                    <button type='button' disabled={item.disable } className='btn btn-outline-warning ms-4' onClick={() => { handleStake(userId, item.name, item.value) }}>Stake Zift</button>
                    {item.errorMessage && <p className='text-danger'>{item.errorMessage}</p>}
                  </form>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12">
                  {
                    userStaked.length > 0 && <div className="table-container">

                      <table className="transparent-table">
                        <thead>
                          <tr>
                            <th>Staked Amount</th>
                            <th>Reward</th>
                            <th>Remaning Time</th>
                            <th>Claim</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            userStaked.filter((myitem) => myitem.packageId == item.name).map((item) =>
                            (
                              <tr key={item.packageId}>
                                <td>{item.stakeAmount}</td>
                                <td>{item.reward}</td>

                                {/* {console.log('currenttime', Date.now())}
                                {console.log('next 24 hours', new Date(item.stakeTime).getTime() + (24 * 60 * 60 * 1000))}
                                {console.log('difference', new Date(item.stakeTime).getTime() + (24 * 60 * 60 * 1000) - Date.now())} */}
                                <td>
                                  <Countdown
                                    date={Date.now() + new Date(item.stakeTime).getTime() + (3 * 60 * 1000) - Date.now()}
                                    renderer={renderer}
                                    key={item.stakeTime}
                                  />
                                </td>
                                <td>
                                  <button className="btn btn-outline-warning" onClick={() => claimed(item._id)} disabled={new Date(item.stakeTime).getTime() + (3 * 60 * 1000) > Date.now()}>Claim</button>
                                </td>
                              </tr>
                            )
                            )
                          }

                        </tbody>
                      </table>
                    </div>
                  }
                </div>
              </div>
            </div>
          )
        })
      }

      {/* <div className="border-stak3 mb-5">
        <span className='text-light bold HPG'>Zift POOL</span>
        <div className="row mt-lg-4">

          <div className="col-lg-4 col-md-6 col-sm-12 mt-lg-2 mt-2"><img className='img-fluid mt-2' src={logo} alt="" width={72} height={74} />
            <div className="card-stack">
              <span className='d-block stoki text-light'>Staked</span>
              <span className='d-block stoki text-bold'>100001-500000</span>
            </div>
            <span className='text-danger'>Reward 0.23 % per day</span>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12"><span className='d-block stoki text-light'>Amount</span>
            <form className='mt-lg-4 card-stack'>
              <input className='mt-lg-3' type="number" placeholder='0' />
              <button className='btn btn-outline-warning ms-4'>Stak HPG</button>
            </form>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12"><span className='d-block stoki text-light'>HPG Earned</span>
            <form className='mt-lg-4 mb-lg-4 card-stack'>
              <input className='mt-lg-3' type="number" placeholder='0' />
              <button className='btn btn-outline-warning ms-4'>Claim</button>
            </form>
            <span className='text-light mt-3 '>Minimum deposit:</span>
            <span className='text-warning mt-lg-3 ms-3'>100 HPG</span>

          </div>
        </div>
      </div>
      <div className="border-stak3 mb-5">
        <span className='text-light bold HPG'>Zift POOL</span>
        <div className="row mt-lg-4">

          <div className="col-lg-4 col-md-6 col-sm-12 mt-lg-2 mt-2"><img className='img-fluid mt-2' src={logo} alt="" width={72} height={74} />
            <div className="card-stack">
              <span className='d-block stoki text-light'>Staked</span>
              <span className='d-block stoki text-bold'>500001-1000000</span>
            </div>
            <span className='text-danger'>Reward 0.26 % per day</span>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12"><span className='d-block stoki text-light'>Amount</span>
            <form className='mt-lg-4 card-stack'>
              <input className='mt-lg-3' type="number" placeholder='0' />
              <button className='btn btn-outline-warning ms-4'>Stak HPG</button>
            </form>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12"><span className='d-block stoki text-light'>HPG Earned</span>
            <form className='mt-lg-4 mb-lg-4 card-stack'>
              <input className='mt-3' type="number" placeholder='0' />
              <button className='btn btn-outline-warning ms-4'>Claim</button>
            </form>
            <span className='text-light mt-lg-3 '>Minimum deposit:</span>
            <span className='text-warning mt-lg-3 ms-3'>100 HPG</span>

          </div>
        </div>
      </div>
      <div className="border-stak3 mb-5">
        <span className='text-light bold HPG'>Zift POOL</span>
        <div className="row mt-lg-4">

          <div className="col-lg-4 col-md-6 col-sm-12 mt-lg-2 mt-2"><img className='img-fluid mt-2' src={logo} alt="" width={72} height={74} />
            <div className="card-stack">
              <span className='d-block stoki text-light'>Staked</span>
              <span className='d-block stoki text-bold'>1000001-2000000</span>
            </div>
            <span className='text-danger'>Reward 0.33 % per day</span>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12"><span className='d-block stoki text-light'>Amount</span>
            <form className='mt-lg-4 card-stack'>
              <input className='mt-lg-3' type="number" placeholder='0' />
              <button className='btn btn-outline-warning ms-4'>Stak HPG</button>
            </form>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12"><span className='d-block stoki text-light'>HPG Earned</span>
            <form className='mt-lg-4 mb-lg-4 card-stack'>
              <input className='mt-lg-3' type="number" placeholder='0' />
              <button className='btn btn-outline-warning ms-4'>Claim</button>
            </form>
            <span className='text-light mt-lg-3 '>Minimum deposit:</span>
            <span className='text-warning mt-lg-3 ms-3'>100 HPG</span>

          </div>
        </div>
      </div>
      <div className="border-stak3 mb-5">
        <span className='text-light bold HPG'>Zift POOL</span>
        <div className="row mt-lg-4">

          <div className="col-lg-4 col-md-6 col-sm-12 mt-lg-2 mt-2"><img className='img-fluid mt-2' src={logo} alt="" width={72} height={74} />
            <div className="card-stack">
              <span className='d-block stoki text-light'>Staked</span>
              <span className='d-block stoki text-bold'>2000001-unlimi</span>
            </div>
            <span className='text-danger'>Reward 0.33 % per day</span>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12"><span className='d-block stoki text-light'>Amount</span>
            <form className='mt-lg-4 card-stack'>
              <input className='mt-lg-3' type="number" placeholder='0' />
              <button className='btn btn-outline-warning ms-4'>Stak HPG</button>
            </form>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12"><span className='d-block stoki text-light'>HPG Earned</span>
            <form className='mt-lg-4 mb-lg-4 card-stack'>
              <input className='mt-lg-3' type="number" placeholder='0' />
              <button className='btn btn-outline-warning ms-4'>Claim</button>
            </form>
            <span className='text-light mt-lg-3 '>Minimum deposit:</span>
            <span className='text-warning mt-lg-3 ms-3'>100 HPG</span>

          </div>
        </div>
      </div> */}

    </>
  )
}

export default Cards





const Completionist = ({ checkUser }) => {
  useEffect(() => {
    checkUser()
  }, [])
  return <span>Time End!</span>;
}
