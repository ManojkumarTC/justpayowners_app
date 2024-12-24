import React from 'react';
import { Tabs, Tab, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const MainBannerSection = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };


    return (<>
        

        <section className="main-banner-wrap1 main-banner-wrap6 motion-effects-wrap">
            <div className="container">
                <div className="row">
                    <div className="col-xl-9">
                        <div className="main-banner-box1 main-banner-box6">
                            <h1
                                className="item-title wow fadeInUp"
                                data-wow-delay=".4s"
                                style={{
                                    visibility: 'visible',
                                    animationDelay: '0.4s',
                                    animationName: 'fadeInUp',
                                }}
                            >
                                Find the perfect place to Live with your family
                            </h1>

                            {/* Tabs */}
                            <Tabs
                                defaultActiveKey="sell"
                                id="main-banner-tabs"
                                className="mb-3 list-inline"
                                onSelect={() => reset()} // Reset form on tab change
                            >
                                <Tab eventKey="sell" title="Sell">
                                    <FormSection
                                        onSubmit={handleSubmit(onSubmit)}
                                        register={register}
                                        errors={errors}
                                    />
                                </Tab>
                                <Tab eventKey="buy" title="Buy">
                                    <FormSection
                                        onSubmit={handleSubmit(onSubmit)}
                                        register={register}
                                        errors={errors}
                                    />
                                </Tab>
                                <Tab eventKey="rent" title="Rent">
                                    <FormSection
                                        onSubmit={handleSubmit(onSubmit)}
                                        register={register}
                                        errors={errors}
                                    />
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
    );
};


const FormSection = ({ onSubmit, register, errors }) => {
    return (
        <form onSubmit={onSubmit}>

            <div className="banner-search-wrap">
                <div className="rld-main-search">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="box">
                                <div className="box-top">

                                    <div className="rld-single-select ml-22">
                                        <select
                                            className={`select single-select  ${errors.city ? 'is-invalid' : ''}`}
                                            {...register('city', { required: 'City is required' })}
                                        >
                                            <option value="">Select City</option>
                                            <option value="los-angeles">Los Angeles</option>
                                            <option value="chicago">Chicago</option>
                                            <option value="philadelphia">Philadelphia</option>
                                        </select>
                                        {errors.city && (
                                            <div className="invalid-feedback">{errors.city.message}</div>
                                        )}
                                       
                                        
                                    </div>
                                    <div className="rld-single-select item">
                                        <select
                                            className={`select single-select mr-0  ${errors.propertyType ? 'is-invalid' : ''}`}
                                            {...register('propertyType', { required: 'Property Type is required' })}
                                        >
                                            <option value="">Select Property Type</option>
                                            <option value="family-house">Family House</option>
                                            <option value="apartment">Apartment</option>
                                            <option value="condo">Condo</option>
                                        </select>
                                        {errors.propertyType && (
                                            <div className="invalid-feedback">{errors.propertyType.message}</div>
                                        )}
                                       
                                    </div>
                                    <div className="rld-single-input item">
                                      

                                        <input
                                            type="text"
                                            className={`form-control ${errors.keyword ? 'is-invalid' : ''}`}
                                            placeholder="Enter Keyword here..."
                                            {...register('keyword', { required: 'Keyword is required' })}
                                        />
                                        {errors.keyword && (
                                            <div className="invalid-feedback">{errors.keyword.message}</div>
                                        )}
                                    </div>
                                    <div className="item rt-filter-btn">
                                        <div className="dropdown-filter item">
                                            <span>
                                                <i className="fas fa-sliders-h"></i>
                                            </span>
                                        </div>
                                        <div className="filter-button-area">                                          

                                            <Button type="submit" className="btn btn-primary filter-btn">
                                                Search 
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                {/* Add Filter Section */}
                            </div>
                        </div>
                    </div>
                </div>
                <p
                    className="item-para wow fadeInUp"
                    data-wow-delay=".4s"
                    style={{
                        visibility: 'visible',
                        animationDelay: '0.4s',
                        animationName: 'fadeInUp',
                    }}
                >
                    We’ve more than{' '}
                    <span className="banner-p">54,000</span>{' '}
                    apartments, place &amp; plot.

                </p>
            </div>

           
           
           
           
        </form>
    );
};

export default MainBannerSection;


//<section className="about-wrap-5 counter-appear motion-effects-wrap">
//    <div className="container">

//        <div className="row">
//            <div className="col-lg-6 col-md-12">
//                <div className="about-box-10 wow  fadeInRight animated" data-wow-delay=".3s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }} >
//                    <div className="item-heading-left mb-bottom">
//                        <span className="section-subtitle">WHO WE ARE</span>
//                        <h2 className="section-title">We are Offering The Best
//                            Real Estate Property For All</h2>
//                        <div className="bg-title-wrap" style={{ display: 'block' }}>
//                            <span className="background-title solid">About</span>
//                        </div>

//                    </div>
//                    <div className="row">
//                        <div className="col-lg-6 col-md-6">
//                            <div className="about-svg-shape">
//                                <img src="https://radiustheme.com/demo/html/homlisti/img/figure/shape29.svg" alt="svg" />
//                                <div className="item-content">
//                                    <div className="item-content__text">
//                                        <div className="item-k"><span className="counterUp" data-counter="11">11</span>K</div>
//                                    </div>
//                                    <p>Verified Property</p>
//                                </div>
//                            </div>
//                        </div>
//                        <div className="col-lg-6 col-md-6">
//                            <div className="about-svg-shape">
//                                <img src="https://radiustheme.com/demo/html/homlisti/img/figure/shape28.svg" alt="svg" />
//                                <div className="item-content">
//                                    <div className="item-content">
//                                        <div className="item-content__text">
//                                            <div className="item-k"><span className="counterUp" data-counter="55">55</span>K</div>
//                                        </div>
//                                        <p>Satisfied People</p>
//                                    </div>
//                                </div>
//                            </div>
//                        </div>
//                        <div className="col-lg-6 col-md-6">
//                            <div className="about-svg-shape">
//                                <img src="https://radiustheme.com/demo/html/homlisti/img/figure/shape29.svg" alt="svg" />
//                                <div className="item-content">
//                                    <div className="item-content__text">
//                                        <div className="item-k"><span className="counterUp" data-counter="11">11</span>K</div>
//                                    </div>
//                                    <p>Verified Property</p>
//                                </div>
//                            </div>
//                        </div>
//                        <div className="col-lg-6 col-md-6">
//                            <div className="about-svg-shape">
//                                <img src="https://radiustheme.com/demo/html/homlisti/img/figure/shape29.svg" alt="svg" />
//                                <div className="item-content">
//                                    <div className="item-content__text">
//                                        <div className="item-k"><span className="counterUp" data-counter="11">11</span>K</div>
//                                    </div>
//                                    <p>Verified Property</p>
//                                </div>
//                            </div>
//                        </div>
//                        <div className="col-lg-6 col-md-6">
//                            <div className="about-svg-shape">
//                                <img src="https://radiustheme.com/demo/html/homlisti/img/figure/shape29.svg" alt="svg" />
//                                <div className="item-content">
//                                    <div className="item-content__text">
//                                        <div className="item-k"><span className="counterUp" data-counter="11">11</span>K</div>
//                                    </div>
//                                    <p>Verified Property</p>
//                                </div>
//                            </div>
//                        </div>
//                        <div className="col-lg-6 col-md-6">
//                            <div className="about-svg-shape">
//                                <img src="https://radiustheme.com/demo/html/homlisti/img/figure/shape29.svg" alt="svg" />
//                                <div className="item-content">
//                                    <div className="item-content__text">
//                                        <div className="item-k"><span className="counterUp" data-counter="11">11</span>K</div>
//                                    </div>
//                                    <p>Verified Property</p>
//                                </div>
//                            </div>
//                        </div>
//                    </div>

//                    <p>Make a type specimen book. It has survived not only five centuries,
//                        but also the leap into electronic typesetting, remaining essentially
//                        electronic typesettings pecimen book
//                    </p>
//                    <div className="banner-button about-button-2">
//                        <a href="contact.html" className="banner-btn">Contact With Us</a>
//                    </div>
//                </div>
//            </div>
//            <div className="col-lg-6 col-md-12">
//                <div className="form-section-wrap1 motion-effects-wrap wow bounceInDown" data-wow-delay=".3s" >

