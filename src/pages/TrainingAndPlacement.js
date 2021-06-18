import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
// import Breadcrumb from '../container/Breadcrumb/Breadcrumb';
import TrainingAbout from '../components/Training/TrainingAbout';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';
import ContactInformationThree from '../container/ContactInformation/ContactInformationThree';
import Portfolio from '../container/TrainingAndPlacement/TrainingContainer';
import ServiceSlider from '../container/IntroSlider/ServiceSlider';


const TrainingAndPlacement = () => {
    return (
        <React.Fragment>
            <SEO title="QYSA Solutions || Training And Placement" />
            <Header />
            <ServiceSlider title="Training and Placement"/>
            <TrainingAbout/>
            <Portfolio/>
            <ContactInformationThree />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default TrainingAndPlacement
