import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';
import ContactInformationThree from '../container/ContactInformation/ContactInformationThree';
import ServiceSlider from '../container/IntroSlider/ServiceSlider';
import EcommerceAbout from '../components/Ecommerce/EcommerceAbout';
import EcommerceAccordion from '../container/Ecommerce/EcommerceAccordion';
import EcommerceContentCont from '../container/Ecommerce/EcommerceContentCont';

const Ecommerce = () => {
    return (
        <React.Fragment>
            <SEO title="QYSA Solutions || Ecommerce" />
            <Header />
            <ServiceSlider 
            title="Ecommerce"
            bgImg="he-3.jpg"/>
            <EcommerceAbout/>
            <EcommerceAccordion/>
            <EcommerceContentCont/>
            <ContactInformationThree />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default Ecommerce
