import React , {useState, useEffect, useRef} from 'react';
import Tilt from 'react-parallax-tilt';
import Parallax from 'parallax-js';

const ImportAbout = () => {
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
        <div className="section section-padding-top">
            <div className="container">

                <div className="row">

                    <div className="align-items-center col-xl-6 col-lg-6 col-12" data-aos="fade-up">
                        <div className=" my-auto  mt-0 mb-md-10 mb-10">
                            <div className="row mb-n6 ">
                            <p style={{fontSize:"1.3rem", lineHeight:"2.5"}}>
                            We are merchant exporters of varies products like textile, clothing etc. We provide services to our customers where they can customize quality, size, type etc on bulk orders. Packaging and labelling are provided according to the client’s requirements of barcoding, labelling etc. We also provide solutions to facilitate the smooth trading between the buyer and the seller. 
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

export default ImportAbout
