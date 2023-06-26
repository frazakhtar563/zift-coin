import React from 'react'
import Homes from '../../components/header/Home'
import Release from '../../components/release/Release';
import Choose from '../../components/choose/Choose';

import Rating from '../../components/rating/Rating';
import Top from '../../components/top/Top';
import Collection from '../../components/collection/Collection';
import Discover from '../../components/discover/Discover';
const Home = () => {
  return (
    <div >
      <Homes/>
      <Release />
     <Choose />
     <Rating />
     <Top />
     <Collection />
     <Discover />

    </div>
  )
}

export default Home
