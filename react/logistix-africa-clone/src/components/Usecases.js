import "../css/Usecases.css";
import DeliveryBusiness from "../imgs/delivery-business.png";
import React from "react";
import { IoBusinessOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { IoCodeSlashOutline } from "react-icons/io5";
import { IoIosBicycle } from "react-icons/io";


const Usecases = () => {
    return (
        <>
        <section class="usecases-tiles">
            <div class="usecases-tiles-div">
                <div class="usecases-tiles-div1">
                    <h1>Usecases.</h1>
                    <p>Not sure if Logistix solves your problem? Check these out. Let's find out.</p>
                </div>
                <div class="usecases-tiles-div2">
                    <a class="usecases-anchor" href="#usecases-container">
                        <div class="usecases-tiles-div2-1 box-border">
                            <div class="usecases-client">
                                <div class="usecases-client-intro">I OWN A</div>
                                <div>Delivery Business</div>
                            </div>
                            <div class="usecases-icon business">
                                <IoBusinessOutline />
                            </div>
                            
                        </div>
                    </a>
                    <a class="usecases-anchor" href="#usecases-container">
                        <div class="usecases-tiles-div2-2 box-border">
                           <div class="usecases-client">
                            <div class="usecases-client-intro">I AM A</div>
                            <div>One-Man Dispatcher</div>
                           </div>
                           <div class="usecases-icon bicycle">
                            < IoIosBicycle />
                           </div>
                        </div>
                    </a>
                    <a class="usecases-anchor" href="#usecases-container">
                        <div class="usecases-tiles-div2-3 box-border">
                            <div class="usecases-client">
                                <div class="usecases-client-intro">I OWN A</div>
                                <div>Retail Business</div>
                                
                            </div>
                            <div class="usecases-icon-soon">
                                <div class="usecases-icon cart">
                                    <IoCartOutline />
                                </div>
                                <div class="soon">Coming Soon</div>
                            </div>
                        </div>
                    </a>
                    <a class="usecases-anchor" href="#usecases-container">
                        <div class="usecases-tiles-div2-4 box-border">
                           <div class="usecases-client">
                            <div class="usecases-client-intro">I AM A</div>
                            <div>Developer</div>
                           </div>
                           <div class="usecases-icon-soon">
                               <div class="usecases-icon code">
                                <IoCodeSlashOutline />
                               </div>
                               <div class="soon">Coming Soon</div>
                           </div>
                        </div>
                    </a>

                </div>
            </div>
        </section>
        <section class="usecases-content">
        <div class="usecases-content-div" id="usecases-container">
            <div class="usecases-content-div1">
                <div class="usecases-content-div1-1">
                    <img src={DeliveryBusiness}  alt="" srcset=""/>
                </div>
                <div class="usecases-content-div1-2">
                    <h4>GETTING STARTED AS</h4>
                    <h3>A Delivery Business</h3>
                    <p>
                        Get your business to operate at its Peak Potential. Manage Shipment Order and Administrators, Receive Periodic Performance Analytics, Let your customers track their parcel and do so much more.
                    </p>
                </div>
            </div>
            <div class="usecases-content-div2">
                <div class="steps">
                    Takes Just 3 Steps 😊
                </div>
                <div class="usecases-content-div2-flex">
                    <div class="usecases-content-div2-1 num-divs">
                    
                        <div class="num">
                            <h1>01</h1>
                        </div>
                        <div class="num-text">
                            <div class="num-heading">Create Your Business</div>
                            <div>Register your business <a href="/">here</a>. You will get an email containing your website address and the credentials you need to manage your business on Logistix.</div>
                        </div>
                        
                    </div>
                    <div class="usecases-content-div2-2 num-divs"> 
                        <div class="num">
                            <h1>02</h1>
                        </div>
                        <div class="num-text">
                            <div class="num-heading">Setup Your Business</div>
                            <div>After signing in with your credentials, you can Customize your website, Create Dispatchers, Add All the locations your business will ship to, Create your Price List and Add your bank account.</div>
                        </div>
                        
                    </div>
                    <div class="usecases-content-div2-3 num-divs">                    
                        <div class="num">
                            <h1>03</h1>
                        </div>
                        <div class="num-text">
                            <div class="num-heading">Start Receiving Orders</div>
                            <div>You can now share your website's address to your customers on social media or whatever platform of your choice so they can start shipping.</div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div> 
        
        </section>
    </>
    );
}

export default Usecases;