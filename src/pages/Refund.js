import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import Breadcrumb from '../container/Breadcrumb/Breadcrumb';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';
import RefundContainer from '../container/Refund/RefundContainer';

const Refund = () => {
    return (
        <React.Fragment>
            <SEO title="QYSA Solutions || Return and Refund Policy" />
            <Header />
            <Breadcrumb 
                image="images/bg/breadcrumb-bgb.jpg"
                title="Return and Refund Policy"
                position="bottom"
                size="cover"
            />
            <RefundContainer/>
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default Refund
