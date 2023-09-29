import "../css/app.css";
import "../css/fonts.css";
import Header from "./Header";
import Curve from "./Curve";
import Hero from "./Hero";
import QuickTour from "./QuickTour";
import Usecases from "./Usecases";
import Form from "./Form";
import Download from "./Download";
import Dispatcher from "./Dispatcher";
import Pricing from "./Pricing";
import Articles from "./Articles";
import Faq from "./Faq";
import PlayAround from "./PlayAround";
import Footer from "./Footer";
import React from "react";

const App = () => {
    return (
        <>
            <body>
                <div id="layout">
                    <Header />
                    <Curve />
                    <Hero />
                    <QuickTour />
                    <Usecases />
                    <Form />
                    <Download />
                    <Dispatcher />
                    <Pricing />
                    <Articles />
                    <Faq />
                    <PlayAround />
                    <Footer />

                </div>
            </body>
        </>
    );
}

export default App;