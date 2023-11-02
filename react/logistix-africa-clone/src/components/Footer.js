import "../css/footer.css";
import logitixLogo from "../imgs/logistix-logo.png";
import React from "react";

const Footer = () => {
    return (
        <footer>
            <div class="footer-container">
                <div class="footer-copyright">
                    <img src={logitixLogo} alt=""/>
                    <h4>Logistix</h4>
                    <div>© 2023. All Rights Reserved.</div>
                </div>
                <div class="footer-child2">
                    <div class="footer-navs">
                        <div class="footer-links">
                            <div class="quick-links-container">
                                <h4>Quick Links</h4>
                                <a href="">About</a>
                                <a href="" class="article-btn">Blog</a>
                                <a href="" class="open-faq">FAQs</a>
                                <a href="">Help Center</a>
                                <a href="">Demo</a>
                            </div>
                            <div class="demo-playground-container">
                                <h4>Demo/ Playground</h4>
                                <a href="">Home</a>
                                <a href="">Ship A Parcel</a>
                                <a href="">Sign In</a>
                                <a href="">Tracker</a>
                            </div>
                        </div>
                        <div class="footer-contacts">
                            <span>
                                Get In Touch.
                            </span>
                            <hr/>
                            <a href="">@logistix_ng</a>
                            <a href="">hello@logistix.africa</a>
                            <a href="">(234)-706-819-7341</a>
                        </div>
                    </div>
                    <hr/>
                    <div class="map-privacy-container">
                        <a href="">Site Map</a>
                        <a href="">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;