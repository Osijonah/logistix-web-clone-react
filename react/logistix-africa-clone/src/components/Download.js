import "../css/download.css";
import React from "react";
import { IoCash } from "react-icons/io5";
import { IoCube } from "react-icons/io5";
import { IoRocket } from "react-icons/io5";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { IoLogoApple } from "react-icons/io5";

const Download = () => {
    return (
        <section class="download">
            <div class="download-container" id="download">
                <div class="download-icons">
                    <div class="download-icons-child1">
                        <div class="download-icon"><IoCube /></div>
                        <div class="download-icon-txt">Receive Orders</div>
                    </div>
                    <div class="download-icons-child2">
                        <div class="download-icon"><IoCash /></div>
                        <div class="download-icon-txt">Boost Revenue</div>    
                    </div>
                    <div class="download-icons-child3">
                        <div class="download-icon"><IoRocket /></div>
                        <div class="download-icon-txt">Grow Business</div>
                    </div>
                </div>
                <div class="download-txts">
                    <h2>Download Business App</h2>
                    <p>Grow your business on the go!</p>
                </div>
                <div class="download-btns">
                    <button class="download-google-btn download-btn">
                        <div class="download-btn-icon">
                            <IoLogoGooglePlaystore />
                        </div>
                        <div class="download-btn-txt">
                            <div class="download-btn-txt1">Get it on</div>
                            <div class="download-btn-txt2">Google Play</div>
                        </div>
                    </button>
                    <button class="download-apple-btn download-btn">
                        <div class="download-btn-icon">
                            <IoLogoApple />
                        </div>
                        <div class="download-btn-txt">
                            <div class="download-btn-txt1">Coming soon to the</div>
                            <div class="download-btn-txt2">App Store</div>
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Download;