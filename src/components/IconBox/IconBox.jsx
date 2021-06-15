import PropTypes from "prop-types";
import React from 'react';
// import ReactVivus from 'react-vivus';
import {Link} from "react-router-dom";

const IconBox = ({ data, classOption }) => {
    return (
        <div className={`icon-box text-center ${classOption}`}>
            <div className="icon">
                <img
                    id={`servicesvg-${data.id}`}
                    src={data.icon}
                    width="60px"
                    height="60px"
                />
            </div>
            <div className="content">
                <h3 className="title">{data.title}</h3>
                <div className="desc">
                    <p>{data.desc}</p>
                </div>
                <Link to={data.link} className="btn link btn-outline-primary">{data.pageLink}</Link>
            </div>
        </div>
    )
}

IconBox.propTypes = {
    data: PropTypes.object,
    classOption: PropTypes.string
};

IconBox.defaultProps = {
    classOption: "icon-box text-center",
};

export default IconBox;
