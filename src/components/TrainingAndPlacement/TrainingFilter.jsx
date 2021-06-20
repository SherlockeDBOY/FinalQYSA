import React  from "react";
import PropTypes from "prop-types";
import {slugify} from "../../utils";

const TrainingFilter = ({ categories, classOption }) => {
    return (
        // <div className={`messonry-button ${classOption}`}>
        //     <button data-filter="*" className="is-checked"><span className=""><strong>All</strong></span></button>
        //     {categories.map((cat, idx) => <button key={idx} data-filter={`.${slugify(cat)}`}><span className=""><strong>{cat}</strong></span></button>)}
        // </div>
        <div className={`messonry-button ${classOption}`}>
        <button data-filter="*" className="is-checked"><span><strong>All</strong></span></button>
        {categories.map((cat, idx) => <button key={idx} data-filter={`.${slugify(cat)}`}><span ><strong>{cat}</strong></span></button>)}
        </div>
    )
}
TrainingFilter.propTypes = {
    categories: PropTypes.array,
    classOption: PropTypes.string
}

TrainingFilter.defaultProps = {
    classOption: "text-lg-left text-left mb-lg-13 mb-md-13 mb-6"
};

export default TrainingFilter;
