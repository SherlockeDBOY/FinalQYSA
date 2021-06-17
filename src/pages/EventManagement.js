import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import Breadcrumb from '../container/Breadcrumb/Breadcrumb';
import EventManagementAbout from '../components/Event-Management/EventManagementAbout';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';
import ContactInformationThree from '../container/ContactInformation/ContactInformationThree';
import EventLinks from '../container/Event-Management/EventLinks';


const EventManagement = () => {
    return (
        <React.Fragment>
            <SEO title="QYSA Solutions || Event Management" />
            <Header />
            <Breadcrumb 
                image="images/bg/breadcrumb-bgb.jpg"
                title="Event Management"
                position="bottom"
                size="cover"
            />
            <EventManagementAbout />
            <EventLinks />
            <ContactInformationThree />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default EventManagement