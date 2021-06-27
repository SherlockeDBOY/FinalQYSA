import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';
import ContactInformationThree from '../container/ContactInformation/ContactInformationThree';
import ServiceSlider from '../container/IntroSlider/ServiceSlider';
import DigitalMarketingAbout from '../components/DigitalMarketing/DigitalMarketingAbout';
import WebDevelopmentContainer from '../container/DigitalMarketing/WebDevelopmentContainer';
import BulletContainer from '../container/DigitalMarketing/BulletContainer';
import WebDesign from '../container/DigitalMarketing/WebDesign';

const DigitalAndWebDevelopment = () => {
    return (
        <React.Fragment>
            <SEO title="QYSA Solutions || Digital Marketing And Web Development" />
            <Header />
            <ServiceSlider
                title="Digital Marketing And Web Development"
                tagline="Want to become a social sensation like the Fortune 500? We’ve got you covered."
                bgImg="he-2.jpg" />
            <DigitalMarketingAbout />
            <BulletContainer/>
            <WebDesign/>
            <WebDevelopmentContainer />
            <ContactInformationThree />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default DigitalAndWebDevelopment
