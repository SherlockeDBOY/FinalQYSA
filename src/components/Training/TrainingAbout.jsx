import React , {useState, useEffect, useRef} from 'react';
import Tilt from 'react-parallax-tilt';
import Parallax from 'parallax-js';

const TrainingAbout = () => {
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
        <div className="section section-padding-top section-padding-bottom">
            <div className="container">

                <div className="row">

                    <div className="col-xl-6 col-lg-6 col-12" data-aos="fade-up">
                        <div className="about-content-area mt-0 mb-md-10 mb-10">
                            <div className="row mb-n6 text-center">
                            <p>
                                We provide workforce solutions serving clients, candidates and Institutes for recruitment and Staffing solutions across industries. We also specialize in training in wide range of technical and non-technical skills which provides industry ready manpower. We continue to work towards providing customers with a complete and integrated. We continue to work towards providing customers with a complete and integrated talent management solution and meet temporary and permanent needs of clients in the respective geographical areas through a cohesive blend of services and expertise in this space.<br/><br/>
                                We focus on building workforce solutions in specialized industry verticals 
                            </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-12" data-aos="fade-up" data-aos-delay="300">
                        <div className="about-image-area about-shape-animation right-0 mr-0">
                            <div className="about-image js-tilt">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <img src={process.env.PUBLIC_URL + "images/about/about-1.jpg"} alt="" />
                                </Tilt>
                            </div>
                            <div className="about-image js-tilt">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <img src={process.env.PUBLIC_URL + "images/about/about-2.jpg"} alt="" />
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

export default TrainingAbout
