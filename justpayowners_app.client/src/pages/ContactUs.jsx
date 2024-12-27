

import Jsonfooter from '../mockdata/footerData.json';
import { NavLink, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
const ContactUs = function () {
    console.log("Contact us - Render")
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log('Form Data:', data);
        alert('Message sent successfully!');
    };
    return (<>       
        <section className="grid-wrap3">
            <div className="container">
               
                    
                        <div className="col-lg-12 rtcl-login-form-wrap">
                        <div className="contact-box1">
                            <div className="contact-img">
                                <img src="https://radiustheme.com/demo/html/homlisti/img/blog/contact1.jpg" alt="contact" height="502" width="607" />
                            </div>
                            <div className="contact-content">
                                <h3 className="contact-title">Office Information</h3>
                                <div className="contact-list">
                                    <ul>
                                        <li>justpayowners Real Estate Agency</li>
                                        <li> Kr Puram,Bangalore -560036{" "}</li>
                                        <li>( 9:30 AM to 6:00 PM IST, Mon to Sat )</li>                                       
                                    </ul>
                                </div>
                                <div className="phone-box">
                                    <div className="item-lebel">Email :</div>                                    
                                    <div className="phone-number"><Link
                                        to="#"
                                        onClick={(e) => {
                                            window.location.href = mailto;
                                            e.preventDefault();
                                        }}
                                    >
                                        support@justpayowners.com{" "}
                                    </Link>{" "}</div>                                  
                                   
                                    <div className="item-lebel">Contact :</div>
                                    <div className="phone-number">+91 9900803075</div>
                                   
                                </div>
                                <div className="social-box">
                                    <div className="item-lebel"> <strong>Social Share:</strong>  </div>
                                    <ul className="item-social">
                                        <li><a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="https://twitter.com/"><i className="fab fa-twitter"></i></a></li>                                       
                                        <li><a href="https://web.whatsapp.com/"><i className="fab fa-whatsapp"></i></a></li>
                                    </ul>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                
            </div>

            <div className="container">
               
                    <div className="col-lg-12 rtcl-login-form-wrap">
                        <div className="contact-box2">
                            <iframe
                                width="600" height="550" style={{ border: 0 }}
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31099.803872209053!2d77.70488290468712!3d13.005364603014906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11abc8ffe3e7%3A0xd8368746c98e53bf!2sKrishnarajapuram%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1719839034377!5m2!1sen!2sin"
                                
                                allowfullscreen=""
                                loading="lazy"
                               
                            ></iframe>
                            <div className="contact-content">
                                <h3 className="contact-title">Quick Contact</h3>                                
                                <p><strong>Note:-</strong> Please drop your message here                                     
                                </p>
                                <form className="contact-box rt-contact-form" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="row">
                                        {/* First Name Field */}
                                        <div className="form-group col-lg-6">
                                            <label htmlFor="fname">Name *</label>
                                            <input
                                                type="text"
                                                className={`form-control ${errors.fname ? 'is-invalid' : ''}`}
                                                {...register('fname', { required: 'First Name is required' })}
                                                placeholder="First Name*"
                                            />
                                            {errors.fname && <div className="invalid-feedback">{errors.fname.message}</div>}
                                        </div>

                                        {/* Phone Field */}
                                        <div className="form-group col-lg-6">
                                            <label htmlFor="phone">Phone *</label>
                                            <input
                                                type="text"
                                                className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                                                {...register('phone', {
                                                    required: 'Phone is required',
                                                    pattern: {
                                                        value: /^[0-9]+$/,
                                                        message: 'Phone must be a valid number',
                                                    },
                                                })}
                                                placeholder="Phone*"
                                            />
                                            {errors.phone && <div className="invalid-feedback">{errors.phone.message}</div>}
                                        </div>

                                        {/* Email Field */}
                                        <div className="form-group col-lg-12">
                                            <label htmlFor="email">Email *</label>
                                            <input
                                                type="email"
                                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                                {...register('email', {
                                                    required: 'Email is required',
                                                    pattern: {
                                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                                        message: 'Enter a valid email address',
                                                    },
                                                })}
                                                placeholder="Email*"
                                            />
                                            {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                                        </div>

                                        {/* Message Field */}
                                        <div className="form-group col-lg-12">
                                            <label htmlFor="message">Message *</label>
                                            <textarea
                                                className={`form-text ${errors.comment ? 'is-invalid' : ''}`}
                                                {...register('comment', { required: 'Message is required' })}
                                                placeholder="Message"
                                                cols="30"
                                                rows="5"
                                            ></textarea>
                                            {errors.comment && <div className="invalid-feedback">{errors.comment.message}</div>}
                                        </div>

                                        {/* Submit Button */}
                                        <div className="form-group col-lg-12">
                                            <button type="submit" className="item-btn">
                                                Send message
                                            </button>
                                        </div>
                                    </div>
                                </form>
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
