import {useState, useEffect, useRef} from "react";
import Tilt from 'react-parallax-tilt';
import Parallax from 'parallax-js';


const DigitalMarketingAbout = () => {
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
        <div className="section section-padding-t90 section-padding-bottom">
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
                        <div className="about-content-area text-center">
                            

                            <p>The number of online users as well as their digital consumption has increased exponentially in last decade due to more accessible and affordable technologies. Because of that, the internet has too many websites competing for the customers attention at the same time. To be noticed and recognized you have to stand out from the competition. But how can you achieve that?<br/><br/>
                            This is where come in. With our team of experts we can cater to your digital marketing and website development needs. We provide specific services , as well as packaged or costumes services. Whichever is more relevant to your company and your desires we will provide solutions. 
                            </p>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default DigitalMarketingAbout
