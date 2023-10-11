import "../css/form.css";
import join from "../imgs/join.svg";
import React from "react";import { IoStorefrontOutline } from "react-icons/io5";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { IoRocketOutline } from "react-icons/io5";
import { IoPlayCircle } from "react-icons/io5";


const Form = () => {
    return (
        <section class="section5">
            <div class="section5-div">
                <div class="section5-div11">
                    <div class="section5-div1">
                        <div><img src={join} alt=""/></div>
                        <h1 class="bandwagon">Join The BandWagon.</h1>
                        <p>We will need these details so we can Onboard you. All information is treated with complete confidentiality and in accordance with our <a href="http://">privacy policy.</a></p>
                        <hr/>
                    </div>
                    <div class="section5-div2">
                        <div>
                            <div class="step-text-div section5-div2-1">
                                <div class="step">STEP 1</div>
                                <h3>Create your business</h3>
                                <div class="learn-how" id="lh1">
                                    <a href="/"><span>Learn how</span><div class="play-circle-div"><IoPlayCircle /></div></a>
                                </div>
                            </div>
                            <div class="step-ion">
                                <IoStorefrontOutline />
                            </div>
                        </div>
                        <div>
                            <div class="step-text-div section5-div2-2">
                                <div class="step">STEP 2</div>
                                <h3> Activate your business</h3>
                                <div class="learn-how" id="lh2">
                                    <a href="/"><span>Learn how</span><div class="play-circle-div"><IoPlayCircle /></div></a>
                                </div>
                            </div>
                            <div class="step-ion">
                                <IoShieldCheckmarkOutline />
                            </div>
                        </div>
                        <div>
                            <div class="step-text-div section5-div2-3">
                                <div class="step">STEP 3</div>
                                <h3>Complete business setup</h3>
                                <div class="learn-how" id="lh3">
                                    <a href="/"><span>Learn how</span><div class="play-circle-div"><IoPlayCircle/></div></a>
                                </div>
                            </div>
                            <div class="step-ion">
                                <IoRocketOutline />
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
                <div class="section5-div3">
                    
                    <div class="section5-div3-1">
                        <input type="text" placeholder="Your Business Name"/>
                    </div>
                    <div class="section5-div3-2">
                        <input id="subdomain-input" type="text" placeholder="Your Business Subdomain"/> <span>.logistix.africa</span> 
                    </div>
                    <div class="section5-div3-3">
                        <input type="text" placeholder=" Your RC Number (Optional)"/>
                    </div>
                    <div class="section5-div3-4">
                        <input type="text" placeholder="Your Business Email"/>
                    </div>
                    <div class="section5-div3-5">
                        <input type="text" placeholder="Your Business Phone Number"/>
                    </div>
                    <div class="section5-div3-6">
                        <textarea type="text" placeholder="Your Business Address"></textarea>
                    </div>
                    <div class="select-div" id="select-div">
                        <select name="" id="" class="select">
                                <option class="opt1" value="">How did you hear about us? (Optional)</option>
                                <option value="Social Media">Social Media</option>
                                <option value="Search Engine (like Google, Bing, etc)">Search Engine (like Google, Bing, etc)</option>
                                <option value="One of our Agents">One of our Agents</option>
                                <option value="Referred by another business">Referred by another business</option>
                                <option value="Other">Other</option>
                        </select>
                    </div>
                    <div class="section5-div3-8">
                        <a href="http://"><input type="button" value="Get Started"/></a>
                    </div>
                    <hr/>
                    <div class="section5-div3-9">
                        <a href="http://"><input type="button" value="Resend Activation Link →"/></a>
                    </div>
                </div>
            </div>
        </section> 
    );
}

export default Form;