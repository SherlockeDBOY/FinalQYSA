import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';
import ContactInformationThree from '../container/ContactInformation/ContactInformationThree';
import ServiceSlider from '../container/IntroSlider/ServiceSlider';
import EcommerceAbout from '../components/Ecommerce/EcommerceAbout';
import EcommerceContentCont from '../container/Ecommerce/EcommerceContentCont';
import EcommerceTextContainer from "../container/TextContainer/EcommerceTextContainer";
import EcommerceTextContainerCont from '../container/TextContainer/EcommerceTextContainerCont';
import EcommerceList from '../container/Ecommerce/EcommerceList';


const Ecommerce = () => {
    return (
        <React.Fragment>
            <SEO title="QYSA Solutions || Ecommerce" />
            <Header />
            <ServiceSlider
                title="Ecommerce"
                tagline="Fast and flexible solutions to meet today’s omni-channel demands."
                bgImg="Ecommerce-Banner.jpg" />
            <EcommerceAbout />
            <EcommerceTextContainer />
            <EcommerceTextContainerCont />
            <EcommerceList/>
            <EcommerceContentCont />
            <ContactInformationThree />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default Ecommerce
