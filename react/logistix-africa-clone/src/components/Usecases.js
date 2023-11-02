import "../css/Usecases.css";
// import DeliveryBusiness from "../imgs/delivery-business.png";
import React, { useState } from "react";
import { IoBusinessOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { IoCodeSlashOutline } from "react-icons/io5";
import { IoIosBicycle } from "react-icons/io";
import { IoCheckmarkOutline } from "react-icons/io5";
import { usecasesList } from "../objects/usecasesData";




//   const [isLoaded, setIsLoaded] = useState(false);
//   const [isClicked, setIsClicked] = useState(false);

//   const handleLoad = () => {
//     setIsLoaded(true);
//   };

//   const handleClick = () => {
//     setIsClicked(true);
//   };

//   return (
//     <div>
//       {!isLoaded && (
//         <div onLoad={handleLoad}>
//           Element has not loaded yet. Click to load.
//         </div>
//       )}
//       {isLoaded && !isClicked && (
//         <div onClick={handleClick}>
//           Element loaded. Click to change.
//         </div>
//       )}
//       {isClicked && (
//         <div>
//           Element has been clicked.
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyComponent;



const Usecases = () => {
    const [selectedBox, setSelectedBox] = useState(0);
    
    const handleClick = (num) => {
        setSelectedBox(num);
    };

    let usecase = usecasesList[selectedBox];

    return (
        <>
        <section class="usecases-tiles">
            <div class="usecases-tiles-div">
                <div class="usecases-tiles-div1">
                    <h1>Usecases.</h1>
                    <p>Not sure if Logistix solves your problem? Check these out. Let's find out.</p>
                </div>
                <div class="usecases-tiles-div2">
                    <a onClick={()=>handleClick(0)}  class="usecases-anchor" href="#usecases-container">
                        <div class="usecases-tiles-div2-1 box-border">
                            <div class="usecases-client">
                                <div class="usecases-client-intro">I OWN A</div>
                                <div>Delivery Business</div>
                            </div>
                            <div class="usecases-icon business" >
                                {  selectedBox === 0 ? <IoCheckmarkOutline /> : <IoBusinessOutline /> }
                            </div>
                            
                        </div>
                    </a>
                    <a onClick={()=>handleClick(1)} class="usecases-anchor" href="#usecases-container">
                        <div class="usecases-tiles-div2-2 box-border">
                           <div class="usecases-client">
                            <div class="usecases-client-intro">I AM A</div>
                            <div>One-Man Dispatcher</div>
                           </div>
                           <div class="usecases-icon bicycle">
                           {  selectedBox === 1 ? <IoCheckmarkOutline /> : < IoIosBicycle /> }
                           </div>
                        </div>
                    </a>
                    <a onClick={()=>handleClick(2)} class="usecases-anchor" href="#usecases-container">
                        <div class="usecases-tiles-div2-3 box-border">
                            <div class="usecases-client">
                                <div class="usecases-client-intro">I OWN A</div>
                                <div>Retail Business</div>
                                
                            </div>
                            <div class="usecases-icon-soon">
                                <div class="usecases-icon cart">
                                {  selectedBox === 2 ? <IoCheckmarkOutline /> : <IoCartOutline /> }
                                </div>
                                <div class="soon">Coming Soon</div>
                            </div>
                        </div>
                    </a>
                    <a onClick={()=>handleClick(3)}  class="usecases-anchor" href="#usecases-container">
                        <div class="usecases-tiles-div2-4 box-border">
                           <div class="usecases-client">
                            <div class="usecases-client-intro">I AM A</div>
                            <div>Developer</div>
                           </div>
                           <div class="usecases-icon-soon">
                               <div class="usecases-icon code">
                               {  selectedBox === 3 ? <IoCheckmarkOutline /> : <IoCodeSlashOutline /> }
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
                    <div className="coming-soon">{usecase.soon}</div>
                <div class="usecases-content-div1-1">
                    <img src = { usecase.img } alt = {usecase.alt} />
                    {/* <img src={DeliveryBusiness}  alt="" srcset=""/> */}
                </div>
                <div class="usecases-content-div1-2">
                    <h4>GETTING STARTED AS</h4>
                    <h3>{usecase.businessType}</h3>
                    <p>
                        { usecase.businessMessage }
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
                            <div class="num-heading">{ usecase.step1Heading }</div>
                            <div>{usecase.step1}</div>
                        </div>
                        
                    </div>
                    <div class="usecases-content-div2-2 num-divs"> 
                        <div class="num">
                            <h1>02</h1>
                        </div>
                        <div class="num-text">
                            <div class="num-heading">{ usecase.step2Heading }</div>
                            <div>After signing in with your credentials, you can Customize your website, Create Dispatchers, Add All the locations your business will ship to, Create your Price List and Add your bank account.</div>
                        </div>
                        
                    </div>
                    <div class="usecases-content-div2-3 num-divs">                    
                        <div class="num">
                            <h1>03</h1>
                        </div>
                        <div class="num-text">
                            <div class="num-heading">{usecase.step3Heading}</div>
                            <div>{usecase.step3}</div>
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