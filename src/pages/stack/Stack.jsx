import React, { useEffect, useRef, useState } from 'react'
// import React, {  } from 'react';

import stackBg from '../../assets/colorful-bitcoin-illustration-neon-splash-removebg-preview.png'
import { FaRegCopy } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify';
import './Stack.css'
import Cards from './Cards/Cards/Cards';
import sponser from "../../assets/footer.ca581494.ca581494fb47e71a326f.png"
import sponder1 from '../../assets/PenCake_logo.caaabc72b5350befa1dc.png'
import sponder2 from '../../assets/Coinbase_logo.f8e6c7b9100d0af7651d.png'
import sponder3 from '../../assets/download.png'
// import { LinkContainer } from 'react-router-bootstrap';
import { BsArrowRight } from 'react-icons/bs'
import { loadWeb3, remoteWeb3 } from '../../connectivity/connectivity'
import { tokenAdress, ziftCoinContractAddress } from '../../contract/addresses/address'
import tokenAbi from '../../contract/abis/tokenAbi.json';
import ziftCoinContractAbi from '../../contract/abis/ziftCoinContractAbi.json';
import { useSelector } from 'react-redux'
import axios from 'axios';
import { NavLink } from 'react-router-dom';
const baseUrl = 'http://localhost:3344';
const Stack = () => {
  let [initiallink, setinitiallink] = useState(
    "http://localhost:3000/stack/?referrallink="
  );
  const [registerAddress, setRegisterAddress] = useState("");
  const [isStake, setIsStake] = useState(false);
  const [totalClaimed, setTotalClaimed] = useState(0);

  const [referalAddress, setReferalAddress] = useState('')
  const { isConnected, acc } = useSelector((state) => state.wallet)
  const [tokenInfo, setTokenInfo] = useState({
    tokenSymbol: 'Token Name',
    tokenBalance: '0'
  })
  const [userInfo, setUserInfo] = useState({
    tokenSymbol: 'Token Name',
    totalStaked: '0',
    totalWithdrawl: '0',
    directs: '0',
  })
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const getInfo = async () => {

    let obj = {}
    let tokenInfo = {}
    try {

      const web3 = window.web3

      let tokeninstance = new web3.eth.Contract(
        tokenAbi,
        tokenAdress
      );
      let ziftCoinContractInstance = new web3.eth.Contract(
        ziftCoinContractAbi, ziftCoinContractAddress
      );

      let symbol = await tokeninstance.methods.symbol().call()
      obj.tokenSymbol = symbol
      let { totalDeposit } = await ziftCoinContractInstance.methods.getUserInfo(acc).call();
      let rewardInfo = await ziftCoinContractInstance.methods.getRewardInfo(acc).call();
      let totalClaimedReward = await ziftCoinContractInstance.methods.totalClaimedReward(acc).call();
      obj.AffiliateReward = await web3.utils.fromWei(String(rewardInfo.AffiliateReward))
      obj.totalWithdrawl = await web3.utils.fromWei(String(Number(totalClaimedReward)))
      obj.totalStaked = await web3.utils.fromWei(String(Number(totalDeposit)))
      // obj.directs = await web3.utils.fromWei(String(Number(rewardInfo['0'])))
      let response = await axios.get((`${baseUrl}/api/getUserReferralReward/${acc}`))


      obj.directs = response.data.data

      let balance = await tokeninstance.methods.balanceOf(acc).call()
      let defaultReferalAddress = await ziftCoinContractInstance.methods.getDefaultAddress().call()
      tokenInfo.tokenSymbol = symbol
      balance = balance / 10 ** 18
      tokenInfo.tokenBalance = balance
      setTokenInfo(tokenInfo)

      setUserInfo(obj)
      let url = window.location.href;
      if (url.includes("referrallink")) {
        let { referrer, totalDeposit } = await ziftCoinContractInstance.methods.getUserInfo(acc).call();
        if ((referrer != '0x0000000000000000000000000000000000000000' && totalDeposit > 0)) {
          setRegisterAddress(acc)
          setReferalAddress(acc)
        }
        else {
          var position = url.indexOf("=");
          position = position + 1;
          let address = url.slice(position);
          let { referrer, totalDeposit } = await ziftCoinContractInstance.methods.getUserInfo(address).call();
          if ((referrer != '0x0000000000000000000000000000000000000000' && totalDeposit != 0) || address == defaultReferalAddress) {
            setReferalAddress('')
            setRegisterAddress(address)
          }
          else {
            setReferalAddress('')
            setRegisterAddress(defaultReferalAddress)
            toast.error('invalid referrer')
          }
        }
      }
      else {
        let { referrer, totalDeposit } = await ziftCoinContractInstance.methods.getUserInfo(acc).call();

        if (referrer == '0x0000000000000000000000000000000000000000') {
          setRegisterAddress(defaultReferalAddress)
          setReferalAddress('')
        }
        else if (referrer != '0x0000000000000000000000000000000000000000' && totalDeposit > 0) {
          setRegisterAddress(acc)
          setReferalAddress(acc)
        }
        else {
          // setRegisterAddress(acc)
          setRegisterAddress(defaultReferalAddress)
          setReferalAddress('')
        }
      }

    } catch (error) {
      console.error("error", error);
    }

  }
  useEffect(() => {
    if (isConnected) {

      getInfo()
    }

  }, [isConnected]);

  const handleStake = async (userId, level, stakeAmount,) => {
    if (isConnected) {

      try {

        let acc = await loadWeb3()
        const web3 = window.web3
        let ziftCoinContractInstance = new web3.eth.Contract(
          ziftCoinContractAbi, ziftCoinContractAddress
        );
        let amount = await web3.utils.toWei(String(stakeAmount))


        let { referrer, totalDeposit } = await ziftCoinContractInstance.methods.getUserInfo(acc).call();


        let tokeninstance = new web3.eth.Contract(
          tokenAbi,
          tokenAdress
        );

        let signatureInfo = await axios.post((`${baseUrl}/api/getSignatureDeposit`), {
          contractAddress: ziftCoinContractAddress,
          userAddress: acc,
          referalAddress: registerAddress,
          amount: amount
        })


        const txApp = tokeninstance.methods.approve(ziftCoinContractAddress, amount);
        const gasEstimateApp = await txApp.estimateGas({ from: acc })
        console.log("gasEstimate", gasEstimateApp);
        let approve = await tokeninstance.methods.approve(ziftCoinContractAddress, amount).send({
          from: acc,
          gasPrice: web3.utils.toHex(web3.utils.toWei("10", 'gwei')),
          gasLimit: web3.utils.toHex(gasEstimateApp)
        })
        getInfo()
        const tx = ziftCoinContractInstance.methods.deposit(amount, registerAddress, signatureInfo.data.nonce, signatureInfo.data.signature);
        const gasEstimate = await tx.estimateGas({ from: acc })
        console.log("gasEstimate", gasEstimate);
        let deposit = await ziftCoinContractInstance.methods.deposit(amount, registerAddress, signatureInfo.data.nonce, signatureInfo.data.signature).send(
          {
            from: acc,
            gasPrice: web3.utils.toHex(web3.utils.toWei("10", 'gwei')),
            gasLimit: web3.utils.toHex(gasEstimate)
          }
        );
        let stakeObj = {
          userId: userId,
          packageId: level,
          stakeAmount: Number(stakeAmount)
        };

        axios.post((`${baseUrl}/api/investments`), stakeObj).then((value) => {
          setIsStake(!isStake)

        }).catch((error) => {
          console.error('error while stake', error.message)
        })
        toast.success('Deposit successfully')
        // setReferalAddress(acc)
        getInfo()




      } catch (error) {
        console.log('error while deposit', error.message)
      }
    }
    else {
      toast.error('please connect wallet')
    }
  }

  const withdraw = async () => {
    try {
      const web3 = window.web3
      let ziftCoinContractInstance = new web3.eth.Contract(
        ziftCoinContractAbi, ziftCoinContractAddress
      );
      let amount = await web3.utils.toWei(String(totalClaimed))


      let signatureInfo = await axios.post((`${baseUrl}/api/getSignature`), {
        contractAddress: ziftCoinContractAddress,
        userAddress: acc,
        amount: amount
      })
      let withdraw = await ziftCoinContractInstance.methods.withdraw(amount, signatureInfo.data.nonce, signatureInfo.data.signature).send(
        {
          from: acc
        }
      );
      toast.success('successfuly withdraw')
      getInfo()
    } catch (error) {
      console.error('error while withdraw', error.message)
    }
  }
  return (
    <section className='bg_stak'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-sm-12 mt-lg-5 p-lg-5">
            <span className='text-light fs-1 fw-bold mb-lg-5 stak-sd' data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="3000">Staking</span>

            <p className='text-light mt-lg-3 stak-sd'>Sacred Farms offer multiple farming opportunities to you. Get double rewards by staking your HPG tokens in return for additional HPG tokens and earning high income.</p>

            <button className="btn btn-outline-warning stak-sd mt-2" data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="3000">Learn how to start</button>
          </div>
          <div className="col-lg-6 stak-sd col-sm-12"><img className='img-fluid' src={stackBg} alt="" /></div>
        </div>
        <div className="row">
          <div className='col-sm-12'>
            <div className="border-stak">

              <h2 className='text-stack text-center mt-lg-5'>MAXIMUM CAPPING FOR ALL BONUS MARKETING</h2>
              <p className="text-light text-center mt-lg-4 fw-light-bold">5x will need to renew their package same or bigger to enjoy more marketing profits.<br></br>
                Bonus will be count : Direct commissions & 10 level commissions</p>
            </div>
          </div>

        </div>
        <div className="border-stak2 mt-4 mb-5">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12 mt-lg-4 p-lg-3 sm-stak ">
              <span className='total_stack'>Total Staked</span>
              <br></br>
              <br></br>
              <span className='text-hpg'>{userInfo?.totalStaked} ZFT</span>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mt-lg-4 p-lg-3 sm-stak">
              <span className='total_stack'>Your Directs Bonus</span>
              <br></br>
              <br></br>
              <span className='text-hpg'>{userInfo?.directs}</span>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mt-lg-4 p-lg-3 sm-stak">
              <span className='total_stack'>Your Affiliate Reward
              </span>
              <br></br>
              <br></br>
              <span className='text-hpg'>{userInfo.AffiliateReward}</span>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mt-lg-4 p-lg-3 sm-stak">
              <span className='total_stack'>Claimed staking reward</span>
              <br></br>
              <br></br>
              <span className='text-hpg'>{totalClaimed} ZFT</span>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 p-lg-3 sm-stak mt-lg-2">
              <span className='total_stack'>Withdraw</span>
              <br></br>
              <br></br>
              <span className='text-hpg'>{userInfo?.totalWithdrawl} ZFT</span>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 p-lg-3 mt-lg-2">
              <span className='total_stack'>Claimed Directs & Affiliate</span>
              <br></br>
              <br></br>
              <span className='text-hpg'>0.00 ZFT</span>
            </div>
          </div>
          <h2 className='text-stack text-center mt-5'>Withdraw Directs and Affiliate Reward</h2>
          <div className="cta_stak mt-4">
            <button class="btn btn-outline-warning m-1" onClick={withdraw}>Withdraw</button>
            <NavLink to="level">
              <button class="btn btn-outline-warning m-1">  Level</button>
            </NavLink>
            <NavLink to="detail">
              <button class="btn btn-outline-warning m-1">  Details</button>
            </NavLink>
          </div>
          <h2 className='text-stack text-center mt-5'>Referral link</h2>
          <div className="stak-copy mt-3">
            <form>
              <input type="text" value={initiallink + referalAddress} readOnly />
              <button type='button' disabled={!isConnected || referalAddress.length < 1} onClick={() => { navigator.clipboard.writeText(initiallink + referalAddress); toast.success('copied') }}><FaRegCopy className='fas-btn' /></button>
            </form>
          </div>
        </div>
        <div className='text-center mb-5'>
          <span className='balance fs-5'>User Balance</span>
          <span className='text-dark balance text-center ms-5 fs-5 fw-bold'>{Number(tokenInfo.tokenBalance).toFixed(4)}Zift</span>
        </div>
        <Cards symbol={tokenInfo.tokenSymbol} handleStake={handleStake} acc={acc} setTotalClaimed={setTotalClaimed} tokenBalance={tokenInfo.tokenBalance} isStake={isStake} />
        <div className="border-stak4 p-5 mx-auto">
          <div className="row">
            <span className='text-light mb-4'>  Total income: based on your tarrif plan ( <span className='text-warning'>from 0.15% to 0.23% daily</span> )
            </span>
            <span className='text-light mb-4'>
              Basic interest rate: <span className='text-warning'>+0.15% every 24 hours</span> - only for new deposits
            </span>
            <span className='text-light mb-4'>Minimum deposit: <span className='text-warning'>100 Zift</span>, no maximum limit</span>
            <span className='text-light mb-4'>
              Minimum withdraw: <span className='text-warning'>100 Zift</span>, no maximum limit
            </span>
            <div>
            </div>
          </div>
        </div>
        <h2 className='text-stack text-center mt-5 mb-lg-5'>SPONSORS</h2>
        <div className='sponser1'>
          <img className='img-fluid' src={sponser} alt="" />
        </div>
        <div className="cta_stak mt-lg-4">
          <img className='img-fluid sponser' width={176} height={44} src={sponder1} alt="" />
          <img className='img-fluid sponser' width={176} height={44} src={sponder2} alt="" />
          <img className='img-fluid sponser' width={176} height={44} src={sponder3} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Stack
