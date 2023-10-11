import "../css/dispatcher.css";
import app from "../imgs/app.svg";
import React from "react";
import { IoCube } from "react-icons/io5";
import { IoTime } from "react-icons/io5";
import { IoAdd } from "react-icons/io5";
import { IoNavigate } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { IoLogoApple } from "react-icons/io5";

const Dispatcher = () => {
    return (
        <section class="dispatchers">
            <div class="dispatchers-container" id="dispatchers">
                <div class="dispatchers-img-div">
                    <img src={app} alt=""/>
                </div>
                <div class="dispatchers-child2">
                    <div class="dispatchers-txt">
                        <div class="something-light">Here's Something Light,</div>
                        <div class="just-for-dispatchers">Just For Your Dispatchers.</div>
                        <p>
                            Logistix comes out-of-the-box with a mobile application that will help your dispatchers manage their deliverables and be in constant communication with your customers.
                        </p>
                    </div>
                    <div class="dispatchers-list">
                        <div class="dispatchers-list-item">
                            <div><IoCube /></div>
                            <p>View Active Deliveries</p>
                        </div>
                        <div class="dispatchers-list-item">
                            <div><IoTime /></div>
                            <p>View Delivery History</p>
                        </div>
                        <div class="dispatchers-list-item">
                            <div><IoAdd /></div>
                            <p>Create Delivery Orders</p>
                        </div>
                        <div class="dispatchers-list-item">
                            <div><IoNavigate /></div>
                            <p>View Directions</p>
                        </div>
                        <div class="dispatchers-list-item">
                            <div><IoLocation /></div>
                            <p>View Location on Map</p>
                        </div>
                        
                    </div>
                    <div class="dispatchers-btns-container">
                        <button class="dispatchers-btn1 dispatchers-btn">
                            <div class="dispatchers-btn-icon">
                                <IoLogoGooglePlaystore />
                            </div>
                            <div class="dispatchers-btn-txt">
                                <div class="dispatchers-btn-txt1">Get it on</div>
                                <div class="dispatchers-btn-txt2">Google Play</div>
                            </div>
                        </button>
                        <button class="dispatchers-btn2 dispatchers-btn">
                            <div class="dispatchers-btn-icon">
                                <IoLogoApple />
                            </div>
                            <div class="dispatchers-btn-txt">
                                <div class="dispatchers-btn-txt1">Coming soon to the</div>
                                <div class="dispatchers-btn-txt2">App Store</div>
                            </div>
                        </button>
                    </div>
                </div>
                
            </div>
        </section>
    );
}

export default Dispatcher;