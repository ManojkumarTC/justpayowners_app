import React from 'react'
import jsonHeader from '../mockdata/locationData.json';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa6';
const HeaderNavMenu = ({ type }) => {
    const menuTitle = (type) => {
        switch (type) {
            case 'Buyers':
                return 'Top Cities to Buy Property';
            case 'Tenants':
                return 'Top Cities to Rent Property';
            case 'Owners':
                return 'New Project by City';
            case 'Services':
                return 'Real Estate Agents in Top Cities';
            case 'Builders':
                return 'Real Estate Agents in Top Cities';
        }
    }

    const renderMenu = (type) => {
        switch (type) { 
            case 'Buyers':
                return <>
                    <div className="template-mega-menu">
                        <div className="container">
                            <div className="row">
                                <div className="col-3">
                                    <div className="menu-ctg-title">Popular Choices</div>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="blog1.html">
                                                <i className="fas fa-chart-pie"></i>New Projects</a>
                                        </li>
                                        <li>
                                            <a href="blog2.html">
                                                <i className="fas fa-chart-pie"></i>Budget Homes</a>
                                        </li>
                                        <li>
                                            <a href="blog-details1.html">
                                                <i className="fas fa-chart-pie"></i>Owner Properties</a>
                                        </li>
                                        <li>
                                            <a href="blog-details1.html">
                                                <i className="fas fa-chart-pie"></i>COMMERCIAL</a>
                                        </li>
                                        <li>
                                            <a href="blog-details1.html">
                                                <i className="fas fa-chart-pie"></i>Land/Plot Sales</a>
                                        </li>                                       
                                    </ul>
                                </div>
                                <div className="col-3">
                                    <div className="menu-ctg-title">Top Cities</div>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="agent-lists1.html"><i className="fas fa-user"></i>Property in Delhi / NCR</a>
                                        </li>
                                        <li>
                                            <a href="agency-lists1.html"><i className="fas fa-user"></i>Property in Mumbai</a>
                                        </li>
                                        <li>
                                            <a href="agent-reviews1.html"><i className="fas fa-user"></i>Property in Bangalore</a>
                                        </li>
                                        <li>
                                            <a href="agent-reviews1.html"><i className="fas fa-user"></i>Property in Hyderabad</a>
                                        </li>
                                        <li>
                                            <a href="agent-reviews1.html"><i className="fas fa-user"></i>Property for rent in Pune</a>
                                        </li>
                                        <li>
                                            <a href="agent-reviews1.html"><i className="fas fa-user"></i>Property for rent in Kolkata</a>
                                        </li>
                                        <li>
                                            <a href="agent-reviews1.html"><i className="fas fa-user"></i>Property for rent in Chennai</a>
                                        </li>
                                        <li>
                                            <a href="agent-reviews1.html"><i className="fas fa-user"></i>Property for rent in Ahmedabad</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-3">
                                    <div className="menu-ctg-title">Articles & News</div>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="agent-reviews1.html"><i className="far fa-money-bill-alt"></i>Articles For Buyers</a>
                                        </li>
                                        <li>
                                            <a href="agent-reviews1.html"><i className="far fa-money-bill-alt"></i>Real Estate News</a>
                                        </li>
                                        <li>
                                            <a href="agent-reviews1.html"><i className="far fa-money-bill-alt"></i>Buyer Guide</a>
                                        </li>                                        
                                    </ul>
                                </div>
                                <div className="col-3">
                                    <div className="menu-ctg-title">Budget</div>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="pricing-1.html">
                                                <i className="fas fa-chalkboard-teacher"></i>Under ₹ 50 Lac
                                            </a>
                                        </li>
                                        <li>
                                            <a href="404.html">
                                                <i className="fas fa-exclamation-triangle"></i>
                                                ₹ 50 Lac - ₹ 1 Cr</a>
                                        </li>
                                        <li>
                                            <a href="contact.html">
                                                <i className="fas fa-spinner"></i>₹ 1 Cr - ₹ 1.5 Cr</a>
                                        </li>
                                        <li>
                                            <a href="contact.html">
                                                <i className="fas fa-spinner"></i>Above ₹ 1.5 Cr</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </>               

            case 'Tenants':
                return <> <div className="template-mega-menu">
                    <div className="container">
                        <div className="row">
                            <div className="col-3">
                                <div className="menu-ctg-title">Popular Choices</div>
                                <ul className="sub-menu">
                                    <li>
                                        <a href="blog1.html">
                                            <i className="fas fa-chart-pie"></i>Owner Properties</a>
                                    </li>
                                    <li>
                                        <a href="blog2.html">
                                            <i className="fas fa-chart-pie"></i>Verified Properties</a>
                                    </li>
                                    <li>
                                        <a href="blog-details1.html">
                                            <i className="fas fa-chart-pie"></i>Furnished Homes</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-3">
                                <div className="menu-ctg-title">Property Types</div>
                                <ul className="sub-menu">
                                    <li>
                                        <a href="agent-lists1.html"><i className="fas fa-user"></i>Property for rent in Delhi / NCR</a>
                                    </li>
                                    <li>
                                        <a href="agency-lists1.html"><i className="fas fa-user"></i>Property for rent Mumbai</a>
                                    </li>
                                    <li>
                                        <a href="agent-reviews1.html"><i className="fas fa-user"></i>Property for rent Bangalore</a>
                                    </li>
                                    <li>
                                        <a href="agent-reviews1.html"><i className="fas fa-user"></i>Property for rent Hyderabad</a>
                                    </li>
                                    <li>
                                        <a href="agent-reviews1.html"><i className="fas fa-user"></i>Property for rent in Pune</a>
                                    </li>
                                    <li>
                                        <a href="agent-reviews1.html"><i className="fas fa-user"></i>Property for rent in Kolkata</a>
                                    </li>
                                    <li>
                                        <a href="agent-reviews1.html"><i className="fas fa-user"></i>Property for rent in Chennai</a>
                                    </li>
                                    <li>
                                        <a href="agent-reviews1.html"><i className="fas fa-user"></i>Property for rent in Ahmedabad</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-3">
                                <div className="menu-ctg-title">Articles & News</div>
                                <ul className="sub-menu">
                                    <li>
                                        <a href="agent-reviews1.html"><i className="far fa-money-bill-alt"></i>Articles For Tenants</a>
                                    </li>
                                    <li>
                                        <a href="about-1.html">
                                            <i className="fas fa-camera"></i>Real Estate News</a>
                                    </li>
                                    <li>
                                        <a href="agent-lists1.html">
                                            <i className="far fa-address-card"></i>Rent Agreement</a>
                                    </li>
                                    <li>
                                        <a href="agent-lists1.html">
                                            <i className="far fa-address-card"></i>Rent Agreement</a>
                                    </li>
                                    <li>
                                        <a href="agent-lists1.html">
                                            <i className="far fa-address-card"></i> Share Requirement</a>
                                    </li>


                                   
                                </ul>
                            </div>
                            <div className="col-3">
                                <div className="menu-ctg-title">Budget</div>
                                <ul className="sub-menu">
                                    <li>
                                        <a href="pricing-1.html">
                                            <i className="fas fa-chalkboard-teacher"></i>Under ₹ 10,000
                                        </a>
                                    </li>
                                    <li>
                                        <a href="404.html">
                                            <i className="fas fa-exclamation-triangle"></i>
                                            ₹ 10,000 - ₹ 15,000</a>
                                    </li>
                                    <li>
                                        <a href="contact.html">
                                            <i className="fas fa-spinner"></i>₹ 15,000 - ₹ 25,000</a>
                                    </li>
                                    <li>
                                        <a href="contact.html">
                                            <i className="fas fa-spinner"></i>Above ₹ 25,000</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </>

            case 'Owners':
                return <><ul className="dropdown-menu-col-1">
                    <li>
                        <a href="agent-lists1.html">Post Property for Free</a>
                    </li>
                    <li>
                        <a href="agency-lists1.html">Owner Services</a>
                    </li>
                    <li>
                        <a href="single-agent1.html">Articles For Owners</a>
                    </li>
                    <li>
                        <a href="single-agency1.html">Property Valuation</a>
                    </li>
                </ul>
            </>

            case 'Services':
                return <> <ul className="dropdown-menu-col-1">
                                            <li>
                        <a href="agent-lists1.html">Home Interior Design Services</a>
                                            </li>
                                            <li>
                        <a href="agency-lists1.html">Design Consultation</a>
                                            </li>
                                            
                    <li>
                        <a href="single-agency1.html">Home Loans</a>
                    </li>
                    <li>
                        <a href="single-agency1.html">Balance Transfer</a>
                    </li>
                    <li>
                        <a href="single-agency1.html">Loan Against Property</a>
                    </li>
                                        </ul>
            </>
        }
    }
    return (
        <>
           
                {/*} <p className='_link_hed'>
                    {menuTitle(type)}                   
                </p>*/}




                <ul className='sub_in_link2'>
                    {renderMenu(type)}
                    {/*<li className='_more'>
                        <Link to="#" title="More">View all City
                            <FaAngleRight />
                        </Link>
                    </li>*/}
                </ul>
            
        </>
    )
}

export default HeaderNavMenu