
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, BrowserRouter, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import AOS from "aos";
import "aos/dist/aos.css";


import './App.css'
import Home from './pages/Home/Home'
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';

import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import History from './pages/history/History';
import Blog from './pages/blog/Blog';
import Stack from './pages/stack/Stack';

import Level from './pages/level/Level';
import Detail from './pages/Detail/Detail';
import BuyCoin from './pages/Buy/BuyCoin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Router>

        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/history" element={<History />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/stack" element={<Stack />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/stack/level" element={<Level />} />
          <Route path="/stack/detail" element={<Detail />} />
          <Route path="/Bycoin" element={<BuyCoin />} />

        </Routes>
        <Footer />
        <ToastContainer />

      </Router>

    </>
  );
}

export default App;
