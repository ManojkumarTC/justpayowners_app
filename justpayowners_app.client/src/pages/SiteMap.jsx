

import Jsonfooter from '../mockdata/footerData.json';
import { NavLink, Link } from 'react-router-dom';

import '../assets/css/SiteMap.css';

const SiteMap = function () {
    console.log("SiteMap- Render")
    return (<>
        <section className="grid-wrap3">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 rtcl-login-form-wrap">
                        <div className="page-content-block">
                            <div className="col-md-12 ">
                                <h4>sitemap</h4>
                                

                                <div className="container" id="SiteMap">                                   
                                    <nav className="sitemap">
                                        <ul className="first">
                                            <li><a href="#">Home</a>
                                                <ul className="second">
                                                    <li><a href="#">About</a>
                                                        <ul className="third">
                                                            <li><a href="#">History</a></li>
                                                            <li><a href="#">Foundation</a></li>
                                                            <li><a href="#">Future Plans</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">Articles</a>
                                                        <ul className="third">
                                                            <li><a href="#">News</a></li>
                                                            <li><a href="#">Book Reviews</a></li>
                                                            <li><a href="#">Press</a></li>
                                                            <li><a href="#">Interviews</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">Visit</a>
                                                        <ul className="third">
                                                            <li><a href="#">Location</a></li>
                                                            <li><a href="#">Opening Times</a></li>
                                                            <li><a href="#">Tickets</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">Shop</a>
                                                        <ul className="third">
                                                            <li><a href="#">Books</a></li>
                                                            <li><a href="#">Gifts</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">Contact</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </nav>

                                  
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

export default SiteMap
;
