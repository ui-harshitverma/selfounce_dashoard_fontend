import { BodyLayout, Button, Card, FlexChild, FlexLayout, PageHeader, TextStyles } from '@cedcommerce/ounce-ui';
import React from 'react'
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineSkype, AiOutlineMail } from "react-icons/ai";
import AccordionHelp from './Components/AccordionHelp';


const HelpText = () => {
	const helpData = [
		{
			heading: "Whatsapp",
			description: "Add Us On WhatsApp!",
			btncontent: "Start Chat",
			icon: <BsWhatsapp size={26} color="#25D366" />,
		},
		{
			heading: "Skype",
			description: "Connect With Us On Skype",
			btncontent: "Start Chat",
			icon: <AiOutlineSkype size={30} color="#34B7F1" />,
		},
		{
			heading: "Email",
			description: "Send your Queries, Feedback, or Suggestions via email. ",
			btncontent: "Mail Us",
			icon: <AiOutlineMail size={30} color="red" />,
		},
	];

	return (
		<BodyLayout>
			<PageHeader title="Help" sticky action={<Button onClick={() => window.history.back(-1)}>Go Back</Button>}></PageHeader>
			<FlexLayout spacing="loose" direction='vertical'>
				<FlexLayout desktopWidth='33' mobileWidth='100' tabWidth='33' spacing='loose'>
					{
						helpData.map((items) => {
							return (
								<Card>
									<FlexLayout halign="fill" wrap="noWrap" spacing="loose">
										<FlexLayout direction="vertical" halign="fill">
											<div style={{ minHeight: "100px" }}>
												<TextStyles
													content={items.heading}
													fontweight="extraBold"
													type='heading'
													headingTypes='LG-2.8'
												/>
												<TextStyles
													content={items.description}
													textcolor="light"
													type="smallText"
												/>
											</div>
											<Button content={items.btncontent} type="Primary" />
										</FlexLayout>
										<FlexChild>
											{items.icon}
										</FlexChild>
									</FlexLayout>
								</Card>
							)
						})
					}
				</FlexLayout>
				<AccordionHelp />
			</FlexLayout>
		</BodyLayout>
	);
};

export default HelpText
