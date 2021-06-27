import React, {useState, useEffect, useRef} from 'react';
import Tilt from 'react-parallax-tilt';
import Parallax from 'parallax-js';

const EcommerceAbout = () => {
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

                    <div className="col-xl-7 col-lg-7 col-12 mx-auto" data-aos="fade-up">
                        <div className="my-5 mb-md-10">
                            <div className="row mb-n10">
                            <p className="text-center font-18">
                            Our e-commerce fulfilment solutions allow you to gain greater control of product selection, inventory management, and customer service, while maintaining critical speed-to-market. With our focus on API integration with all e-commerce platforms, fulfilment expertise, and purpose-located hubs, you benefit from 2-day delivery to 99% of the INDIA.; streamlined operation stand-up, product personalization, and improved customer satisfaction. Through our e-commerce fulfilment solution, you get: a streamlined on-boarding process to ensure you are operational quickly; specially trained teams that provide you with talent management; best-in-class warehouse order and management systems; and full reverse logistics capabilities. As a result, you overcome the challenges of operating an omni-channel supply chain, meet the e-commerce demands of consumers who expect two-day delivery, and provide real-time inventory management.                             
                            </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-5 col-lg-5 col-12" data-aos="fade-up" data-aos-delay="300">
                    <div className="about-image-area about-shape-animation justify-content-center mr-0 mx-auto mt-5">
                        <div className="about-image center-img js-tilt">
                            <Tilt scale={scale} transitionSpeed={4000}>
                                <img src={process.env.PUBLIC_URL + "images/about/about-1.jpg"} alt="" />
                            </Tilt>
                        </div>
                        <div className="shape shape-1" id="scene" ref={sceneEl}>
                            <span data-depth="1"><img src={process.env.PUBLIC_URL + "images/shape-animation/video-shape-1.png"} alt="" /></span>
                        </div>
                    </div>
                </div>

                </div>

            </div>
        </div>
    )
}

export default EcommerceAbout
