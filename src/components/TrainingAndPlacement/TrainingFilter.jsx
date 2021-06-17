import React  from "react";
import PropTypes from "prop-types";
import {slugify} from "../../utils";

const TrainingFilter = ({ categories, classOption }) => {
    return (
        <div className={`messonry-button ${classOption}`}>
            <button data-filter="*" className="is-checked"><span>All</span></button>
            {categories.map((cat, idx) => <button key={idx} data-filter={`.${slugify(cat)}`}><span >{cat}</span></button>)}
        </div>
    )
}
TrainingFilter.propTypes = {
    categories: PropTypes.array,
    classOption: PropTypes.string
}

TrainingFilter.defaultProps = {
    classOption: "text-lg-right text-left mb-lg-13 mb-md-13 mb-6"
};

export default TrainingFilter;
