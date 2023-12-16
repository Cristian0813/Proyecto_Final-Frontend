import React from 'react';
import CarouselFadeExample from '../../components/Carousel/Carousel';

import './styles/Home.css'
import About from "../About/About";

const Home =()=>{
    return(
        <div>
            <CarouselFadeExample /> 
            <About />
        </div>
    )
}

export default Home