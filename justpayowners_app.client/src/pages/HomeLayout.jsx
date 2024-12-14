
import { Outlet } from 'react-router-dom'
import SiteFooter from '../SiteFooter'
import SiteHeader from '../SiteHeader'
const HomeLayout = () => {
  return (
      <div id="wrapper" className="wrapper">          
          <SiteHeader />
              <Outlet />
          <SiteFooter />
    </div>
  )
}

export default HomeLayout