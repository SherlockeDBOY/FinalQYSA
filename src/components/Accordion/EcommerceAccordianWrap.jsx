import React from 'react';
import Accordion, { AccordionItem, AccordionTitle, AccordionContent } from "../Accordion";


const EcommerceAccordianWrap = () => {
    return (
        <div className="agency-accordion max-mb-n30 my-auto">
            <Accordion>
                <AccordionItem id="one">
                    <AccordionTitle id="one">Focus on What Really Matters</AccordionTitle>
                    <AccordionContent id="one">We focus primarily on growing your revenue and store. Join stores doing the same.</AccordionContent>
                </AccordionItem>
                <AccordionItem id="two">
                    <AccordionTitle id="two">Grow Your Business</AccordionTitle>
                    <AccordionContent id="two">Gain a huge advantage over your competitors by optimizing your store. Our app has proven results, and has increased revenue for all our customers
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem id="three">
                    <AccordionTitle id="three">Do it Easily</AccordionTitle>
                    <AccordionContent id="three">Get setup within 2 minutes and watch your average order value skyrocket.</AccordionContent>
                </AccordionItem>
                <AccordionItem id="four">
                    <AccordionTitle id="four">Boost Sales Immediately</AccordionTitle>
                    <AccordionContent id="four">Offer product upgrades or complementary products. Plus, one allows your customers to replace or add items to their cart.</AccordionContent>
                </AccordionItem>
                <AccordionItem id="five">
                    <AccordionTitle id="five">Effortless Set Up</AccordionTitle>
                    <AccordionContent id="five">Set up your first upsell or cross sell in under two minutes.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default EcommerceAccordianWrap
