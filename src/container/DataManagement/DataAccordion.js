import SectionTitleTwo from '../../components/SectionTitles/SectionTitleTwo';
import AccordionWrap from '../../components/Accordion/DataAccordionWrap';

const DataAccordion = () => {
    return (
        <div className="faq-section section section-padding-top bg-primary-blue">
            <div className="container">
                <div className="row row-cols-lg-12 row-cols-12 mb-n6">
                    <div className="col mb-6" data-aos="fade-up">
                        <div className="faq-content">
                            <SectionTitleTwo 
                                subTitle=""
                                title="Activate -Send the data to your existing platforms and specifications"
                            />

                            <AccordionWrap />
                            
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DataAccordion
