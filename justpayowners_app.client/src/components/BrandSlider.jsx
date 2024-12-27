import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

const BrandSlider = () => {
    const brands = [
        { id: 1, src: 'https://www.radiustheme.com/demo/html/homlisti/img/brand/brand1.svg', alt: 'brand1' },
        { id: 2, src: 'https://www.radiustheme.com/demo/html/homlisti/img/brand/brand2.svg', alt: 'brand2' },
        { id: 3, src: 'https://www.radiustheme.com/demo/html/homlisti/img/brand/brand3.svg', alt: 'brand3' },
        { id: 4, src: 'https://www.radiustheme.com/demo/html/homlisti/img/brand/brand4.svg', alt: 'brand4' },
        { id: 5, src: 'https://www.radiustheme.com/demo/html/homlisti/img/brand/brand5.svg', alt: 'brand5' },
        { id: 6, src: 'https://www.radiustheme.com/demo/html/homlisti/img/brand/brand6.svg', alt: 'brand6' },
    ];

    return (
        <div className="brand-wrap1 brand-wrap2">
            <div className="container">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={5}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    className="brand-layout"
                >
                    {brands.map((brand, index) => (
                        <SwiperSlide key={`${brand.id}-${index}`}>
                            <div
                                className="brand-box2 wow fadeInUp"
                                data-wow-delay=".4s"
                            >
                                <div className="item-img">
                                    <a href="index.html">
                                        <img src={brand.src} alt={brand.alt} />
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Optional Navigation Buttons */}
                {/*<div className="swiper-button-prev testimonial-btn"></div>*/}
                {/*<div className="swiper-button-next testimonial-btn"></div>*/}
            </div>
        </div>
    );
};

export default BrandSlider;
