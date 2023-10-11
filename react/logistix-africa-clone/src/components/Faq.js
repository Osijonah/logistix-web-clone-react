import "../css/faq.css";
import React from "react";
import { IoAddCircle } from "react-icons/io5";

const Faq = () => {
    return (
        <section class="faq">
            <div class="faq-container">
                <div class="faq-description">
                    <h1>Some Questions</h1>
                    <h2>you might have in mind ...</h2>
                    <p>
                        We have curated for you some common questions asked by the businesses who use Logistix. We hope this answers the questions you have in mind.
                    </p>
                    <div class="more-faq-btn">
                        <a href="/" class="open-faq"><button>See More →</button></a>
                    </div>
                </div>
                <div class="faq-questions">
                    <div class="faq-question1">
                        <div class="seen-div" id="sd1">
                            <div class="faq-text">How do I sign in?</div>
                            <div class="faq-icon" id="sd-icon1"><IoAddCircle /></div>
                        </div>
                        <div class="hidden-div" id="hd1"></div>
                    </div>
                    <div class="faq-question2">
                        <div class="seen-div" id="sd2">
                            <div class="faq-text">Is logistix free?</div>
                            <div class="faq-icon" id="sd-icon2"><IoAddCircle /></div>
                        </div>
                        <div class="hidden-div" id="hd2">
                            Yes, Logistix is free, however there are transaction charges for every Parcel shipped. 
                            This means you don't have to pay for hosting or using the app daily.
                        </div>
                    </div>
                    <div class="faq-question3">
                        <div class="seen-div" id="sd3">
                            <div class="faq-text">Where do I get the Business App?</div>
                            <div class="faq-icon" id="sd-icon3"><IoAddCircle /></div>
                        </div>
                        <div class="hidden-div" id="hd3"></div>
                    </div>
                    <div class="faq-question4">
                        <div class="seen-div" id="sd4">
                            <div class="faq-text">Where do I get the Staff App?</div>
                            <div class="faq-icon" id="sd-icon4"><IoAddCircle /></div>
                        </div>
                        <div class="hidden-div" id="hd4"></div>
                    </div>
                    <div class="faq-question5">
                        <div class="seen-div" id="sd5">
                            <div class="faq-text">Where do I get the Rider's App?</div>
                            <div class="faq-icon" id="sd-icon5"><IoAddCircle /></div>
                        </div>
                        <div class="hidden-div" id="hd5"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faq;