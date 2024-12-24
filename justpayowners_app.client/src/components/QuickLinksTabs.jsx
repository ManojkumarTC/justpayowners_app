import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
//import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from 'react-router-dom'

function QuickLinksTabs() {

    const residentialAreas =[
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
            title: "Bank Auction Property",
            icon: "fas fa-cogs",
            content: [
                {
                    parent: "Flat"                   
                },
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
        },
        {
            title: "Verified Proeprties",
            icon: "fas fa-cogs",
            content: [
                {
                    parent: "Verified Proeprties",                    
                },
            ],
        },
    ];

    const geturl = (parent, child) => {
        switch (parent) {
            case "Residential Properties For Rent":
                return "/home";
            case "Residential Properties For Sale":
                return "/about";
            case "Commercial Properties For Rent":
                return "/services";
            case "Commercial Properties For Sale":
                return "/contact";
            case "Land or Plots For Sale":
                return "/contact";
            case "Bank Auction Property":
                return "/contact";
            case "Builder Proeprties":
                return "/contact";
            default:
                return "/not-found"; // A fallback route if no match is found
        }
    };

    const [activeKey, setActiveKey] = useState(tabData[0]?.title || ""); // Set the first tab as active by default

    return (

        <div className="footer-top">
            <div className="row justify-content-between">

               <Tabs
                activeKey={activeKey}
                onSelect={(key) => setActiveKey(key)}
                id="dynamic-tabs"
                className="mb-3"
            >
                {tabData.map((tab, index) => (
                    <Tab
                        key={index}
                        eventKey={tab.title}
                        title={
                            <>
                                <i className={`${tab.icon} me-2`}></i>
                                {tab.title}
                            </>
                        }
                    >
                        <div>                           
                            <ul id="dynamic-tabs-content">
                                {tab.content.map((item, i) => (
                                    <li key={i}>
                                        <div class="property-type-title">{item.parent}</div>
                                        {residentialAreas && (
                                            <div className="item-link">   
                                            <ul >
                                                {residentialAreas.map((child, j) => (                                                   

                                                     <li key={j}>
                                                        <NavLink to={geturl(tab.title, child)}>{child}</NavLink>
                                                    </li>
                                                
                                                ))}
                                                </ul>
                                            </div>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Tab>
                ))}
            </Tabs>
            </div>
        </div>      
    );
}

export default QuickLinksTabs;
