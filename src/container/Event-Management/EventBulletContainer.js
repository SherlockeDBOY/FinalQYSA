import React from 'react'
import SectionTitleTwo from '../../components/SectionTitles/SectionTitleTwo';
import digitalData from '../../data/services/EventFeatures.json';
// import BulletBlockSmHeading from '../../components/Event-Management/BulletBlockSmHeading';
import BulletBlocks from '../../components/DigitalMarketing/BulletBlocks'

const EventBulletContainer = () => {
    return (
                <div className="section section-padding-bottom">
            <div className="container">
                <SectionTitleTwo title="Our services feature:"/>

                <div className="row cols-xl-10 row-cols-lg-1 row-cols-md-1 row-cols-sm-1 row-cols-1 column-rev-md-flex ml-xl-15 ml-lg-10">
                    <div className="col mb-6" data-aos="fade-up">
                        {digitalData && digitalData.map((single, key) => {
                            return (
                                <div key={key} className="col mb-6" data-aos="fade-up">
                                    <BulletBlocks data={single} key={key} />
                                </div>
                            );
                        })}
                    </div>


                </div>
            </div>
            
        </div>
    )
}

export default EventBulletContainer
