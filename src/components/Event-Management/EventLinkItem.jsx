import PropTypes from "prop-types";
import React from 'react';
const EventLinkItem = ({ data }) => {
    return (
        <div className="footer-widget">
            <h4 className="footer-widget-title">{data.title}</h4>
            <div className="footer-widget-content">
                <ul className="text-left ml-15">
                    {data.list.map((single,key) =>(
                        <li className="font-18" key={key} style={{lineHeight:"1.5", listStyle:"disc"}} data-aos="fade-up">
                            {single.text}
                        </li>
                    ))}
                    
                </ul>
            </div>
        </div>
    )
}

EventLinkItem.propTypes = {
    data: PropTypes.object
};


export default EventLinkItem
