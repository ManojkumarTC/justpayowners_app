import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { nanoid } from "nanoid";
import { toast } from "react-toastify";

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function RegisterPage(props) {
    const navigate = useNavigate();
    const [modalShow, setModalShow] = useState(false);
    const { register, handleSubmit, watch,formState: { errors } } = useForm();
    const password = watch('password');  // Watching the password field
    const onSubmit = async  data => {       
        console.log(data);
        try {
            // You can handle form submission here, like sending the data to an API
            const response = await fetch('http://justpayowners.runasp.net/api/Auth/Register', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            });      
            if (!response.ok) {
              const result = await response.json();
              console.error('Error:', result.errors);
              return;
            }      
            const result = await response.json();
            console.log('Success:', result.message);
            toast.success("Registration Successful");
            navigate("/login");
          } catch (error) {
            console.error('Error:', error);
            toast.error("Failed: " + err.message);
          }
    };


    return (


        <section className="grid-wrap3">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-sm-12 col-12">
                    <div className="page-content-block">
                            <div className="col-md-12 rtcl-login-form-wrap" >
                            <h2>Register</h2>
                                <form className="rtcl-login-form" onSubmit={handleSubmit(onSubmit)}>
                   
                     
                        <div className="form-group">
                            <label className="control-label">Full Name</label>
                                        <input placeholder="" className="form-control"  {...register('fullName', { required: 'Username is required' })} />
                            {errors.fullName && <span className="formError errorMssg" style={{ color: 'red' }}>{errors.fullName.message}</span>}
                        </div>

                        <div className="form-group">
                            <label className="control-label">Mobile Number</label>
                            <input placeholder="" className="form-control "
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
                        <div className="form-group">
                            <label className="control-label">Email Address</label>
                            <input placeholder="" className="form-control "
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
                        <div className="form-group">
                            <label className="control-label">Password</label>
                            <input  placeholder="" className="form-control "
                                type="password"
                                {...register('password', {
                                    required: 'Password is required',
                                    minLength: {
                                        value: 7,
                                        message: 'Password must be at least 7 characters long',
                                    },
                                    maxLength: {
                                      value: 15,
                                      message: 'Password cannot be longer than 15 characters',
                                    },
                                    pattern: {
                                        value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^\da-zA-Z])[A-Za-z\d\W]{7,15}$/,
                                        message: 'Password must be 7-15 characters long, contain at least one letter, one number, and one special character',
                                    },
                                })}
                            />
                            {errors.password && <span className="formError errorMssg" style={{ color: 'red' }}>{errors.password.message}</span>}

                        </div>
                        <div className="form-group">
                            <label className="control-label">Confirmed  Password</label>
                            <input placeholder="" className="form-control "
                                type="password"
                                {...register('confirmPassword', {
                                    required: 'Please confirm your password',
                                    validate: value =>
                                        value === password || 'The passwords do not match',
                                })}
                            />
                            {errors.confirmPassword && <span className="formError errorMssg" style={{ color: 'red' }}>{errors.confirmPassword.message}</span>}

                        </div>


                                    <div className="form-check">
                            <label className="custom-control custom-checkbox">
                                <input className="custom-control-input" type="checkbox"  {...register('isCheckedTerms', { required: 'You must accept the terms and conditions' })} />

                                            <label className="form-check-label">Agree the <Link onClick={() => setModalShow(true)}>terms and policy</Link></label>


                            </label>
                            {errors.isCheckedTerms && <span className="formError errorMssg" style={{ color: 'red' }}>{errors.isCheckedTerms.message}</span>}


                            <MyVerticallyCenteredModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                        </div>
                        <div className="form-footer">
                                        <button type="submit" className="btn btn-primary btn-block">Create new account</button>
                        </div>
                    
                </form>

				         <div className="text-center text-muted"> Already have account?  <Link to="/login"  >Sign in</Link>
                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    
    );
}

export default RegisterPage;
