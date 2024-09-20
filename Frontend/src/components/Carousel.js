import React, { useEffect, useState } from 'react'
import "../css/carousel.css"
import AliceCarousel from "react-alice-carousel";
import {TrendingCoins} from "../services/api"
import axios from 'axios';

function Carousel() {
// const [Trending, setTrending] = useState([])
  const fetchTrendingCoins = async () => {
    // currencu===="usd"
    const { data } = await axios.get(TrendingCoins("INR")); 

    console.log(data);
    // setTrending(data);
  };

  useEffect(()=>{
    fetchTrendingCoins()
  },[])

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };
  return (
    <div className='banner-img'>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        // items={items}
        autoPlay
      />
    </div>
  )
}

export default Carousel