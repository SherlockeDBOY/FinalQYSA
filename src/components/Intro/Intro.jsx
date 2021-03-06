import React from 'react'
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const Intro =  ({data}) => {
    return (
        
        <div className="intro-section overlay section" style={{backgroundImage: `url(${process.env.PUBLIC_URL + data.backgroundImage})`}}>

            <div className="container">
                <div className="row row-cols-lg-1 row-cols-1 align-items-center">

                    <div className="col align-self-center">
                        <div className="intro-content mt-xl-8 mt-lg-8 mt-md-8 mt-sm-8 mt-xs-8 align-content-center mx-lg-10 mx-md-8 mx-sm-8">
                            <h2 className="title">{data.title}</h2>
                            <div className="desc">
                                <p>{data.desc}</p>
                            </div>
                            <Link to={process.env.PUBLIC_URL + `${data.link}`} className="btn btn-primary btn-hover-secondary">Explore More</Link>
                            <Link to={process.env.PUBLIC_URL + "/service"} className="btn btn-outline-white btn-hover-primary"> All Services </Link>
                        </div>
                    </div>

                </div>
            </div>

        </div>
        
    )
}

Intro.propTypes = {
    data: PropTypes.object
};
  

export default Intro
