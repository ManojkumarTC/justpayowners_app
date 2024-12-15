/* eslint-disable react/jsx-key */
import { SectionTitle, MyDashboardNav} from "../components";
import myprofile from '../mockdata/myprofile.json';
import { NavLink, Link, useNavigate } from 'react-router-dom';
/*import '../../src/assets/css/MyProfile.css'*/
import { useEffect, useMemo, useState } from "react";
import JPOapi from "../common";
import { useSelector } from "react-redux";

import noImageRent from '../assets/img/noImageRent_Sale.svg';

const MyProperties = function () {
    const [advertiseData, setAdvertiseData] = useState([]);
    const [option, setOption] = useState("All");
    const { userId } = useSelector(state => state.auth);

    const navigate = useNavigate();
    useEffect(() => {
        fetchAdvartise()
            .then(data => {
                setAdvertiseData(data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const fetchAdvartise = async () => {
        const response = await fetch(JPOapi.GetAdServiceByUser.url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + userId
            }
        });
        const { data } = await response.json();
        // order by created date in descending order
        data.sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate));
        console.log(data);
        return data;
    }

    const handleOptionChange = (optVal) => {
        setOption(optVal);

    }

    const filteredData = useMemo(() => {
        if (option === 'All') {
            return advertiseData;
        } else {
            return advertiseData.filter(item => item.adType === option || item.propertyType === option);
        }
    }, [advertiseData, option]);

    const handleEditBtn = (item) => {
        const propertyDetails = JSON.parse(item.propertyData);

        // generate path based on adType, propertyType and advertiseID and navigate to that path
        let path = '';
        switch (item.propertyType) {
            case 'Residential Rent':
                path = '/manage/property/residential/';
                break;
            case 'Residential Sale':
                path = '/manage/property/residential/';
                break;
            case 'Commercial Rent':
                path = '/manage/property/commercial/';
                break;
            case 'Commercial Sale':
                path = '/manage/property/commercial/';
                break;
            case 'LandOrPlot Sale':
                path = '/manage/property/landorplot/';
                break;
            default:
                path = '/';
        }
        path += `${item.adType.replace(/\s/g, "")}` + `/${item.advertiseID}/property?justpayFr=pyp_${item.adType.replace(/\s/g, "")}`;
        console.log(path);
        navigate(path.toLowerCase());
    }

    const renderPropertyImage = (item) => {
        const galleryDetails = JSON.parse(item.propertyData).GalleryDetails;
        if (galleryDetails && galleryDetails.length > 0) {
            return galleryDetails[0];
        } else {
            return noImageRent;
        }
    }

    return (<>


      


        <section className="grid-wrap3">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-sm-12 col-12">
                        <div className="page-content-block">
                            <div className="col-md-12 ">

                               
                                    <div className="container">
                                        {/*<SectionTitle title="Advertise With Us" path="/AdvertiseWithUs" type="breadcrumb" />*/}
                                        <div className="row row-cards">
                                            <MyDashboardNav />
                                            <div className="col-lg-10" id="tab-section-right">
                                                <div className="card m-0 p-4">
                                                <div className="card-body row">
                                                    <h3 className="widget-subtitle">You have already posted {advertiseData.length} properties on Justpayownerse</h3> 
                                                                                                  
                                                    <div className="widget widget-taglist" >
                                                        <ul className="tag-list">
                                                            <li><Link onClick={(e) => handleOptionChange("All")} className={option == "All" ? "btn btn-sm btn-outline-primary active" : "btn btn-sm btn-outline-primary"}>All</Link></li>
                                                            <li>  <Link onClick={(e) => handleOptionChange("Rent")} className={option == "Rent" ? "btn btn-sm btn-outline-primary active" : "btn btn-sm btn-outline-primary"}>Residential-Rent</Link></li>
                                                            <li><Link onClick={(e) => handleOptionChange("Sale")} className={option == "Sale" ? "btn btn-sm btn-outline-primary active" : "btn btn-sm btn-outline-primary"}>Residential-Sale</Link></li>
                                                            <li>  <Link onClick={(e) => handleOptionChange("Commercial Rent")} className={option == "Commercial Rent" ? "btn btn-sm btn-outline-primary active" : "btn btn-sm btn-outline-primary"}>Commercial-Rent</Link></li>
                                                            <li><Link onClick={(e) => handleOptionChange("Commercial Sale")} className={option == "Commercial Sale" ? "btn btn-sm btn-outline-primary active" : "btn btn-sm btn-outline-primary"}>Commercial-Sale</Link></li>
                                                            <li><Link onClick={(e) => handleOptionChange("LandOrPlot Sale")} className={option == "LandOrPlot Sale" ? "btn btn-sm btn-outline-primary active" : "btn btn-sm btn-outline-primary"}>Plot-Sale  </Link></li>

                                                        </ul>
                                                    </div>                                                 

                                                    <div className="col-lg-12">
                                                        <div className="property-wrap-9">                                                            
                                                            <div className="tab-style-1 tab-style-3">
                                                                <div className="tab-content" id="myTabContent">
                                                                    <div className="tab-pane fade show active" id="mylisting" role="tabpanel">
                                                                        <div className="row">


                                                                            <>
                                                                                
                                                                                    {advertiseData.length === 0 ? (
                                                                                        <div>Loading...</div>
                                                                                    ) : (filteredData.length > 0 ? (
                                                                                            filteredData.map((item, index) => (

                                                                                                <div className="col-lg-12" key={index}>
                                                                                                    <div className="property-box2 property-box4 wow  fadeInUp animated" data-wow-delay=".6s" style={{ visibility: "visible", animationDelay: "0.4s", animationName: "fadeInUp" }}>
                                                                                                        <div className="item-img">
                                                                                                            <a href="#"><img src={renderPropertyImage(item)}  alt="blog" width="250" height="200" /></a>
                                                                                                            <div className="item-category-box1">
                                                                                                                <div className="item-category">{item?.adType}</div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div className="item-content item-content-property">
                                                                                                            <div className="item-category10">
                                                                                                                {item.propertyType != null && (item.propertyType === "Residential Rent" || item.propertyType === "Residential Sale" || item.propertyType === "Commercial Rent" || item.propertyType === "Commercial Sale")  && <a href={"/property-detail/" + item.advertiseID}>{JSON.parse(item.propertyData).property_details?.ApartmentType}</a>}
                                                                                                                {item.propertyType != null && item.propertyType == "LandOrPlot Sale" && <a href={"/property-detail/" + item.advertiseID}>{JSON.parse(item.propertyData).LandDetails?.PropertyType}</a>}
                                                                                                            </div>
                                                                                                            <div className="react-icon react-icon-2">
                                                                                                                <ul>
                                                                                                                    <li>
                                                                                                                        <a href="favourite.html" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Favourites">
                                                                                                                            <i className="flaticon-heart"></i>
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li>
                                                                                                                        <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Compare">
                                                                                                                            <i className="flaticon-left-and-right-arrows"></i>
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                </ul>
                                                                                                            </div>
                                                                                                            <div className="verified-area">                                                                                                                
                                                                                                                {item.propertyTitle != null && item.propertyTitle != "" && <h3 className="item-title"><a href={"/property-detail/" + item.advertiseID} className="text-color">{item.propertyTitle}<i className="fa fa-external-link"></i></a></h3>}
                                                                                                            </div>
                                                                                                            <div className="location-area"><i className="flaticon-maps-and-flags"></i> {JSON.parse(item.propertyData).LocalityDetails?.city} , {JSON.parse(item.propertyData).LocalityDetails?.state}</div>
                                                                                                            <div className="item-categoery3">
                                                                                                                <ul>
                                                                                                                    {item.propertyType != null && (item.propertyType === "Residential Rent" || item.propertyType === "Residential Sale") &&
                                                                                                                     <>
                                                                                                                        <li><i className="flaticon-bed"></i>{JSON.parse(item.propertyData).property_details?.ApartmentType}</li> 
                                                                                                                        <li><i className="flaticon-bed"></i>{JSON.parse(item.propertyData).property_details?.ApartmentType}</li>
                                                                                                                        <li><i className="flaticon-two-overlapping-square"></i>931 Sqft</li>
                                                                                                                        </>}
                                                                                                                    {item.propertyType != null && (item.propertyType === "Commercial Rent" || item.propertyType === "Commercial Sale") &&
                                                                                                                        <>
                                                                                                                            <li><i className="flaticon-bed"></i>{JSON.parse(item.propertyData).property_details?.ApartmentType}</li>
                                                                                                                        <li><i className="flaticon-bed"></i>{JSON.parse(item.propertyData).property_details?.ApartmentType}</li>
                                                                                                                        <li><i className="flaticon-two-overlapping-square"></i>931 Sqft</li>
                                                                                                                        </>}                                                                                                                   

                                                                                                                    {item.propertyType != null && item.propertyType == "LandOrPlot Sale" &&
                                                                                                                        <><a href={"/property-detail/" + item.advertiseID}>{JSON.parse(item.propertyData).LandDetails?.PropertyType}</a>
                                                                                                                         <li><i className="flaticon-two-overlapping-square"></i>931 Sqft</li></>}

                                                                                                                    
                                                                                                                   
                                                                                                                    
                                                                                                                </ul>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            
                                                                                        ))
                                                                                    ) : (
                                                                                        <div>No data found</div>
                                                                                    )
                                                                                    )}
                                                                               
                                                                            </>

                                                                            




                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                             </div>






                                            </div>
                                        </div>
                                    </div >
                               

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        
    </>
    );
};

export default MyProperties;
