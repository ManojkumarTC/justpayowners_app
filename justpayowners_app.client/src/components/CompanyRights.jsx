/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom'

const CompanyRights = function ({ json }) {
    return (<>
        <div className="footer-bottom">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-6">
                    <div className="copyright-area1">
                        <ul>
                            {json.siteMap.map((item, index) => {
                                return (<li key={index} className="nav-item sitemap"><NavLink to={item.url} className="nav-link" >{item.text}</NavLink></li>
                                );
                            })}

                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="copyright-area2">
                        <div className="footer-logo-area">
                            <div className="item-social">
                                <ul>
                                    <li><a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="https://twitter.com/" target="_blank"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="https://web.whatsapp.com/" target="_blank"><i className="fab fa-whatsapp"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="row justify-content-center">
                <div className="row justify-content-center p-0">
                    <div className="col-lg-12 col-md-12 p-0">
                        <div className="copyright-area1">
                            <p><span>Copyright � 2024 <NavLink to="/" >justpayowners.In Pvt. Ltd</NavLink>. </span>  <span><NavLink to="/terms-and-condition" >Terms & Conditions. </NavLink></span><span>All rights reserved--Web Design by Backbencher</span></p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>
    );
};
export default CompanyRights;


