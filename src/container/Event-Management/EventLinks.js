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
            <div className="row mb-lg-6 mb-md-10 mb-6 section-padding">
                {EventData && EventData.map((single, key) => {
                        return(
                            <div key={key} className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 mb-6 text-center">
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