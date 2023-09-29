import "../css/PlayAround.css";
import React from "react";

const PlayAround = () =>{
    return (
        <section class="play-around">
            <div class="play-around-container">
                <h1>Wanna Play Around?</h1>
                <p>
                    We got you covered! We thought you might wanna have fun with Logistix and so we created a demo playground where you can experience Logistix before experiencing Logistix.
                </p>
                <div>
                    <a href="/"><button>Show Me →</button></a>
                </div>
            </div>
        </section>
    );
}

export default PlayAround;