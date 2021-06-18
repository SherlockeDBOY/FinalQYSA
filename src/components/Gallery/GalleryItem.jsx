import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";


const GalleryItem = ({ data }) => {
    return (
        <div className="blog">
            <div className="thumbnail">
                <Link to={process.env.PUBLIC_URL + `/blog-details/${data.id}`} className="image"><img src={process.env.PUBLIC_URL + data.image} alt="Blog Image" /></Link>
            </div>
        </div>
    )
}

GalleryItem.propTypes = {
    data: PropTypes.object
};


export default GalleryItem
