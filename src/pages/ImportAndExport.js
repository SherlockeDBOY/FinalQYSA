import React from 'react'
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';
import ContactInformationThree from '../container/ContactInformation/ContactInformationThree';
import ServiceSlider from '../container/IntroSlider/ServiceSlider';
import ImportAbout from '../components/ImportAndExport/ImportAbout';
import ImportCenterCont from '../container/ImportAndExport/ImportCenterCont';
// import ImportContentCont from '../container/ImportAndExport/ImportContentCont';
import ImportTextContainer from '../container/TextContainer/ImportTextContainer';
import ImportTextContainerCont from '../container/TextContainer/ImportTextContainerCont';

const ImportAndExport = () => {
    return (
        <React.Fragment>
            <SEO title="QYSA Solutions || Import And Export" />
            <Header />
            <ServiceSlider 
            title="Import And Export"
            tagline="We harness the power of technology to put your firm on the forefront"
            bgImg="Import_and_Export-Banner.jpg"/>
            <ImportAbout/>
            <ImportCenterCont/>
            <ImportTextContainer/>
            <ImportTextContainerCont/>
            {/*<ImportContentCont/>*/}
            <ContactInformationThree />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default ImportAndExport
