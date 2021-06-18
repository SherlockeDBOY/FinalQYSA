
import React from 'react';
import PropTypes from "prop-types";

const TrainingItem = ({ portfolio }) => {
// const WorkItem = () => {
    return (
        <div className="single-portfolio">
            <div className="col-xl-12 col-auto">
                <div className="info">
                    <h3><span className="info-text" dangerouslySetInnerHTML={{__html: portfolio.categories}}/></h3>
                    <span className="info-text" dangerouslySetInnerHTML={{__html: portfolio.body}}/>
                </div>
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
