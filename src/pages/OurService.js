import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import Breadcrumb from '../container/Breadcrumb/Breadcrumb';

const Ourservice =() =>{
    return(
        <React.Fragment>
            <SEO title="QYSA Solutions || All Service" />
            <Header />
            <Breadcrumb 
                image="images/bg/UnderConst.jpg"
                size="cover"
                position="center"
            />
        </React.Fragment>

    )
}
export default Ourservice;