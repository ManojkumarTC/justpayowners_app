import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { HeaderLink } from './components';

const SiteHeader = function () {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [submenuState, setSubmenuState] = useState({
        forBuyers: false,
        popularChoices: false,
    });

    const handleSidebarToggle = () => {
        if (isSidebarOpen) {
            setSidebarOpen(false);
            document.body.classList.remove('slidemenuon');
        } else {
            setSidebarOpen(true);
            document.body.classList.add('slidemenuon');
        }
    };

    const handleMenuClick = (menuKey) => {
        setSubmenuState((prevState) => ({
            ...prevState,
            [menuKey]: !prevState[menuKey],
        }));
    };

    return (
        <>
            {/* Header Link Section */}
            <HeaderLink />

            {/* Main Header Menu */}
            <div className="rt-header-menu mean-container position-relative" id="meanmenu">
                <div className="mean-bar">
                    <a href="index.html">
                        <img src="/src/assets/brand/justpayowner-logo.svg" alt='logo' className='img-fluid' />
                    </a>
                    <div className="mean-bar--right">
                        <div className="actions search">
                            <a href="#template-search" className="item-icon" title="Search">
                                <i className="fas fa-search"></i>
                            </a>
                        </div>
                        <div className="actions user">
                            <a href="account.html"><i className="flaticon-user"></i></a>
                        </div>
                        {/* Sidebar Toggle Button */}
                        <span className="sidebarBtn" onClick={handleSidebarToggle} style={{ cursor: 'pointer' }}>
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </span>
                    </div>
                </div>

                {/* Sidebar menu visibility */}
                <div id="mobile-menu"
                    className={`rt-slide-nav ${isSidebarOpen ? 'open' : 'closed'}`}
                    style={{
                        transition: 'all 0.3s ease',
                        display: isSidebarOpen ? 'block' : 'none',
                    }}
                >
                    <div className="offscreen-navigation">
                        <nav className="menu-main-primary-container">
                            <ul className="menu">
                                {/* For Buyers Dropdown */}
                                <li className="list menu-item-parent menu-item-has-children">
                                    <a className={`animation ${submenuState['forBuyers'] ? 'opened' : ''}`} onClick={() => handleMenuClick('forBuyers')}>
                                        <a href="index.html">
                                            For Buyers
                                        </a>
                                    </a>
                                    <ul
                                        className="main-menu__dropdown sub-menu" style={{
                                            display: ` ${submenuState['forBuyers'] ? 'block' : 'none'
                                                }`
                                        }}
                                    >
                                        <li className="list menu-item-parent menu-item-has-children">
                                            <a
                                                href="#"
                                                className={`animation ${submenuState['popularChoices'] ? 'opened' : ''
                                                    }`}
                                                onClick={() => handleMenuClick('popularChoices')}
                                            >
                                                Popular Choices
                                            </a>
                                            <ul
                                                className="main-menu__dropdown sub-menu" style={{
                                                    display: ` ${submenuState['popularChoices'] ? 'block' : 'none'
                                                        }`
                                                }}
                                            >
                                                <li><a href="blog1.html"><i className="fas fa-chart-pie"></i> New Projects</a></li>
                                                <li><a href="blog2.html"><i class="fas fa-chart-pie"></i>Budget Homes</a></li>
                                                <li><a href="blog-details1.html"><i class="fas fa-chart-pie"></i>Owner Properties</a></li>
                                                <li><a href="blog-details1.html"><i class="fas fa-chart-pie"></i>COMMERCIAL</a></li>
                                                <li><a href="blog-details1.html"><i class="fas fa-chart-pie"></i>Land/Plot Sales</a></li>
                                            </ul>
                                        </li>
                                        <li className="list menu-item-parent menu-item-has-children">
                                            <a
                                                href="#"
                                                className={`animation ${submenuState['TopCities'] ? 'opened' : ''
                                                    }`}
                                                onClick={() => handleMenuClick('TopCities')}
                                            >
                                                Top Cities
                                            </a>
                                            <ul
                                                className="main-menu__dropdown sub-menu" style={{
                                                    display: ` ${submenuState['TopCities'] ? 'block' : 'none'
                                                        }`
                                                }}
                                            >
                                                <li><a href="agent-lists1.html"><i class="fas fa-user"></i>Property in Delhi / NCR</a></li>
                                                <li><a href="agency-lists1.html"><i class="fas fa-user"></i>Property in Mumbai</a></li>
                                                <li><a href="agent-reviews1.html"><i class="fas fa-user"></i>Property in Bangalore</a></li>
                                                <li><a href="agent-reviews1.html"><i class="fas fa-user"></i>Property in Hyderabad</a></li>
                                                <li><a href="agent-reviews1.html"><i class="fas fa-user"></i>Property for rent in Pune</a></li>
                                                <li><a href="agent-reviews1.html"><i class="fas fa-user"></i>Property for rent in Kolkata</a></li>
                                                <li><a href="agent-reviews1.html"><i class="fas fa-user"></i>Property for rent in Chennai</a></li>
                                                <li><a href="agent-reviews1.html"><i class="fas fa-user"></i>Property for rent in Ahmedabad</a></li>
                                            </ul>
                                        </li>
                                        <li className="list menu-item-parent menu-item-has-children">
                                            <a
                                                href="#"
                                                className={`animation ${submenuState['ArticlesAndNews'] ? 'opened' : ''
                                                    }`}
                                                onClick={() => handleMenuClick('ArticlesAndNews')}
                                            >
                                                Articles & News
                                            </a>
                                            <ul
                                                className="main-menu__dropdown sub-menu" style={{
                                                    display: ` ${submenuState['ArticlesAndNews'] ? 'block' : 'none'
                                                        }`
                                                }}
                                            >
                                                <li><a href="agent-reviews1.html"><i class="far fa-money-bill-alt"></i>Articles For Buyers</a></li>
                                                <li><a href="agent-reviews1.html"><i class="far fa-money-bill-alt"></i>Real Estate News</a></li>
                                                <li><a href="agent-reviews1.html"><i class="far fa-money-bill-alt"></i>Buyer Guide</a></li>
                                            </ul>
                                        </li>
                                        <li className="list menu-item-parent menu-item-has-children">
                                            <a
                                                href="#"
                                                className={`animation ${submenuState['Budget'] ? 'opened' : ''
                                                    }`}
                                                onClick={() => handleMenuClick('Budget')}
                                            >
                                                Budget
                                            </a>
                                            <ul
                                                className="main-menu__dropdown sub-menu" style={{
                                                    display: ` ${submenuState['Budget'] ? 'block' : 'none'
                                                        }`
                                                }}
                                            >

                                                <li><a href="pricing-1.html"><i class="fas fa-chalkboard-teacher"></i>Under ₹ 50 Lac</a></li>
                                                <li><a href="404.html"><i class="fas fa-exclamation-triangle"></i>₹ 50 Lac - ₹ 1 Cr</a></li>
                                                <li><a href="contact.html"><i class="fas fa-spinner"></i>₹ 1 Cr - ₹ 1.5 Cr</a></li>
                                                <li><a href="contact.html"><i class="fas fa-spinner"></i>Above ₹ 1.5 Cr</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="list menu-item-parent menu-item-has-children">
                                    <a className={`animation ${submenuState['ForTenants'] ? 'opened' : ''}`} onClick={() => handleMenuClick('ForTenants')}>
                                        <a href="with-sidebar2.html">
                                            For Tenants
                                        </a>
                                    </a>
                                    <ul
                                        className="main-menu__dropdown sub-menu" style={{
                                            display: ` ${submenuState['ForTenants'] ? 'block' : 'none'
                                                }`
                                        }}
                                    >
                                        <li className="list menu-item-parent menu-item-has-children">
                                            <a
                                                href="#"
                                                className={`animation ${submenuState['popularChoices'] ? 'opened' : ''
                                                    }`}
                                                onClick={() => handleMenuClick('popularChoices')}
                                            >
                                                Popular Choices
                                            </a>
                                            <ul
                                                className="main-menu__dropdown sub-menu" style={{
                                                    display: ` ${submenuState['popularChoices'] ? 'block' : 'none'
                                                        }`
                                                }}
                                            >
                                                <li><a href="blog1.html"><i class="fas fa-chart-pie"></i>Owner Properties</a></li>
                                                <li><a href="blog2.html"><i class="fas fa-chart-pie"></i>Verified Properties</a></li>
                                                <li><a href="blog-details1.html"><i class="fas fa-chart-pie"></i>Furnished Homes</a></li>
                                            </ul>
                                        </li>
                                        <li className="list menu-item-parent menu-item-has-children">
                                            <a
                                                href="#"
                                                className={`animation ${submenuState['PropertyTypes'] ? 'opened' : ''
                                                    }`}
                                                onClick={() => handleMenuClick('PropertyTypes')}
                                            >
                                                Property Types
                                            </a>
                                            <ul
                                                className="main-menu__dropdown sub-menu" style={{
                                                    display: ` ${submenuState['PropertyTypes'] ? 'block' : 'none'
                                                        }`
                                                }}
                                            >
                                                <li><a href="agent-lists1.html"><i class="fas fa-user"></i>Property for rent in Delhi / NCR</a></li>
                                                <li><a href="agency-lists1.html"><i class="fas fa-user"></i>Property for rent Mumbai</a></li>
                                                <li><a href="agent-reviews1.html"><i class="fas fa-user"></i>Property for rent Bangalore</a></li>
                                                <li><a href="agent-reviews1.html"><i class="fas fa-user"></i>Property for rent Hyderabad</a></li>
                                                <li><a href="agent-reviews1.html"><i class="fas fa-user"></i>Property for rent in Pune</a></li>
                                                <li><a href="agent-reviews1.html"><i class="fas fa-user"></i>Property for rent in Kolkata</a></li>
                                                <li><a href="agent-reviews1.html"><i class="fas fa-user"></i>Property for rent in Chennai</a></li>
                                                <li><a href="agent-reviews1.html"><i class="fas fa-user"></i>Property for rent in Ahmedabad</a></li>
                                            </ul>
                                        </li>
                                        <li className="list menu-item-parent menu-item-has-children">
                                            <a
                                                href="#"
                                                className={`animation ${submenuState['ArticlesAndNews'] ? 'opened' : ''
                                                    }`}
                                                onClick={() => handleMenuClick('ArticlesAndNews')}
                                            >
                                                Articles & News
                                            </a>
                                            <ul
                                                className="main-menu__dropdown sub-menu" style={{
                                                    display: ` ${submenuState['ArticlesAndNews'] ? 'block' : 'none'
                                                        }`
                                                }}
                                            >
                                                <li><a href="agent-reviews1.html"><i class="far fa-money-bill-alt"></i>Articles For Tenants</a></li>
                                                <li><a href="about-1.html"><i class="fas fa-camera"></i>Real Estate News</a></li>
                                                <li><a href="agent-lists1.html"><i class="far fa-address-card"></i>Rent Agreement</a></li>
                                                <li><a href="agent-lists1.html"><i class="far fa-address-card"></i>Rent Agreement</a></li>
                                                <li><a href="agent-lists1.html"><i class="far fa-address-card"></i> Share Requirement</a></li>
                                            </ul>
                                        </li>
                                        <li className="list menu-item-parent menu-item-has-children">
                                            <a
                                                href="#"
                                                className={`animation ${submenuState['Budget'] ? 'opened' : ''
                                                    }`}
                                                onClick={() => handleMenuClick('Budget')}
                                            >
                                                Budget
                                            </a>
                                            <ul
                                                className="main-menu__dropdown sub-menu" style={{
                                                    display: ` ${submenuState['Budget'] ? 'block' : 'none'
                                                        }`
                                                }}
                                            >
                                                <li><a href="pricing-1.html"><i class="fas fa-chalkboard-teacher"></i>Under ₹ 10,000</a></li>
                                                <li><a href="404.html"><i class="fas fa-exclamation-triangle"></i>₹ 10,000 - ₹ 15,000</a></li>
                                                <li><a href="contact.html"><i class="fas fa-spinner"></i>₹ 15,000 - ₹ 25,000</a></li>
                                                <li><a href="contact.html"><i class="fas fa-spinner"></i>Above ₹ 25,000</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="list menu-item-parent menu-item-has-children">
                                    <a className={`animation ${submenuState['ForOwners'] ? 'opened' : ''}`} onClick={() => handleMenuClick('ForOwners')}>
                                        <a href="agent-lists1.html">
                                            For Owners
                                        </a>
                                    </a>
                                    <ul
                                        className="main-menu__dropdown sub-menu" style={{
                                            display: ` ${submenuState['ForOwners'] ? 'block' : 'none'
                                                }`
                                        }}
                                    >
                                        <li><a href="agent-lists1.html">Post Property for Free</a></li>
                                        <li><a href="agency-lists1.html">Owner Services</a></li>
                                        <li><a href="single-agent1.html">Articles For Owners</a></li>
                                        <li><a href="single-agency1.html">Property Valuation</a></li>
                                    </ul>
                                </li>
                                <li className="list menu-item-parent menu-item-has-children">
                                    <a className={`animation ${submenuState['OurServices'] ? 'opened' : ''}`} onClick={() => handleMenuClick('OurServices')}>
                                        <a href="agent-lists1.html">
                                            Our Services
                                        </a>
                                    </a>
                                    <ul
                                        className="main-menu__dropdown sub-menu" style={{
                                            display: ` ${submenuState['OurServices'] ? 'block' : 'none'
                                                }`
                                        }}
                                    >
                                        <li><a href="agent-lists1.html">Home Interior Design Services</a></li>
                                        <li><a href="agency-lists1.html">Design Consultation</a></li>
                                        <li><a href="single-agency1.html">Home Loans</a></li>
                                        <li><a href="single-agency1.html">Balance Transfer</a></li>
                                        <li><a href="single-agency1.html">Loan Against Property</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SiteHeader;
