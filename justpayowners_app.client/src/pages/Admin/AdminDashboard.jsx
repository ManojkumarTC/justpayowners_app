import React, { useState } from 'react'
import { BsFillHouseDownFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { FaShop } from 'react-icons/fa6';
import { MdAddHomeWork, MdConnectWithoutContact, MdDomainAdd, MdLandslide, MdManageAccounts, MdManageHistory, MdRoundaboutRight } from 'react-icons/md';
import { PiShoppingBagOpenFill } from 'react-icons/pi';
import { RiGitPullRequestFill } from 'react-icons/ri';
import { SiHomeassistantcommunitystore, SiManageiq } from 'react-icons/si';
import { TbShoppingBagCheck } from 'react-icons/tb';
import { TiThMenu } from 'react-icons/ti';
import { VscFeedback } from 'react-icons/vsc';
import { NavLink, Outlet } from "react-router-dom";
import useUserRole from '../../Hooks/useUserRole';
import { useSelector } from 'react-redux';
import ManagePendingProperties from '../../components/Admin/ManagePendingProperties';
import AdminProfile from '../../components/Admin/AdminProfile';
import ManageUsers from '../../components/Admin/ManageUsers';
import ManageReviews from '../../components/Admin/ManageReviews';
import ManagePublishProperties from '../../components/Admin/ManagePublishProperties';

const AdminDashboard = () => {
	const { isAdmin, isAgent } = useUserRole();
	const { currentUser } = useSelector(state => state.user);
	const [selectedTab, setSelectedTab] = useState("AdminProfile");

	const handleSelectedTab = (tab) => {
		setSelectedTab(tab);
	};

	const adminLinks = (
		<>
			<li>
				<NavLink
					onClick={() => handleSelectedTab("AdminProfile")}
					className="text-xl font-semibold"
					style={({ isActive }) => {
						return {
							backgroundColor: selectedTab == "AdminProfile" ? "transparent" : "",
							color: isActive ? "#FC0" : "",
						};
					}}
				>
					<CgProfile />
					Admin Profile
				</NavLink>
			</li>
			<li>
				<NavLink
					onClick={() => handleSelectedTab("ManagePendingProperties")}
					className="text-xl font-semibold"
					style={({ isActive }) => {
						return {
							backgroundColor: selectedTab == "ManagePendingProperties" ? "transparent" : "",
							color: isActive ? "#FC0" : "",
						};
					}}
				>
					<MdManageHistory />
					Manage Pending Properties
				</NavLink>
			</li>
			<li>
				<NavLink
					onClick={() => handleSelectedTab("ManagePublishProperties")}
					className="text-xl font-semibold"
					style={({ isActive }) => {
						return {
							backgroundColor: selectedTab == "ManagePublishProperties" ? "transparent" : "",
							color: isActive ? "#FC0" : "",
						};
					}}
				>
					<MdManageHistory />
					Manage Publish Properties
				</NavLink>
			</li>
			<li>
				<NavLink
					onClick={() => handleSelectedTab("ManageUsers")}
					className="text-xl font-semibold"
					style={({ isActive }) => {
						return {
							backgroundColor: selectedTab == "ManageUsers" ? "transparent" : "",
							color: isActive ? "#FC0" : "",
						};
					}}
				>
					<MdManageAccounts />
					Manage Users
				</NavLink>
			</li>
			<li>
				<NavLink
					onClick={() => handleSelectedTab("ManageReviews")}
					className="text-xl font-semibold"
					style={({ isActive }) => {
						return {
							backgroundColor: selectedTab == "ManageReviews" ? "transparent" : "",
							color: isActive ? "#FC0" : "",
						};
					}}
				>
					<SiManageiq />
					Manage reviews
				</NavLink>
			</li>
		</>
	);

	// Agent Dashboard Links
	const agentLinks = (
		<>
			<li>
				<NavLink
					to="/dashboard/agentProfile"
					className="text-xl font-semibold"
					style={({ isActive }) => {
						return {
							backgroundColor: isActive ? "transparent" : "",
							color: isActive ? "#FC0" : "",
						};
					}}
				>
					<CgProfile />
					Agent Profile
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/dashboard/addproperties"
					className="text-xl font-semibold"
					style={({ isActive }) => {
						return {
							backgroundColor: isActive ? "transparent" : "",
							color: isActive ? "#FC0" : "",
						};
					}}
				>
					<MdDomainAdd />
					Add Properties
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/dashboard/addedProperties"
					className="text-xl font-semibold"
					style={({ isActive }) => {
						return {
							backgroundColor: isActive ? "transparent" : "",
							color: isActive ? "#FC0" : "",
						};
					}}
				>
					<FaShop />
					My added properties
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/dashboard/soldProperties"
					className="text-xl font-semibold"
					style={({ isActive }) => {
						return {
							backgroundColor: isActive ? "transparent" : "",
							color: isActive ? "#FC0" : "",
						};
					}}
				>
					<TbShoppingBagCheck />
					My sold properties
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/dashboard/requestProperties"
					className="text-xl font-semibold"
					style={({ isActive }) => {
						return {
							backgroundColor: isActive ? "transparent" : "",
							color: isActive ? "#FC0" : "",
						};
					}}
				>
					<RiGitPullRequestFill />
					Requested properties
				</NavLink>
			</li>
		</>
	);

	// User Dashboard Links
	const userLinks = (
		<>
			<li>
				<NavLink
					to="/dashboard/userProfile"
					className="text-xl font-semibold"
					style={({ isActive }) => {
						return {
							backgroundColor: isActive ? "transparent" : "",
							color: isActive ? "#FC0" : "",
						};
					}}
				>
					<CgProfile />
					My Profile
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/dashboard/wishlist"
					className="text-xl font-semibold"
					style={({ isActive }) => {
						return {
							backgroundColor: isActive ? "transparent" : "",
							color: isActive ? "#FC0" : "",
						};
					}}
				>
					<MdAddHomeWork />
					My Wishlist{" "}
					{/* <span className="font-bold text-[#FC0]">( +{wishlist?.length} )</span> */}
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/dashboard/offeredProperties"
					className="text-xl font-semibold"
					style={({ isActive }) => {
						return {
							backgroundColor: isActive ? "transparent" : "",
							color: isActive ? "#FC0" : "",
						};
					}}
				>
					<PiShoppingBagOpenFill />
					Offered Item
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/dashboard/propertyBought"
					className="text-xl font-semibold"
					style={({ isActive }) => {
						return {
							backgroundColor: isActive ? "transparent" : "",
							color: isActive ? "#FC0" : "",
						};
					}}
				>
					<BsFillHouseDownFill />
					Property Bought
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/dashboard/Reviews"
					className="text-xl font-semibold"
					style={({ isActive }) => {
						return {
							backgroundColor: isActive ? "transparent" : "",
							color: isActive ? "#FC0" : "",
						};
					}}
				>
					<VscFeedback />
					My Reviews
				</NavLink>
			</li>
		</>
	);

	const navlinks = (
		<>
			<li>
				<NavLink
					to="/"
					className="text-xl font-semibold"
					style={({ isActive }) => {
						return {
							backgroundColor: isActive ? "transparent" : "",
							color: isActive ? "#FC0" : "",
						};
					}}
				>
					<SiHomeassistantcommunitystore />
					Home
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/allProperties"
					className="text-xl font-semibold"
					style={({ isActive }) => {
						return {
							backgroundColor: isActive ? "transparent" : "",
							color: isActive ? "#FC0" : "",
						};
					}}
				>
					<MdLandslide />
					All Properties
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/about"
					className="text-xl font-semibold"
					style={({ isActive }) => {
						return {
							backgroundColor: isActive ? "transparent" : "",
							color: isActive ? "#FC0" : "",
						};
					}}
				>
					<MdRoundaboutRight />
					About
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/contact"
					className="text-xl font-semibold"
					style={({ isActive }) => {
						return {
							backgroundColor: isActive ? "transparent" : "",
							color: isActive ? "#FC0" : "",
						};
					}}
				>
					<MdConnectWithoutContact />
					Contact
				</NavLink>
			</li>
		</>
	);

	return (
		<div className='d-flex flex-col relative col-12'>
			<aside className='px-3 col-2' data-bs-theme="dark">
				<div className="drawer lg:drawer-open container-fluid">
					<div className="drawer-side">
						<h1 className="uppercase text-2xl font-bold py-3">
							Hi, {currentUser?.name}
						</h1>
						<ul className="menu p-0 w-80 min-h-full bg-[#0f2a6df2] text-white shadow-inner shadow-[#7872d6]">
							{isAdmin ? (
								<>{adminLinks}</>
							) : isAgent ? (
								<>{agentLinks}</>
							) : (
								<>{adminLinks}</>
							)}
						</ul>
					</div>
				</div>
			</aside>
			<div className='page-wrapper d-flex flex-col flex-1 px-2 py-3 col-10'>
				{
					selectedTab === "AdminProfile" ? (
						<AdminProfile />
					) : selectedTab === "ManagePendingProperties" ? (
						<ManagePendingProperties />
					) : selectedTab === "ManagePublishProperties" ? (
						<ManagePublishProperties />
					) : selectedTab === "ManageUsers" ? (
						<ManageUsers />
					) : selectedTab === "ManageReviews" ? (
						<ManageReviews />
					) : null
				}
			</div>
		</div>
	);
}

export default AdminDashboard