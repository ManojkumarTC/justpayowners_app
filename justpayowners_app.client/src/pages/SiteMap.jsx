

import Jsonfooter from '../mockdata/footerData.json';
import { NavLink, Link } from 'react-router-dom';

import '../assets/css/SiteMap.css';
import React, { useState } from "react";

//import "bootstrap/dist/css/bootstrap.min.css";

const SiteMap = function () {
    console.log("SiteMap- Render")


    const residentialAreas = [
        "Koramangala",
        "Indiranagar",
        "Jayanagar",
        "Whitefield",
        "HSR Layout",
        "Basavanagudi",
        "Malleswaram",
        "Rajajinagar",
        "Sadashivanagar",
        "BTM Layout",
        "Banashankari",
        "Sarjapur Road",
        "Electronic City",
        "Hebbal",
        "Yelahanka",
        "Devanahalli",
        "Marathahalli",
        "Ulsoor",
        "Richmond Town",
        "Frazer Town",
        "Cooke Town",
        "Cox Town",
        "Domlur",
        "Shivajinagar",
        "Vasanth Nagar",
        "R.T. Nagar",
        "Seshadripuram",
        "Austin Town",
        "Murphy Town",
        "Cantonment Area",
        "Pete Area",
        "Sultanpet",
        "Adugodi",
        "Peenya",
        "Hulimavu",
        "Nagawara",
        "Kadubeesanahalli",
        "Bellandur",
        "Kanakapura Road",
        "Rajarajeshwari Nagar",
        "Kaggadasapura",
        "Horamavu",
        "Kengeri",
        "Kumaraswamy Layout",
        "Hennur Road",
        "Thanisandra",
        "Doddanekkundi",
        "Kudlu Gate",
        "Mahadevapura",
        "Chandapura"
    ]

    const districts = [
        "Bagalkot",
        "Ballari (Bellary)",
        "Belagavi (Belgaum)",
        "Bengaluru Rural",
        "Bengaluru Urban",
        "Bidar",
        "Chamarajanagar",
        "Chikballapur",
        "Chikkamagaluru (Chikmagalur)",
        "Chitradurga",
        "Dakshina Kannada",
        "Davanagere",
        "Dharwad",
        "Gadag",
        "Hassan",
        "Haveri",
        "Kalaburagi (Gulbarga)",
        "Kodagu",
        "Kolar",
        "Koppal",
        "Mandya",
        "Mysuru (Mysore)",
        "Raichur",
        "Ramanagara",
        "Shivamogga (Shimoga)",
        "Tumakuru (Tumkur)",
        "Udupi",
        "Uttara Kannada (Karwar)",
        "Vijayapura (Bijapur)",
        "Yadgir"
    ];

    const tabData = [
        {
            title: "Residential Properties For Rent",
            icon: "fas fa-chart-pie",
            content: [
                {
                    parent: "Flats For Rent"

                },
                {
                    parent: "House For Rent"

                },
                {
                    parent: "Villa's For Rent"
                },
                {
                    parent: "Rooms For Rent"
                },
                {
                    parent: "Pg/Hostels For Rent"
                },
            ],
        },
        {
            title: "Residential Properties For Sale",
            icon: "fas fa-chart-line",
            content: [
                {
                    parent: "Flats For Sale"

                },
                {
                    parent: "House For Sale"

                },
                {
                    parent: "Villa's For Rent"

                },
                {
                    parent: "Pg/Hostels For Sale"

                }
            ],
        },
        {
            title: "Commercial Properties For Rent",
            icon: "fas fa-cogs",
            content: [
                {
                    parent: "Commercial Shops For Rent"
                },
                {
                    parent: "Commercial Showrooms For Rent"
                },
                {
                    parent: "Commercial Building For Rent"
                },
                {
                    parent: "Office Space For Rent"
                },
                {
                    parent: "Warehouse For Rent"
                },
                {
                    parent: "Coworking Space For Rent"
                },
                {
                    parent: "Industrial Building For Rent"
                },

            ],
        },
        {
            title: "Commercial Properties For Sale",
            icon: "fas fa-cogs",
            content: [
                {
                    parent: "Commercial Shops For Sale"
                },
                {
                    parent: "Commercial Showrooms For Sale"
                },
                {
                    parent: "Commercial Building For Sale"
                },
                {
                    parent: "Office Space For Sale"
                },
                {
                    parent: "Warehouse For Sale"
                },
                {
                    parent: "Coworking Space For Sale"
                },
                {
                    parent: "Industrial Building For Sale"
                },
            ],
        },
        {
            title: "Land or Plots For Sale",
            icon: "fas fa-cogs",
            content: [
                {
                    parent: "Plots For Sale",
                },
                {
                    parent: "Plots For ReSale",
                },
                {
                    parent: "New Projects",
                },

            ],
        },
        {
            title: "District Wise Property",
            icon: "fas fa-cogs",
            content: [
                {
                    parent: "Flats Or House For Rent"
                },
                {
                    parent: "Commercial Properties For Rent"
                },
                {
                    parent: "Flats Or House For Sale"
                },
                {
                    parent: "Commercial Properties For Sale"
                },
                {
                    parent: "Plots / Land For Sale",
                }
            ],
        },
        {
            title: "Builders Projects",
            icon: "fas fa-cogs",
            content: [
                {
                    parent: "Builders Projects",
                },
            ],
        }
    ];

    const getDistrictTitle = (parent, Category, child) => {
        switch (Category) {
            case "Flats Or House For Rent":
                return "../property/residential_rentals/" + child;
            case "Flats Or House For Sale":
                return "../property/residential_sales/" + child;
            case "Commercial Properties For Rent":
                return "../property/commercial_rentals/" + child;
            case "Commercial Properties For Sale":
                return "../property/commercial_sales/" + child;
            case "Plots / Land For Sale":
                return "../property/plotsales/" + child;
            case "Builder Projects":
                return "../property/" + child;
            default:
                return Category; // A fallback route if no match is found
        }
    };

    const geturl = (parent, Category, child) => {
        switch (parent) {
            case "Residential Properties For Rent":
                return "../property/residential_rentals/" + child;
            case "Residential Properties For Sale":
                return "../property/residential_sales/" + child;
            case "Commercial Properties For Rent":
                return "../property/commercial_rentals/" + child;
            case "Commercial Properties For Sale":
                return "../property/commercial_sales/" + child;
            case "Land or Plots For Sale":
                return "../property/plotsales/" + child;
            case "District Wise Property":
                return getDistrictTitle(parent, Category, child);
            case "Builder Projects":
                return "../property/" + child;
            default:
                return "/not-found"; // A fallback route if no match is found
        }
    };

    const getTitle = (parent, Category, child) => {
        switch (parent) {
            case "Residential Properties For Rent":
                return Category + " " + child;
            case "Residential Properties For Sale":
                return Category + " " + child;
            case "Commercial Properties For Rent":
                return Category + " " + child;
            case "Commercial Properties For Sale":
                return Category + " " + child;
            case "Land or Plots For Sale":
                return Category + " " + child;
            case "Bank Auction Property":
                return Category + " " + child;
            case "District Wise Property":
                return Category + " " + child;
            case "Builders Projects":
                return Category + " " + child;
            default:
                return "/not-found"; // A fallback route if no match is found
        }
    };

    const [activeKey, setActiveKey] = useState(tabData[0]?.title || ""); // Set the first tab as active by default


    return (<>

        <section className="grid-wrap3">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-sm-12 col-12">
                        <div className="page-content-block">
                            <div className="col-md-12 rtcl-login-form-wrap">
                                <h4>FAQs</h4>


                                <div className="mb-3" id="dynamic-tabs"  >



                                    {tabData.map((tab, index) => (
                                        <div key={index}



                                        >   <h5>{tab.title}</h5>
                                            <div>
                                                <ul id="dynamic-tabs-content">
                                                    {tab.content.map((item, i) => (
                                                        <li key={i}>
                                                            <div class="property-type-title">{item.parent}</div>
                                                            {tab.title != "District Wise Property" && residentialAreas && (
                                                                <div className="item-link">
                                                                    <ul >
                                                                        {residentialAreas.map((child, j) => (

                                                                            <li key={j}>
                                                                                <NavLink to={geturl(tab.title, item.parent, child)}>{getTitle(tab.title, item.parent, child)}</NavLink>
                                                                            </li>

                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            )}
                                                            {tab.title == "District Wise Property" && districts && (
                                                                <div className="item-link">
                                                                    <ul >
                                                                        {districts.map((child, j) => (

                                                                            <li key={j}>
                                                                                <NavLink to={geturl(tab.title, item.parent, child)}>{getTitle(tab.title, item.parent, child)}</NavLink>
                                                                            </li>

                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            )}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
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
