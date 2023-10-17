import "../css/QuickTour.css";
import { quicktourList } from "../objects/quickTourData";
// import tracker from "../imgs/tracker.png";
import React from "react";
import { useState } from "react";

const QuickTour = () => {

    const [index, setIndex] = useState(0);

    const handlePreviousClick = (e) => {
        e.preventDefault();
        setIndex(index - 1);
    }
    const handleNextClick = (e) => {
        e.preventDefault();
        setIndex(index + 1);
    }

    let quicktour = quicktourList[index];

    return(
        <div class="quick-tour-div">
            <h1>A Quick Tour.</h1>
            <p>Let's show you a couple of things you can do with Logistix.</p>
            <section class="quick-tour">
                <div>
                    <div class="quick-tour-btn-div">
                        <div class="prev-next-div">
                            <a href="/" id="prev" onClick={handlePreviousClick} class="prev prev-next">← PREV</a>
                            <span class="prev-next-span">1 of 5</span>
                            <a href="/" onClick={handleNextClick} class="next prev-next">NEXT →</a>
                        </div>
                        <hr/>
                        <div class="quick-tour-txt-div">
                            <div class="qtext1">
                                <div class="    quick-tour-text">
                                    <h3>{quicktour.header}</h3>
                                    <p>
                                        {quicktour.para}
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
                        <img src={quicktour.img} alt={quicktour.alt}/>
                    </div>
                </div>
            </section>
        </div>
    );

}

export default QuickTour;