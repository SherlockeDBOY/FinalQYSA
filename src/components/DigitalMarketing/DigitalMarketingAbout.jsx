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
        <div className="section section-padding">
            <div className="container">

                <div className="row">

                    <div className="col-xl-5 col-lg-5 col-12" data-aos="fade-up" data-aos-delay="300">
                        <div className="about-image-area about-shape-animation mx-auto my-5">
                            <div className=" service-image js-tilt">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <img src={process.env.PUBLIC_URL + "images/about/about-1.jpg"} alt="" />
                                </Tilt>
                            </div>
                            <div className="shape shape-1" id="scene" ref={sceneEl}>
                                <span data-depth="1"><img src={process.env.PUBLIC_URL + "images/shape-animation/video-shape-1.png"} alt="" /></span>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-7 col-lg-7 col-12" data-aos="fade-up">
                        <div className="about-content-full d-flex my-auto  mt-0 mb-md-10 mb-10 align-items-center justify-content-center" style={{height:"100%"}}>
                            <div className=" row mb-n6 text-center" >
                            <p className="font-18 my-auto" style={{ lineHeight:"2"}}>
                            In the past decade, technology has become more accessible and affordable. It has led to an exponential increase in the number of online users and their digital consumption. The internet has too many websites competing for the customers??? attention at the same time. To be noticed and recognized, you have to stand out from the competition. But how can you achieve that?<br/><br/>
                            This is where we come in. Our team of experts can cater to your digital marketing and website development needs. We provide specific services, as well as packaged and customized services. We will provide solutions that are more relevant to your company.
                            
                            </p>
                            </div>
                        </div>
                    </div>

                    

                </div>

            </div>
        </div>
        
    )
}

export default DigitalMarketingAbout
