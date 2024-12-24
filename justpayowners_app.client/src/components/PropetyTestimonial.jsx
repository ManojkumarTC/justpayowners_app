import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const PropetyTestimonial = () => {
    return (
        <section className="testimonial-wrap2">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7 col-md-12">
                        <div
                            className="testimonial-box2 wow fadeInLeft"
                            data-wow-delay=".3s"
                        >
                            <div className="testimonial-heading">
                                <span className="section-subtitle">
                                    Customer Testimonials
                                </span>
                                <h2 className="section-title">
                                    What's Our Customer Say
                                </h2>
                               
                            </div>

                            <Swiper
                                modules={[Navigation]}
                                navigation={{
                                    nextEl: '.swiper-button-next',
                                    prevEl: '.swiper-button-prev',
                                }}
                                spaceBetween={30}
                                slidesPerView={1}
                                loop={true}
                                className="testimonial-layout2"
                            >
                                {[
                                    {
                                        text: '“ Engage with our professional real estate agents to sell, buy, or rent your home. Get emails directly in your inbox and easily manage leads. ”',
                                        rating: 5,
                                        name: 'Maria Zokatti',
                                        position: 'CEO, PSDBOSS',
                                    },
                                    {
                                        text: '“ We provide top-notch service, ensuring you find your dream home seamlessly and efficiently. ”',
                                        rating: 5,
                                        name: 'John Doe',
                                        position: 'Manager, HomeFinder',
                                    },
                                    {
                                        text: '“ Trust our expertise in navigating the real estate market to find or sell properties quickly. ”',
                                        rating: 5,
                                        name: 'Jane Smith',
                                        position: 'Agent, RealtyCorp',
                                    },
                                ].map((testimonial, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="single-test">
                                            <div className="item-quotation">
                                                <i className="fas fa-quote-left"></i>
                                            </div>
                                            <p>{testimonial.text}</p>
                                            <ul className="item-rating">
                                                {Array(testimonial.rating)
                                                    .fill()
                                                    .map((_, i) => (
                                                        <li key={i}>
                                                            <i className="fas fa-star"></i>
                                                        </li>
                                                    ))}
                                            </ul>
                                            <div className="item-title">
                                                <h3>{testimonial.name}</h3>
                                            </div>
                                            <div className="item-subtitle">
                                                <h4>{testimonial.position}</h4>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            <div className="swiper-button-prev testimonial-btn"></div>
                            <div className="swiper-button-next testimonial-btn"></div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12">
                        <div
                            className="testimonial-img-2 wow fadeInRight"
                            data-wow-delay=".2s"
                        >
                            <img
                                src="https://radiustheme.com/demo/html/homlisti/img/blog/testimonial2.jpg"
                                alt="blog"
                                width="690"
                                height="730"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PropetyTestimonial;
