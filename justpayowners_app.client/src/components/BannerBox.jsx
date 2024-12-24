
const BannerBox = function () {
    return (<>
        <section
            className="banner-collection1 motion-effects-wrap"
            data-wow-delay=".2s"
        >
            <div className="shape-img1">
                <img
                    src="/src/assets/img/svg/video-bg-2.svg"
                    alt="figure"
                    height="149"
                    width="230"
                />
            </div>
            <div className="shape-img2">
                <img
                    src="/src/assets/img/svg/video-bg-2.svg"
                    alt="figure"
                    height="149"
                    width="230"
                />
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8 col-md-7">
                        <div className="banner-box1">
                            <div className="item-img">
                                <img
                                    src="/src/assets/img/banner/banner1.png"
                                    alt="banner"
                                    height="252"
                                    width="169"
                                    className="img-bg-space"
                                />
                                <div
                                    className="motion-effects3"
                                    style={{
                                        transform: "matrix(1, 0, 0, 1, 12.5092, -12.793)",
                                    }}
                                >
                                    <img
                                        src="/src/assets/img/figure/shape3.png"
                                        alt="shape"
                                        height="113"
                                        width="113"
                                    />
                                </div>
                                <div
                                    className="motion-effects4"
                                    style={{
                                        transform: "matrix(1, 0, 0, 1, 4.16973, -4.26432)",
                                    }}
                                >
                                    <img
                                        src="/src/assets/img/figure/shape4.png"
                                        alt="shape"
                                        height="157"
                                        width="154"
                                    />
                                </div>
                                <div
                                    className="motion-effects5"
                                    style={{
                                        transform: "matrix(1, 0, 0, 1, 12.5092, -12.793)",
                                    }}
                                >
                                    <img
                                        src="/src/assets/img/figure/shape5.png"
                                        alt="shape"
                                        height="91"
                                        width="102"
                                    />
                                </div>
                            </div>
                            <div className="item-content">
                                <h2 className="heading-title">
                                    Become a Real Estate Agent
                                </h2>
                                <p>
                                    We only work with the best companies around the
                                    globe to survey
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-5 d-flex justify-content-between">
                        <div className="banner-button mb-3">
                            <a
                                href="/contact-us"
                                className="banner-btn"
                            >
                                Register Now
                            </a>
                        </div>
                        <div className="banner-button">
                            <a
                                href="/contact-us"
                                className="banner-btn"
                            >
                                Contact us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    );
};

export default BannerBox;



