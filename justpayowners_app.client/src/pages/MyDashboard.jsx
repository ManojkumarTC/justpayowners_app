import {  MyDashboardNav } from "../components";
import React, { useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';

function MyDashboard() {

    useEffect(() => {
        // Some side effect logic
        console.log('MyDashboard rendered');

        return () => {
            // Cleanup if necessary
        };
    }, []); // Make sure dependencies are correctly set
    return (<>


        <section className="grid-wrap3">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-sm-12 col-12">
                        <div className="page-content-block">
                            <div className="col-md-12">
                                
                                
                                    <div className="container">                                      
                                        <div className="row row-cards">
                                            <MyDashboardNav />
                                            <div className="col-lg-10" id="tab-section-right">
                                            <div className="card m-0 p-4">

                                                <div className="card-body row">
                                                    <h3 className="widget-subtitle">My Dashboard</h3>     
                                               
                                                
                                                
                                                    <div className="card-body row ">
                                                    <div className="row justify-content-center">
                                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                                            <div className="pricing-box1 wow zoomIn" data-wow-delay=".3s" style={{visibility: "visible",animationDelay: "0.3s", animationName: "zoomIn" }}>
                                                                <div className="heading-title">
                                                                    <h3 className="item-title">BASIC</h3>
                                                                    <div className="item-price">$15<span>/ month</span></div>
                                                                    <p>Shen an unknown printer took a galley  of type and scrambled</p>
                                                                </div>
                                                                <div className="shape-img1">
                                                                    <img src="/src/assets/img/figure/shape16.svg" alt="shape" width="56" height="64" />
                                                                </div>
                                                               
                                                               
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                                            <div className="pricing-box1 wow zoomIn" data-wow-delay=".3s" style={{visibility: "visible",animationDelay: "0.3s", animationName: "zoomIn" }}>
                                                                <div className="heading-title">
                                                                    <h3 className="item-title">STANDARD</h3>
                                                                    <div className="item-price">$29<span>/ month</span></div>
                                                                    <p>Shen an unknown printer took a galley  of type and scrambled</p>
                                                                </div>
                                                                <div className="shape-img1">
                                                                    <img src="/src/assets/img/figure/shape17.svg" alt="shape" width="56" height="64" />
                                                                </div>
                                                               
                                                               
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                                            <div className="pricing-box1 wow zoomIn" data-wow-delay=".3s" style={{visibility: "visible",animationDelay: "0.3s", animationName: "zoomIn" }}>
                                                                <div className="heading-title">
                                                                    <h3 className="item-title">BASIC</h3>
                                                                    <div className="item-price">$15<span>/ month</span></div>
                                                                    <p>Shen an unknown printer took a galley  of type and scrambled</p>
                                                                </div>
                                                                <div className="shape-img1">
                                                                    <img src="/src/assets/img/figure/shape18.svg" alt="shape" width="56" height="64" />
                                                                </div>
                                                                
                                                               
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                                            <div className="pricing-box1 wow zoomIn" data-wow-delay=".3s" style={{ visibility: "visible", animationDelay: "0.3s", animationName: "zoomIn" }}>
                                                                <div className="heading-title">
                                                                    <h3 className="item-title">BASIC</h3>
                                                                    <div className="item-price">$15<span>/ month</span></div>
                                                                    <p>Shen an unknown printer took a galley  of type and scrambled</p>
                                                                </div>
                                                                <div className="shape-img1">
                                                                    <img src="/src/assets/img/figure/shape18.svg" alt="shape" width="56" height="64" />
                                                                </div>

                                                              
                                                            </div>
                                                        </div>
                                                    </div>

                                                    </div>

                                                  

                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                              

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        
    </>
    );
}

export default MyDashboard;

