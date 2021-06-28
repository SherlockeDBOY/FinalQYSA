import React from 'react'
import PropTypes from "prop-types";
import {Link} from "react-router-dom";


const EventGallery = ({ data }) => {
    return (
        <div className="single-portfolio">
            <div className="thumbnail">
                <img className="img-fluid" src={data.image} alt="Portfolio-01"/>
            </div>
            <div className="content">
                <h5 className="title"><Link>{`${data.title.slice(0, 35)}...`}</Link></h5>
            </div>
        </div>
    )
}


EventGallery.propTypes = {
    data: PropTypes.object
};

export default EventGallery
