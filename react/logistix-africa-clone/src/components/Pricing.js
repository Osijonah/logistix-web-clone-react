import "../css/pricing.css";
import payment from "../imgs/payment.svg";
import pricingChart from "../imgs/download.png";
import React, { useState } from "react";
import { IoInformationCircleOutline } from "react-icons/io5";

const Pricing = () => {

    const [input, setInput] = useState("49500");
    let revenueValue = parseInt(input);
    let incomeValue = revenueValue - revenueValue/10;
    let priceValue = revenueValue/10;

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
                                <IoInformationCircleOutline />
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
                            <input onChange={(e)=>{setInput(e.target.value)}} id="revenue" type="text" value={input}/>
                        </div>
                        <div class="income-price-container">
                            <div class="income-price">
                                <div>
                                    <label>YOU TAKE</label>
                                    <div>{input ? '₦'+incomeValue: '₦'}</div>
                                </div>
                                <div>
                                    <label>WE GET ONLY</label>
                                    <div>{input? '₦'+priceValue: '₦'}</div>
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