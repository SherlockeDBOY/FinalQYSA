import React from 'react'
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';
import ContactInformationThree from '../container/ContactInformation/ContactInformationThree';
import ServiceSlider from '../container/IntroSlider/ServiceSlider';
import ImportAndExportContainer from '../container/ImportAndExport/ImportAndExportContainer';
import ImportAbout from '../components/ImportAndExport/ImportAbout';
import ImportCenterCont from '../container/ImportAndExport/ImportCenterCont';
import ImportContentCont from '../container/ImportAndExport/ImportContentCont';
import ImportAccordion from '../container/ImportAndExport/ImportAccordion';

const ImportAndExport = () => {
    return (
        <React.Fragment>
            <SEO title="QYSA Solutions || Import And Export" />
            <Header />
            <ServiceSlider 
            title="Import And Export"
            bgImg="he-1.jpg"/>
            <ImportAbout/>
            <ImportCenterCont/>
            <ImportAndExportContainer/>
            <ImportAccordion/>
            <ImportContentCont/>
            <ContactInformationThree />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default ImportAndExport
