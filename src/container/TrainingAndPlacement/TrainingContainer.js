import React from 'react';
import SectionTitleTwo from '../../components/SectionTitles/SectionTitleTwo';
import useMasonry from "../../hooks/use-masonry";
import WorkFilter from "../../components/TrainingAndPlacement/TrainingFilter";
import WorkItem from "../../components/TrainingAndPlacement/TrainingItem";
import workData from '../../data/services/trainingDetails.json';
import {slugify} from "../../utils";
// import PlacementDetail from '../../data/services/placementDetail';


const TrainingContainer = () => {
    const {categories} =  useMasonry(workData, ".mesonry-list", ".masonry-grid", ".messonry-button", ".messonry-button button")


    return (
        <div className="section section-padding ag-masonary-wrapper">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                            <SectionTitleTwo 
                                subTitle=""
                                title="Training and Placements"
                            />
                    </div>
                    <div className="col-lg-7 justify-content-center" data-aos="fade-up" data-aos-delay="300">
                        <WorkFilter categories={categories}/>
                    </div>
                </div>



                <div className="row row-cols g-0 mesonry-list">
                    <div className="resizer col"></div>
                    {workData && workData.map(portfolio => (
                        <div key={portfolio.id} className={`col-lg-12 cols-md-12 cols-sm-12 masonry-grid ${portfolio.categories.map(cat => slugify(cat)).join(" ")}`}>
                            <WorkItem portfolio={portfolio}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TrainingContainer
