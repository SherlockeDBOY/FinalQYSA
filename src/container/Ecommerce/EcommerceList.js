import React from 'react'
import EventData from '../../data/services/EcommerceList.json';
import EventLinkItem from '../../components/Event-Management/EventLinkItem';

const EcommerceList = () => {
    return (
        <div className="footer-section section section-padding-t90">
        <div className="container">
            <div className="row mt-5 mb-lg-6 mb-md-10 mb-6">
                <h4 className="text-left col-8 mb-8">We also have our portal for e-commerce. We provide custom services and benefits on bulk orders. We deal in:</h4>
                {EventData && EventData.map((single, key) => {
                        return(
                            <div key={key} className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-6 text-center">
                                <EventLinkItem data={single} key={key} />
                            </div>
                        ); 
                })}
            </div>
        </div>
    </div>
    )
}

export default EcommerceList
