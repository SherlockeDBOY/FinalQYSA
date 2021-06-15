import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import Breadcrumb from '../container/Breadcrumb/Breadcrumb';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';
import DisclaimerContainer from '../container/Disclaimer/DisclaimerContainer';

const Disclaimer = () => {
    return (
        <React.Fragment>
            <SEO title="QYSA Solutions || Disclaimer" />
            <Header />
            <Breadcrumb 
                image="images/bg/breadcrumb-bgb.jpg"
                title="DISCLAIMER"
                position="bottom"
                size="cover"
            />
            <DisclaimerContainer/>
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default Disclaimer
