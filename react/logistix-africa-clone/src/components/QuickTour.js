import "../css/QuickTour.css";
import tracker from "../imgs/tracker.png"
import React from "react";

const QuickTour = () => {
    return(
        <div class="quick-tour-div">
            <h1>A Quick Tour.</h1>
            <p>Let's show you a couple of things you can do with Logistix.</p>
            <section class="quick-tour">
                <div>
                    <div class="quick-tour-btn-div">
                        <div class="prev-next-div">
                            <a href="/" id="prev" class="prev prev-next">← PREV</a>
                            <span class="prev-next-span">1 of 5</span>
                            <a href="/" class="next prev-next">NEXT →</a>
                        </div>
                        <hr/>
                        <div class="quick-tour-txt-div">
                            <div class="qtext1">
                                <div class="quick-tour-text">
                                    <h3>Track Parcels</h3>
                                    <p>
                                        Your <span class="medium1">Customers can Track Their Parcels</span> from Pickup to Destination. They get an estimated delivery time for every parcel they ship using a Tracking ID that will be sent to their mail after registering their parcels.
                                    </p>
                                </div>
                            </div>
                            <div class="button">
                                <a href="http://">Get Started ↓</a>
                            </div>
                            <div class="small-balls">
                                <div class="small-ball" id="sb1"></div>
                                <div class="small-ball" id="sb2"></div>
                                <div class="small-ball" id="sb3"></div>
                                <div class="small-ball" id="sb4"></div>
                                <div class="small-ball" id="sb5"></div>
                            </div>
                        </div>
                    </div>
                    <div class="quick-tour-img-div img1">
                        <img src={tracker} alt=""/>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default QuickTour;