import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { clearSavedListing, handleLisingRemove, handleSave } from '../../redux/saveListing/saveListingSlice';
import { RiArmchairLine } from 'react-icons/ri';
import { FaRegBuilding } from 'react-icons/fa6';
import { LuUser2 } from 'react-icons/lu';
import moment from 'moment';
import { IoMdHeartEmpty } from 'react-icons/io';
import { BsFlagFill } from 'react-icons/bs';
import { IoKeyOutline } from 'react-icons/io5';


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const slides = [
    {
        image: 'https://www.radiustheme.com/demo/wordpress/themes/homlisti/wp-content/uploads/classified-listing/2022/03/daziy_millar3-1-400x240.jpg',
        link: 'https://www.radiustheme.com/demo/wordpress/themes/homlisti/property/northwest-office-space/'
    },
    {
        image: 'https://www.radiustheme.com/demo/wordpress/themes/homlisti/wp-content/uploads/classified-listing/2022/03/daziy_millar4-1-400x240.jpg',
        link: 'https://www.radiustheme.com/demo/wordpress/themes/homlisti/property/northwest-office-space/'
    },
    {
        image: 'https://www.radiustheme.com/demo/wordpress/themes/homlisti/wp-content/uploads/classified-listing/2022/03/daziy_millar5-1-400x240.jpg',
        link: 'https://www.radiustheme.com/demo/wordpress/themes/homlisti/property/northwest-office-space/'
    },
    {
        image: 'https://www.radiustheme.com/demo/wordpress/themes/homlisti/wp-content/uploads/classified-listing/2022/03/daziy_millar2-2-400x240.jpg',
        link: 'https://www.radiustheme.com/demo/wordpress/themes/homlisti/property/northwest-office-space/'
    }
];
const PropertyList = ({ listing, Category, AdType }) => {

    const [heart, setHeart] = useState(false);
    const { saveListings } = useSelector(state => state.savedListing);
    const { currentUser } = useSelector(state => state.user);
    const propertyObject = useState(JSON.parse(listing.propertyObject));
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSaveListings = (id) => {
        if (currentUser && currentUser.email) {
            const isSaved = saveListings.some(saveListing => saveListing._id === id);
            if (isSaved) {
                const restListings = saveListings.filter(savedListing => savedListing._id !== id);
                dispatch(handleLisingRemove(restListings));
                setHeart(false);
            } else {
                const listingToAdd = listing
                dispatch(handleSave(listingToAdd));
                setHeart(true);
            }
        }
        else {
            navigate('/login');
        }
    };
    useEffect(() => {
        if (currentUser) {
            const isSaved = saveListings.some(saveListing => saveListing._id === _id);
            if (isSaved) {
                setHeart(true);
            } else {
                setHeart(false);
            }
        }
        else {
            dispatch(clearSavedListing())
        }
    }, []);

    const GetPropertyTitle = (propertyObject) => {
        let propertyTitle = "";
        switch (Category) {
            case "Residential Rent":
                const rentDetails = propertyObject[0]?.property_details;
                propertyTitle = `${rentDetails.BHKType} ${rentDetails.ApartmentType} For Rent in ${propertyObject[0].LocalityDetails?.city}`;
                break;
            case "Residential Sale":
                const saleDetails = propertyObject[0]?.property_details;
                propertyTitle = `${saleDetails.BHKType} ${saleDetails.ApartmentType} For Sale in ${propertyObject[0].LocalityDetails?.city}`;
                break;
            case "Commercial Rent":
                const commercialRentDetails = propertyObject[0]?.property_details;
                propertyTitle = `${commercialRentDetails.PropertyType} For Rent in ${propertyObject[0].LocalityDetails?.city}`;
                break;
            case "Commercial Sale":
                const commercialSaleDetails = propertyObject[0]?.property_details;
                propertyTitle = `${commercialSaleDetails.PropertyType} For Sale in ${propertyObject[0].LocalityDetails?.city}`;
                break;
            case "LandOrPlot Sale":
                propertyTitle = `Plot For Sale in ${propertyObject[0].LocalityDetails?.city}`;
                break;
        }
        return propertyTitle;
    }

    const handleClick = () => {
        let _url = "/property/" + Category.split(" ").join("/").toLowerCase() + "/" + GetPropertyTitle(propertyObject) + "/" + listing.propertyID + "/detail?justpayowners=" + Category.split(" ").join("_").toLowerCase() + "_list";
        window.open(_url, '_blank');
    }

    const renderContent = () => {
        console.log(Category)
        if (Category === 'Residential Rent') {
            return residentialRent();
        } else if (Category === 'Residential Sale') {
            return residentialSell();
        } else if (Category === 'Commercial Rent') {
            return commercialRent();
        } else if (Category === 'Commercial Sale') {
            return commercialSell();
        } else if (Category === 'LandOrPlot Sale') {
            return PlotSell();
        } else {
            return <div>no Match</div>;
        }
    };

    function residentialRent() {
        return (<div className="col-lg-12" onClick={handleClick}>
            <div className="property-box2 property-box4 wow  fadeInUp animated" data-wow-delay=".6s" style={{
                visibility: "visible",
                animationDelay: "0.6s",
                animationName: "fadeInUp",
            }}>

                <div className="item-img">
                    <a href="#">
                        <img src="/src/assets/img/blog/blog13.jpg" alt="blog" width="250" height="200" />
                    </a>
                    <div className="item-category-box1">
                        <div className="item-category">For Rent</div>
                    </div>
                </div>
                <div className="item-content item-content-property">
                    <div className="item-category10">{propertyObject[0]?.property_details?.ApartmentType}</div>
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
                        <h3 className="item-title"><a href="#">{GetPropertyTitle(propertyObject)}</a></h3>
                    </div>
                    <div className="listing-badge-wrap">
                        <span className="badge rtcl-badge-popular popular-badge badge-success">Verified</span>
                        <span className="badge rtcl-badge-_top">Top</span>
                    </div>
                    <div className="location-area"><i className="flaticon-maps-and-flags"></i>{propertyObject[0]?.LocalityDetails?.city},{propertyObject[0]?.LocalityDetails?.state}</div>
                    <div className="item-categoery3">
                        <ul>
                            <li><i className="flaticon-bed"></i>Beds: {propertyObject[0]?.property_details?.BHKType}</li>
                            <li><i className="flaticon-shower"></i>Baths: {propertyObject[0]?.property_details?.Bathroom}</li>
                            <li><i className="flaticon-two-overlapping-square"></i>{propertyObject[0]?.property_details?.builtUpArea} Sqft</li>

                        </ul>
                    </div>
                    <div className="product-bottom-content"><div className="item-author">
                        <div className="media">
                            <img loading="lazy" width="150" height="150" src="https://www.radiustheme.com/demo/wordpress/themes/homlisti/wp-content/uploads/classified-listing/2022/01/avater-150x150.jpg" className="attachment-150x150 size-150x150" alt="" decoding="async" title="" />
                            <div className="media-body">
                                <div className="item-title">
                                    <a className="author-link" href="#">
                                        John Doe											                                        </a>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="item-price">₹
                            {propertyObject[0].RentalDetails?.PropertyAvailable == "Only rent" ? propertyObject[0]?.RentalDetails?.ExpectedRent : propertyObject[0]?.RentalDetails?.LeaseAmount}
                            <i>/</i><span>Month</span></div>
                    </div>

                </div>
            </div>
        </div>)
    }

    function residentialSell() {
        return (<div className="col-lg-12" onClick={handleClick}>
            <div className="property-box2 property-box4 wow  fadeInUp animated" data-wow-delay=".6s" style={{
                visibility: "visible",
                animationDelay: "0.6s",
                animationName: "fadeInUp",
            }}>
                <div className="item-img">
                    <a href="#">
                        <img src="/src/assets/img/blog/blog13.jpg" alt="blog" width="250" height="200" />
                    </a>
                    <div className="item-category-box1">
                        <div className="item-category">For Sale</div>
                    </div>
                </div>
                <div className="item-content item-content-property">
                    <div className="item-category10">{propertyObject[0]?.property_details?.ApartmentType}</div>
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
                        <h3 className="item-title"><a href="#">{GetPropertyTitle(propertyObject)}</a></h3>
                    </div>
                    <div className="location-area"><i className="flaticon-maps-and-flags"></i>{propertyObject[0]?.LocalityDetails?.city},{propertyObject[0]?.LocalityDetails?.state}</div>
                    <div className="item-categoery3">
                        <ul>
                            <li><i className="flaticon-bed"></i>Beds: {propertyObject[0]?.property_details?.BHKType}</li>
                            <li><i className="flaticon-shower"></i>Baths: {propertyObject[0]?.property_details?.Bathroom}</li>
                            <li><i className="flaticon-two-overlapping-square"></i>{propertyObject[0]?.property_details?.builtUpArea} Sqft</li>
                        </ul>
                    </div>
                    <div className="item-price">₹
                        {propertyObject[0]?.ReSaleDetails?.ExpectedPrice}
                        {propertyObject[0].ReSaleDetails?.PriceNegotiable == "Yes" && <><i>/</i><span>(Negotiable)</span></>}
                    </div>

                </div>
            </div>
        </div>)
    }

    function commercialRent() {
        return (<div className="col-lg-12" onClick={handleClick}>
            <div className="property-box2 property-box4 wow  fadeInUp animated" data-wow-delay=".6s" style={{
                visibility: "visible",
                animationDelay: "0.6s",
                animationName: "fadeInUp",
            }}>
                <div className="item-img">
                    <a href="#">
                        <img src="/src/assets/img/blog/blog13.jpg" alt="blog" width="250" height="200" />
                    </a>
                    <div className="item-category-box1">
                        <div className="item-category">For Rent</div>
                    </div>
                </div>
                <div className="item-content item-content-property">
                    <div className="item-category10"><a href="#">{propertyObject[0]?.property_details?.BHKType}</a></div>
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
                        <h3 className="item-title"><a href="#">{GetPropertyTitle(propertyObject)}</a></h3>
                    </div>
                    <div className="location-area"><i className="flaticon-maps-and-flags"></i>Downey, California</div>
                    <div className="item-categoery3">
                        <ul>
                            <li><i className="flaticon-bed"></i>Beds: {propertyObject[0]?.property_details?.BHKType}</li>
                            <li><i className="flaticon-shower"></i>Baths: {propertyObject[0]?.property_details?.Bathroom}</li>
                            <li><i className="flaticon-two-overlapping-square"></i>{propertyObject[0]?.property_details?.builtUpArea} Sqft</li>
                        </ul>
                    </div>
                    <div className="item-price">₹
                        {propertyObject[0].RentalDetails?.PropertyAvailable == "Only rent" ? propertyObject[0]?.RentalDetails?.ExpectedRent : propertyObject[0]?.RentalDetails?.LeaseAmount}
                        <i>/</i><span>Month</span></div>

                </div>
            </div>
        </div>)
    }

    function commercialSell() {
        return (<div className="col-lg-12" onClick={handleClick}>
            <div className="property-box2 property-box4 wow  fadeInUp animated" data-wow-delay=".6s" style={{
                visibility: "visible",
                animationDelay: "0.6s",
                animationName: "fadeInUp",
            }}>
                <div className="item-img">
                    <a href="#">
                        <img src="/src/assets/img/blog/blog13.jpg" alt="blog" width="250" height="200" />
                    </a>
                    <div className="item-category-box1">
                        <div className="item-category">For Rent</div>
                    </div>
                </div>
                <div className="item-content item-content-property">
                    <div className="item-category10"><a href="#">{propertyObject[0]?.property_details?.BHKType}</a></div>
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
                        <h3 className="item-title"><a href="#">{GetPropertyTitle(propertyObject)}</a></h3>
                    </div>
                    <div className="location-area"><i className="flaticon-maps-and-flags"></i>Downey, California</div>
                    <div className="item-categoery3">
                        <ul>
                            <li><i className="flaticon-bed"></i>Beds: {propertyObject[0]?.property_details?.BHKType}</li>
                            <li><i className="flaticon-shower"></i>Baths: {propertyObject[0]?.property_details?.Bathroom}</li>
                            <li><i className="flaticon-two-overlapping-square"></i>{propertyObject[0]?.property_details?.builtUpArea} Sqft</li>
                        </ul>
                    </div>
                    <div className="item-price">₹
                        {propertyObject[0].RentalDetails?.PropertyAvailable == "Only rent" ? propertyObject[0]?.RentalDetails?.ExpectedRent : propertyObject[0]?.RentalDetails?.LeaseAmount}
                        <i>/</i><span>Month</span></div>

                </div>
            </div>
        </div>)
    }

    function PlotSell() {
        return (<div className="col-lg-12" onClick={handleClick}>
            <div className="property-box2 property-box4 wow  fadeInUp animated" data-wow-delay=".6s" style={{
                visibility: "visible",
                animationDelay: "0.6s",
                animationName: "fadeInUp",
            }}>
                <div className="item-img">
                    <a href="#">
                        <img src="/src/assets/img/blog/blog13.jpg" alt="blog" width="250" height="200" />
                    </a>
                    <div className="item-category-box1">
                        <div className="item-category">For Rent</div>
                    </div>
                </div>
                <div className="item-content item-content-property">
                    <div className="item-category10"><a href="#">{propertyObject[0]?.property_details?.BHKType}</a></div>
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
                        <h3 className="item-title"><a href="#">{GetPropertyTitle(propertyObject)}</a></h3>
                    </div>
                    <div className="location-area"><i className="flaticon-maps-and-flags"></i>Downey, California</div>
                    <div className="item-categoery3">
                        <ul>
                            <li><i className="flaticon-bed"></i>Beds: {propertyObject[0]?.property_details?.BHKType}</li>
                            <li><i className="flaticon-shower"></i>Baths: {propertyObject[0]?.property_details?.Bathroom}</li>
                            <li><i className="flaticon-two-overlapping-square"></i>{propertyObject[0]?.property_details?.builtUpArea} Sqft</li>
                        </ul>
                    </div>
                    <div className="item-price">₹
                        {propertyObject[0].RentalDetails?.PropertyAvailable == "Only rent" ? propertyObject[0]?.RentalDetails?.ExpectedRent : propertyObject[0]?.RentalDetails?.LeaseAmount}
                        <i>/</i><span>Month</span></div>

                </div>
            </div>
        </div>)
    }


    return (

        <>{renderContent()}</>


    )
}
export default PropertyList