/* eslint-disable react/no-unknown-property */
import { Link } from 'react-router-dom'
function ForgotPasswordPage(props) {
    return (


<main className="site-main content-area">
        <div className="container">
            <div className="row">
                <div className="col-lg-7 col-sm-12 col-12">
                    <div className="page-content-block">
                        <div className="col-md-12 rtcl-login-form-wrap">
                                <h2>Forgot password</h2>
                                <form className="rtcl-login-form" action="" method="post">
       
          
          <p className="text-muted">Enter your email address and your password will be reset and emailed to you.</p>
          <div className="form-group">
                                        <label className="control-label" for="exampleInputEmail1">Email address <strong className="rtcl-required">*</strong> </label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          </div>
          <div className="form-footer">
            <button type="submit" className="btn btn-primary btn-block">Send me new password</button>
          </div>
      
                                </form>

                                <div className="form-group">
                                    <p className="rtcl-forgot-password">
                                        Forget it, <Link to="/login"  >send me back</Link>    to the sign in screen.
                                    </p>
                                </div>
				       
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
	
	);
}

export default ForgotPasswordPage;
