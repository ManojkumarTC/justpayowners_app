
import { NavLink, Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";

import Jsonfooter from './mockdata/footerData.json';

import { QuickLinks, CompanyRights, BannerBox, QuickLinksTabs } from './components'

const SiteFooter = function () {  
  useEffect(() => {
    console.log(Jsonfooter)
    console.log('SiteFooter component rendered');
  }, []);
 
  return (<>      
      <BannerBox />
      <footer className="footer-area">
         
          <QuickLinksTabs json={Jsonfooter} />
          
          <CompanyRights json={Jsonfooter} />
      </footer>
             
  </>
  );
};
export default SiteFooter;
