import React from 'react';
import SectionTitleTwo from '../../components/SectionTitles/SectionTitleTwo';
import WebBulletContainer from './WebBulletContainer';


const WebDesign = () => {
    return (
        <div className="section section-padding-bottom bg-primary-blue">
            <div className="container">
                <div className="faq-content">
                    <SectionTitleTwo 
                        title="Website Design & Development"
                    />
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 m-auto" data-aos="fade-up">
                    <p className=" text-left mb-10 font-18">
                        We provide expert solutions for web design as well as web development services. 
                    </p>
                    <WebBulletContainer/>
                </div>
            </div>
        </div>
                    
    )
}

export default WebDesign
