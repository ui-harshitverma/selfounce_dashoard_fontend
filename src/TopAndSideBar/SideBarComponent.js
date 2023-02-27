import { NewSidebar } from '@cedcommerce/ounce-ui';
import React from 'react'
import { FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import { MdPlaylistAdd } from "react-icons/md";
import { BsCardList } from "react-icons/bs";
import { AiOutlineFileText } from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";

const SideBarComponent = () => {
	const history = useNavigate();
	const subMenu = [
		{
			id: "Default1",
			content: "Default1",
			path: "/dashboard1",
			icon: <FaHome size={20} color="rgb(68 68 68)" />,
		}
	];
	const menu = [
		{
			id: "dashboard",
			content: "Dashboard",
			path: "/dashboard",
			icon: <FaHome size={23} color="rgb(68 68 68)" />,

		},
		{
			id: "sales",
			content: "Sales",
			path: "/sales",
			icon: <svg viewBox="64 64 896 896" focusable="false" data-icon="fund" width="20" height="20" fill="rgb(68 68 68)" aria-hidden="true"><path d="M926 164H94c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V196c0-17.7-14.3-32-32-32zm-40 632H134V236h752v560zm-658.9-82.3c3.1 3.1 8.2 3.1 11.3 0l172.5-172.5 114.4 114.5c3.1 3.1 8.2 3.1 11.3 0l297-297.2c3.1-3.1 3.1-8.2 0-11.3l-36.8-36.8a8.03 8.03 0 00-11.3 0L531 565 416.6 450.5a8.03 8.03 0 00-11.3 0l-214.9 215a8.03 8.03 0 000 11.3l36.7 36.9z"></path></svg>,
		},
		{
			id: "text",
			content: "Text",
			path: "/text",
			icon: <AiOutlineFileText size={20} color="rgb(68 68 68)" />,
		},
		{
			id: "productList",
			content: "Product List",
			path: "/productlist",
			icon: <BsCardList size={23} color="rgb(68 68 68)" />,
		},
		{
			id: "addproduct",
			content: "Add Product",
			path: "/addproduct",
			icon: <MdPlaylistAdd size={25} color="rgb(68 68 68)" />,
		},
		{
			id: "help",
			content: "Help",
			path: "/help",
			icon: <BiHelpCircle size={25} color="rgb(68 68 68)" />,
		},
	];
	function onChange(e) {
		history(e.path)
	}

	return (
		<NewSidebar
			menu={menu}
			subMenu={subMenu}
			mobileLogo={
				<img
					width={40}
					src="https://i.imgur.com/cqfQhek.png"
					alt="CedCommerce"
					title="CedCommerce"
				/>
			}
			onChange={onChange}
		/>
	)
}

export default SideBarComponent;
