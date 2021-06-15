import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import Breadcrumb from '../container/Breadcrumb/Breadcrumb';
import Footer from '../container/Footer/Footer';
// import TermData from "../data/termsAndConditions/termsDetails.json";
import ScrollToTop from '../components/ScrollToTop.jsx';
// import PropTypes from "prop-types";
import TCContainer from '../container/Terms&Conditions/T&CContainer';


// const TermsAndCondition = ({match: {params: {id}}}) => {
const TermsAndCondition = () => {
    // const termId = parseInt(id, 10)
    // const data = TermData.filter(term => term.id === termId);
    return (
        <React.Fragment>
            <SEO title="QYSA Solutions || Terms & Conditions" />
            <Header />
            <Breadcrumb 
                image="images/bg/breadcrumb-bgb.jpg"
                title="Welcome to QYSA SOLUTIONS"
                desc="These terms of service outline the rules and regulations for the use of QYSA SOLUTIONS`&apos;`s Website."
                position="bottom"
                size="cover"
            />
            <TCContainer/>
            {/*<TCContainer data={data[0]} />*/}
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

// TermsAndCondition.propTypes = {
//     match: PropTypes.shape({
//         params: PropTypes.shape({
//             id: PropTypes.oneOfType([    
//                 PropTypes.string,
//                 PropTypes.number
//             ])
//         })
//     })
// }

export default TermsAndCondition;