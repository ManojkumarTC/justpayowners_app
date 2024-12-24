

import {  FAQs  } from "../components";
import { useEffect, useState } from "react";
import fetchFAQs from "../common/FAQ/getFAQs";
import { useSelector } from "react-redux";

const Faq = function () {
    console.log("Faq- Render")

  
    const { userId } = useSelector((state) => state.auth);
    const [FAQS, setFAQS] = useState([]);
    useEffect(() => {
        fetchFAQs(userId)
            .then((resp) => {
                console.log("FAQS - ", resp);
                setFAQS(resp.data);
            })
            .catch((error) => {
                console.error("Error fetching FAQS:", error);
            });
    }, []);


    return (<>
        <section className="grid-wrap3">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-sm-12 col-12">
                        <div className="page-content-block">
                            <div className="col-md-12 rtcl-login-form-wrap">
                                <h4>FAQs</h4>


                                <FAQs data={FAQS} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>      
    </>
    );
};

export default Faq;
