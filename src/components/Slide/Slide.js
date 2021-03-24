import React from 'react';
import './Slide.css'
const Slide = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner ">
                    <div className="carousel-item active">
                        <img  src="https://media2.s-nbcnews.com/j/newscms/2021_07/3451045/210218-product-of-the-year-2x1-cs_0a641fd6142e393ca806fddc771e4745.fit-2000w.jpg" className="d-block slide-img w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <img  src="https://www.marketingedge.com.ng/wp-content/uploads/2019/11/NIVEA-Body-range.jpg" className="slide-img d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <img  src="http://www.heartbowsmakeup.com/wp-content/uploads/2015/02/Best-Body-Shop-Products.jpg" className="slide-img d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide;