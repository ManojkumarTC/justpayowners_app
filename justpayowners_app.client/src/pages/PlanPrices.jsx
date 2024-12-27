

import Jsonfooter from '../mockdata/footerData.json';
import { NavLink, Link } from 'react-router-dom';
const PlanPrices = function () {
    console.log("PlanPrices- Render")
    return (<>
        <section className="grid-wrap3">
            <div className="container">
                <div className="col-md-12 rtcl-login-form-wrap">
                <div className="item-heading-center mb-20">
                    <span className="section-subtitle">Price Table</span>
                    <h2 className="section-title">Affortable Pricing Plan</h2>
                    {/*<div className="bg-title-wrap" style={{ display: "block" }}>*/}
                    {/*    <span className="background-title solid">Pricing</span>*/}
                    {/*</div>*/}
                </div>
                <div className="row justify-content-center">
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="pricing-box1 wow zoomIn" data-wow-delay=".3s" style={{ visibility: "visible", animationDelay: "0.3s", animationName: "zoomIn" }}>
                            <div className="heading-title">
                                <h3 className="item-title">BASIC</h3>
                                <div className="item-price">$15<span>/ month</span></div>
                                <p>Shen an unknown printer took a galley  of type and scrambled</p>
                            </div>
                            <div className="shape-img1">
                                <img src="/src/assets/img/figure/shape16.svg" alt="shape" width="56" height="64" />
                            </div>
                            <div className="pricing-list">
                                <ul>
                                    <li className="available"><i className="fas fa-check-circle"></i>All Listing Access</li>
                                    <li className="available"><i className="fas fa-check-circle"></i>Location Wise Map</li>
                                    <li className="available"><i className="fas fa-check-circle"></i>Free / Pro Ads</li>
                                    <li><i className="fas fa-check-circle"></i>Custom Map Setup</li>
                                    <li><i className="fas fa-check-circle"></i>Apps Integrated</li>
                                    <li><i className="fas fa-check-circle"></i>Advanced Custom Field</li>
                                    <li><i className="fas fa-check-circle"></i>Pro Features</li>
                                </ul>
                            </div>
                            <div className="pricing-button">
                                <a href="#" className="item-btn">Get Started</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="pricing-box1 wow zoomIn" data-wow-delay=".3s" style={{ visibility: "visible", animationDelay: "0.3s", animationName: "zoomIn" }}>
                            <div className="heading-title">
                                <h3 className="item-title">STANDARD</h3>
                                <div className="item-price">$29<span>/ month</span></div>
                                <p>Shen an unknown printer took a galley  of type and scrambled</p>
                            </div>
                            <div className="shape-img1">
                                <img src="/src/assets/img/figure/shape17.svg" alt="shape" width="56" height="64" />
                            </div>
                            <div className="pricing-list">
                                <ul>
                                    <li className="available"><i className="fas fa-check-circle"></i>All Listing Access</li>
                                    <li className="available"><i className="fas fa-check-circle"></i>Location Wise Map</li>
                                    <li className="available"><i className="fas fa-check-circle"></i>Free / Pro Ads</li>
                                    <li className="available"><i className="fas fa-check-circle"></i>Custom Map Setup</li>
                                    <li className="available"><i className="fas fa-check-circle"></i>Apps Integrated</li>
                                    <li><i className="fas fa-check-circle"></i>Advanced Custom Field</li>
                                    <li><i className="fas fa-check-circle"></i>Pro Features</li>
                                </ul>
                            </div>
                            <div className="pricing-button">
                                <a href="#" className="item-btn">Get Started</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="pricing-box1 wow zoomIn" data-wow-delay=".3s" style={{ visibility: "visible", animationDelay: "0.3s", animationName: "zoomIn" }}>
                            <div className="heading-title">
                                <h3 className="item-title">BASIC</h3>
                                <div className="item-price">$15<span>/ month</span></div>
                                <p>Shen an unknown printer took a galley  of type and scrambled</p>
                            </div>
                            <div className="shape-img1">
                                <img src="/src/assets/img/figure/shape18.svg" alt="shape" width="56" height="64" />
                            </div>
                            <div className="pricing-list">
                                <ul>
                                    <li className="available"><i className="fas fa-check-circle"></i>All Listing Access</li>
                                    <li className="available"><i className="fas fa-check-circle"></i>Location Wise Map</li>
                                    <li className="available"><i className="fas fa-check-circle"></i>Free / Pro Ads</li>
                                    <li className="available"><i className="fas fa-check-circle"></i>Custom Map Setup</li>
                                    <li className="available"><i className="fas fa-check-circle"></i>Apps Integrated</li>
                                    <li className="available"><i className="fas fa-check-circle"></i>Advanced Custom Field</li>
                                    <li className="available"><i className="fas fa-check-circle"></i>Pro Features</li>
                                </ul>
                            </div>
                            <div className="pricing-button">
                                <a href="#" className="item-btn">Get Started</a>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    );
};

export default PlanPrices;
