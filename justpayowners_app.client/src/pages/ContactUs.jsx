

import Jsonfooter from '../mockdata/footerData.json';
import { NavLink, Link } from 'react-router-dom';
const ContactUs = function () {
    console.log("Contact us - Render")
    return (<>
       
        <section className="grid-wrap3">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="contact-box1">
                            <div className="contact-img">
                                <img src="https://radiustheme.com/demo/html/homlisti/img/blog/contact1.jpg" alt="contact" height="502" width="607" />
                            </div>
                            <div className="contact-content">
                                <h3 className="contact-title">Office Information</h3>
                                <div className="contact-list">
                                    <ul>
                                        <li>Homlisti Real Estate Agency</li>
                                        <li>(United Estate Of America) Co., Ltd.</li>
                                        <li>Bridge 8, Room 9201,</li>
                                        <li>#25 Jocker Goru Zhong Road,</li>
                                        <li>NYPD 200025 USA</li>
                                    </ul>
                                </div>
                                <div className="phone-box">
                                    <div className="item-lebel">Emergency Call :</div>
                                    <div className="phone-number">+86 21 6137 9292</div>
                                    <div className="item-icon"><i className="fas fa-phone-alt"></i></div>
                                </div>
                                <div className="social-box">
                                    <div className="item-lebel">Social Share :</div>
                                    <ul className="item-social">
                                        <li><a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="https://twitter.com/"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="https://vimeo.com/"><i className="fab fa-vimeo-v"></i></a></li>
                                        <li><a href="https://www.pinterest.com/"><i className="fab fa-pinterest-p"></i></a></li>
                                        <li><a href="https://web.whatsapp.com/"><i className="fab fa-whatsapp"></i></a></li>
                                    </ul>
                                    <div className="item-icon"><i className="fas fa-share-alt"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="contact-box2">
                            <iframe
                                width="600" height="550" style={{ border: 0 }}
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31099.803872209053!2d77.70488290468712!3d13.005364603014906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11abc8ffe3e7%3A0xd8368746c98e53bf!2sKrishnarajapuram%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1719839034377!5m2!1sen!2sin"
                                
                                allowfullscreen=""
                                loading="lazy"
                               
                            ></iframe>
                            <div className="contact-content">
                                <h3 className="contact-title">Quick Contact</h3>
                                <p>Borem ipsum dolor sit amet conse ctetur adipisicing elit sed do eiusmod
                                    Eorem ipsum dolor sit amet conse ctetur.
                                </p>
                                <form className="contact-box rt-contact-form" >
                                    <div className="row">
                                        <div className="form-group col-lg-6">
                                            <label>Name *</label>
                                            <input type="text" className="form-control" name="fname" placeholder="First Name*" data-error="First Name is required" required="" />
                                                <div className="help-block with-errors"></div>
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <label>Phone *</label>
                                            <input type="text" className="form-control" name="phone" placeholder="Phone*" data-error="Phone is required" required=""/>
                                                <div className="help-block with-errors"></div>
                                        </div>
                                        <div className="form-group col-lg-12">
                                            <label>Message *</label>
                                            <textarea name="comment" id="message" className="form-text" placeholder="Message" cols="30" rows="5" data-error="Message Name is required" required=""></textarea>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                        <div className="form-group col-lg-12">
                                            <button type="submit" className="item-btn disabled">Send message</button>
                                        </div>
                                    </div>
                                    <div className="form-response"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>  

        <section className="action-wrap1 wow zoomIn" data-wow-delay=".2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="action-box1" data-bg-image="https://radiustheme.com/demo/html/homlisti/img/figure/action1.jpg" style={{ backgroundImage: 'url("https://radiustheme.com/demo/html/homlisti/img/figure/action1.jpg")' }}>
                            <div className="action-layout">
                                <div className="item-title">
                                    <div className="item-icon"><i className="fas fa-users"></i></div>
                                    <div className="item-head">
                                        <h3>Become an Agent</h3>
                                        <p>Agent hen an unknown printer took a galley scramble</p>
                                    </div>

                                </div>
                                <div className="call-button">
                                    <a href="agency-lists1.html" className="call-btn">Join Now</a>
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

export default ContactUs;
