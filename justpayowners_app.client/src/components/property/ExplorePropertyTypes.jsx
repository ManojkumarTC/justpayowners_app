import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import jsonCount from '../../mockdata/totalcount.json'



const ExplorePropertyTypes = ({ propertyType }) => {
    useEffect(() => {
        console.log(jsonCount)
        console.log('PropertyCounts component rendered');
    }, []);
    return (
        <>
            <section className="feature-wrap2 rt-feature-slide-wrap">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="item-heading-left">
                                <span className="section-subtitle">PROPERTY TYPE</span>
                                <h2 className="section-title">
                                   Explore by Property Type
                                </h2>                               
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="feature-layout-nav-button-wrap">
                                <span className="feature-btn-prev mr-2 d-flex">
                                    <i className="fas fa-chevron-left"></i>
                                </span>
                                <span className="feature-btn-next">
                                    <i className="fas fa-chevron-right"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            nextEl: '.feature-btn-next',
                            prevEl: '.feature-btn-prev',
                        }}
                        spaceBetween={30}
                        slidesPerView={2}
                        loop={true}
                        className="feature-layout-style-1"
                    >

                        {jsonCount.slice(0, 8).map((item, index) => {
                            return (<SwiperSlide key={index}>
                                <div
                                    className="feature-box4 wow fadeInUp"
                                    data-wow-delay=".3s"
                                >
                                    <div className="item-img">
                                        <img
                                            src={item.svg}
                                            alt="svg"
                                            height="78"
                                            width="70"
                                        />
                                    </div>
                                    <div className="item-content">
                                        <h3 className="item-title">
                                            <a href={item.url}>{item.text}</a>
                                        </h3>
                                        <div className="item-categoery">3 Listings</div>
                                    </div>
                                </div>
                            </SwiperSlide>)
                        })}                   
                      
                    </Swiper>
                </div>
            </section>
        </>
    );
};

export default ExplorePropertyTypes;
