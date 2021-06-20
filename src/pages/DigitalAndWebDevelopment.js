import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';
import ContactInformationThree from '../container/ContactInformation/ContactInformationThree';
import ServiceSlider from '../container/IntroSlider/ServiceSlider';

const DigitalAndWebDevelopment = () => {
    return (
        <React.Fragment>
            <SEO title="QYSA Solutions || Digital Marketing And Web Development" />
            <Header />
            <ServiceSlider 
            title="Digital Marketing And Web Development"
            bgImg="he-2.jpg"/>
            <ContactInformationThree />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default DigitalAndWebDevelopment
