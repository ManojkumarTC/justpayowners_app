import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import HeaderProfile from './HeaderProfile';
const HeaderButtons = () => {
    const { currentUser } = useSelector(state => state.user);
    return (<>


        <div className="header-action-layout1">
            <ul className="action-list">
                <li className="listing-button action-item-style my-account ">
                    <Link id="add-property-btn" to="/post-property-for-sale-rent" className="listing-btn" >
                        <span><i className="fas fa-plus-circle"></i> </span>
                        <span className="item-text">Add Property</span>
                    </Link>             

                </li>
                <li className="action-item-style my-account">

                    {(currentUser == null || currentUser.length == 0) ? <Link to="/Login" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Login" ><i className="flaticon-user-1 icon-round"></i></Link> : <HeaderProfile />}


        
                    
                </li>
                <li className="action-item-style my-account">                  
                    {(currentUser == null || currentUser.length == 0) && <Link to="/register" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Register"  > <i className="flaticon-user-1 icon-round"></i> Sign up</Link>}



                </li>

            </ul>
        </div>



       
    </>
    )
}

export default HeaderButtons