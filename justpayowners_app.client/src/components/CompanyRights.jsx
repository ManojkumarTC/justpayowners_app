/* eslint-disable react/prop-types */
import { NavLink, useNavigate } from 'react-router-dom'

const CompanyRights = function ({ json }) {

    const navigate = useNavigate();
    const handleNavClick = (e, path) => {
        e.preventDefault();
        navigate(path); // Navigates to the specified path
        window.scrollTo(0, 0); // Scrolls to the top
    };
    return (<>
        <div className="footer-bottom">
            <div className="row justify-content-center">
                <div className="col-lg-7 col-md-6">
                    <div className="copyright-area1">
                        <ul>
                            {json.siteMap.map((item, index) => {
                                return (<li key={index} className="nav-item sitemap"><NavLink to={item.url} onClick={(e) => handleNavClick(e, item.url)}  className="nav-link" >{item.text}</NavLink></li>
                                );
                            })}

                        </ul>
                    </div>
                </div>
                <div className="col-lg-5 col-md-6">
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
                    <div className="col-lg-12 col-md-12">
                        <div id="copyright" className="copyright-area2">
                            <p><span>Copyright � 2024 <NavLink to="/" >justpayowners.In Pvt. Ltd</NavLink>. </span>  <span><NavLink to="/terms-and-condition" >Terms & Conditions. </NavLink></span><span>All rights reserved--Web Design by Backbencher</span></p>
                        </div>
                    </div>
                </div>
    </>
    );
};
export default CompanyRights;


