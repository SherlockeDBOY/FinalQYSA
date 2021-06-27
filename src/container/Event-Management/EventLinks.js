import React from 'react'
import EventData from '../../data/services/eventsLink.json';
import EventLinkItem from '../../components/Event-Management/EventLinkItem';
import SectionTitleTwo from '../../components/SectionTitles/SectionTitleTwo';

const EventLinks = () => {
    return (
        <div className="footer-section section section-padding-t90-b110 bg-primary-blue">
        <div className="container">
            <SectionTitleTwo title="Types of Events"/>
            <div className="row mt-5 mb-lg-6 mb-md-10 mb-6 section-padding-bottom">
                {EventData && EventData.map((single, key) => {
                        return(
                            <div key={key} className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-6 text-center">
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