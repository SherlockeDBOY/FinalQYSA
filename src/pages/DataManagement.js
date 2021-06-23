import React from 'react'
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';
import ContactInformationThree from '../container/ContactInformation/ContactInformationThree';
import ServiceSlider from '../container/IntroSlider/ServiceSlider';
import DataManagementAbout from '../components/DataManagement/DataManagementAbout';
import DataAccordion from '../container/DataManagement/DataAccordion';

const DataManagement = () => {
    return (
        <React.Fragment>
            <SEO title="QYSA Solutions || Data Management" />
            <Header />
            <ServiceSlider 
            title="Data Management"
            tagline="In Today’s world Data management is a key factor in decision making. Companies gather a massive amount of data on things like products, customer, market, transactions etc. In their business endeavour. To mmaintain the flow of data, securing the data, running a quality check on data collected and extracting it can be difficult without the right resources and skills."
            bgImg="he-4.jpg"/>
            <DataManagementAbout/>
            <DataAccordion/>
            <ContactInformationThree />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default DataManagement
