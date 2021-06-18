import React from 'react'
import PropTypes from "prop-types";



const ServiceSlider = ({title, tagline}) => {
    return (
        <div className="intro-section section overlay" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero-image/he-1.jpg)`}}>

            <div className="container">
                <div className="row row-cols-lg-1 row-cols-1">

                    <div className="col align-self-center">
                        <div className="intro-content-two headline-active text-center mt-xl-8 mt-lg-8 mt-md-8 mt-sm-8 mt-xs-8">
                            <h2 className="title ah-headline">{title}</h2>
                            <div className="desc">
                                <p>{tagline}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

ServiceSlider.propTypes = {
    title: PropTypes.string,
    tagline: PropTypes.string
};

export default ServiceSlider
