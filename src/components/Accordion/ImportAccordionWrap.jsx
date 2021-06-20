import React from 'react';
import Accordion, { AccordionItem, AccordionTitle, AccordionContent } from "../Accordion";


const ImportAccordionWrap = () => {
    return (
        <div className="agency-accordion max-mb-n30">
            <Accordion>
                <AccordionItem id="one">
                    <AccordionTitle id="one">#1 The best technology in the industry</AccordionTitle>
                    <AccordionContent id="one">A powerful platform with comprehensive services to register and manage your company. All online - anytime, anywhere. </AccordionContent>
                </AccordionItem>
                <AccordionItem id="two">
                    <AccordionTitle id="two">#2 The best experts in the industry</AccordionTitle>
                    <AccordionContent id="two">Our people are experienced professionals with deep expertise in Indian corporate services industry. They take the time to understand your needs and deliver solutions that appropriate, practical, and cost-effective.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem id="three">
                    <AccordionTitle id="three">#3 Fair and transparent pricing</AccordionTitle>
                    <AccordionContent id="three">You will know all costs up front, with no hidden fees or surprises. We believe that enduring customer relationships can only be created by offering great solutions, providing superior service, and clearly communicating our fees.</AccordionContent>
                </AccordionItem>
                <AccordionItem id="four">
                    <AccordionTitle id="four">#4 Superb Service</AccordionTitle>
                    <AccordionContent id="four">Our technology-driven service model, undergirded by our experienced team, creates an outstanding customer experience for our clients. Our founding team has over 100 years of collective experience in the corporate services industry; we have used the lessons we learned during our previous roles to create the best-in-class service-delivery model. It is a model that ensures excellent service, no matter how you interact with us. </AccordionContent>
                </AccordionItem>
                <AccordionItem id="five">
                    <AccordionTitle id="five">#5 Objective, unbiased information</AccordionTitle>
                    <AccordionContent id="five">We will provide accurate information and guide you to solutions that are best suited for your unique situation. Ours is not a cookie-cutter &quot;one-fits-all&quot; approach.</AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default ImportAccordionWrap
