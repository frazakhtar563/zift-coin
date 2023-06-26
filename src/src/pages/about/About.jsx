import React, {useEffect} from 'react'
import Future from '../../assets/image-14-copyright-1.jpg'
import "./About.css"
const About = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  return (
    <section className='about-bg'>
      <div className="container p-5">
        <h1 className='mb-lg-5 about_heading'>About Us</h1>
        <div className="row mb-5">
          <div className="col-lg-6 col-sm-12 mb-5"><img className='img_about' src={Future} alt="" height={484}/></div>
          <div className="col-lg-6 col-sm-12"  data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="3000"><h3 className='fs-1 text-light lh-3 mb-3'>
            We develop & sell digital NFT future</h3>
            <span className='lh-1 text- text-light'>The market has a lot to do with determining the price of ZiftCoin. An increase in demand for cryptocurrencies or any other event that causes people’s enthusiasm for digital currency-related products and services may increase prices on these exchanges just as much.
            </span>
            <br></br>
            <span className='lh-1 text- text-light'>The future of NFTs could incorporate just about anything, including written content, digital photos, music, etc. The capacity to adopt and the chance of transferring ownership rights, along with blockchain products, turn out to be the core benefits
            </span>
            <br></br>
            <br></br>
            <span className='lh-1 text- text-light'>If done correctly, investing in NFTs can be a profitable venture. It is important to note, however, that NFTs are a new and untested asset class, and the market can be extremely volatile.
            </span>
            
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-12">
            <h3 className='fs-1 text-light lh-3 mb-3'>

              What Factors Affect ZiftCoin Price?</h3>
            <span className='lh-1 text- text-light'>The market has a lot to do with determining the price of ZiftCoin. An increase in demand for cryptocurrencies or any other event that causes people’s enthusiasm for digital currency-related products and services may increase prices on these exchanges just as much, if not more so, than interest from investors who want to hold onto their coins rather than trade them offsite like traditional financial instruments would dictate they should be doing at this point in the future according what we know now about how things work here today when it comes down specifically towards cryptocurrency trading platforms.</span>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-12">
            <h3 className='fs-1 text-light lh-3 mb-3'>
              Sentiment:</h3>
            <span className='lh-1 text- text-light'>Market sentiment can shift quickly and unexpectedly. This often happens in cycles, with people becoming increasingly bearish on something until they think it will never go up again – which then triggers a change where everyone becomes equally bullish on all assets except for whatever specific asset is being targeted here (e.g., gold). When most investors believe prices have come close to bottoming out because of this fear or excitement about their investments–that usually means there’s trouble ahead.</span>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-12">
            <h3 className='fs-1 text-light lh-3 mb-3'>
              Mining:</h3>
            <span className='lh-1 text- text-light'>Miners are the backbone of ZiftCoin. They process transactions and create new coins for investors, but not without disagreeing on what they should do with their hardware next. For example, some may want to sell off some ZiftCoin to cover maintenance costs or anticipation about future price movements; however, if everyone waited until there was high demand, then market prices might never recover again because no more supply would ever come out into circulation – it’s just too risky financially speaking (and also physically).</span>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-12">
            <h3 className='fs-1 text-light lh-3 mb-3'>

              The Network Effect:</h3>
            <span className='lh-1 text- text-light'>As more people join the ZiftCoin network, its value increases. This is similar to how social media networks can become more valuable as their user base and activity grow exponentially with time – in this case, until it reaches a point where there are too many users for any one person or company alone could manage them all effectively anymore</span>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-12">
            <h3 className='fs-1 text-light lh-3 mb-3'>



              Money Supply:</h3>
            <span className='lh-1 text- text-light'>ZiftCoin is a cryptocurrency that has been around for less than ten years. The price of ZiftCoin tends to rise in direct proportion with how much new money Central Banks print, which causes it becomes more valuable as time goes on because fewer ZiftCoin are being released into circulation each year (a process known simply enough – halving).</span>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h3 className='fs-1 text-light lh-3 mb-3'>


              ZiftCoin Price Predictions</h3>
            <span className='lh-1 text- text-light'>One ZiftCoin is worth about $20,000 as of this writing – which isn’t near its high point of over 68K but still higher than any other time in recent memory. Its value has been volatile due to all sorts of factors, including the crypto winter that hit cryptocurrencies hard leading up until 2022, when people expect them again might see prices go down even further after these wild fluctuations are through though many ZiftCoin enthusiasts remain convinced there will be success ahead for their currency no matter what comes our way right now.</span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About