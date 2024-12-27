import React, { useEffect, useState } from "react";
import { PropertyHighlights, ExplorePropertyTypes, OurServices, MainBannerSection, ServiceFeedback, BrandSlider } from "../components";

import { useSelector } from 'react-redux'
import { store } from '../redux/store';
import { setTopCities } from '../redux/TopCities/TopCitiesData'
import fetchTestimonials from '../common/Testimonials/getTestimonials';
import fetchTopCities from "../common/TopCities/getTopCities";
import fetchTopAreas from "../common/TopAreas/getTopAreas";



export const landingLoader = async () => {
    // const response = await axios(
    //   `http://justpayowners.runasp.net/WeatherForecast`
    // );
    const data = [];
    return { products: data };
};

const Landing = () => {

    //const { products } = useLoaderData();
    //const navigate = useNavigate();
    const { currentUser } = useSelector(state => state.user);
    const { userId } = useSelector(state => state.auth);
    const { TopCitiesColl } = useSelector(state => state.TopCitiesProvider);
    const [Testimonials, setTestimonials] = useState([]);
    const [TopCities, setTopCitiesState] = useState([]);
    const [TopAreas, setTopCAreasState] = useState([]);



    useEffect(() => {
        const fetchAndSetTopAreas = async () => {
            try {
                const respdata = await fetchTopAreas(userId);
                const topTopAreasData = respdata.data;
                setTopCAreasState(topTopAreasData);
                window.localStorage.setItem("TopAreas", JSON.stringify(topTopAreasData)); // Store in local storage
                console.log("TopAreasColl - ", topTopAreasData);
            } catch (error) {
                console.error('Error fetching TopAreas:', error);
            }
        };
        const fetchAndSetTopCities = async () => {
            try {
                const respdata = await fetchTopCities(userId);
                const topCitiesData = respdata.data;
                setTopCitiesState(topCitiesData);
                window.localStorage.setItem("TopCities", JSON.stringify(topCitiesData)); // Store in local storage
                console.log("TopCitiesColl - ", topCitiesData);
            } catch (error) {
                console.error('Error fetching TopCities:', error);
            }
        };

        const fetchAndSetTestimonials = async () => {
            try {
                const resp = await fetchTestimonials(userId);
                const filterdata = resp.data.filter((item) => item.verified === true && item.isFeatured === true);

                setTestimonials(filterdata);
                window.localStorage.setItem("Testimonials", JSON.stringify(filterdata)); // Store in local storage
                console.log("Testimonials - ", filterdata);
            } catch (error) {
                console.error('Error fetching Testimonials:', error);
            }
        };
        const storedTopCities = JSON.parse(window.localStorage.getItem("TopCities"));
        if (storedTopCities) {
            setTopCitiesState(storedTopCities);
        } else {
            fetchAndSetTopCities();
        }

        const storedTestimonials = JSON.parse(window.localStorage.getItem("Testimonials"));
        if (storedTestimonials) {
            setTestimonials(storedTestimonials);
        } else {
            fetchAndSetTestimonials();
        }

        const storedTopAreas = JSON.parse(window.localStorage.getItem("TopAreas"));
        if (storedTopAreas) {
            setTopCAreasState(storedTopAreas);
        } else {
            fetchAndSetTopAreas();
        }


    }, []); 

    return (<>
        <MainBannerSection />       
        <OurServices />
        <ExplorePropertyTypes />
        <PropertyHighlights pickedData={[]} headline={'Latest Our Residential Rental Post'} url="residential_rentals" template="Landing" />


        <ServiceFeedback data={Testimonials}  />
        <BrandSlider />

    </>
    );
};

export default Landing;
