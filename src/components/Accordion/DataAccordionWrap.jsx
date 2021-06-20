import React from 'react';
import Accordion, { AccordionItem, AccordionTitle, AccordionContent } from "../Accordion";


const DataAccordionWrap = () => {
    return (
        <div className="agency-accordion max-mb-n30">
            <Accordion>
                <AccordionItem id="one">
                    <AccordionTitle id="one">Age data</AccordionTitle>
                    <AccordionContent id="one">Declared age from registrations and surveys
</AccordionContent>
                </AccordionItem>
                <AccordionItem id="two">
                    <AccordionTitle id="two">Gender data</AccordionTitle>
                    <AccordionContent id="two">
Declared gender from registrations and surveys
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem id="three">
                    <AccordionTitle id="three">Mobile app & web behavior data</AccordionTitle>
                    <AccordionContent id="three">
Apps or websites associated with an identifier
</AccordionContent>
                </AccordionItem>
                <AccordionItem id="four">
                    <AccordionTitle id="four">Digital identity data</AccordionTitle>
                    <AccordionContent id="four">Mappings between two identifiers that indicates that both belong to the same user
</AccordionContent>
                </AccordionItem>
                <AccordionItem id="five">
                    <AccordionTitle id="five">Location data</AccordionTitle>
                    <AccordionContent id="five">Precise latitude, longitude, and points of interest observed via GPS and beacons
</AccordionContent>
                </AccordionItem>
                <AccordionItem id="six">
                    <AccordionTitle id="six">Device data</AccordionTitle>
                    <AccordionContent id="six">Information associated with a device, such as carrier, service provider, & hardware
</AccordionContent>
                </AccordionItem>
                <AccordionItem id="seven">
                    <AccordionTitle id="seven">TV viewership data</AccordionTitle>
                    <AccordionContent id="seven">Television consumption collected from smart TVs and set-top boxes
</AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default DataAccordionWrap
