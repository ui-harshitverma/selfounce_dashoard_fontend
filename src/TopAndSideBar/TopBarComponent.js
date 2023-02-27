import { Button, FlexLayout, TextField, Topbar } from '@cedcommerce/ounce-ui';
import React from 'react'
import { BsSearch } from 'react-icons/bs';
import { FaHome } from 'react-icons/fa';

const TopBarComponent = () => {
	return (
		<Topbar
			connectLeft={<TextField placeHolder="Search Your Products" innerPreIcon={<BsSearch size={20} />}></TextField>}
			connectRight={
				<FlexLayout spacing="tight">
					<Button
						onClick={() => { }}
						type="Outlined"
						iconAlign="left"
						icon={<FaHome size={20} />}
					/>
					<Button
						type="Outlined"
						iconAlign="left"
						icon={<FaHome size={20} />}
					/>
				</FlexLayout>
			}
			  darkMode
			account={{
				name: "Jon Doe",
				url: "https://www.cedcommerce.com",
				image:
					"https://rapidexeducation.com/wp-content/uploads/2016/01/tutor-8.jpg",
				userPopoverMenu: (
					<>
						<Button
							length="fullBtn"
							type="Plain"
							halign="Start"
							icon={<FaHome size={20} />}
						>
							Profile
						</Button>
						<Button
							length="fullBtn"
							type="Plain"
							halign="Start"
							icon={<FaHome size={20} />}
						>
							Settings
						</Button>
						<Button
							length="fullBtn"
							type="Plain"
							halign="Start"
							icon={<FaHome size={20} />}
						>
							Logout
						</Button>
					</>
				),
			}}
		/>
	)
}

export default TopBarComponent;
