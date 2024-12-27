
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {   PropertyInformation, LatestProperties, PropertyOverview, PropertyAmenities, PropertyMap,  PropertyDescriptionTabs, PropertyBanner, PropertyOwnerDetails, PropertySimilartags  } from "../components";
import JPOapi from "../common";
import { useParams } from "react-router";
import moment from 'moment'

/*import FavoritesModel from '../../common/Favorites/FavoritesModel';*/

const PropertyDetails = ({ AdvertisementCategory, AdvertisementType }) => {
    const params = useParams();
    const [property, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const { currentUser } = useSelector(state => state.user);
    const { userId } = useSelector(state => state.auth);

    useEffect(() => {

        fetchAdvartise()
            .then(data => {
                console.log(data);
                setProperties(data);

                const propertyData = JSON.parse(data.propertyObject);
                console.log(propertyData);

                setLoading(false);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const fetchAdvartise = async () => {


        var geturl = JPOapi.GetPropertyResidentialRentalsById.url;
        if (AdvertisementCategory === 'Residential_Rentals' || AdvertisementCategory === 'Commercial_Rentals') geturl = JPOapi.GetPropertyResidentialRentalsById.url + "/" + params?.id + "?RentalID=" + params?.id;
        if (AdvertisementCategory === 'Residential_Sales' || AdvertisementCategory === 'Commercial_Sales' || AdvertisementCategory === 'PlotSales') geturl = JPOapi.GetPropertyResidentialSalesById.url + "/" + params?.id + "?SalelID=" + params?.id;
        //if (property?.category === 'Commercial Rent') geturl = JPOapi.GetPropertyCommercialRentals.url;
        //if (property?.category === 'Commercial Sale') geturl = JPOapi.GetPropertyCommercialSales.url;
        // if (property?.category === 'LandOrPlot Sal') geturl = JPOapi.GetPropertyPlotSales.url;
        console.log("AdvertisementCategory" + geturl)


        const response = await fetch(geturl, {
            method: JPOapi.Advertises.GETmethod,
            headers: {
                "Content-Type": 'application/json',
                'Authorization': 'Bearer ' + userId,
            },
        });
        const { data } = await response.json();
        console.log(data);
        return data;
    }

    if (loading) {
        return <p>Loading...</p>;
    }
    const getPropertyData = JSON.parse(property.propertyObject);


    const handleFavorites = () => {
        //let url = JPOapi.FavoritesModel.url
        //let type = "Favorite"
        //const FavoriteModelData = FavoritesModel.properties;
        //FavoriteModelData.PropertyID = data.FullName
        //FavoriteModelData.UserID = data.Email
        //FavoriteModelData.Note = data.MobileNumber
        //FavoriteModelData.Remark = PropertyId
        //FavoriteModelData.Status = userId;
        //FavoriteModelData.CreatedAt = new Date().toISOString();
        //FavoriteModelData.UpdatedAt = new Date().toISOString();     

       
    };

    
    return (
        <>

            <section className="single-listing-wrap1">
                <div className="container">
                    <div className="single-property">
                        <div className="content-wrapper">
                            {/* <PropertyDetailsHeader property={property} />*/}

                            <div className="property-heading">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="single-list-cate">
                                            <div className="item-categoery">
                                                {(property?.category === 'Residential Rent' || property?.category === 'Commercial Rent') && "FOR RENT"}
                                                {(property?.category === 'Residential Sale' || property?.category === 'Commercial Sale' || property?.category === 'LandOrPlot Sale') && "FOR SALE"}
                                            </div>                                          

                                        </div>

                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="single-list-price">{"₹" + getPropertyData?.RentalDetails?.ExpectedRent + "/month"}</div>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-lg-8 col-md-12">
                                        <div className="single-verified-area">
                                            <div className="item-title">
                                                <h3>
                                                    <a href="single-listing2.html">{property?.propertyTitle}</a>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="single-item-address">
                                            <ul>
                                                <li>
                                                    <i className="fas fa-map-marker-alt"></i>
                                                    {getPropertyData?.LocalityDetails?.landmark + ", "}
                                                    {getPropertyData?.LocalityDetails?.street + ", "}
                                                    {getPropertyData?.LocalityDetails?.locality + ", "}
                                                    {getPropertyData?.LocalityDetails?.city + ", "}
                                                    {getPropertyData?.LocalityDetails?.state + "."}
                                                </li>
                                                <li><i className="fas fa-clock"></i>Posted On - {moment(getPropertyData?.createdDate).format("DD-MMM-YYYY")}</li>

                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <div className="side-button">
                                            <ul>
                                                <li>
                                                    <a href="#" className="side-btn"><i className="flaticon-share"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#" onClick={() => handleFavorites ()}  className="side-btn"><i className="flaticon-heart"></i></a>
                                                </li>




                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {property?.propertyType === 'LandOrPlot Sale' &&
                                <>
                                <PropertyBanner tabTitle="Overview" tabSection={"Overview"} property={property} />
                               
                                </>

                            }
                            <div className="row">
                                <div className="col-lg-8">


                                    <div className="single-listing-box1">

                                        {property?.propertyType != 'LandOrPlot Sale' &&
                                            <PropertyBanner tabTitle="Overview" tabSection={"Overview"} property={property} />
                                        }

                                        <PropertyInformation tabTitle="Overview" tabSection={"Overview"} property={property} />

                                        <PropertyInformation tabTitle="About This Property" tabSection={"AboutProperty"} property={property} />

                                        <PropertyInformation tabTitle="Details" tabSection={"Details"} property={property} />

                                        {(property?.propertyType === 'Residential Sale' || property?.propertyType === 'Commercial Sale' || property?.propertyType === 'LandOrPlot Sale') && <PropertyInformation tabTitle="Additional Information" tabSection={"AdditionalInformation"} property={property} />}

                                        <PropertyInformation tabTitle="Features & Amenities" tabSection={"Amenities"} property={property} />

                                        <PropertyInformation tabTitle="Map Location" tabSection={"MapLocation"} property={property} />

                                        <PropertyInformation tabTitle="Property Video" tabSection={"PropertyVideo"} property={property} />

                                        <PropertyInformation tabTitle="Disclaimer" tabSection={"Disclaimer"} property={property} />

                                    </div>


                                </div>
                                <div className="col-lg-4 widget-break-lg sidebar-widget">

                                    <PropertyOwnerDetails TabTitle="About Owner Details" property={property} />

                                    <PropertySimilartags TabTitle="Similar Properties" property={property} />

                                    {/* <PropertyGlobalViews TabTitle="Activity On This Property" property={property} />*/}

                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>

            <LatestProperties TabTitle="Similar Properties" property={property} />


        </>
    );
};

export default PropertyDetails;
