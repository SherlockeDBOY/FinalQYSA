import {useState, useEffect, useRef} from "react";
import Tilt from 'react-parallax-tilt';
import Parallax from 'parallax-js';

const DataManagementAbout = () => {
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
        <div className="section section-padding-t90 section-padding-bottom-200">
            <div className="container">

                <div className="row ">
                    <div className="col-xl-7 col-lg-6 col-12" data-aos="fade-up">
                        <div className="about-image-area">
                            <div className="about-image">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <img src={process.env.PUBLIC_URL + "images/about/home-one-about/home_agency_about_1aa.png"} alt="" />
                                </Tilt>
                            </div>
                        
                            <div className="about-image">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <img src={process.env.PUBLIC_URL + "images/about/home-one-about/home_agency_about_2aa.png"} alt="" />
                                </Tilt>
                            </div>
                            <div className="shape shape-1" id="scene" ref={sceneEl}>
                                <span data-depth="1"><img src={process.env.PUBLIC_URL + "images/shape-animation/about-shape-1.png"} alt="" /></span>
                            </div>

                        </div>
                    </div>

                    <div className="col-xl-5 col-lg-6 col-12" data-aos="fade-up" data-aos-delay="300">
                        <div className="about-content-area">
                            {/*<SectionTitleTwo 
                                subTitle=""
                                title="Know Us"
                            />*/}

                            <p>In Today’s world Data management is a key factor in decision making. Companies gather a massive amount of data on things like products, customer, market, transactions etc. In their business endeavour. To mmaintain the flow of data, securing the data, running a quality check on data collected and extracting it can be difficult without the right resources and skills.<br/>
                            QYSA provides Data Management Solutions that help companies to collect data of any type, from any source and structure to make it simple, accurate and accessible. Our team of experts will implement and customize industry standard software to produce desired results for our clients. 
                            </p>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default DataManagementAbout
