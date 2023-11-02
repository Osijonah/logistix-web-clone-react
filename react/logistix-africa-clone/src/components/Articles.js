import "../css/Articles.css";
import React, { useState } from "react";

const Articles = () => {

    const [ isOpen, setIsOpen ] = useState(false);
    const handleClick = () =>{
      setIsOpen()
    }

    return (
        <section class="articles">
            <div class="articles-container">
                <h1>Articles.</h1>
                <p>Ideas that will Shape & Supercharge your business.</p>
                
                <div class="articles-read-more">
                    <a href="" class="article-btn" onClick={handleClick}><button>Read More →</button></a>
                </div>
            </div>

            {
                isOpen && (
                    <div id="article-modal">
        <header>
            <nav>
                <div class="header-div1">
                    <a href="">
                        <img src="imgs/logistix-logo.png" alt=""/>
                        <div>Logistix</div>
                    </a>
                </div>
                <div class="header-div2">
                    <a href="#download">download</a>
                    <a href="#dispatchers">for dispatchers</a>
                    <a href="#faq">blog</a>
                    <a href=""><button>Get Started</button></a>
                </div>
                
            </nav>
        </header>

        <div class="article-modal-div1">
            <h1>
                Articles
            </h1>
            <div>
                — CURATED JUST FOR YOU —
            </div>
            <p>
                Ideas that will Shape & Supercharge your business.
            </p>
        </div>
        <div class="article-body">
            <div class="article-input">
                <input type="text" placeholder="Search Our Articles ..."/>
            </div>
            <div class="article-nav">
             <a href="" class="op" id="article-a1">ALL</a>
             <a href="" class="op" id="article-a2">PRODUCT</a>
             <a href="//" class="op" id="article-a3">GROWTH</a>
             <a href="//" class="op" id="article-a4">ANNOUNCEMENT</a>

            </div>
        </div>
        <section class="play-around">
            <div class="play-around-container article-play">
                <h1>Wanna Play Around?</h1>
                <p>
                    We got you covered! We thought you might wanna have fun with Logistix and so we created a demo playground where you can experience Logistix before experiencing Logistix.
                </p>
                <div>
                    <a href="/"><button>Show Me →</button></a>
                </div>
            </div>
        </section>
        <footer>
            <div class="footer-container">
                <div class="footer-copyright">
                    <img src="imgs/logistix-logo.png" alt=""/>
                    <h4>Logistix</h4>
                    <div>© 2023. All Rights Reserved.</div>
                </div>
                <div class="footer-child2">
                    <div class="footer-navs">
                        <div class="footer-links">
                            <div class="quick-links-container">
                                <h4>Quick Links</h4>
                                <a href="/">About</a>
                                <a href="/">Blog</a>
                                <a href="/">FAQs</a>
                                <a href="/">Help Center</a>
                                <a href="/">Demo</a>
                            </div>
                            <div class="demo-playground-container">
                                <h4>Demo/ Playground</h4>
                                <a href="/">Home</a>
                                <a href="/">Ship A Parcel</a>
                                <a href="/">Sign In</a>
                                <a href="/">Tracker</a>
                            </div>
                        </div>
                        <div class="footer-contacts">
                            <span>
                                Get In Touch.
                            </span>
                            <hr/>
                            <a href="/">@logistix_ng</a>
                            <a href="/">hello@logistix.africa</a>
                            <a href="/">(234)-706-819-7341</a>
                        </div>
                    </div>
                    <hr/>
                    <div class="map-privacy-container">
                        <a href="/">Site Map</a>
                        <a href="/">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
        <div class="fixed-icons">
            <div class="whatsapp">
                <ion-icon name="logo-whatsapp"></ion-icon>
            </div>
            <div class="chatbubbles">
                <ion-icon name="chatbubbles-outline"></ion-icon>
            </div>
        </div>

        <div class="article-slant">

        </div>
    </div>

                )
                
            }
        </section>
    );
}

export default Articles;