
import React from 'react';
import PropTypes from "prop-types";

const TrainingItem = ({ portfolio }) => {
// const WorkItem = () => {
    return (
        <div className="single-portfolio">
            <div className="col-xl-12 col-auto">
            {portfolio.body}
            </div>
            <br/>
            <br/>
        </div>
    )
}

TrainingItem.propTypes = {
    portfolio: PropTypes.object
};

export default TrainingItem;
