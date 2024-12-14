
const PropertyOwnerDetails = ({ tabTitle , property}) => {
    
    const pageTitle = document.title; // Get the current page title
    const currentUrl = window.location.href; // Get the current page URL


   
    return (
        <div className="widget widget-contact-box" id={tabTitle} >
            <h3 className="widget-subtitle">Contact Owner</h3>
            <div className="media d-flex">
                <div className="flex-shrink-0">
                    <div className="item-img">
                        <a href="agent-lists1.html"><img src="https://radiustheme.com/demo/html/homlisti/img/team/team9.png" alt="widget" width="107" height="100" /></a>
                    </div>                  
                </div>
                <div className="media-body flex-grow-1 ms-3">
                    <h4 className="item-title">RadiusTheme</h4>
                    <div className="item-phn">
                        + 132 899 6XXX <a href="#"><span>(Show)</span></a>
                    </div>
                    <div className="item-mail">agent@radiustheme.com</div>
                    <div className="item-rating">
                        <ul>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li className="rating-count">(Reviews 15)</li>
                        </ul>
                    </div>
                </div>
            </div>
            <ul className="wid-contact-button">
                <li>
                    <a
                        href={`https://wa.me/?text=${pageTitle}%20${currentUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fas fa-comment"></i>Quick Chat With Us
                    </a>                  
                </li>   
              
            </ul>
            <form className="contact-box rt-contact-form" >
                <div className="row">
                    <div className="form-group col-lg-12">
                        <input type="text" className="form-control" name="fname" placeholder="Your Full Name" data-error="First Name is required" required=""/>
                    </div>
                    <div className="form-group col-lg-12">
                        <input type="text" className="form-control" name="phone" placeholder="Phone" data-error="Phone is required" required=""/>
                    </div>                 
                   
                    <div className="form-group col-lg-12">
                        <div className="advanced-button">
                            <button type="submit" className="item-btn disabled">
                                Send Owner Number <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="form-response"></div>
            </form>
        </div>      
    
    )
}
export default PropertyOwnerDetails