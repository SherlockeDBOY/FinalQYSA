import React from 'react'
import BlogClassicData from '../../data/blog/BlogClassic.json';
import GalleryItem from '../../components/Gallery/GalleryItem';

const GridGallery = () => {
    return (
        <div className="section section-padding fix">
            <div className="container">

                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n6">
                    {BlogClassicData && BlogClassicData.map((single, key) => {
                            return(
                                <div key={key} className="col mb-6" data-aos="fade-up">
                                    <GalleryItem data={single} key={key} />
                                </div>
                            ); 
                    })}
                </div>

            </div>
        </div>
    )
}

export default GridGallery
