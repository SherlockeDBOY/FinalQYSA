import SectionTitleTwo from '../../components/SectionTitles/SectionTitleTwo';
import AccordionWrap from '../../components/Accordion/DataAccordionWrap';
import {useState, useEffect, useRef} from "react";
import Tilt from 'react-parallax-tilt';
import Parallax from 'parallax-js';


const DataAccordion = () => {
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
        <div className="faq-section section section-padding-bottom bg-primary-blue">
            <div className="container">
                <div className="row col-xl-8 col-lg-8 col-md-12 col-sm-12">
                    <SectionTitleTwo 
                    title="Activate -Send the data to your existing platforms and specifications"
                    />
                </div>
                <div className="row row-cols-xl-2 row-cols-lg-2 row-cols-md-1 row-cols-1 mb-n6">
                    
                    <div className="col mb-6" data-aos="fade-up">
                        <div className="faq-content">

                            <AccordionWrap />
                            
                        </div>
                    </div>

                    <div className="col my-6 pl-xl-12" data-aos="fade-up" data-aos-delay="300">
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

                </div>
            </div>
        </div>
    )
}

export default DataAccordion