//                    <h2 className="item-title"><a href="without-sidebar.html">Find Your Accessible Homes For Rent</a></h2>
//                    <form action="index2.html" className="rent-form">
//                        <div className="form-check-box">
//                            <label className="checkbox-button checkbox-button-2">
//                                <input type="checkbox" className="checkbox-button__input" id="choice1-1" name="choice1" />
//                                <span className="checkbox-button__control checkbox-button__control-2 active"></span>
//                                <span className="checkbox-button__label checkbox-button__label-2">For Rent</span>
//                            </label>
//                            <label className="checkbox-button checkbox-button-2">
//                                <input type="checkbox" className="checkbox-button__input" id="choice1-2" name="choice2" />
//                                <span className="checkbox-button__control checkbox-button__control-2"></span>
//                                <span className="checkbox-button__label checkbox-button__label-2">For Sell</span>
//                            </label>
//                            <label className="checkbox-button checkbox-button-2">
//                                <input type="checkbox" className="checkbox-button__input" id="choice1-3" name="choice3" />
//                                <span className="checkbox-button__control checkbox-button__control-2"></span>
//                                <span className="checkbox-button__label checkbox-button__label-2">For Buy</span>
//                            </label>
//                        </div>
//                        <div className="form-grid">
//                            <div className="row">
//                                <div className="form-group col-lg-12">
//                                    <input type="text" className="form-control" placeholder="Keywords" />
//                                </div>
//                                <div className="form-group col-lg-12">
//                                    <div className="form-icon-area">
//                                        <input type="text" className="form-control" placeholder="Property Location" />
//                                        <div className="form-icon"><i className="fas fa-map-marker-alt"></i></div>
//                                    </div>
//                                </div>
//                            </div>
//                        </div>
//                        <div className="select-area">
//                            <div className="row gutters-15">
//                                <div className="col-lg-6 col-md-6 col-sm-6">
//                                    <div className="price-content">
//                                        <select name="MinPrice" id="MinPrice" style={{ display: 'none' }}>
//                                            <option value="Price">Min Price</option>
//                                            <option value="$">$25,000</option>
//                                            <option value="$">$20,000</option>
//                                            <option value="$">$15,000</option>
//                                        </select><div className="nice-select" tabIndex="0"><span className="current">Min Price</span><ul className="list"><li data-value="Price" className="option selected">Min Price</li><li data-value="$" className="option">$25,000</li><li data-value="$" className="option">$20,000</li><li data-value="$" className="option">$15,000</li></ul></div>
//                                    </div>
//                                </div>
//                                <div className="col-lg-6 col-md-6 col-sm-6">
//                                    <div className="price-content">
//                                        <select name="MaxPrice" id="MaxPrice" style={{ display: 'none' }}>
//                                            <option value="Price">Max Price</option>
//                                            <option value="$">$50,000</option>
//                                            <option value="$">$45,000</option>
//                                            <option value="$">$40,000</option>
//                                        </select><div className="nice-select" tabIndex="0"><span className="current">Max Price</span><ul className="list"><li data-value="Price" className="option selected">Max Price</li><li data-value="$" className="option">$50,000</li><li data-value="$" className="option">$45,000</li><li data-value="$" className="option">$40,000</li></ul></div>
//                                    </div>
//                                </div>
//                                <div className="col-lg-6 col-md-6 col-sm-6">
//                                    <div className="space-content">
//                                        <select name="SpaceSize" id="SpaceSize" style={{ display: 'none' }}>
//                                            <option value="Space">Space Size</option>
//                                            <option value="$">931 Sqf</option>
//                                            <option value="$">550 Sqf</option>
//                                            <option value="$">700 Sqf</option>
//                                        </select><div className="nice-select" tabIndex="0"><span className="current">Space Size</span><ul className="list"><li data-value="Space" className="option selected">Space Size</li><li data-value="$" className="option">931 Sqf</li><li data-value="$" className="option">550 Sqf</li><li data-value="$" className="option">700 Sqf</li></ul></div>
//                                    </div>
//                                </div>
//                                <div className="col-lg-6 col-md-6 col-sm-6">
//                                    <div className="room-content">
//                                        <select name="BedRooms" id="BedRooms" style={{ display: 'none' }}>
//                                            <option value="Room">Bed Rooms</option>
//                                            <option value="$">5</option>
//                                            <option value="$">4</option>
//                                            <option value="$">3</option>
//                                        </select><div className="nice-select" tabIndex="0"><span className="current">Bed Rooms</span><ul className="list"><li data-value="Room" className="option selected">Bed Rooms</li><li data-value="$" className="option">5</li><li data-value="$" className="option">4</li><li data-value="$" className="option">3</li></ul></div>
//                                    </div>
//                                </div>
//                            </div>
//                        </div>
//                        <div className="row">
//                            <div className="form-group-button col-lg-12">
//                                <a href="without-sidebar.html" className="form-btn">Search Now</a>
//                            </div>
//                        </div>
//                    </form>
//                </div>
//            </div>

//        </div>
//    </div>
//</section>