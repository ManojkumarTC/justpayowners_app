/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
const PropertyInformation = ({ tabTitle, tabSection, property }) => {
    const [objProperty, setProperty] = useState(property);
    const getPropertyData = JSON.parse(objProperty.propertyObject);
    useEffect(() => {

    }, []);

    const renderContent = () => {
        if (tabSection === 'Overview') {
            return fetchOverview();
        } else if (tabSection === 'AboutProperty') {
            return fetchAboutProperty();
        } else if (tabSection === 'Details') {
            return fetchPropertyDetails();
        } else if (tabSection === 'Amenities') {
            return fetchAmenities();
        } else if (tabSection === 'MapLocation') {
            return fetchMap();
        } else if (tabSection === 'AdditionalInformation') {
            return fetchAdditionalInformation();
        } else if (tabSection === 'PropertyVideo') {
            return PropertyVideo();
        } else {
            return fetchDisclaimer();
        }
    };

    function getClassName() {
        let className = "overview-area";
        if (tabSection === 'Overview') {
            className += " overview-area";
        } else if (tabSection === 'AboutProperty') {
            className += " listing-area ";
        } else if (tabSection === 'Details') {
            className += " single-details-box table-responsive";
        } else if (tabSection === 'Amenities') {
            className += " ameniting-box";
        } else if (tabSection === 'MapLocation') {
            className += " map-box";
        } else if (tabSection === 'AdditionalInformation') {
            className += " listing-area";
        } else if (tabSection === 'Disclaimer') {
            className += " listing-area";
        } else if (tabSection === 'PropertyVideo') {
            className += " listing-area";
        }

        return className;
    };

    function fetchAboutProperty() {
        return (



            <p>
                {((property?.category === 'LandOrPlot Sale' || property?.category === 'Residential Sale' || property?.category === 'Commercial Sale') && getPropertyData.ReSaleDetails?.Description) &&
                    <div dangerouslySetInnerHTML={{ __html: getPropertyData.ReSaleDetails?.Description.replace(/\n/g, '<br />') }} />

                }

                {((property?.category === 'Residential Rent' || property?.category === 'Commercial Rent') && getPropertyData.RentalDetails?.Description) &&

                    <div dangerouslySetInnerHTML={{ __html: getPropertyData.RentalDetails?.Description.replace(/\n/g, '<br />') }} />
                }
            </p>
        )
    }

    function fetchDisclaimer() {
        return (<div className="card-body">
            {property?.disclaimer &&
                property?.disclaimer
            }
        </div>)
    }

    function PropertyVideo() {
        return (<div className="item-img">
            <img src="/src/assets/img/blog/listing1.jpg" alt="map" width="731" height="349" />
            <div className="play-button">
                <div className="item-icon">
                    <a href="http://www.youtube.com/watch?v=1iIZeIy7TqM" className="play-btn play-btn-big">
                        <span className="play-icon style-2">
                            <i className="fas fa-play"></i>
                        </span>
                    </a>
                </div>
            </div>
        </div>)
    }




    function fetchPropertyDetails() {
        if (property.propertyType === "Residential Rent") {
            return (<table className="table-box1">
                <tbody><tr>
                    <td className="item-bold">Property Id</td>
                    <td>{getPropertyData.property_details?.PropertyAge}</td>
                    <td className="item-bold">OwnershipType</td>
                    <td>{getPropertyData.property_details?.OwnershipType}</td>

                </tr>
                    <tr>
                        <td className="item-bold">Property Type</td>
                        <td>{getPropertyData.property_details?.ApartmentType}</td>
                        <td className="item-bold">Property Age</td>
                        <td>{getPropertyData.property_details?.PropertyAge}</td>
                    </tr>
                    <tr>
                        <td className="item-bold">Price</td>

                        {(getPropertyData?.RentalDetails?.PropertyAvailable === 'Only rent' || getPropertyData?.RentalDetails?.PropertyAvailable === 'Only Rent') &&
                            <td>
                                {"₹" + getPropertyData?.RentalDetails?.ExpectedRent + "/month"} ({getPropertyData?.RentalDetails?.PropertyAvailable})
                            </td>
                        }

                        {(getPropertyData?.RentalDetails?.PropertyAvailable === 'Only lease' || getPropertyData?.RentalDetails?.PropertyAvailable === 'Only Lease') &&
                            <td>
                                {"₹" + getPropertyData?.RentalDetails?.LeaseAmount} ({getPropertyData?.RentalDetails?.PropertyAvailable})
                            </td>
                        }




                        <td className="item-bold">Deposite</td>
                        <td>{getPropertyData.RentalDetails?.ExpectedDeposit}</td>
                    </tr>
                    <tr>
                        <td className="item-bold">PreferredTenants</td>
                        <td>{getPropertyData.RentalDetails?.PreferredTenants}</td>
                        <td className="item-bold">Floor</td>
                        <td>{getPropertyData.property_details?.Floor} / {getPropertyData.property_details?.TotalFloor}</td>
                    </tr>
                    <tr>
                        <td className="item-bold">Rooms</td>
                        <td>{getPropertyData.property_details?.BHKType}</td>
                        <td className="item-bold">Bath Rooms</td>
                        <td>{getPropertyData.property_details?.Bathroom}</td>
                    </tr>
                    {/*<td className="item-bold">Property Status</td>*/}
                    {/*<td>{getPropertyData.property_details?.PropertyAge}</td>*/}
                    <tr>
                        <td className="item-bold">BuiltUpArea</td>
                        <td>{getPropertyData.property_details?.builtupAarea}</td>
                        <td className="item-bold">CarpetArea</td>
                        <td>{getPropertyData.property_details?.CarpetArea}</td>
                    </tr>
                    <tr>
                        <td className="item-bold">Furnishing</td>
                        <td>{getPropertyData.RentalDetails?.Furnishing}</td>
                        <td className="item-bold">Parking</td>
                        <td>{getPropertyData.RentalDetails?.Parking}</td>
                    </tr>
                    <tr>
                        <td className="item-bold">Facing</td>
                        <td>{getPropertyData.property_details?.Facing}</td>
                        <td className="item-bold">Balcony</td>
                        <td>{getPropertyData.property_details?.Balcony}</td>
                    </tr>
                    <tr>
                        <td className="item-bold">GatedSecurity</td>
                        <td>{getPropertyData.property_details?.GatedSecurity}</td>
                        <td className="item-bold">Lift</td>
                        <td>{getPropertyData.AmenitiesDetails?.Lift}</td>
                    </tr>
                    <tr>
                        <td className="item-bold">WaterSupply</td>
                        <td>{getPropertyData.property_details?.WaterSupply}</td>
                        <td className="item-bold">NonVegAllowed</td>
                        <td>{getPropertyData.property_details?.NonVegAllowed}</td>
                    </tr>
                </tbody></table>)
        } else if (property.propertyType === "Residential Sale") {
            return "Good Afternoon!";
        } else if (property.propertyType === "Residential Sale3") {
            return "Good Afternoon!";
        } else if (property.propertyType === "Residential Sale2") {
            return "Good Afternoon!";
        } else if (property.propertyType === "Residential Sale1") {
            return "Good Evening!";
        } else {
            return "Hello!";
        }



    }


    function fetchMap() {
        return (<div className="item-map">
            {(getPropertyData?.LocalityDetails?.landmark) &&


                <iframe className="w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31099.803872209053!2d77.70488290468712!3d13.005364603014906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11abc8ffe3e7%3A0xd8368746c98e53bf!2sKrishnarajapuram%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1719839034377!5m2!1sen!2sin" style={{ "border": "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>


            }
        </div>)
    }




    function fetchOverview() {
        return (<div className="gallery-icon-box">
            {(property?.category === 'Residential Rent' || property?.category === 'Commercial Rent' && getPropertyData.property_details?.PropertyAge) &&

                <div className="item-icon-box">
                    <div className="item-icon">
                        <i className="flaticon-comment"></i>
                    </div>
                    <ul className="item-number">
                        <li>Property Age :</li>
                        <li className="deep-clr">{getPropertyData.property_details?.PropertyAge}</li>
                    </ul>
                </div>


            }

            {(property?.category === 'Residential Rent' && getPropertyData.RentalDetails?.PreferredTenants) &&

                <div className="item-icon-box">
                    <div className="item-icon">
                        <i className="flaticon-comment"></i>
                    </div>
                    <ul className="item-number">
                        <li>Preferred Tenants :</li>
                        <li className="deep-clr">{getPropertyData.RentalDetails?.PreferredTenants}</li>
                    </ul>
                </div>


            }
            {(property?.category === 'Residential Rent' || property?.category === 'Commercial Rent' && getPropertyData.property_details?.Floor) &&



                <div className="item-icon-box">
                    <div className="item-icon">
                        <i className="flaticon-comment"></i>
                    </div>
                    <ul className="item-number">
                        <li>Floor :</li>
                        <li className="deep-clr">{getPropertyData.property_details?.Floor} / {getPropertyData.property_details?.TotalFloor}</li>
                    </ul>
                </div>


            }
            {((property?.category === 'Residential Rent' || property?.category === 'Commercial Rent') && (getPropertyData.RentalDetails?.Furnishing || getPropertyData.property_details?.Furnishing)) &&

                <div className="item-icon-box">
                    <div className="item-icon">
                        <i className="flaticon-comment"></i>
                    </div>
                    <ul className="item-number">
                        <li>Furnishing  :</li>
                        <li className="deep-clr">{getPropertyData.RentalDetails?.Furnishing} {getPropertyData.property_details?.Furnishing}</li>
                    </ul>
                </div>


            }
            {((property?.category === 'Residential Rent' || property?.category === 'Commercial Rent') && (getPropertyData.RentalDetails?.Parking || getPropertyData.AmenitiesDetails?.CommercialParking)) &&

                <div className="item-icon-box">
                    <div className="item-icon">
                        <i className="flaticon-comment"></i>
                    </div>
                    <ul className="item-number">
                        <li>Parking  :</li>
                        <li className="deep-clr">{getPropertyData.RentalDetails?.Parking} {getPropertyData.AmenitiesDetails?.CommercialParking}</li>
                    </ul>
                </div>


            }


            {(property?.category === 'Residential Rent' && getPropertyData.property_details?.Facing) &&

                <div className="item-icon-box">
                    <div className="item-icon">
                        <i className="flaticon-comment"></i>
                    </div>
                    <ul className="item-number">
                        <li>Facing  :</li>
                        <li className="deep-clr">{getPropertyData.property_details?.Facing}</li>
                    </ul>
                </div>


            }
            {(property?.category === 'Residential Rent' && getPropertyData.property_details?.WaterSupply) &&

                <div className="item-icon-box">
                    <div className="item-icon">
                        <i className="flaticon-comment"></i>
                    </div>
                    <ul className="item-number">
                        <li>WaterSupply  :</li>
                        <li className="deep-clr">{getPropertyData.property_details?.WaterSupply}</li>
                    </ul>
                </div>


            }
            {(property?.category === 'Residential Rent' && getPropertyData.property_details?.Bathroom) &&

                <div className="item-icon-box">
                    <div className="item-icon">
                        <i className="flaticon-comment"></i>
                    </div>
                    <ul className="item-number">
                        <li>Bathroom  :</li>
                        <li className="deep-clr">{getPropertyData.property_details?.Bathroom}</li>
                    </ul>
                </div>


            }
            {(property?.category === 'Residential Rent' && getPropertyData.property_details?.Balcony) &&

                <div className="item-icon-box">
                    <div className="item-icon">
                        <i className="flaticon-comment"></i>
                    </div>
                    <ul className="item-number">
                        <li>Balcony  :</li>
                        <li className="deep-clr">{getPropertyData.property_details?.Balcony}</li>
                    </ul>
                </div>


            }
            {(property?.category === 'Residential Rent' && getPropertyData.property_details?.FloorType) &&

                <div className="item-icon-box">
                    <div className="item-icon">
                        <i className="flaticon-comment"></i>
                    </div>
                    <ul className="item-number">
                        <li>FloorType  :</li>
                        <li className="deep-clr">{getPropertyData.property_details?.FloorType}</li>
                    </ul>
                </div>


            }

            {(property?.category === 'Residential Rent' && getPropertyData.property_details?.NonVegAllowed) &&

                <div className="item-icon-box">
                    <div className="item-icon">
                        <i className="flaticon-comment"></i>
                    </div>
                    <ul className="item-number">
                        <li>NonVegAllowed  :</li>
                        <li className="deep-clr">{getPropertyData.property_details?.NonVegAllowed}</li>
                    </ul>
                </div>


            }
            {(property?.category === 'Residential Rent' && getPropertyData.property_details?.GatedSecurity) &&

                <div className="item-icon-box">
                    <div className="item-icon">
                        <i className="flaticon-comment"></i>
                    </div>
                    <ul className="item-number">
                        <li>GatedSecurity  :</li>
                        <li className="deep-clr">{getPropertyData.property_details?.GatedSecurity}</li>
                    </ul>
                </div>


            }
            {(property?.category === 'Commercial Rent' && getPropertyData.AmenitiesDetails?.PowerBackup) &&

                <div className="item-icon-box">
                    <div className="item-icon">
                        <i className="flaticon-comment"></i>
                    </div>
                    <ul className="item-number">
                        <li>PowerBackup  :</li>
                        <li className="deep-clr">{getPropertyData.AmenitiesDetails?.PowerBackup}</li>
                    </ul>
                </div>


            }
            {(property?.category === 'Commercial Rent' && getPropertyData.AmenitiesDetails?.Lift) &&

                <div className="item-icon-box">
                    <div className="item-icon">
                        <i className="flaticon-comment"></i>
                    </div>
                    <ul className="item-number">
                        <li>Lift  :</li>
                        <li className="deep-clr">{getPropertyData.AmenitiesDetails?.Lift}</li>
                    </ul>
                </div>


            }
            {(property?.category === 'Commercial Rent' && getPropertyData.AmenitiesDetails?.Washroom) &&

                <div className="item-icon-box">
                    <div className="item-icon">
                        <i className="flaticon-comment"></i>
                    </div>
                    <ul className="item-number">
                        <li>Washroom  :</li>
                        <li className="deep-clr">{getPropertyData.AmenitiesDetails?.Washroom}</li>
                    </ul>
                </div>


            }
            {(property?.category === 'Commercial Rent' && getPropertyData.AmenitiesDetails?.WaterStorageFacility) &&

                <div className="item-icon-box">
                    <div className="item-icon">
                        <i className="flaticon-comment"></i>
                    </div>
                    <ul className="item-number">
                        <li>WaterStorageFacility  :</li>
                        <li className="deep-clr">{getPropertyData.AmenitiesDetails?.WaterStorageFacility}</li>
                    </ul>
                </div>

            }
            {(property?.category === 'Commercial Rent' && getPropertyData.AmenitiesDetails?.Security) &&

                <div className="item-icon-box">
                    <div className="item-icon">
                        <i className="flaticon-comment"></i>
                    </div>
                    <ul className="item-number">
                        <li>Security  :</li>
                        <li className="deep-clr">{getPropertyData.AmenitiesDetails?.Security}</li>
                    </ul>
                </div>

            }
            {(property?.category === 'Commercial Rent' && getPropertyData.AmenitiesDetails?.Wifi) &&

                <div className="item-icon-box">
                    <div className="item-icon">
                        <i className="flaticon-comment"></i>
                    </div>
                    <ul className="item-number">
                        <li>Wifi  :</li>
                        <li className="deep-clr">{getPropertyData.AmenitiesDetails?.Wifi}</li>
                    </ul>
                </div>


            }
            {(property?.category === 'Commercial Rent' && getPropertyData.AmenitiesDetails?.SimilarUnits) &&

                <div className="item-icon-box">
                    <div className="item-icon">
                        <i className="flaticon-comment"></i>
                    </div>
                    <ul className="item-number">
                        <li>SimilarUnits  :</li>
                        <li className="deep-clr">{getPropertyData.AmenitiesDetails?.SimilarUnits}</li>
                    </ul>
                </div>


            }



            {(property?.category === 'Residential Sale' || property?.category === 'Commercial Sale' && getPropertyData.property_details?.PropertyAge) &&

                <div className="item-icon-box">
                    <div className="item-icon">
                        <i className="flaticon-comment"></i>
                    </div>
                    <ul className="item-number">
                        <li>PropertyAge  :</li>
                        <li className="deep-clr">{getPropertyData.property_details?.PropertyAge}</li>
                    </ul>
                </div>


            }
            {(property?.category === 'Residential Sale' || property?.category === 'Commercial Sale' && getPropertyData.property_details?.Floor) &&

                <div className="item-icon-box">
                    <div className="item-icon">
                        <i className="flaticon-comment"></i>
                    </div>
                    <ul className="item-number">
                        <li>Floor  :</li>
                        <li className="deep-clr">{getPropertyData.property_details?.Floor} / {getPropertyData.property_details?.TotalFloor}</li>
                    </ul>
                </div>


            }
            {((property?.category === 'Residential Sale' || property?.category === 'Commercial Sale') && (getPropertyData.property_details?.OwnershipType || getPropertyData.property_details?.Ownership)) &&

                <div className="item-icon-box">
                    <div className="item-icon">
                        <i className="flaticon-comment"></i>
                    </div>
                    <ul className="item-number">
                        <li>Ownership  :</li>
                        <li className="deep-clr">{getPropertyData.property_details?.OwnershipType} {getPropertyData.property_details?.Ownership}</li>
                    </ul>
                </div>


            }
            {((property?.category === 'Residential Sale' || property?.category === 'Commercial Sale') && (getPropertyData.property_details?.Furnishing || getPropertyData.ReSaleDetails?.Furnishing)) &&


                <div className="item-icon-box">
                    <div className="item-icon">
                        <i className="flaticon-comment"></i>
                    </div>
                    <ul className="item-number">
                        <li>Furnishing  :</li>
                        <li className="deep-clr">{getPropertyData.property_details?.Furnishing} {getPropertyData.ReSaleDetails?.Furnishing}</li>
                    </ul>
                </div>


            }
            {((property?.category === 'Residential Sale' || property?.category === 'Commercial Sale') && (getPropertyData.property_details?.Parking || getPropertyData.ReSaleDetails?.Parking)) &&

                <div className="item-icon-box">
                    <div className="item-icon">
                        <i className="flaticon-comment"></i>
                    </div>
                    <ul className="item-number">
                        <li>Parking  :</li>
                        <li className="deep-clr">{getPropertyData.property_details?.Parking} {getPropertyData.ReSaleDetails?.Parking}</li>
                    </ul>
                </div>


            }

            {(property?.category === 'Residential Sale' && getPropertyData.ReSaleDetails?.KitchenType) &&

                <div className="item-icon-box">
                    <div className="item-icon">
                        <i className="flaticon-comment"></i>
                    </div>
                    <ul className="item-number">
                        <li>KitchenType  :</li>
                        <li className="deep-clr">{getPropertyData.ReSaleDetails?.KitchenType} </li>
                    </ul>
                </div>


            }

            {(property?.category === 'Residential Sale' && getPropertyData.property_details?.Facing) &&

                <div className="item-icon-box">
                    <div className="item-icon">
                        <i className="flaticon-comment"></i>
                    </div>
                    <ul className="item-number">
                        <li>Facing  :</li>
                        <li className="deep-clr">{getPropertyData.property_details?.Facing} </li>
                    </ul>
                </div>


            }
            {(property?.category === 'Residential Sale' && getPropertyData.property_details?.Bathroom) &&
                <div className="item-icon-box">
                    <div className="item-icon">
                        <i className="flaticon-comment"></i>
                    </div>
                    <ul className="item-number">
                        <li>Bathroom  :</li>
                        <li className="deep-clr">{getPropertyData.property_details?.Bathroom} </li>
                    </ul>
                </div>


            }
            {(property?.category === 'Residential Sale' && getPropertyData.property_details?.Balcony) &&

                <div className="item-icon-box">
                    <div className="item-icon">
                        <i className="flaticon-comment"></i>
                    </div>
                    <ul className="item-number">
                        <li>Balcony  :</li>
                        <li className="deep-clr">{getPropertyData.property_details?.Balcony}  </li>
                    </ul>
                </div>


            }
            {(property?.category === 'Residential Sale' && getPropertyData.property_details?.FloorType) &&
                <div className="item-icon-box">
                    <div className="item-icon">
                        <i className="flaticon-comment"></i>
                    </div>
                    <ul className="item-number">
                        <li>FloorType  :</li>
                        <li className="deep-clr">{getPropertyData.property_details?.FloorType}  </li>
                    </ul>
                </div>


            }
            {(property?.category === 'Residential Sale' && getPropertyData.property_details?.WaterSupply) &&

                <div className="item-icon-box">
                    <div className="item-icon">
                        <i className="flaticon-comment"></i>
                    </div>
                    <ul className="item-number">
                        <li>WaterSupply  :</li>
                        <li className="deep-clr">{getPropertyData.property_details?.WaterSupply}  </li>
                    </ul>
                </div>

            }
            {(property?.category === 'Residential Sale' && getPropertyData.property_details?.GatedSecurity) &&

                <div className="item-icon-box">
                    <div className="item-icon">
                        <i className="flaticon-comment"></i>
                    </div>
                    <ul className="item-number">
                        <li>GatedSecurity  :</li>
                        <li className="deep-clr">{getPropertyData.property_details?.GatedSecurity} </li>
                    </ul>
                </div>


            }

            {(property?.category === 'LandOrPlot Sale' && getPropertyData.LandDetails?.PropertyType) &&

                <div className="item-icon-box">
                    <div className="item-icon">
                        <i className="flaticon-comment"></i>
                    </div>
                    <ul className="item-number">
                        <li>Property Type  :</li>
                        <li className="deep-clr">{getPropertyData.LandDetails?.PropertyType} </li>
                    </ul>
                </div>


            }
            {(property?.category === 'LandOrPlot Sale' && getPropertyData.LandDetails?.SaleType) &&

                <div className="item-icon-box">
                    <div className="item-icon">
                        <i className="flaticon-comment"></i>
                    </div>
                    <ul className="item-number">
                        <li>Sale Type   :</li>
                        <li className="deep-clr">{getPropertyData.LandDetails?.SaleType} </li>
                    </ul>
                </div>



            }
            {(property?.category === 'LandOrPlot Sale' && getPropertyData.LandDetails?.Ownership) &&

                <div className="item-icon-box">
                    <div className="item-icon">
                        <i className="flaticon-comment"></i>
                    </div>
                    <ul className="item-number">
                        <li>Ownership    :</li>
                        <li className="deep-clr">{getPropertyData.LandDetails?.Ownership} </li>
                    </ul>
                </div>


            }
            {(property?.category === 'LandOrPlot Sale' && getPropertyData.LandDetails?.BoundaryWall) &&

                <div className="item-icon-box">
                    <div className="item-icon">
                        <i className="flaticon-comment"></i>
                    </div>
                    <ul className="item-number">
                        <li>Boundary Wall    :</li>
                        <li className="deep-clr">{getPropertyData.LandDetails?.BoundaryWall} </li>
                    </ul>
                </div>


            }
            {(property?.category === 'LandOrPlot Sale' && getPropertyData.LandDetails?.GatedSecurity) &&

                <div className="item-icon-box">
                    <div className="item-icon">
                        <i className="flaticon-comment"></i>
                    </div>
                    <ul className="item-number">
                        <li>GatedSecurity    :</li>
                        <li className="deep-clr">{getPropertyData.LandDetails?.GatedSecurity} </li>
                    </ul>
                </div>


            }
            {(property?.category === 'LandOrPlot Sale' && getPropertyData.LandDetails?.FloorsAllowed) &&

                <div className="item-icon-box">
                    <div className="item-icon">
                        <i className="flaticon-comment"></i>
                    </div>
                    <ul className="item-number">
                        <li>FloorsAllowed    :</li>
                        <li className="deep-clr">{getPropertyData.LandDetails?.FloorsAllowed} </li>
                    </ul>
                </div>

            }

            {(property?.category === 'LandOrPlot Sale' && getPropertyData.AmenitiesDetails?.RoadWidth) &&

                <div className="item-icon-box">
                    <div className="item-icon">
                        <i className="flaticon-comment"></i>
                    </div>
                    <ul className="item-number">
                        <li>RoadWidth    :</li>
                        <li className="deep-clr">{getPropertyData.AmenitiesDetails?.RoadWidth} </li>
                    </ul>
                </div>


            }
            {(property?.category === 'LandOrPlot Sale' && getPropertyData.ReSaleDetails?.CurrentlyUnderLoan) &&

                <div className="item-icon-box">
                    <div className="item-icon">
                        <i className="flaticon-comment"></i>
                    </div>
                    <ul className="item-number">
                        <li>CurrentlyUnderLoan    :</li>
                        <li className="deep-clr">{getPropertyData.ReSaleDetails?.CurrentlyUnderLoan} </li>
                    </ul>
                </div>

            }
            {(property?.category === 'LandOrPlot Sale' && getPropertyData.LandDetails?.ISMultiplePlots) &&

                <div className="item-icon-box">
                    <div className="item-icon">
                        <i className="flaticon-comment"></i>
                    </div>
                    <ul className="item-number">
                        <li>ISMultiplePlots    :</li>
                        <li className="deep-clr">{getPropertyData.LandDetails?.ISMultiplePlots} </li>
                    </ul>
                </div>


            }
            {(property?.category === 'LandOrPlot Sale' && getPropertyData.LandDetails?.PlotWidth) &&

                <div className="item-icon-box">
                    <div className="item-icon">
                        <i className="flaticon-comment"></i>
                    </div>
                    <ul className="item-number">
                        <li>Width and Length    :</li>
                        <li className="deep-clr">{getPropertyData.LandDetails?.PlotWidth}* {getPropertyData.LandDetails?.PlotLength}s </li>
                    </ul>
                </div>


            }
        </div>)
    }

    const isValidJson = (jsonString) => {
        try {
            const jsonObject = JSON.parse(jsonString);
            return jsonObject && typeof jsonObject === 'object';
        } catch (e) {
            return false;
        }
    };

    function fetchAdditionalInformation() {
        return (<>
            <div id="additional-information" className="col-12">
                <div className="row row-cards mt-4">
                    {((property?.category === 'LandOrPlot Sale' || property?.category === 'Residential Sale') && getPropertyData.AdditionalInfo?.KhataCertificate) &&
                        <div className="col-6 col-sm-6 col-lg-6">
                            <div className="row g-0 align-items-center mb-4 pb-4 border-bottom border-color-extra-medium-gray m-0">
                                <div className="col-md-8 feature-box feature-box-left-icon-middle last-paragraph-no-margin">
                                    <div className="feature-box-icon me-2">
                                        <img src="images/demo-real-estate-property-details-08.svg" className="w-25px" alt="" data-no-retina="" />
                                    </div>
                                    <div className="feature-box-content">
                                        <span className="text-dark-gray">KhataCertificate:</span>
                                    </div>
                                </div>
                                <div className="col-md-4">{getPropertyData.AdditionalInfo?.KhataCertificate}</div>
                            </div>
                        </div>
                    }
                    {((property?.category === 'LandOrPlot Sale' || property?.category === 'Residential Sale') && getPropertyData.AdditionalInfo?.ConversionCertificate) &&
                        <div className="col-6 col-sm-6 col-lg-6">
                            <div className="row g-0 align-items-center mb-4 pb-4 border-bottom border-color-extra-medium-gray m-0">
                                <div className="col-md-8 feature-box feature-box-left-icon-middle last-paragraph-no-margin">
                                    <div className="feature-box-icon me-2">
                                        <img src="images/demo-real-estate-property-details-08.svg" className="w-25px" alt="" data-no-retina="" />
                                    </div>
                                    <div className="feature-box-content">
                                        <span className="text-dark-gray">Conversion Certificate:</span>
                                    </div>
                                </div>
                                <div className="col-md-4">{getPropertyData.AdditionalInfo?.ConversionCertificate}</div>
                            </div>
                        </div>
                    }
                    {((property?.category === 'LandOrPlot Sale' || property?.category === 'Residential Sale') && getPropertyData.AdditionalInfo?.EncumbranceCertificate) &&
                        <div className="col-6 col-sm-6 col-lg-6">
                            <div className="row g-0 align-items-center mb-4 pb-4 border-bottom border-color-extra-medium-gray m-0">
                                <div className="col-md-8 feature-box feature-box-left-icon-middle last-paragraph-no-margin">
                                    <div className="feature-box-icon me-2">
                                        <img src="images/demo-real-estate-property-details-08.svg" className="w-25px" alt="" data-no-retina="" />
                                    </div>
                                    <div className="feature-box-content">
                                        <span className="text-dark-gray">EncumbranceCertificate:</span>
                                    </div>
                                </div>
                                <div className="col-md-4">{getPropertyData.AdditionalInfo?.EncumbranceCertificate}</div>
                            </div>
                        </div>
                    }
                    {((property?.category === 'LandOrPlot Sale' || property?.category === 'Residential Sale') && getPropertyData.AdditionalInfo?.SaleDeedCertificate) &&
                        <div className="col-6 col-sm-6 col-lg-6">
                            <div className="row g-0 align-items-center mb-4 pb-4 border-bottom border-color-extra-medium-gray m-0">
                                <div className="col-md-8 feature-box feature-box-left-icon-middle last-paragraph-no-margin">
                                    <div className="feature-box-icon me-2">
                                        <img src="images/demo-real-estate-property-details-08.svg" className="w-25px" alt="" data-no-retina="" />
                                    </div>
                                    <div className="feature-box-content">
                                        <span className="text-dark-gray">SaleDeedCertificate:</span>
                                    </div>
                                </div>
                                <div className="col-md-4">{getPropertyData.AdditionalInfo?.SaleDeedCertificate}</div>
                            </div>
                        </div>
                    }
                    {((property?.category === 'LandOrPlot Sale' || property?.category === 'Residential Sale') && getPropertyData.AdditionalInfo?.ReraApproved) &&
                        <div className="col-6 col-sm-6 col-lg-6">
                            <div className="row g-0 align-items-center mb-4 pb-4 border-bottom border-color-extra-medium-gray m-0">
                                <div className="col-md-8 feature-box feature-box-left-icon-middle last-paragraph-no-margin">
                                    <div className="feature-box-icon me-2">
                                        <img src="images/demo-real-estate-property-details-08.svg" className="w-25px" alt="" data-no-retina="" />
                                    </div>
                                    <div className="feature-box-content">
                                        <span className="text-dark-gray">ReraApproved:</span>
                                    </div>
                                </div>
                                <div className="col-md-4">{getPropertyData.AdditionalInfo?.ReraApproved == "Yes" ? (getPropertyData.AdditionalInfo?.ReraApproved + "(" + getPropertyData.AdditionalInfo?.RERANumber + ")") : getPropertyData.AdditionalInfo?.ReraApproved} </div>
                            </div>
                        </div>
                    }
                    {(property?.category === 'Commercial Sale' && getPropertyData.AdditionalInfo?.PreviousOccupancy) &&
                        <div className="col-6 col-sm-6 col-lg-6">
                            <div className="row g-0 align-items-center mb-4 pb-4 border-bottom border-color-extra-medium-gray m-0">
                                <div className="feature-box feature-box-left-icon-middle last-paragraph-no-margin">
                                    <div className="feature-box-icon me-2">
                                        <img src="images/demo-real-estate-property-details-08.svg" className="w-25px" alt="" data-no-retina="" />
                                    </div>
                                    <div className="feature-box-content">
                                        <span className="text-dark-gray">PreviousOccupancy:</span>
                                    </div>
                                </div>
                                <div className="col">{getPropertyData.AdditionalInfo?.PreviousOccupancy}</div>
                            </div>
                        </div>
                    }
                    {(property?.category === 'Residential Sale' && getPropertyData.AdditionalInfo?.PropertyTax) &&
                        <div className="col-6 col-sm-6 col-lg-6">
                            <div className="row g-0 align-items-center mb-4 pb-4 border-bottom border-color-extra-medium-gray m-0">
                                <div className="col-md-8 feature-box feature-box-left-icon-middle last-paragraph-no-margin">
                                    <div className="feature-box-icon me-2">
                                        <img src="images/demo-real-estate-property-details-08.svg" className="w-25px" alt="" data-no-retina="" />
                                    </div>
                                    <div className="feature-box-content">
                                        <span className="text-dark-gray">PropertyTax:</span>
                                    </div>
                                </div>
                                <div className="col-md-4">{getPropertyData.AdditionalInfo?.PropertyTax}</div>
                            </div>
                        </div>
                    }
                    {(property?.category === 'Commercial Sale' && getPropertyData.AdditionalInfo?.IdealFor) &&
                        <div className="col-6 col-sm-6 col-lg-6">
                            <div className="row g-0 align-items-center mb-4 pb-4 border-bottom border-color-extra-medium-gray m-0">
                                <div className="feature-box feature-box-left-icon-middle last-paragraph-no-margin">
                                    <div className="feature-box-icon me-2">
                                        <img src="images/demo-real-estate-property-details-08.svg" className="w-25px" alt="" data-no-retina="" />
                                    </div>
                                    <div className="feature-box-content">
                                        <span className="text-dark-gray">Ideal For:</span>
                                    </div>
                                </div>
                                <div className="col">{getPropertyData.AdditionalInfo?.IdealFor}</div>
                            </div>
                        </div>
                    }

                </div>
            </div>
        </>
        )
    }




    function fetchAmenities() {
        console.log("fetchAmenities")
        console.log(getPropertyData?.AmenitiesDetails)

        const columns = [[], [], []];
        if (property?.category === 'Residential Rent' || property?.category === 'Residential Sale') {
            const parsedData = getPropertyData?.AmenitiesDetails.map((item) => JSON.parse(item));
            parsedData.forEach((item, index) => {
                columns[index % 3].push(item); // Distribute items cyclically across the 3 columns
            });
        }
        return (<>

            <div className="row">
                {(property?.category === 'Residential Sale' || property?.category === 'Residential Rent') && columns?.map((column, columnIndex) => {

                    return (
                        <div className="col-lg-4" key={columnIndex} >
                            <ul className="ameniting-list">
                                {column.map((item, index) => (
                                    <li key={index}><i className="fas fa-check-circle"></i>{item.name}</li>

                                ))}
                            </ul>
                        </div>

                    );

                })}
            </div>
            {/* {(property?.category === 'Residential Sale' || property?.category === 'Residential Rent') && getPropertyData?.AmenitiesDetails?.map((item, index) => {
                        return (
                            <div className="col-3 col-sm-3 col-lg-2" key={index}>
                                <div className="card">
                                    <div className="card-body p-3 text-center">
                                        <div className="h4 m-0">{item}</div>
                                        <p className="text  mb-4" color="gray">{item}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })} */}
            {((property?.category === 'Commercial Rent' || property?.category === 'Commercial Sale') && getPropertyData.AmenitiesDetails?.PowerBackup) &&
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="card mx-0">
                        <div className="card-body p-2 text-center">
                            <div className="d-flex mb-1">
                                <img src={"/svgs/power-bank-svgrepo-com.svg"} className="Features-icon" />
                                <p className="features-item-title mb-0" color="gray">PowerBackup</p>
                            </div>
                            <div className="futures-item-value m-0 text-darkgray">{getPropertyData.AmenitiesDetails?.PowerBackup}</div>
                        </div>
                    </div>
                </div>
            }
            {((property?.category === 'Commercial Rent' || property?.category === 'Commercial Sale') && getPropertyData.AmenitiesDetails?.Lift) &&
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="card mx-0">
                        <div className="card-body p-2 text-center">
                            <div className="d-flex mb-1">
                                <img src={"/svgs/lift-elevator-svgrepo-com.svg"} className="Features-icon" />
                                <p className="features-item-title mb-0" color="gray">Lift</p>
                            </div>
                            <div className="futures-item-value m-0 text-darkgray">{getPropertyData.AmenitiesDetails?.Lift}</div>
                        </div>
                    </div>
                </div>
            }
            {((property?.category === 'Commercial Rent' || property?.category === 'Commercial Sale') && getPropertyData.AmenitiesDetails?.CommercialParking) &&
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="card mx-0">
                        <div className="card-body p-2 text-center">
                            <div className="d-flex mb-1">
                                <img src={"/svgs/parking-svgrepo-com.svg"} className="Features-icon" />
                                <p className="features-item-title mb-0" color="gray">CommercialParking</p>
                            </div>
                            <div className="futures-item-value m-0 text-darkgray">{getPropertyData.AmenitiesDetails?.CommercialParking}</div>
                        </div>
                    </div>
                </div>
            }
            {((property?.category === 'Commercial Rent' || property?.category === 'Commercial Sale') && getPropertyData.AmenitiesDetails?.Washroom) &&
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="card mx-0">
                        <div className="card-body p-2 text-center">
                            <div className="d-flex mb-1">
                                <img src={"/svgs/wc-washroom-svgrepo-com.svg"} className="Features-icon" />
                                <p className="features-item-title mb-0" color="gray">Washroom</p>
                            </div>
                            <div className="futures-item-value m-0 text-darkgray">{getPropertyData.AmenitiesDetails?.Washroom}</div>
                        </div>
                    </div>
                </div>
            }
            {((property?.category === 'Commercial Rent' || property?.category === 'Commercial Sale') && getPropertyData.AmenitiesDetails?.WaterStorageFacility) &&
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="card mx-0">
                        <div className="card-body p-2 text-center">
                            <div className="d-flex mb-1">
                                <img src="/svgs/plumbering-water-supply-svgrepo-com.svg" className="Features-icon" />
                                <p className="features-item-title mb-0" color="gray">WaterStorageFacility</p>
                            </div>
                            <div className="futures-item-value m-0 text-darkgray">{getPropertyData.AmenitiesDetails?.WaterStorageFacility}</div>
                        </div>
                    </div>
                </div>
            }
            {((property?.category === 'Commercial Rent' || property?.category === 'Commercial Sale') && getPropertyData.AmenitiesDetails?.Security) &&
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="card mx-0">
                        <div className="card-body p-2 text-center">
                            <div className="d-flex mb-1">
                                <img src={"/svgs/security-svgrepo-com.svg"} className="Features-icon" />
                                <p className="features-item-title mb-0" color="gray">Security</p>
                            </div>
                            <div className="futures-item-value m-0 text-darkgray">{getPropertyData.AmenitiesDetails?.Security}</div>
                        </div>
                    </div>
                </div>
            }
            {((property?.category === 'Commercial Rent' || property?.category === 'Commercial Sale') && getPropertyData.AmenitiesDetails?.Wifi) &&
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="card mx-0">
                        <div className="card-body p-2 text-center">
                            <div className="d-flex mb-1">
                                <img src="/svgs/wifi-1029-svgrepo-com.svg" className="Features-icon" />
                                <p className="features-item-title mb-0" color="gray">Wifi</p>
                            </div>
                            <div className="futures-item-value m-0 text-darkgray">{getPropertyData.AmenitiesDetails?.Wifi}</div>
                        </div>
                    </div>
                </div>
            }
            {((property?.category === 'Commercial Rent' || property?.category === 'Commercial Sale') && getPropertyData.AmenitiesDetails?.SimilarUnits) &&
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="card mx-0">
                        <div className="card-body p-2 text-center">
                            <div className="d-flex mb-1">
                                <img src="/svgs/multiple-defenses-svgrepo-com.svg" className="Features-icon" />
                                <p className="features-item-title mb-0" color="gray">SimilarUnits</p>
                            </div>
                            <div className="futures-item-value m-0 text-darkgray">{getPropertyData.AmenitiesDetails?.SimilarUnits}</div>
                        </div>
                    </div>
                </div>
            }


            {(property?.category === 'LandOrPlot Sale' && getPropertyData.AmenitiesDetails?.WaterSupply) &&
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="card mx-0">
                        <div className="card-body p-2 text-center">
                            <div className="d-flex mb-1">
                                <img src="/svgs/plumbering-water-supply-svgrepo-com.svg" className="Features-icon" />
                                <p className="features-item-title mb-0" color="gray">Water Supply</p>
                            </div>
                            <div className="futures-item-value m-0 text-darkgray">{getPropertyData.AmenitiesDetails?.WaterSupply}</div>

                        </div>
                    </div>
                </div>
            }
            {(property?.category === 'LandOrPlot Sale' && getPropertyData.AmenitiesDetails?.ElectricityConnection) &&
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="card mx-0">
                        <div className="card-body p-2 text-center">
                            <div className="d-flex mb-1">
                                <img src={"/src/assets/images/property-details/electricity-connection.png"} className="Features-icon" />
                                <p className="features-item-title mb-0" color="gray">Electricity Connection</p>
                            </div>
                            <div className="futures-item-value m-0 text-darkgray">{getPropertyData.AmenitiesDetails?.ElectricityConnection}</div>
                        </div>
                    </div>
                </div>
            }
            {(property?.category === 'LandOrPlot Sale' && getPropertyData.AmenitiesDetails?.SewageConnection) &&
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="card mx-0">
                        <div className="card-body p-2 text-center">
                            <div className="d-flex mb-1">
                                <img src={"/src/assets/images/property-details/sewage-connection.png"} className="Features-icon" />
                                <p className="features-item-title mb-0" color="gray">Sewage Connection</p>
                            </div>
                            <div className="futures-item-value m-0 text-darkgray">{getPropertyData.AmenitiesDetails?.SewageConnection}</div>
                        </div>
                    </div>
                </div>
            }
            {(property?.category === 'LandOrPlot Sale' && getPropertyData.AmenitiesDetails?.RoadWidth) &&
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="card mx-0">
                        <div className="card-body p-2 text-center">
                            <div className="d-flex mb-1">
                                <img src={"/src/assets/images/property-details/road-width.png"} className="Features-icon" />
                                <p className="features-item-title mb-0" color="gray">RoadWidth</p>
                            </div>
                            <div className="futures-item-value m-0 text-darkgray">{getPropertyData.AmenitiesDetails?.RoadWidth}</div>

                        </div>
                    </div>
                </div>
            }



        </>
        )
    }

    return (<div className={getClassName()}>
        <h3 className="item-title">{tabTitle}</h3>

        {renderContent()}

    </div>
    )
}
export default PropertyInformation