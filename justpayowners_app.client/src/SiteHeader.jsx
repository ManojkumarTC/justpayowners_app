
import { NavLink, Link } from 'react-router-dom'

import { HeaderLink  } from './components'

const SiteHeader = function () {
  return (
      <>          


          <HeaderLink />

       
        

          <div
              className="rt-header-menu mean-container position-relative"
              id="meanmenu">
              <div className="mean-bar">
                  <a href="index.html">
                      <img src='img/logo_light2.svg' alt='logo' className='img-fluid' />
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
                      <span className="sidebarBtn">
                          <span className="bar"></span>
                          <span className="bar"></span>
                          <span className="bar"></span>
                          <span className="bar"></span>
                      </span>
                  </div>
              </div>
              <div className="rt-slide-nav">
                  <div className="offscreen-navigation">
                      <nav className="menu-main-primary-container">
                          <ul className="menu">
                              <li className="list menu-item-parent menu-item-has-children">
                                  <a className="animation" href="index.html">Home</a>
                                  <ul className="main-menu__dropdown sub-menu">
                                      <li><a href="index.html">Home 01</a></li>
                                      <li><a href="index2.html">Home 02</a></li>
                                      <li><a href="index3.html">Home 03</a></li>
                                      <li><a href="index4.html">Home 04</a></li>
                                      <li><a href="index5.html">Home 05</a></li>
                                  </ul>
                              </li>
                              <li className="list menu-item-parent menu-item-has-children">
                                  <a className="animation" href="with-sidebar2.html">Listing</a>
                                  <ul className="main-menu__dropdown sub-menu">
                                      <li>
                                          <a href="half-map1.html">Properties Map Grid</a>
                                      </li>
                                      <li>
                                          <a href="half-map2.html">Properties Map List</a>
                                      </li>
                                      <li>
                                          <a href="without-sidebar.html">Properties Full Width</a>
                                      </li>
                                      <li>
                                          <a href="with-sidebar.html">Properties Grid</a>
                                      </li>
                                      <li>
                                          <a href="#">Single Property 1</a>
                                      </li>
                                      <li>
                                          <a href="single-listing2.html">Single Property 2</a>
                                      </li>
                                      <li>
                                          <a href="single-listing3.html">Single Property 3</a>
                                      </li>
                                  </ul>
                              </li>
                              <li className="list menu-item-parent menu-item-has-children">
                                  <a className="animation" href="index.html">Pages</a>
                                  <ul className="main-menu__dropdown sub-menu">
                                      <li><a href="https://www.radiustheme.com/demo/html/homlisti/about.html">About Us</a></li>
                                      <li><a href="404.html">Error page</a></li>
                                      <li>
                                          <a href="with-sidebar.html">Properties Grid</a>
                                      </li>
                                      <li><a href="without-sidebar.html">Properties Full Width</a></li>
                                      <li><a href="single-agency1.html">Single Agency page</a></li>
                                      <li><a href="single-agent1.html">Single-agent page</a></li>
                                      <li><a href="pricing-1.html">Pricing page</a></li>
                                  </ul>
                              </li>
                              <li className="list menu-item-parent menu-item-has-children">
                                  <a className="animation" href="index.html">Blog</a>
                                  <ul className="main-menu__dropdown sub-menu">
                                      <li><a href="blog1.html">Blog 1</a></li>
                                      <li><a href="blog2.html">Blog 2</a></li>
                                      <li><a href="blog-details1.html">Blog Details Page</a></li>
                                  </ul>
                              </li>
                              <li className="list menu-item-parent menu-item-has-children">
                                  <a className="animation" href="index.html">Agents</a>
                                  <ul className="main-menu__dropdown sub-menu">
                                      <li><a href="agency-lists1.html">Agency List page</a></li>
                                      <li><a href="agent-lists1.html">Agent List Page</a></li>
                                      <li><a href="agent-reviews1.html">Agent Reviews Page</a></li>
                                  </ul>
                              </li>
                              <li className="list menu-item-parent">
                                  <a className="animation" href="contact.html">Contact us</a>
                              </li>
                          </ul>
                      </nav>
                  </div>
              </div>
          </div>         

          <div className="breadcrumb-wrap breadcrumb-wrap-2">
              <div className="container">
                  <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                          <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                          <li className="breadcrumb-item active" aria-current="page">All Listing</li>
                      </ol>
                  </nav>
              </div>
          </div>
    </>
  );
};

export default SiteHeader;
/* <MenuLink />*/