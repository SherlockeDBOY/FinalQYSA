import React from 'react'
import EventData from '../../data/services/eventsLink.json';
import SectionTitle from '../../components/SectionTitles/SectionTitle';
import EventLinkItem from '../../components/Event-Management/EventLinkItem';


const EventLinks = () => {
    return (
        <div className="footer-section section section-padding-250 bg-primary-blue">
        <div className="container">
            <SectionTitle
                title="List of Services"
            />
            <div className="row mt-5 mb-lg-6 mb-md-10 mb-6 section-padding-bottom">
                {EventData && EventData.map((single, key) => {
                        return(
                            <div key={key} className="col-xl-3 col-lg-3 col-md-6 col-sm-12 mb-6 text-center">
                                <EventLinkItem data={single} key={key} />
                            </div>
                        ); 
                })}
            </div>
        </div>
    </div>
    )
}

export default EventLinks