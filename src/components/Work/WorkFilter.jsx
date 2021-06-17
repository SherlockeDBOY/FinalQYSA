import React  from "react";
import PropTypes from "prop-types";
import {slugify} from "../../utils";

const WorkFilter = ({ categories, classOption }) => {
    return (
        <div className={`messonry-button ${classOption}`}>
            {categories.map((cat, idx) => <button key={idx} data-filter={`.${slugify(cat)}`}><span >{cat}</span></button>)}
        </div>
    )
}
WorkFilter.propTypes = {
    categories: PropTypes.array,
    classOption: PropTypes.string
}

WorkFilter.defaultProps = {
    classOption: "text-lg-right text-left mb-lg-13 mb-md-13 mb-6"
};

export default WorkFilter;
