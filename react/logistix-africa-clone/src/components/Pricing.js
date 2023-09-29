import "../css/pricing.css";
import payment from "../imgs/payment.svg";
import pricingChart from "../imgs/download.png";
import React from "react";

const Pricing = () => {
    return (
        <section className="pricing">
            <div class="pricing-container">
                <div class="pricing-description">
                    <div class="pricing-img">
                        <img src={payment} alt=""/>
                    </div>
                    <div class="pricing-description-txt">
                        <h1 class="and-logistix-is">... and Logistix is</h1>
                        <h1 class="almost-free">"Almost Free"</h1>
                        <p>
                            Cheap & Fair Pricing — We charge only <b>10%</b> of your monthly revenue, which means we only make money when you do.
                        </p>
                    </div>
                </div>
                <div class="pricing-calculator-container">
                    <div class="pricing-calculator">
                        <h3>Pricing Calculator</h3>
                        <hr/>
                        <div class="pricing-info-div">
                            <div class="info-icon">
                                <ion-icon name="information-circle-outline"></ion-icon>
                            </div>
                            <div class="pricing-info">
                                <p>
                                    Your Monthly Revenue is the total amount you have made from All deliveries in a month.
                                </p>
                            </div>
                        </div>
                        <hr/>
                        <span>IF YOUR MONTHLY REVENUE IS</span>
                        <div class="revenue-input-div">
                            <div>₦</div>
                            <input id="revenue" type="text" value="49500"/>
                        </div>
                        <div class="income-price-container">
                            <div class="income-price">
                                <div>
                                    <label>YOU TAKE</label>
                                    <div id="income">₦44,550</div>
                                </div>
                                <div>
                                    <label>WE GET ONLY</label>
                                    <div id="price">₦4,950</div>
                                </div>
                            </div>
                            <div class="pricing-chart-img">
                                <img src={pricingChart} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Pricing;