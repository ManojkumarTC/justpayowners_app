import { SectionTitle,  MyDashboardNav } from "../components";
import myprofile from '../mockdata/myprofile.json';
import { NavLink, Link, useNavigate } from 'react-router-dom';

import { useEffect, useMemo, useState } from "react";
import JPOapi from "../common";
import { useSelector } from "react-redux";

/*import noImageRent from '../assets/images/noImageRent_Sale.svg';*/
/*import '../../src/assets/css/MyProfile.css'*/
const PropertyEnquiries = function () {
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
                            <div className="col-md-12">

                                
                                
                                    <div className="container">
                                       {/* <SectionTitle title="Advertise With Us" path="/AdvertiseWithUs" type="breadcrumb" />*/}
                                        <div className="row row-cards">
                                            <MyDashboardNav />
                                            <div className="col-lg-10" id="tab-section-right">
                                                <div className="card m-0 p-4">
                                                <div className="card-body row">
                                                    <h3 className="widget-subtitle">You have already posted {advertiseData.length} properties on Justpayowners</h3> 
                                                       

                                                    
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

                                                    <div className="space-y-1">
                                                        <div id="faq-1" className="accordion" role="tablist" aria-multiselectable="true">
                                                            {advertiseData.length === 0 ? (
                                                                <div>Loading...</div>
                                                            ) : (filteredData.length > 0 ? (
                                                                filteredData.map((item, index) => (
                                                                    <div className="accordion-item" key={index}>
                                                                        <div className="accordion-header" role="tab">
                                                                            <button className="accordion-button" data-bs-toggle="collapse" data-bs-target={"#faq-1-" + index} aria-expanded="true" aria-controls={"faq-1-" + index}>
                                                                                {item.propertyTitle != null && item.propertyTitle != "" && <h5 className="mb-2"><a href={"/property-detail/" + item.advertiseID} className="text-color">{item.propertyTitle}<i className="fa fa-external-link"></i></a></h5>}

                                                                            </button>
                                                                        </div>
                                                                        <div id={"faq-1-" + index} className={index === 0 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} role="tabpanel">
                                                                            <div className="accordion-body pt-0">
                                                                                <div className="card">
                                                                                    <div className="row g-0">
                                                                                        <div className="col-auto">
                                                                                        </div>
                                                                                        <div className="col">
                                                                                            <div className="card-body ps-0">
                                                                                                <div className="row">
                                                                                                    <table className="table card-table table-vcenter text-nowrap">
                                                                                                        <thead>
                                                                                                            <tr>
                                                                                                                <th>Name</th>
                                                                                                                <th>Mobile</th>
                                                                                                                <th>Email </th>
                                                                                                                <th>Date</th>

                                                                                                            </tr>
                                                                                                        </thead>
                                                                                                        <tbody>
                                                                                                            <tr>
                                                                                                                <td><span className="text-muted">vinay</span></td>
                                                                                                                <td><span className="text-muted">9900803075</span></td>
                                                                                                                <td><span className="text-muted">vinaykn.ttp@gmail.com</span></td>
                                                                                                                <td><span className="text-muted">09-aug-2024</span></td>

                                                                                                            </tr>
                                                                                                        </tbody>
                                                                                                    </table>

                                                                                                </div>

                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                ))
                                                            ) : (
                                                                <div>No data found</div>
                                                            )
                                                            )}
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

export default PropertyEnquiries;
