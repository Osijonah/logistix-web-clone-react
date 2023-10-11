import React from "react";
import "../css/FixedIcons.css";
import { IoChatbubblesOutline } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io5";

const FixedIcons = () =>{
    return(
        <>
            <div class="fixed-icons">
                <div class="whatsapp">
                    <IoLogoWhatsapp />
                </div>
                <div class="chatbubbles">
                    <IoChatbubblesOutline />
                </div>
            </div>
        </>
    )
}

export default FixedIcons;

// IoChatbubbles
// IoLogoWhatsapp