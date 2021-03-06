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
    // images/about/Training_and_Placement-intro.jpg
    return (
        <div className="section section-padding">
        <div className="container">

            <div className="row">

                <div className="col-xl-7 col-lg-7 col-12" data-aos="fade-up">
                    <div className="about-content-full d-flex my-auto  mt-0 mb-md-10 mb-10 align-items-center justify-content-center" style={{height:"100%"}}>
                        <div className=" row mb-n6 text-center" >
                        <p className="font-18 my-auto" style={{lineHeight:"2"}}>
                        We provide workforce solutions for clients, candidates and institutes for recruitment and staffing across industries. We also specialize in training in a wide range of technical and non-technical skills that provide industry-ready manpower. We continue to work towards providing customers with complete and integrated talent management solutions. It will meet the temporary and permanent needs of clients in their respective geographical areas. We will achieve this through a cohesive blend of services and expertise in this space.
                        </p>
                        </div>
                    </div>
                </div>

                <div className="col-xl-5 col-lg-5 col-12" data-aos="fade-up" data-aos-delay="300">
                    <div className="about-image-area about-shape-animation justify-content-center mr-0 mx-auto mt-5">
                        <div className="service-image js-tilt">
                            <Tilt scale={scale} transitionSpeed={4000}>
                                <img src={process.env.PUBLIC_URL + "images/about/Training_and_Placement-intro.jpg"} alt="" />
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
