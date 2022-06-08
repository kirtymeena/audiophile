import React, { useEffect } from 'react'
import bestGear from "../assets/shared/desktop/image-best-gear.jpg"
import bestGearsm from "../assets/shared/mobile/image-best-gear.jpg"
import bestGearmd from "../assets/shared/tablet/image-best-gear.jpg"

const About = () => {
 


  return (
    <div className='flex__container container-wrap ' >
      <div className='flex__content'>
        <h1 className='letter-spacing uppercase'>Bringing you the <span>best</span> audio gear</h1>
        <p className='letter-spacing line-height  '>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
      </div>
      <div className='flex__image'>
        <img src={bestGear} className="gear-lg" alt="gear"/>
        <img src={bestGearsm} className="gear-sm" alt="gearsm"/>
        <img src={bestGearmd} className="gear-md" alt="gearmd"/>
      </div>
    </div>
  )
}

export default About