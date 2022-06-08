import React from "react";
import hero from "../assets/home/desktop/image-hero.jpg";
import Button from "../components/Button";
import Categories from "./Categories";

const Home = () => {
  return (
    <div className="home__wrap">
    <div className="home__container container-wrap">
      <div className="content">
        <small className="uppercase letter-spacing2">New product</small>
        <h1 className="uppercase letter-spacing" >XX99 mark II Headphones</h1>
        <p className="letter-spacing">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <div className="button">
      <Button text="see product"/>
      </div>  
      </div>
      
      <div className="image">
        <img src={hero} alt="hero"/>
      </div>
    </div>
    <div>
      
    </div>
    <Categories/>
    </div>
  );
};

export default Home;
