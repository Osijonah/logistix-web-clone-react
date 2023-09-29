import "../css/hero.css";
import HeroImage from "../imgs/logistix-app-bordered.png";
import React from "react";

const Hero = () =>{
    return (
        <section name="hero">
            <div class="hero">
                <div class="hero-div">
                    <div>
                        <h1 id="your-delivery-business"> Your Delivery Business,</h1>
                        <h1 id="on-the-move">On The Move.</h1>
                        <p>We believe in the opportunities that come with being <span class="medium1">In Absolute Control of your Business.</span> Logistix gives you the ability to shape your business by maximizing control and minimizing losses.</p>
                    </div>
                    <div class="hero-button">
                        <a href="/">Get Started ↓</a>
                    </div>
                    <a href="/"><h2 class="hero-div-h2">See how it works (demo) →</h2></a>
                </div>
                <div class="hero-img">
                    <img src={HeroImage} alt=""/>
                </div>
            </div>
        </section>
    );
}

export default Hero;