import "../css/form.css";
import join from "../imgs/join.svg";
import React, { useState } from "react";import { IoStorefrontOutline } from "react-icons/io5";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { IoRocketOutline } from "react-icons/io5";
import { IoPlayCircle } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";


const Form = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleModal1 = (e) => {
        e.preventDefault();
        // console.log("video" + video1);
        if(e.target.tagName!=='VIDEO'){
            setIsOpen(!isOpen);
            // const video1 = document.getElementById("video1");
            // video1.play();
        }else{
            e.target.paused ? e.target.play(): e.target.pause();
        }
        
    };
    const toggleModal2 = (e) => {
        e.preventDefault();
        if(e.target.tagName!=='VIDEO'){
            setIsOpen(!isOpen);
        }else{
            e.target.paused ? e.target.play(): e.target.pause();
        }
        
    };
    const toggleModal3 = (e) => {
        e.preventDefault();
        if(e.target.tagName!=='VIDEO'){
            setIsOpen(!isOpen);
        }else{
            e.target.paused ? e.target.play(): e.target.pause();
        }
        
    };
    
    // const clickModal = () =>{
    //     if
    // } 

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
                                    <a href="/" onClick={toggleModal1}><span>Learn how</span><div class="play-circle-div"><IoPlayCircle /></div></a>
                                </div>

                                {
                                    isOpen && ( 
                                            <div className="modal" id="modal1" onClick={toggleModal1}>
                                            
                                                <div className="modal-content" >
                                                    <div className="video-header">
                                                        <div className="vid-htext">How to create your business</div>
                                                        <div className="vid-close" id="close1" onClick={toggleModal1}><IoCloseOutline /></div>
                                                    </div>
                                                    <video id="video1" src="https://res.cloudinary.com/echwood/video/upload/v1652312625/Logistix/videos/product-education/create-business.mp4" controls></video>
                                                </div>
                                            </div>
                                    )
                                }
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
                                    <a href="/" onClick={toggleModal2}><span>Learn how</span><div class="play-circle-div"><IoPlayCircle /></div></a>
                                </div>

                                {
                                    isOpen && ( 
                                            <div className="modal" id="modal1" onClick={toggleModal2}>
                                            
                                                <div className="modal-content" >
                                                    <div className="video-header">
                                                        <div className="vid-htext">How to create your business</div>
                                                        <div className="vid-close" id="close1" onClick={toggleModal2}><IoCloseOutline /></div>
                                                    </div>
                                                    <video id="video1" src="https://res.cloudinary.com/echwood/video/upload/v1652312625/Logistix/videos/product-education/activate-business.mp4" controls></video>
                                                </div>
                                            </div>
                                    )
                                }
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
                                    <a href="/" onClick={toggleModal3}><span>Learn how</span><div class="play-circle-div"><IoPlayCircle/></div></a>
                                </div>
                                {
                                    isOpen && ( 
                                            <div className="modal" id="modal1" onClick={toggleModal3}>
                                            
                                                <div className="modal-content" >
                                                    <div className="video-header">
                                                        <div className="vid-htext">How to create your business</div>
                                                        <div className="vid-close" id="close1" onClick={toggleModal3}><IoCloseOutline /></div>
                                                    </div>
                                                    <video id="video1" src="https://res.cloudinary.com/echwood/video/upload/v1652312625/Logistix/videos/product-education/setup-business.mp4" controls></video>
                                                </div>
                                            </div>
                                    )
                                }
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