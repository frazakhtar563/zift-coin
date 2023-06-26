import React, { Component } from "react";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import XTVCXRP from '../../assets/XTVCXRP.svg'
import Slider from "react-slick";
import './Home.css'
export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div className="w-100 bg-dark text-light">
        <Slider {...settings} className="w-100">
          <div className="border-sliders text-center">
            <div className="d-flex p-1">
              <img className="img-fluid" src={XTVCXRP} alt="" />
              <span className="text-light ms-2">XRP</span>
            </div>
            <span className="text-light">27.433B</span>
            <span className="d-block text-success">+196.511M(+0.72%)</span>
          </div>
          <div className="border-sliders text-center">
            <div className="d-flex p-1">
              <img className="img-fluid" src={XTVCXRP} alt="" />
              <span className="text-light ms-2">XRP</span>
            </div>
            <span className="text-light">27.433B</span>
            <span className="d-block text-success">+196.511M(+0.72%)</span>
          </div>
          <div className="border-sliders text-center">
            <div className="d-flex p-1">
              <img className="img-fluid" src={XTVCXRP} alt="" />
              <span className="text-light ms-2">XRP</span>
            </div>
            <span className="text-light">27.433B</span>
            <span className="d-block text-success">+196.511M(+0.72%)</span>
          </div>
          <div className="border-sliders text-center">
            <div className="d-flex p-1">
              <img className="img-fluid" src={XTVCXRP} alt="" />
              <span className="text-light ms-2">XRP</span>
            </div>
            <span className="text-light">27.433B</span>
            <span className="d-block text-success">+196.511M(+0.72%)</span>
          </div>
          <div className="border-sliders text-center">
            <div className="d-flex p-1">
              <img className="img-fluid" src={XTVCXRP} alt="" />
              <span className="text-light ms-2">XRP</span>
            </div>
            <span className="text-light">27.433B</span>
            <span className="d-block text-success">+196.511M(+0.72%)</span>
          </div>
          <div className="border-sliders text-center">
            <div className="d-flex p-1">
              <img className="img-fluid" src={XTVCXRP} alt="" />
              <span className="text-light ms-2">XRP</span>
            </div>
            <span className="text-light">27.433B</span>
            <span className="d-block text-success">+196.511M(+0.72%)</span>
          </div>
        </Slider>
      </div>
    );
  }
}



// 0.3147
// −0.0081
 
// (−2.51%)