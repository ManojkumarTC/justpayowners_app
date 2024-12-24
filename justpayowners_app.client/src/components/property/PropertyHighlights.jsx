
import { useState, useMemo, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink, Link, useNavigate } from 'react-router-dom';

import JPOapi from "../../common";
import fetchHomePageProperties from '../../common/property/getHomePagePropertiesData';
import PropertyCard from './PropertyCard';

const PropertyHighlights = ({ headline, userId, url }) => {

    const [pickedData, setPickedData] = useState([]);
    const [viewAllLink, setViewAllLink] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const storageKey = headline.replace(/ /g, '');
            let linkViewAll = "";
            let fetchedData = null;
            try {
                const storedData = localStorage.getItem(storageKey);
                if (storedData) {
                    const parsedData = JSON.parse(storedData);
                    setPickedData(parsedData);
                    setViewAllLink(`property-list/${url}`);
                    console.log(`Fetched ${headline} data from localStorage.`);
                } else {
                    let _url = "";
                    switch (headline) {
                        case 'Latest Our Residential Rental Post':
                            _url = `${JPOapi.GetPropertyResidentialRentals.url}?cityName=&Category=Residential%20Rent&pageNumber=1&pageSize=10`;
                            fetchedData = await fetchHomePageProperties(_url, userId);
                            linkViewAll = "/property-list/Residential_Rentals";
                            break;
                        case 'Latest Our Commerical Rental Post':
                            _url = `${JPOapi.GetPropertyCommercialRentals.url}?cityName=&Category=Commercial%20Rent&pageNumber=1&pageSize=10`;
                            fetchedData = await fetchHomePageProperties(_url, userId);
                            linkViewAll = "/property-list/Commercial_Rentals";
                            break;
                        case 'Latest Our Residential Sales Post':
                            _url = `${JPOapi.GetPropertyResidentialSales.url}?cityName=&Category=Residential%20Sale&pageNumber=1&pageSize=10`;
                            fetchedData = await fetchHomePageProperties(_url, userId);
                            linkViewAll = "/property-list/Residential_sales";
                            break;
                        case 'Latest Our Commercial Sales Post':
                            _url = `${JPOapi.GetPropertyCommercialSales.url}?cityName=&Category=Commercial%20Sale&pageNumber=1&pageSize=10`;
                            fetchedData = await fetchHomePageProperties(_url, userId);
                            linkViewAll = "/property-list/Commercial_Sales";
                            break;
                        case 'Latest Our Land or Plot Sales Post':
                            _url = `${JPOapi.GetPropertyPlotSales.url}?cityName=&Category=LandOrPlot%20Sale&pageNumber=1&pageSize=10`;
                            fetchedData = await fetchHomePageProperties(_url, userId);
                            linkViewAll = "/property-list/PlotSales";
                            break;
                        default:
                            break;
                    }
                    if (fetchedData && fetchedData.length > 0) {
                        setPickedData(fetchedData);
                        setViewAllLink(linkViewAll);
                        localStorage.setItem(storageKey, JSON.stringify(fetchedData));
                        console.log(`Fetched ${headline} data from API and stored in localStorage.`);
                    } else {
                        console.error(`No data found for ${headline}`);
                    }
                }
            } catch (error) {
                console.error(`Error fetching ${headline}:`, error);
            }
        };
        fetchData();
    }, [headline, userId, url]);


    return (<>
        <section className="property-wrap1">
            <div className="container">
                <div className="isotope-wrap">
                    <div className="row">
                        <div className="col-lg-6 col-md-5 col-sm-12">
                            <div className="item-heading-left">
                                <span className="section-subtitle">Our PROPERTIES</span>
                                <h2 className="section-title">Latest Properties</h2>                               
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-7 col-sm-12">
                            <div className="isotope-classes-tab">
                                <a className="nav-item current" data-filter="*">All Types</a>
                                <a className="nav-item" data-filter=".for-sell">For Sell</a>
                                <a className="nav-item" data-filter=".for-rent">For Rent</a>
                            </div>
                        </div>
                    </div>
                    <div className="row featuredContainer" style={{ position: "relative", height: "869.094px" }}>
                        {pickedData &&
                            pickedData.map((item, index) => (
                                <div className="col-xl-4 col-lg-6 col-md-6" key={index}  >
                                    <div className={`property-box2 wow fadeInUp animated`} data-wow-delay={item.delay}>
                                        <div className="item-img">
                                            <a target="_blank" href={"/property/" + item.category.split(" ").join("/").toLowerCase() + "/" + item.propertyTitle + "/" + item.propertyID + "/detail?justpayowners=" + item.category.split(" ").join("_").toLowerCase() + "_list"} >

                                                <img src={JSON.parse(item.propertyObject)?.GalleryDetails != undefined ? JSON.parse(item.propertyObject)?.GalleryDetails[0] : ""} alt='widget'
                                                    width={'510'}
                                                    height={'340'}
                                                />
                                            </a>
                                            <div className="item-category-box1">
                                                <div className="item-category">
                                                    {(item?.category === 'Residential Rent' || item?.category === 'Commercial Rent') && "FOR RENT"}
                                                    {(item?.category === 'Residential Sale' || item?.category === 'Commercial Sale' || item?.category === 'LandOrPlot Sale') && "FOR SALE"}

                                                </div>
                                            </div>
                                            <div className="rent-price">
                                                <div className="item-price">
                                                    $ {item.expectedRent}
                                                    <span><i>/</i>month</span>
                                                </div>
                                            </div>
                                            <div className="react-icon">
                                                <ul>
                                                    <li>
                                                        <a href="favourite.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Favourites">
                                                            <i className="flaticon-heart"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                                            <i className="flaticon-left-and-right-arrows"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="item-category10">
                                            <a href="#">{item.propertyType}</a>
                                        </div>
                                        <div className="item-content">
                                            <div className="verified-area">
                                                <h3 className="item-title">
                                                    <a target="_blank" className="text-color" href={"/property/" + item.category.split(" ").join("/").toLowerCase() + "/" + item.propertyTitle + "/" + item.propertyID + "/detail?justpayowners=" + item.category.split(" ").join("_").toLowerCase() + "_list"} >
                                                        {item?.propertyTitle}</a>
                                                </h3>
                                            </div>
                                            <div className="location-area">
                                                <i className="flaticon-maps-and-flags"></i>
                                                {JSON.parse(item.propertyObject)?.LocalityDetails?.landmark ? JSON.parse(item.propertyObject)?.LocalityDetails?.landmark + ", " : ""}
                                                {JSON.parse(item.propertyObject)?.LocalityDetails?.street ? JSON.parse(item.propertyObject)?.LocalityDetails?.street + ", " : ""}
                                                {JSON.parse(item.propertyObject)?.LocalityDetails?.locality ? JSON.parse(item.propertyObject)?.LocalityDetails?.locality + ", " : ""}
                                                {JSON.parse(item.propertyObject)?.LocalityDetails?.city ? JSON.parse(item.propertyObject)?.LocalityDetails?.city + ", " : ""}
                                                {JSON.parse(item.propertyObject)?.LocalityDetails?.state ? JSON.parse(item.propertyObject)?.LocalityDetails?.state + ", " : ""}

                                            </div>
                                            <div className="item-categoery3">
                                                <ul>
                                                    {(item?.category === 'Residential Rent' || item?.category === 'Residential Sale') &&
                                                        <><li><i className="flaticon-bed"></i>Beds: {item.beds}</li>
                                                            <li><i className="flaticon-shower"></i>Baths: {item.baths}</li>
                                                            <li><i className="flaticon-two-overlapping-square"></i>{item.sqft}</li>
                                                        </>
                                                    }
                                                    {(item?.category === 'Commercial Rent' || item?.category === 'Commercial Sale') &&
                                                        <> <li><i className="flaticon-bed"></i>Beds: {item.beds}</li>
                                                            <li><i className="flaticon-shower"></i>Baths: {item.baths}</li>
                                                            <li><i className="flaticon-two-overlapping-square"></i>{item.sqft}</li>
                                                        </>
                                                    }
                                                    {(item?.category === 'LandOrPlot Sale') &&
                                                        <><li><i className="flaticon-bed"></i>Beds: {item.beds}</li>
                                                            <li><i className="flaticon-shower"></i>Baths: {item.baths}</li>
                                                            <li><i className="flaticon-two-overlapping-square"></i>{item.sqft}</li>
                                                        </>
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                            )}
                    </div>
                </div>
            </div>
        </section>
    </>
    );
};

export default PropertyHighlights;



