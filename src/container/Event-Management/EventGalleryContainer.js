import React from 'react'
import EventGallery from '../../components/Event-Management/EventGallery';
import EventGridData from '../../data/blog/EventGallery.json';


const EventGalleryContainer = () => {
    return (
        <div className="section section-padding fix">
            <div className="container">

                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n6">
                    {EventGridData && EventGridData.map((single, key) => {
                            return(
                                <div key={key} className="col mb-6" data-aos="fade-up">
                                    <EventGallery data={single} key={key} />
                                </div>
                            ); 
                    })}
                </div>

            </div>
        </div>
    )
}

export default EventGalleryContainer
