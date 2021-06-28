import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
// import Breadcrumb from '../container/Breadcrumb/Breadcrumb';
import EventManagementAbout from '../components/Event-Management/EventManagementAbout';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';
import ContactInformationThree from '../container/ContactInformation/ContactInformationThree';
// import EventLinks from '../container/Event-Management/EventLinks';
import ServiceSlider from '../container/IntroSlider/ServiceSlider';
import EventAboutCont from '../container/Event-Management/EventAboutCont';
import EventBulletContainer from '../container/Event-Management/EventBulletContainer';
import EventGalleryContainer from '../container/Event-Management/EventGalleryContainer';



const EventManagement = () => {
    return (
        <React.Fragment>
            <SEO title="QYSA Solutions || Event Management" />
            <Header />
            <ServiceSlider 
            title="Event Management"
            tagline="Your one stop-shop for everything you need for your next awesome event."
            bgImg="he-2.jpg"/>
            <EventManagementAbout />
            <EventGalleryContainer/>
            {/*<EventLinks />*/}
            <EventBulletContainer/>
            <EventAboutCont/>
            <ContactInformationThree />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default EventManagement