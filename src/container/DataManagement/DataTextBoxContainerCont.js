import React from 'react';
import TextBox from '../../components/TextComp/TextBox';
import textData from '../../data/services/DataTextDetails2.json'
import Tilt from 'react-parallax-tilt';
import Parallax from 'parallax-js';
import { useState, useEffect, useRef } from "react";

const DataTextBoxContainerCont = () => {
    const [scale] = useState(1.04);
    const sceneEl = useRef(null);
    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current, {
            relativeInput: true,
        })

        parallaxInstance.enable();

        return () => parallaxInstance.disable();

    }, [])
    return (
        <div className={`section section-padding-bottom`}>
            <div className="container">
                <div className="row row-cols-lg-2 row-cols-md-1 row-cols-sm-1 row-cols-1 mb-n6 column-rev-md-flex ">
                    
                    <div className="col mb-6 pl-xl-12" data-aos="fade-up" data-aos-delay="300">
                        <div className="about-image-area d-flex">

                            <div className="service-image ecom">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <img src={process.env.PUBLIC_URL + "images/about/home-one-about/home_agency_about_2aa.png"} alt="" />
                                </Tilt>
                            </div>
                            <div className="shape shape-1" id="scene" ref={sceneEl}>
                                <span data-depth="1"><img src={process.env.PUBLIC_URL + "/images/shape-animation/video-shape-1.png"} alt="" /></span>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-6" data-aos="fade-up">
                        {textData && textData.map((single, key) => {
                            return (
                                <div key={key} className="col mb-8" data-aos="fade-up">
                                    <TextBox data={single} key={key} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DataTextBoxContainerCont
