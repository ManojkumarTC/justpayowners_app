/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Tabs, Tab, Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import '../../assets/css/PropertyPosting.css';
import { MdHeight } from 'react-icons/md';

const PostPropertyForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const password = watch('password');  // Watching the password field

    const [key, setKey] = useState('Residential');
    const navigateTo = useNavigate();
    const { currentUser } = useSelector(state => state.user);

    const [selectedButton, setSelectedButton] = useState('ResidentialRent');

    const handleSelect = (k) => {
        if (k === 'Residential') {
            setKey(k);
            setSelectedButton('ResidentialRent');
        } else if (k === 'Commercials') {
            setKey(k);
            setSelectedButton('CommercialsRent');
        } else if (k === 'LandPlot') {
            setKey(k);
            setSelectedButton('LandPlotSale');
        }
        console.log(`Selected tab: ${k}`);
    };
    const handleSetValue = (newValue) => {
        setSelectedButton(newValue);
        console.log(`Selected value: ${selectedButton}`);
    };
    const generateGUID = () => {
        return uuidv4();
    };
    const onSubmit = async data => {
        // const onSubmit = () => {
        const guid = generateGUID();
        console.log(`GUID: ${guid}`);
        console.log(`Selected tab: ${key}, Selected button: ${selectedButton}, Value: ${key}`);
        let path = '';
        switch (key) {
            case 'Residential':
                path = '/manage/property/residential/';
                break;
            case 'Commercials':
                path = '/manage/property/commercial/';
                break;
            case 'LandPlot':
                path = '/manage/property/landorplot/';
                break;
            default:
                path = '/';
        }
        if (selectedButton) {
            path += `${selectedButton.replace(key, "")}` + `/${guid}`;
        }
        path += `/property?justpayFr=pyp_${selectedButton.replace(key, "")}`;

        navigateTo(path.toLowerCase())
    };
    const getButtonStyle = (buttonId) => {
        return {
            // backgroundImage: selectedButton === buttonId ? 'radial-gradient(100% 100% at 100% 0, #5adaff 0, #2d89ef 100%)' : 'radial-gradient(100% 100% at 100% 0px, rgb(255 255 255) 0px, rgb(255 255 255) 100%)',
            // color: selectedButton === buttonId ? 'white' : "#467fcf",

            // border: "1px solid #467fcf"
        };
    };
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div id='postPropertyForm'  >
                    {currentUser == null || currentUser.length == 0 ? (<div className='postPropertyForm-top-body'>

                        <div className={"row"}>

                            <div className="col-sm-6 col-md-6">
                                <div className="form-group">
                                    <label className="control-label" >Full Name <span className="form-required">*</span></label>
                                    <input type="text" id="floating-name" className="form-control "
                                        {...register('fullName', { required: 'Username is required' })} />

                                    {errors.fullName && <span className="formError errorMssg" style={{ color: 'red' }}>{errors.fullName.message}</span>}
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6">
                                <div className="form-group">

                                    <label s className="control-label">Email Address <span className="form-required">*</span></label>
                                    <input type="email" className="form-control"
                                        {...register('email', {
                                            required: 'Email is required',
                                            pattern: {
                                                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                                message: 'Enter a valid email address',
                                            },
                                        })}
                                    />


                                    {errors.email && <span className="formError errorMssg" style={{ color: 'red' }}>{errors.email.message}</span>}
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-6">
                                <div className="form-group">

                                    <label className="control-label">Mobile Number <span className="form-required">*</span></label>
                                    <input className="form-control"
                                        {...register('mobileNumber', {
                                            required: 'Mobile number is required',
                                            pattern: {
                                                value: /^[0-9]{10}$/,
                                                message: 'Enter a valid 10-digit mobile number',
                                            },
                                        })}
                                    />


                                    {errors.mobileNumber && <span className="formError errorMssg" style={{ color: 'red' }}>{errors.mobileNumber.message}</span>}
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6">
                                <div className="form-group">
                                    <label className="control-label">Select City</label>
                                    <div className="form-floating">
                                        <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                                            <option selected="">Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>

                                    </div>

                                </div>
                            </div>

                            <div className="col-sm-6 col-md-6">
                                <div className="form-group">
                                    <div className="container mt-1">
                                        <div className="row align-items-center">
                                            <div className="col-auto px-2">
                                                <span>Get updates on</span>
                                            </div>
                                            <div className="col-auto px-2">
                                                <i className="fab fa-whatsapp whatsapp-icon"></i>
                                                <span>WhatsApp</span>
                                            </div>
                                            <div className="col-auto p-0 p-0">
                                                <div className="custom-control custom-switch custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="whatsappSwitch" />
                                                    <label className="custom-control-label" ></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>




                        </div>


                    </div>) : (<h3 className="widget-subtitle">Post your free Properties</h3>
                    )}


                </div>
                <div className='tab-style-1  tab-style-custom'>
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={handleSelect}
                        className="nav nav-tabs"
                    >
                        <Tab eventKey="Residential" title="Residential" className="nav-item">
                            <div className="tab-content ">
                                <div className="tab-pane active show" id="tabs-Residential-ex1">
                                    {/*<div className="item-details">*/}
                                    {/*    <h4 className="item-subtitle"> Pick property listing type </h4>*/}
                                    {/*</div>*/}
                                    <div className="row g-2 align-items-center">
                                        <div className="col-12  py-3 plans" >

                                            <label className="plan basic-plan" style={getButtonStyle('ResidentialRent')} onClick={() => handleSetValue('ResidentialRent')} >
                                                <input checked type="radio" name="ResidentialType" id="ResidentialRent" />
                                                <div className="plan-content">
                                                    <img loading="lazy" src="https://raw.githubusercontent.com/ismailvtl/ismailvtl.github.io/master/images/life-saver-img.svg" alt="" />
                                                    <div className="plan-details">
                                                        <span>Residential Rent</span>
                                                        <p>For smaller business, with simple salaries and pay schedules.</p>
                                                    </div>
                                                </div>
                                            </label>

                                            <label className="plan complete-plan" style={getButtonStyle('ResidentialSale')} onClick={() => handleSetValue('ResidentialSale')}>
                                                <input type="radio" id="ResidentialSale" name="ResidentialType" />
                                                <div className="plan-content">
                                                    <img loading="lazy" src="https://raw.githubusercontent.com/ismailvtl/ismailvtl.github.io/master/images/potted-plant-img.svg" alt="" />
                                                    <div className="plan-details">
                                                        <span>Residential Sale</span>
                                                        <p>For growing business who wants to create a rewarding place to work.</p>
                                                    </div>
                                                </div>
                                            </label>

                                            {/* <Button style={getButtonStyle('ResidentialRent')} className="btn btn-outline-primary active w-100" onClick={() => handleSetValue('ResidentialRent')}>Rent</Button> */}
                                            {/* <Button style={getButtonStyle('ResidentialSale')} className="btn btn-outline-primary active w-100" onClick={() => handleSetValue('ResidentialSale')}>Re-sale</Button> */}
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="Commercials" title="Commercials" className="nav-item">
                            <div className="tab-pane" id="tabs-Commercials-ex1">
                                {/*  <h6>Pick Property Listing Type</h6>*/}
                                <div className="row g-2 align-items-center">
                                    <div className="col-12  py-3 plans" >

                                        <label className="plan basic-plan" style={getButtonStyle('CommercialsRent')} onClick={() => handleSetValue('CommercialsRent')} >
                                            <input checked type="radio" name="CommercialsType" id="CommercialsRent" />
                                            <div className="plan-content">
                                                <img loading="lazy" src="https://raw.githubusercontent.com/ismailvtl/ismailvtl.github.io/master/images/life-saver-img.svg" alt="" />
                                                <div className="plan-details">
                                                    <span>Commercials Rent</span>
                                                    <p>For smaller business, with simple salaries and pay schedules.</p>
                                                </div>
                                            </div>
                                        </label>

                                        <label className="plan complete-plan" style={getButtonStyle('CommercialsSale')} onClick={() => handleSetValue('CommercialsSale')}>
                                            <input type="radio" id="CommercialsSale" name="CommercialsType" />
                                            <div className="plan-content">
                                                <img loading="lazy" src="https://raw.githubusercontent.com/ismailvtl/ismailvtl.github.io/master/images/potted-plant-img.svg" alt="" />
                                                <div className="plan-details">
                                                    <span>Commercials Sale</span>
                                                    <p>For growing business who wants to create a rewarding place to work.</p>
                                                </div>
                                            </div>
                                        </label>

                                        {/* <Button style={getButtonStyle('CommercialsSale')} className="btn btn-outline-primary active w-100" 
                                            onClick={() => handleSetValue('CommercialsSale')}>Re-sale</Button>

                                        <Button style={getButtonStyle('CommercialsRent')}  className="btn btn-outline-primary active w-100"
                                         onClick={() => handleSetValue('CommercialsRent')}>Rent</Button> */}
                                    </div>

                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="LandPlot" title="Land/Plot" className="nav-item" >
                            <div className="tab-pane" id="tabs-Land-ex1">
                                {/* <h6>Pick Property Listing Type</h6>*/}
                                <div className="row g-2 align-items-center">

                                    <div className="col-12  py-3 plans" >

                                        <label className="plan basic-plan" style={getButtonStyle('LandPlotSale')} onClick={() => handleSetValue('LandPlotSale')} >
                                            <input checked type="radio" name="LandPlotSale" id="LandPlotSale" />
                                            <div className="plan-content">
                                                <img loading="lazy" src="https://raw.githubusercontent.com/ismailvtl/ismailvtl.github.io/master/images/life-saver-img.svg" alt="" />
                                                <div className="plan-details">
                                                    <span>Land / Plot Sale or Re-sale</span>
                                                    <p>For smaller business, with simple salaries and pay schedules.</p>
                                                </div>
                                            </div>
                                        </label>



                                    </div>
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                    <div className="form-group col-lg-12">
                        <button type="submit" className="item-btn disabled">Start Posting Your Ad For FREE</button>
                    </div>



                    {currentUser == null || currentUser.length === 0 ? (
                        <div className="card-footer text-end " ></div>
                    ) : (
                        <div className="card-footer text-end " style={{ height: '5px' }}></div>
                    )}


                </div>
            </form>
        </>
    )
}
export default PostPropertyForm