import "../css/QuickTour.css";
import { quicktourList } from "../objects/quickTourData";
import React, { useState, useRef, useEffect  } from "react";


const QuickTour = () => {

    const [index, setIndex] = useState(0);

    const prevRef = useRef(null);
    const smallBall1Ref = useRef(null);
    const smallBall2Ref = useRef(null);
    const smallBall3Ref = useRef(null);
    const smallBall4Ref = useRef(null);
    const smallBall5Ref = useRef(null);

    useEffect(() => {
        if(prevRef.current){
            index===0 ? prevRef.current.classList.add('faint'): prevRef.current.classList.remove('faint');
        }
        if(smallBall1Ref.current){
            index===0 ? smallBall1Ref.current.classList.add('flatball'): smallBall1Ref.current.classList.remove('flatball');
        }
        if(smallBall2Ref.current){
            index===1 ? smallBall2Ref.current.classList.add('flatball'): smallBall2Ref.current.classList.remove('flatball');
        }
        if(smallBall3Ref.current){
            index===2 ? smallBall3Ref.current.classList.add('flatball'): smallBall3Ref.current.classList.remove('flatball');
        }
        if(smallBall4Ref.current){
            index===3 ? smallBall4Ref.current.classList.add('flatball'): smallBall4Ref.current.classList.remove('flatball');
        }
        if(smallBall5Ref.current){
            index===4 ? smallBall5Ref.current.classList.add('flatball'): smallBall5Ref.current.classList.remove('flatball');
        }
    })    

    const handlePreviousClick = (e) => {
        e.preventDefault();
        setIndex(index === 0? index : index - 1);
    }
    const handleNextClick = (e) => {
        e.preventDefault();
        setIndex(index === quicktourList.length -1? 0 : index + 1);
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
                            <a href="/" ref={prevRef} id="prev" onClick={handlePreviousClick} class="prev prev-next">← PREV</a>
                            <span class="prev-next-span">{index+1} of {quicktourList.length}</span>
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
                                <div class="small-ball" ref={smallBall1Ref}></div>
                                <div class="small-ball" ref={smallBall2Ref}></div>
                                <div class="small-ball" ref={smallBall3Ref}></div>
                                <div class="small-ball" ref={smallBall4Ref}></div>
                                <div class="small-ball" ref={smallBall5Ref}></div>
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