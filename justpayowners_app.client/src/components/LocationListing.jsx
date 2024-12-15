import React, { useEffect, useState } from "react";
import { FaLocationDot, FaAngleDown } from "react-icons/fa6";

import jsonHeader from '../mockdata/locationData.json';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCity } from "../redux/property/propertyByCity";
import { store } from "../redux/store";

import '../assets/css/header.css';

/*import '../assets/css/header.css';*/

const LocationListing = () => {
    const [showLocationMenu, setShowLocationMenu] = useState(false);
    const { selectedCity } = useSelector(state => state.propertyByCity);
    const dispatch = useDispatch();

    const handleLocationMenu = () => {
        setShowLocationMenu(!showLocationMenu);
    };

    useEffect(() => {
        store.dispatch(setCity("All India"));
    }, [selectedCity == ""]);

    const handleClickAllIndia = () => {
        store.dispatch(setCity("All India"));
        setShowLocationMenu(false);
    }

    return (
        <div className="set_location position-relative">
            <a className="city" title="All India" onClick={handleLocationMenu}>
                <FaLocationDot style={{ marginRight: '5px' }} />
                <span className="d-inline">
                    {selectedCity}
                </span>
                <FaAngleDown style={{ marginLeft: '5px' }} />
            </a>
            {showLocationMenu && (
                <div className="location-dropdown loc_menu">
                    <div className="location-dropdown-inner ffos">
                        <p className="search_h">Search from Over 2500 Cities <b>- </b>
                            <Link to={"/"} title="All India" onClick={handleClickAllIndia}>All India</Link>
                        </p>
                        <div className="input_item">
                            <input type="text" className="ffos" id="header_dropdown_city" name="header_dropdown_city" placeholder="Type to find your city" />
                        </div>
                        <div className="popular-location">
                            <p className="loc_hed">POPULAR CITIES</p>
                            <ul>
                                {jsonHeader.popularCity.map((item, index) => (
                                    <li key={index}>
                                        <Link to={item.path} title={item.name} onClick={() => {
                                            dispatch(setCity(item.name));
                                            setShowLocationMenu(false);
                                        }}>{item.name}</Link>
                                    </li>
                                ))}
                            </ul>
                            <p className="loc_hed">Other CITIES</p>
                            <ul>
                                {jsonHeader.OtherCity.map((item, index) => (
                                    <li key={index}>
                                        <Link to={item.path} title={item.name} onClick={() => {
                                            dispatch(setCity(item.name));
                                            setShowLocationMenu(false);
                                        }}>{item.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
export default LocationListing;