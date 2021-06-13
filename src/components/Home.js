import React from 'react';

import HomeLocal from "./HomeLocal";
import HomeThreeColumns from "./HomeThreeColumns";
import Header from "./Header";
import WhatsTheMatter from "./WhatsTheMatter";
import AboutUs from "./AboutUs";
import Foundations from "./Foundations";
import Contact from "./Contact";

const Home = () => {

    return (
        <>
            <div className="home home-image">
                <div className="container ">

                    <div className="home-box">
                        <Header />
                        <HomeLocal />

                    </div>
                </div>
            </div>
            <HomeThreeColumns />
            <WhatsTheMatter />
            <AboutUs />
            <Foundations />
            <Contact />

        </>
    )
}

export default Home;