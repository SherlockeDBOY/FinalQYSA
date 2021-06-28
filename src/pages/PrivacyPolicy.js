import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import Breadcrumb from '../container/Breadcrumb/Breadcrumb';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';
import PrivacyPolicyContainer from '../container/PrivacyPolicy/PrivacyPolicyContainer2';



const PrivacyPolicy = () => {
    return (
        <React.Fragment>
            <SEO title="QYSA Solutions || Privacy Policy" />
            <Header />
            <Breadcrumb 
                image="images/bg/breadcrumb-bgb.jpg"
                title="Your privacy is important to us"
                position="bottom"
                size="cover"
            />
            <PrivacyPolicyContainer/>
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default PrivacyPolicy;