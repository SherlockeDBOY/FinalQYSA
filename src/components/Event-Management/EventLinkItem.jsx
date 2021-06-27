import PropTypes from "prop-types";
import React from 'react';
const EventLinkItem = ({ data }) => {
    return (
        <div className="footer-widget">
            <h4 className="footer-widget-title">{data.title}</h4>
            <div className="footer-widget-content">
                <ul >
                    {data.list.map((single,key) =>(
                        <li className="font-14" key={key} style={{lineHeight:"3"}} data-aos="fade-up">
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
