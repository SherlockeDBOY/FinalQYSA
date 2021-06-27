import React from 'react';
import BulletBlocks from '../../components/DigitalMarketing/BulletBlocks';
import SectionTitleTwo from '../../components/SectionTitles/SectionTitleTwo';
import WebData from '../../data/services/WebDetails.json';

const WebBulletContainer = () => {
    return (
        <div className="section">
            <div className="container">
                <SectionTitleTwo title="Web Design"/>

                <div className="row cols-xl-10 row-cols-lg-1 row-cols-md-1 row-cols-sm-1 row-cols-1 column-rev-md-flex ml-xl-15 ml-lg-10">
                    <div className="col mb-6" data-aos="fade-up">
                        {WebData && WebData.map((single, key) => {
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

export default WebBulletContainer
