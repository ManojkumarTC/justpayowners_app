
import { SiteLogo, UserNotification, UserProfileControls, HeaderButtons, MenuLink } from '../components'
import { useState } from 'react'
import LocationListing from './LocationListing'

const HeaderLink = ({ propsProfile = false }) => {
    const [showResults, setShowResults ] = useState(propsProfile)
	return (

		  <header className="rt-header sticky-on">
              <div id="sticky-placeholder"></div>
              <div id="navbar-wrap" className="header-menu menu-layout1 header-menu menu-layout3 pt-0">
                      <div className="row d-flex align-items-center">
                        <div className="col-xl-7 col-lg-7 d-flex align-items-center position-static p-0">
                        <div className="col-xl-2 col-lg-2">
                              <div className="logo-area">
                                <SiteLogo />
                              </div>
                        </div>
                            <MenuLink />
                              
                          </div>
                        <div className="col-xl-5 col-lg-5 d-flex justify-content-end">
                        <LocationListing />
                            {showResults ? null : <HeaderButtons />}
                            {showResults ? <> <UserNotification /> <UserProfileControls /> </> : null}
                        </div>

                      </div>
              </div>
          </header>

		
	)
}

export default HeaderLink


  //  < div className = "header" >
  //      <div className="container">
  //          <div className="d-flex align-items-center">

  //              <LocationListing />
  //              <div className="d-flex order-lg-2 ml-auto">
  //                  {showResults ? null : <HeaderButtons />}
  //                  
  //              </div>
  //          </div>
  //      </div>
		//</div >