import { Avatar,Card, FlexChild, FlexLayout, TextStyles } from '@cedcommerce/ounce-ui';
import React from 'react'


export const TopProduct = () => {
	const sellerArr = [
		{
			img: "https://emilus.themenate.net/img/avatars/thumb-2.jpg",
			name: "Blue Jacket",
			tag: "Cloths",
			sale: "137 Sales",
		},
		{
			img: "https://emilus.themenate.net/img/avatars/thumb-4.jpg",
			name: "White Sneaker",
			tag: "Cloths",
			sale: "137 Sales",
		},
		{
			img: "https://emilus.themenate.net/img/avatars/thumb-2.jpg",
			name: "Red Beat Headphone",
			tag: "Devices",
			sale: "137 Sales",
		},
		{
			img: "https://emilus.themenate.net/img/avatars/thumb-4.jpg",
			name: "Apple Watch",
			tag: "Devices",
			sale: "137 Sales",
		},
		{
			img: "https://emilus.themenate.net/img/avatars/thumb-2.jpg",
			name: "Blue Backpack",
			tag: "Bags",
			sale: "137 Sales",
		},
	];
	return (
		<>
			<Card
				cardType="Plain"
			>
				<FlexLayout desktopWidth="100" tabWidth='100' mobileWidth='100' spacing="loose">
					{sellerArr.map((items) => {
						return (
							<FlexLayout   valign="center" halign="fill" spacing="loose">
								<FlexLayout valign="center" spacing="loose">
									<Avatar
										image={items.img}
										size="large"
									/>
									<FlexChild>
										<TextStyles
											fontweight="extraBold"
											content={items.name}
										/>
										<TextStyles
											fontweight="normal"
											textcolor="light"
											type="simpleText"
											content={items.tag}
										/>
									</FlexChild>
								</FlexLayout>
								
								<FlexLayout
										direction="vertical"
										spacing="extraTight"
									>
										<TextStyles
											content="Sales"
											textcolor="light"
											alignment="right"
										/>
										<FlexLayout valign='center' spacing='Tight'>
											<TextStyles
												content="$6,982"
												textcolor="dark"
												paragraphTypes="LG-1.5"
												type="Paragraph"
												fontweight="extraBold"
											/>
											<svg viewBox="64 64 896 896" focusable="false" data-icon="arrow-up" width="1em" height="1em" fill="rgb(1,96,56)" aria-hidden="true"><path d="M868 545.5L536.1 163a31.96 31.96 0 00-48.3 0L156 545.5a7.97 7.97 0 006 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z"></path></svg>
										</FlexLayout>				
								</FlexLayout>
							</FlexLayout>
						);
					})}
				</FlexLayout>
			</Card>

		</>
	)
}


