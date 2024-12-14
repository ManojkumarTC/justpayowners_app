import Modal from 'react-bootstrap/Modal';
import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';

import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import moment from 'moment'
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import JPOapi from "../../common";
import FormUpdate from "../../common/EnquiryandReportAndGetContactForms/UpdateForms"
import ContactModel from '../../common/EnquiryandReportAndGetContactForms/ContactModel'
import EnquiryModel from '../../common/EnquiryandReportAndGetContactForms/EnquiryModel'
import ReportModel from '../../common/EnquiryandReportAndGetContactForms/ReportModel'
import { toast } from 'react-toastify';



const PropertyDetailsHeader = ({ property }) => {
    const [modalShow, setModalShow] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [index, setIndex] = useState(-1);
    const { userId } = useSelector(state => state.auth);
    const fallbackImageURL = 'http://justpayownersimages.runasp.net//justpayowners/abf5d9d1-e519-4a32-9748-9d79f0e0b4b1/magic17.jpg'; // Replace with your fallback image URL
    const fallbackImageURL1 = 'https://via.placeholder.com/150';
    const fallbackImageURL2 = 'https://cdn-imgix.headout.com/tour/652/TOUR-IMAGE/cd0fa708-27c2-4145-9fcf-14e84d910456-517-new-york-phantom-of-the-opera-00.jpg';
    const objPhoto = [
        {
            src: fallbackImageURL,
            width: 1600,
            height: 900,
        },
        {
            src: fallbackImageURL1,
            width: 1600,
            height: 900,
        },
        {
            src: fallbackImageURL2,
            width: 1600,
            height: 900,
        },

    ];
    const [photos, setPhotos] = useState(objPhoto);
    const handleShow = (title) => {
        setModalTitle(title);
        setModalShow(true);
    };

    const navigate = useNavigate()
    const { reset, register, handleSubmit, getValues, setError, formState: { errors } } = useForm({
        mode: "onChange"
    });

    const optionchanged = (e, id) => {
        setSelect(select => ({ ...select, [id]: e.target.value }));
    };
    const URL = window.location.pathname;
    const parts = URL.split('/');
    const PropertyId = parts[parts.length - 1];

    console.log("PropertyId - ", PropertyId)

    const getPropertyData = JSON.parse(property.propertyData);
    //   const objPropertyInformation = getPropertyData.LandDetails;
    //   const objLocationInformation = getPropertyData.LocalityDetails;  
    //   const objResaleInformation = getPropertyData.ReSaleDetails;
    //   const objAmenitiesInformation = getPropertyData.AmenitiesDetails;
    //   const objGalleryInformation = getPropertyData.GalleryDetails;
    //   const objAdditionalInformation  = getPropertyData.AdditionalInfo;
    //   const objScheduleInformation  = getPropertyData.ScheduleInfo;

    useEffect(() => {
        const getPropertyData = JSON.parse(property.propertyData);
        const getgalleryData = getPropertyData?.GalleryDetails;
        if (getgalleryData != null && getgalleryData.length > 0) {
            objPhoto.length = 0;
            for (let i = 0; i < 3; i++) {
                const newPhoto = {
                    src: getgalleryData[i],
                    width: 4,
                    height: 3
                };
                objPhoto.push(newPhoto);
            }
            setPhotos(objPhoto);
        }
    }, []);


    const handleFormSubmit = async (data, url, type, props) => {
        try {
            const serverRes = await FormUpdate(userId, data, url)
            console.log("serverRes", serverRes)
            if (serverRes.success === false) {
                toast.error(serverRes.message, {
                    autoClose: 2000,
                })
            }
            else {
                // toast.success(serverRes.message, {
                //     autoClose: 2000,
                // })  
                Swal.fire({
                    title: `${type} Submitted Successfully`,
                    text: `Your ${type} has been Submitted successfully`,
                    icon: 'success',
                    confirmButtonText: 'Ok'
                }).then(() => {
                    reset()
                    setModalShow(false)
                    //navigate(`/property-detail/${PropertyId}`);
                });
            }
        } catch (error) {
            toast.error(error.message, {
                autoClose: 2000,
            })
        }
    }

    const onSubmit = handleSubmit(async (props, data, e) => {
        console.log("data", props)
        if (data.Textarea != undefined) {
            let url = JPOapi.UpdateEnquiry.url
            let type = "Enquiry"
            const EnquiryModelData = EnquiryModel.properties;
            EnquiryModelData.firstName = data.FullName
            EnquiryModelData.email = data.Email
            EnquiryModelData.phoneNumber = data.MobileNumber
            EnquiryModelData.inquiryDetails = data.Textarea
            EnquiryModelData.AdvertiseID = PropertyId
            EnquiryModelData.CreatedBy = userId;
            EnquiryModelData.createdDate = new Date().toISOString();
            EnquiryModelData.updatedDate = new Date().toISOString();
            EnquiryModelData.inquiryDate = new Date().toISOString();
            EnquiryModelData.inquiryStatus = "Submitted"
            await handleFormSubmit(EnquiryModelData, url, type, props)
        }
        if (data.Textarea == undefined && data.ReportReasons == undefined) {
            let url = JPOapi.UpdateGetContact.url
            let type = "Contact"
            const ContactModelData = ContactModel.properties;
            ContactModelData.firstName = data.FullName
            ContactModelData.email = data.Email
            ContactModelData.phoneNumber = data.MobileNumber
            ContactModelData.AdvertiseID = PropertyId
            ContactModelData.CreatedBy = userId;
            ContactModelData.createdDate = new Date().toISOString();
            ContactModelData.updatedDate = new Date().toISOString();
            ContactModelData.inquiryDate = new Date().toISOString();
            ContactModelData.inquiryStatus = "Submitted"
            await handleFormSubmit(ContactModelData, url, type, props)
        }
        if (data.ReportReasons != undefined) {
            let url = JPOapi.UpdateReport.url
            let type = "Report"
            const ReportModelData = ReportModel.properties;
            ReportModelData.name = data.FullName
            ReportModelData.email = data.Email
            ReportModelData.phone = data.MobileNumber
            ReportModelData.AdvertiseID = PropertyId
            ReportModelData.issueType = data.ReportReasons.join(",")
            ReportModelData.createdDate = new Date().toISOString();
            ReportModelData.updatedDate = new Date().toISOString();
            ReportModelData.status = "Submitted"
            await handleFormSubmit(ReportModelData, url, type, props)
        }

    })

    function EnquiryAdvertiser(props) {
        const handleClose = () => { reset(); props.onHide() };
        return (
            <Modal
                {...props}
                backdrop="static"
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {props.modalTitle}
                    </Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmit(onSubmit, props)}>
                    <Modal.Body>
                        <div className="mb-3">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" placeholder="Full Name" id="FullName" name="FullName" onChange={e => optionchanged(e, "FullName")}  {...register("FullName", "props.modalTitle", { required: true })} />
                                <label for="floating-name">Full Name</label>
                                {errors.FullName && <span className="formError errorMssg" style={{ color: 'red' }}> FullName Required</span>}
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="Email"
                                    placeholder="Email address"
                                    {...register("Email", {
                                        required: "Email is required",
                                        // pattern: {
                                        //     value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                        //     message: "Invalid email address"
                                        // }
                                    })}
                                />
                                <label htmlFor="Email">Email address</label>
                                {errors.Email && <span className="formError errorMssg" style={{ color: 'red' }}>{errors.Email.message}</span>}
                            </div>

                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="MobileNumber"
                                    placeholder="Mobile Number"
                                    {...register("MobileNumber", {
                                        required: "Mobile Number is required",
                                        // pattern: {
                                        //     value: /^[0-9]{10}$/,
                                        //     message: "Mobile Number must be 10 digits"
                                        // }
                                    })}
                                />
                                <label htmlFor="MobileNumber">Mobile Number</label>
                                {errors.MobileNumber && <span className="formError errorMssg" style={{ color: 'red' }}>{errors.MobileNumber.message}</span>}
                            </div>
                            {props.modalTitle == "Enquiry" && (
                                <div className="mb-3">
                                    <label htmlFor="Textarea" className="form-label">Textarea <span className="form-label-description">56/100</span></label>
                                    <textarea
                                        className="form-control"
                                        name="Textarea"
                                        id="Textarea"
                                        rows="3"
                                        placeholder="Content.."
                                        {...register("Textarea", { required: "Content is required" })}
                                    >
                                    </textarea>
                                    {errors.Textarea && <span className="formError errorMssg" style={{ color: 'red' }}>{errors.Textarea.message}</span>}
                                </div>
                            )}
                            {props.modalTitle == "Report" && (
                                <div className="mb-3">
                                    <label className="form-label">Simple selectgroup</label>
                                    <div className="form-selectgroup">
                                        {["Property Sold/Rented Out", "Incorrect Location/Address", "Wrong Property Details( Price/Location/etc)", "Advertiser not Responding/Not Reachable", "Fake/Incorrect Images", "Other"].map((value, index) => (
                                            <label className="form-selectgroup-item" key={index}>
                                                <input
                                                    type="checkbox"
                                                    name="ReportReasons"
                                                    value={value}
                                                    className="form-selectgroup-input"
                                                    {...register("ReportReasons")}
                                                />
                                                <span className="form-selectgroup-label">{value}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>


                            )}
                            <div className="form-group">
                                <label className="custom-control custom-checkbox">
                                    <input
                                        className="custom-control-input"
                                        type="checkbox"
                                        name="isCheckedTerms"
                                        {...register("isCheckedTerms", { required: "You must agree to be contacted" })}
                                    />
                                    <span className="custom-control-label">
                                        I agree to be contacted thru call, WhatsApp,
                                        sms & e-mail by justpayowners and other advertisers for similar properties.
                                    </span>
                                </label>
                                {errors.isCheckedTerms && <span className="formError errorMssg" style={{ color: 'red' }}>{errors.isCheckedTerms.message}</span>}
                            </div>
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <button type="submit" className="btn btn-primary btn-space">Get Owner Details</button>
                        {/* <Button onClick={props.onHide}>Close</Button> */}
                    </Modal.Footer>
                </form>
            </Modal>
        );
    }

    function residentialRent() {
        return (<ul id="facilities" className="list-inline">
            {(getPropertyData.property_details?.ApartmentType ) &&
                <li className="list-inline-item"> <div className="d-flex align-items-center"><div><p className="overview-item-title">PropertyID</p>
                    <h4 className="m-0 overview-item-value">#123</h4></div></div></li>
            }
            {(getPropertyData.property_details?.ApartmentType && getPropertyData.property_details?.ApartmentType === "Apartment") &&
                <li className="list-inline-item"> <div className="d-flex align-items-center"><div><p className="overview-item-title">Apartment</p>
                    <h4 className="m-0 overview-item-value">{getPropertyData.property_details?.ApartmentName}</h4></div></div></li>
            }
            {(getPropertyData.property_details?.ApartmentType && getPropertyData.property_details?.ApartmentType === "Independent House/Villa") &&
                <li className="list-inline-item"> <div className="d-flex align-items-center"><div><p className="overview-item-title">Property Type</p>
                    <h4 className="m-0 overview-item-value">{getPropertyData.property_details?.ApartmentType}</h4></div></div> </li>
            }
            {(getPropertyData.property_details?.ApartmentType && getPropertyData.property_details?.ApartmentType === "Gated Community Villa") &&
                <li className="list-inline-item"> <div className="d-flex align-items-center"><div><p className="overview-item-title">Property Type</p>
                    <h4 className="m-0 overview-item-value">{getPropertyData.property_details?.ApartmentType}</h4></div></div> </li>
            }
            {(getPropertyData.property_details?.PropertyAge) &&
                <li className="list-inline-item"> <div className="d-flex align-items-center"><div><p className="overview-item-title">Age of Building </p>
                    <h4 className="m-0 overview-item-value">{getPropertyData.property_details?.PropertyAge}</h4></div></div></li>
            }
            {(getPropertyData.RentalDetails?.AvailableFrom) &&
                <li className="list-inline-item"> <div className="d-flex align-items-center"><div><p className="overview-item-title">Possession</p>
                    <h4 className="m-0 overview-item-value">{moment(getPropertyData.RentalDetails?.AvailableFrom).format("DD-MMM-YYYY")}</h4></div></div></li>
            }
            {property?.createdDate &&
                <li className="list-inline-item"> <div className="d-flex align-items-center"><div><p className="overview-item-title">Posted On </p>
                    <h4 className="m-0 overview-item-value">{moment(property?.createdDate).format("DD-MMM-YYYY")}</h4></div></div></li>
            }
        </ul>)
    }

    function residentialSell() {
        return (<ul id="facilities" className="list-inline">
            {property?.createdDate &&
                <li className="list-inline-item"> <div className="d-flex align-items-center"><div><p className="overview-item-title">PropertyID</p>
                    <h4 className="m-0 overview-item-value">#123</h4></div></div></li>
            }
            {getPropertyData.ReSaleDetails?.BookingAmount &&
                <li className="list-inline-item"> <div className="d-flex align-items-center"><div><p className="overview-item-title">BookingAmount </p>
                    <h4 className="m-0 overview-item-value">{getPropertyData.ReSaleDetails?.BookingAmount}</h4></div></div></li>
            }
            {getPropertyData.LandDetails?.GatedSecurity &&
                <li className="list-inline-item"> <div className="d-flex align-items-center"><div><p className="overview-item-title">GatedSecurity </p>
                    <h4 className="m-0 overview-item-value">{getPropertyData.LandDetails?.GatedSecurity}</h4></div></div></li>
            }
            {getPropertyData.LandDetails?.BoundaryWall &&
                <li className="list-inline-item"> <div className="d-flex align-items-center"><div><p className="overview-item-title">BoundaryWall </p>
                    <h4 className="m-0 overview-item-value">{getPropertyData.LandDetails?.BoundaryWall}</h4></div></div></li>
            }
            {getPropertyData.ReSaleDetails?.AvailableFromResale &&
                <li className="list-inline-item"> <div className="d-flex align-items-center"><div><p className="overview-item-title">AvailableFromResale </p>
                    <h4 className="m-0 overview-item-value">{moment(getPropertyData.ReSaleDetails?.AvailableFromResale).format("DD-MMM-YYYY")}</h4></div></div></li>
            }
            {property?.createdDate &&
                <li className="list-inline-item"> <div className="d-flex align-items-center"><div><p className="overview-item-title">Posted On </p>
                    <h4 className="m-0 overview-item-value">{moment(property?.createdDate).format("DD-MMM-YYYY")}</h4></div></div></li>
            }
        </ul>)
    }

    function commercialRent() {
        return (<ul id="facilities" className="list-inline">
            {property?.createdDate &&
                <li className="list-inline-item"> <div className="d-flex align-items-center"><div><p className="overview-item-title">PropertyID</p>
                    <h4 className="m-0 overview-item-value">#1233</h4></div></div></li>
            }
            {getPropertyData.property_details?.PropertyType &&
                <li className="list-inline-item"> <div className="d-flex align-items-center"><div><p className="overview-item-title">PropertyType </p>
                    <h4 className="m-0 overview-item-value">{getPropertyData.property_details?.PropertyType}</h4></div></div></li>
            }
            {getPropertyData.property_details?.BuildingType &&
                <li className="list-inline-item"> <div className="d-flex align-items-center"><div><p className="overview-item-title">BuildingType </p>
                    <h4 className="m-0 overview-item-value">{getPropertyData.property_details?.BuildingType}</h4></div></div></li>
            }
            {getPropertyData.property_details?.PropertyAge &&
                <li className="list-inline-item"> <div className="d-flex align-items-center"><div><p className="overview-item-title">PropertyAge </p>
                    <h4 className="m-0 overview-item-value">{getPropertyData.property_details?.PropertyAge}</h4></div></div></li>
            }             
          
            {getPropertyData.RentalDetails?.AvailableFrom &&
                <li className="list-inline-item"> <div className="d-flex align-items-center"><div><p className="overview-item-title">AvailableFrom </p>
                    <h4 className="m-0 overview-item-value">{moment(getPropertyData.RentalDetails?.AvailableFrom).format("DD-MMM-YYYY")}</h4></div></div></li>
            }
            {property?.createdDate &&
                <li className="list-inline-item"> <div className="d-flex align-items-center"><div><p className="overview-item-title">Posted On </p>
                    <h4 className="m-0 overview-item-value">{moment(property?.createdDate).format("DD-MMM-YYYY")}</h4></div></div></li>
            }
        </ul>)
    }

    function commercialSell() {
        return (<ul id="facilities" className="list-inline">
            {property?.createdDate &&
                <li className="list-inline-item"> <div className="d-flex align-items-center"><div><p className="overview-item-title">PropertyID</p>
                    <h4 className="m-0 overview-item-value">#1233</h4></div></div></li>
            }
            {getPropertyData.property_details?.PropertyType &&
                <li className="list-inline-item"> <div className="d-flex align-items-center"><div><p className="overview-item-title">PropertyType </p>
                    <h4 className="m-0 overview-item-value">{getPropertyData.property_details?.PropertyType}</h4></div></div></li>
            }
            {getPropertyData.property_details?.BuildingType &&
                <li className="list-inline-item"> <div className="d-flex align-items-center"><div><p className="overview-item-title">BuildingType </p>
                    <h4 className="m-0 overview-item-value">{getPropertyData.property_details?.BuildingType}</h4></div></div></li>
            }
            {getPropertyData.property_details?.PropertyAge &&
                <li className="list-inline-item"> <div className="d-flex align-items-center"><div><p className="overview-item-title">PropertyAge </p>
                    <h4 className="m-0 overview-item-value">{getPropertyData.property_details?.PropertyAge}</h4></div></div></li>
            }             
          
            {getPropertyData.RentalDetails?.AvailableFrom &&
                <li className="list-inline-item"> <div className="d-flex align-items-center"><div><p className="overview-item-title">AvailableFrom </p>
                    <h4 className="m-0 overview-item-value">{moment(getPropertyData.RentalDetails?.AvailableFrom).format("DD-MMM-YYYY")}</h4></div></div></li>
            }
            {property?.createdDate &&
                <li className="list-inline-item"> <div className="d-flex align-items-center"><div><p className="overview-item-title">Posted On </p>
                    <h4 className="m-0 overview-item-value">{moment(property?.createdDate).format("DD-MMM-YYYY")}</h4></div></div></li>
            }
        </ul>)
    }

    function PlotSell() {
        return (<ul id="facilities" className="list-inline">
            {property?.createdDate &&
                <li className="list-inline-item"> <div className="d-flex align-items-center"><div><p className="overview-item-title">PropertyID</p>
                    <h4 className="m-0 overview-item-value">#123</h4></div></div></li>
            }
            {getPropertyData.ReSaleDetails?.BookingAmount &&
                <li className="list-inline-item"> <div className="d-flex align-items-center"><div><p className="overview-item-title">BookingAmount </p>
                    <h4 className="m-0 overview-item-value">{getPropertyData.ReSaleDetails?.BookingAmount}</h4></div></div></li>
            }
            {getPropertyData.LandDetails?.GatedSecurity &&
                <li className="list-inline-item"> <div className="d-flex align-items-center"><div><p className="overview-item-title">GatedSecurity </p>
                    <h4 className="m-0 overview-item-value">{getPropertyData.LandDetails?.GatedSecurity}</h4></div></div></li>
            }
            {getPropertyData.LandDetails?.BoundaryWall &&
                <li className="list-inline-item"> <div className="d-flex align-items-center"><div><p className="overview-item-title">BoundaryWall </p>
                    <h4 className="m-0 overview-item-value">{getPropertyData.LandDetails?.BoundaryWall}</h4></div></div></li>
            }
            {getPropertyData.ReSaleDetails?.AvailableFromResale &&
                <li className="list-inline-item"> <div className="d-flex align-items-center"><div><p className="overview-item-title">AvailableFromResale </p>
                    <h4 className="m-0 overview-item-value">{moment(getPropertyData.ReSaleDetails?.AvailableFromResale).format("DD-MMM-YYYY")}</h4></div></div></li>
            }
            {property?.createdDate &&
                <li className="list-inline-item"> <div className="d-flex align-items-center"><div><p className="overview-item-title">Posted On </p>
                    <h4 className="m-0 overview-item-value">{moment(property?.createdDate).format("DD-MMM-YYYY")}</h4></div></div></li>
            }
        </ul>)
    }

    const renderContent = () => {
        console.log(property)
        if (property?.propertyType === 'Residential Rent') {
            return residentialRent();
        } else if (property?.propertyType === 'Residential Sale') {
            return residentialSell();
        } else if (property?.propertyType === 'Commercial Rent') {
            return commercialRent();
        } else if (property?.propertyType === 'Commercial Sale') {
            return commercialSell();
        } else if (property?.propertyType === 'LandOrPlot Sale') {
            return PlotSell();
        } else {
            return <div>no Match</div>;
        }
    };
// "/svgs/rent-svgrepo-com.svg"
    const renderPropertyLogo = () => {
        console.log(property)
        if (property?.propertyType === 'Residential Rent') {
            return <img className="d-flex mr-5 rounded" src={ getPropertyData?.RentalDetails?.PropertyAvailable === 'Only rent' ? "/svgs/rent-svgrepo-com.svg" : "/svgs/lease-svgrepo-com.svg" } alt="Generic placeholder image" />;
            
        } else if (property?.propertyType === 'Residential Sale') {
            return <img className="d-flex mr-5 rounded" src="/svgs/for-sale-svgrepo-com.svg" alt="Generic placeholder image" />;
        } else if (property?.propertyType === 'Commercial Rent') {
            return <img className="d-flex mr-5 rounded" src={ getPropertyData?.RentalDetails?.PropertyAvailable === 'Only rent' ? "/svgs/rent-svgrepo-com.svg" : "/svgs/lease-svgrepo-com.svg" } alt="Generic placeholder image" />;           
        } else if (property?.propertyType === 'Commercial Sale') {
            return <img className="d-flex mr-5 rounded" src="/svgs/for-sale-svgrepo-com.svg" alt="Generic placeholder image" />;
        } else if (property?.propertyType === 'LandOrPlot Sale') {
            return <img className="d-flex mr-5 rounded" src="/svgs/sale-svgrepo-com.svg" alt="Generic placeholder image" />;
        } else {
            return <img className="d-flex mr-5 rounded" src="/src/assets/brand/resale_logo_1.png" alt="Generic placeholder image" />;
        }
    };

    const CustomPhoto = ({ photo, layout }) => {
        <div style={{
            margin: layout.margin,
            width: layout.width,
            height: layout.height,
            position: 'relative',
        }}>
            <img src={photo.src} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="" />
            {photo.overlay && <div className="overlay">{photo.overlay}</div>}
        </div>
    };

    return (<div className="card">
        <div className="card-body">


            <div className="row no-gutters">


                

                <div className="col-md-6">

                    <PhotoAlbum
                        layout="columns"
                        photos={photos}
                        renderPhoto={CustomPhoto}
                        targetRowHeight={50}
                        spacing={5}
                        padding={2}
                        onClick={({ index }) => setIndex(index)}
                        columns={(containerWidth) => {
                            if (containerWidth < 300) return 1;
                            if (containerWidth < 600) return 2;
                            return 2;
                        }}
                    />
                    <Lightbox
                        slides={photos}
                        open={index >= 0}
                        index={index}
                        close={() => setIndex(-1)}
                        // enable optional lightbox plugins
                        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                    />



                </div>


                <div className="col-md-6">
                    <div className="card-body media mb-0 pt-0  pb-0 "   >
                        {renderPropertyLogo()}
                        <div className="media-body">
                            <h5 id="property-title" className="card-title">{property?.propertyTitle}</h5>
                            <address className="text-muted small">
                                <p className="card-text"><small className="text-muted">
                                    <span className="text-muted small">
                                        {getPropertyData?.LocalityDetails?.landmark + ", "}
                                        {getPropertyData?.LocalityDetails?.street + ", "}
                                        {getPropertyData?.LocalityDetails?.locality + ", "}
                                        {getPropertyData?.LocalityDetails?.city + ", "}
                                        {getPropertyData?.LocalityDetails?.state + "."}
                                    </span></small></p>
                            </address>
                        </div>
                    </div>

                    <div className="card-body pt-0">
                        {/* <h5 id="property-title" className="card-title">{renderPropertyLogo()} {property?.propertyTitle} </h5>
                        <p className="card-text"><small className="text-muted">
                            <span className="text-muted small">
                                {getPropertyData?.LocalityDetails?.landmark + ", "}
                                {getPropertyData?.LocalityDetails?.street + ", "}
                                {getPropertyData?.LocalityDetails?.locality + ", "}
                                {getPropertyData?.LocalityDetails?.city + ", "}
                                {getPropertyData?.LocalityDetails?.state + "."}
                            </span></small></p> */}

                        {((property?.propertyType === 'Residential Rent')) &&
                            <>
                                <ul id="facilities" className="list-inline">
                                    <li className="list-inline-item"><i className="fas fa-bed-alt"></i>Beds <strong>{getPropertyData?.property_details?.BHKType}</strong> </li>
                                    <li className="list-inline-item"><i className="fas fa-ruler-combined"></i><strong>{getPropertyData?.property_details?.builtUpArea}</strong> Sq.ft.</li>

                                    <li className="list-inline-item"><i className="fas fa-bath"></i><strong>{getPropertyData?.property_details?.Bathroom}</strong> Baths</li>

                                </ul>
                                {(getPropertyData?.RentalDetails?.PropertyAvailable === 'Only rent'  || getPropertyData?.RentalDetails?.PropertyAvailable === 'Only Rent'  ) &&
                                    <div className="card-tabs card-tabs-bottom">
                                        <a href="javascript:void(0)" className="card-tabs-item text-center ">
                                            <div className="text-muted-dark">Rent</div>
                                            <h4 className="mb-1">{"₹" + getPropertyData?.RentalDetails?.ExpectedRent + "/month"}</h4>
                                        </a>
                                        <a href="javascript:void(0)" className="card-tabs-item text-center ">
                                            <div className="text-muted-dark">Deposite</div>
                                            <h4 className="mb-1">{getPropertyData?.RentalDetails?.ExpectedRent}</h4>
                                        </a>
                                        <a href="javascript:void(0)" className="card-tabs-item text-center ">
                                            <div className="text-muted-dark">Maintaince</div>
                                            <h4 className="mb-1">{getPropertyData?.RentalDetails?.ExpectedRent}</h4>
                                        </a>
                                    </div>
                                }
                                {(getPropertyData?.RentalDetails?.PropertyAvailable === 'Only lease' || getPropertyData?.RentalDetails?.PropertyAvailable === 'Only Lease' ) &&
                                    <div className="card-tabs card-tabs-bottom">
                                        <a href="javascript:void(0)" className="card-tabs-item text-center ">
                                            <div className="text-muted-dark">Amount</div>
                                            <h4 className="mb-1">{"₹" + getPropertyData?.RentalDetails?.LeaseAmount + "/month"}</h4>
                                        </a>
                                        <a href="javascript:void(0)" className="card-tabs-item text-center ">
                                            <div className="text-muted-dark">Period</div>
                                            <h4 className="mb-1">{getPropertyData?.RentalDetails?.MaintenanceAmount}</h4>
                                        </a>
                                        <a href="javascript:void(0)" className="card-tabs-item text-center ">
                                            <div className="text-muted-dark">Maintaince</div>
                                            <h4 className="mb-1">{getPropertyData?.RentalDetails?.MaintenanceAmount}</h4>
                                        </a>
                                    </div>
                                }


                                {/* <h3 className="text-primary my-5">₹   <small className="text-muted">₹ {getPropertyData?.RentalDetails?.ExpectedRent}</small></h3> */}

                            </>
                        }
                        {((property?.propertyType === 'Residential Sale')) &&
                            <>
                                <ul id="facilities" className="list-inline">
                                    <li className="list-inline-item"><i className="fas fa-bed-alt"></i>Beds <strong>{getPropertyData?.property_details?.BHKType}</strong> </li>
                                    <li className="list-inline-item"><i className="fas fa-ruler-combined"></i><strong>{getPropertyData?.property_details?.builtUpArea}</strong> Sq.ft.</li>

                                    <li className="list-inline-item"><i className="fas fa-bath"></i><strong>{getPropertyData?.property_details?.Bathroom}</strong> Baths</li>

                                </ul>
                                <div className="card-tabs card-tabs-bottom">
                                    <a href="javascript:void(0)" className="card-tabs-item text-center ">
                                        <div className="text-muted-dark">Rent</div>
                                        <h4 className="mb-1">{"₹" + getPropertyData?.RentalDetails?.ExpectedRent + "/month"}</h4>

                                    </a>
                                    <a href="javascript:void(0)" className="card-tabs-item text-center ">
                                        <div className="text-muted-dark">Deposite</div>
                                        <h4 className="mb-1">{getPropertyData?.RentalDetails?.ExpectedRent}</h4>

                                    </a>
                                    <a href="javascript:void(0)" className="card-tabs-item text-center ">
                                        <div className="text-muted-dark">Maintaince</div>
                                        <h4 className="mb-1">{getPropertyData?.RentalDetails?.ExpectedRent}</h4>

                                    </a>
                                </div>
                                {/* <h3 className="text-primary my-5">₹   <small className="text-muted">₹ {getPropertyData?.RentalDetails?.ExpectedRent}</small></h3> */}

                            </>
                        }
                        {((property?.propertyType === 'Commercial Rent')) &&
                            <>
                                <ul id="facilities" className="list-inline">
                                  
                                    <li className="list-inline-item"><i className="fas fa-ruler-combined"></i><strong>{getPropertyData?.property_details?.builtUpArea}</strong> Sq.ft.</li>
                                    <li className="list-inline-item"><i className="fas fa-bed-alt"></i>Furnishing <strong>{getPropertyData?.property_details?.Furnishing}</strong> </li>
                                    <li className="list-inline-item"><i className="fas fa-bath"></i><strong>{getPropertyData?.AmenitiesDetails?.PowerBackup}</strong> PowerBackup</li>

                                </ul>
                                {(getPropertyData?.RentalDetails?.PropertyAvailable === 'Only rent'  || getPropertyData?.RentalDetails?.PropertyAvailable === 'Only Rent'  ) &&
                                    <div className="card-tabs card-tabs-bottom">
                                        <a href="javascript:void(0)" className="card-tabs-item text-center ">
                                            <div className="text-muted-dark">Rent</div>
                                            <h4 className="mb-1">{"₹" + getPropertyData?.RentalDetails?.ExpectedRent + "/month"}</h4>
                                        </a>
                                        <a href="javascript:void(0)" className="card-tabs-item text-center ">
                                            <div className="text-muted-dark">Deposite</div>
                                            <h4 className="mb-1">{getPropertyData?.RentalDetails?.ExpectedRent}</h4>
                                        </a>
                                        <a href="javascript:void(0)" className="card-tabs-item text-center ">
                                            <div className="text-muted-dark">Maintaince</div>
                                            <h4 className="mb-1">{getPropertyData?.RentalDetails?.ExpectedRent}</h4>
                                        </a>
                                    </div>
                                }
                                {(getPropertyData?.RentalDetails?.PropertyAvailable === 'Only lease' || getPropertyData?.RentalDetails?.PropertyAvailable === 'Only Lease' ) &&
                                    <div className="card-tabs card-tabs-bottom">
                                        <a href="javascript:void(0)" className="card-tabs-item text-center ">
                                            <div className="text-muted-dark">Amount</div>
                                            <h4 className="mb-1">{"₹" + getPropertyData?.RentalDetails?.LeaseAmount + "/month"}</h4>
                                        </a>
                                        <a href="javascript:void(0)" className="card-tabs-item text-center ">
                                            <div className="text-muted-dark">Period</div>
                                            <h4 className="mb-1">{getPropertyData?.RentalDetails?.MaintenanceAmount}</h4>
                                        </a>
                                        <a href="javascript:void(0)" className="card-tabs-item text-center ">
                                            <div className="text-muted-dark">Maintaince</div>
                                            <h4 className="mb-1">{getPropertyData?.RentalDetails?.MaintenanceAmount}</h4>
                                        </a>
                                    </div>
                                }
                                
                                {/* <h3 className="text-primary my-5">₹   <small className="text-muted">₹ {getPropertyData?.RentalDetails?.ExpectedRent}</small></h3> */}

                            </>
                        }
                        {((property?.propertyType === 'Commercial Sale')) &&
                            <>
                                <ul id="facilities" className="list-inline">
                                    <li className="list-inline-item">
                                        <i className="fas fa-ruler-combined"></i>
                                        <strong>{getPropertyData?.property_details?.builtUpArea}</strong> Sq.ft.
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="fas fa-bed-alt"></i>Furnishing 
                                        <strong>{getPropertyData?.property_details?.Furnishing}</strong> 
                                    </li>
                                    
                                    <li className="list-inline-item">
                                        <i className="fas fa-bath"></i>
                                        <strong>{getPropertyData?.property_details?.Floor}/{getPropertyData?.property_details?.TotalFloor}</strong> Floor
                                    </li>
                                </ul>
                                <div className="card-tabs card-tabs-bottom">
                                    <a href="javascript:void(0)" className="card-tabs-item text-center ">
                                        <div className="text-muted-dark">Price</div>
                                        <h4 className="mb-1">{"₹" + getPropertyData?.ReSaleDetails?.ExpectedPrice }</h4>

                                    </a>
                                    <a href="javascript:void(0)" className="card-tabs-item text-center ">
                                        <div className="text-muted-dark">Ownership</div>
                                        <h4 className="mb-1">{getPropertyData?.property_details?.Ownership}</h4>

                                    </a>
                                    <a href="javascript:void(0)" className="card-tabs-item text-center ">
                                        <div className="text-muted-dark">PropertyAge</div>
                                        <h4 className="mb-1">{getPropertyData?.property_details?.PropertyAge}</h4>

                                    </a>
                                    
                                </div>
                                {/* <h3 className="text-primary my-5">₹   <small className="text-muted">₹ {getPropertyData?.RentalDetails?.ExpectedRent}</small></h3> */}

                            </>
                        }
                        {((property?.propertyType === 'LandOrPlot Sale')) &&
                            <>
                                <ul id="facilities" className="list-inline">
                                    <li className="list-inline-item"><strong>{getPropertyData?.LandDetails?.PropertyType}</strong>Property Type</li>
                                    <li className="list-inline-item"><i className="fas fa-ruler-combined"></i><strong>{getPropertyData?.LandDetails?.PlotArea}</strong> {getPropertyData?.LandDetails?.LandUnits}</li>
                                    <li className="list-inline-item"><strong>{getPropertyData?.LandDetails?.SaleType}</strong> SaleType</li>

                                </ul>
                                <div className="card-tabs card-tabs-bottom">
                                    <a href="javascript:void(0)" className="card-tabs-item text-center ">
                                        <div className="text-muted-dark">Price</div>
                                        <h4 className="mb-1">{"₹" + getPropertyData?.ReSaleDetails?.ExpectedPrice}</h4>
                                    </a>
                                    <a href="javascript:void(0)" className="card-tabs-item text-center ">
                                        <div className="text-muted-dark">Ownership</div>
                                        <h4 className="mb-1">{getPropertyData?.LandDetails?.Ownership}</h4>
                                    </a>
                                    <a href="javascript:void(0)" className="card-tabs-item text-center ">
                                        <div className="text-muted-dark">Khata Type</div>
                                        <h4 className="mb-1">{getPropertyData?.AdditionalInfo?.KhataCertificate}</h4>
                                    </a>
                                </div>

                            </>
                        }
                        <p className="card-text mt-3 small" onClick={() => handleShow('Report')}>
                            <i className="fa-solid fa-triangle-exclamation text-orange mr-1"></i>
                            <a className='text-dark' href="#"><u>Noticed an issue with this listing? Report Here.
                            </u>
                            </a>
                        </p>
                        <EnquiryAdvertiser modalTitle={modalTitle} show={modalShow} onHide={() => setModalShow(false)} />
                        <button type="submit" className="btn btn-primary mr-3" onClick={() => handleShow('Enquiry')} >Enquiry Now</button>
                        <button type="submit" className="btn btn-secondary mr-3" onClick={() => handleShow('Contact')} >Get Phone No.</button>


                    </div>
                </div>


            </div>

            {renderContent()}
        </div>
    </div>

    )
}
export default PropertyDetailsHeader


{/* <div className="row">

<div className="col-lg-2 col-md-4">
    <div className="list-icon">
        <i className="fas fa-door-open"></i>
        <strong>Area:</strong>
        <p className="mb-0 mt-1">1270 aq ft</p>
    </div>
</div>


</div> */}


// <div className="col-md-3 mt-3"><div className="card m-0"><div className="card-body p-3 text-center">
//     <h5 className="mb-1">Price {getPropertyData.ReSaleDetails?.PriceNegotiable == "Yes" ? "(Negotiable)" : "(Non-Negotiable)"}</h5>
//     <div className="text-muted-dark">₹ {getPropertyData.ReSaleDetails?.ExpectedPrice}</div>
// </div>
// </div>
// </div>