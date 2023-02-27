import { BodyLayout, Button, Card, PageFooter, PageHeader, Tabs, TextStyles } from '@cedcommerce/ounce-ui';
import React, { useState } from 'react'
import Tab1 from './Components/Tab1';
import Tab2 from './Components/Tab2';
import Tab3 from './Components/Tab3';

const AddProduct = () => {
	const [selected, setSelected] = useState("all-customers");
	const tabs = [
		{
			id: "all-customers",
			content: "General",
			badge: false,
			badgeBgColor: "#ff0000",
			badgeContent: "Helo",
			badgeTextColor: "light",
		},
		{
			id: "Variation",
			content: "Variation",
			badge: false,
			badgeBgColor: "#ff0000",
			badgeContent: "Helo",
			badgeTextColor: "light",
		},
		{
			id: "Shipping",
			content: "Shipping",
			badge: false,
			badgeBgColor: "#ff0000",
			badgeContent: "Helo",
			badgeTextColor: "light",
		},
		
	];

	function showTabs(tabs) {
		switch (tabs) {
			case "all-customers":
				return <Tab1/>;
			case "Variation":
				return <Tab2/>;
			case "Shipping":
				return <Tab3/>;
			case "Warning":
				return <h1>Warning</h1>;
			case "Pending":
				return <h1>Pending</h1>;
			case "Error":
				return <h1>Error</h1>;
			default:
				return <h1>default</h1>;
		}
	}
	return (
		<BodyLayout>
			<PageHeader title="Add Product" sticky action={<Button onClick={() => window.history.back()}>Go Back</Button>}></PageHeader>
			<Card cardType='Plain'>
				<Tabs
					value={tabs}
					selected={selected}
					onChange={(e) => setSelected(e)}
				/>
				{showTabs(selected)}
			</Card>
			<PageFooter>
				<TextStyles>Cedcommerce @ 2020</TextStyles>
			</PageFooter>
		</BodyLayout>
	)
}

export default AddProduct
