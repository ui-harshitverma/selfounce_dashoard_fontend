import { BodyLayout, Button, Card, FlexChild, FlexLayout, MainLayout, PageFooter, PageHeader, ProgressCircle, TextStyles } from '@cedcommerce/ounce-ui';
import React from 'react'
import AddUser from './Components/AddUser';
import GridTable from './Components/GridTable';
import { ApexChart } from './Components/slopeChart';
import { BsThreeDots } from "react-icons/bs";
import SvgSlope from './Components/svg';
import HelpText from './Help';
import { useNavigate } from "react-router-dom";
import { IoMdAddCircleOutline } from "react-icons/io";


const Layout1 = () => {
	const navigate = useNavigate();
	const addNewUser = () =>{
		navigate('/NewJoinMember') ;
	}
	return (
		<>
			<BodyLayout>
				<PageHeader title="Dashboard" sticky action={<Button onClick={() => window.history.back()}>Go Back</Button>}></PageHeader>
				<FlexLayout spacing="loose" direction='vertical'>
					<MainLayout>
						<FlexLayout direction='vertical' wrap='noWrap' spacing='loose'>
							<Card title='Revenue'>
								<FlexLayout
									direction="vertical"
									spacing="extraTight"
								>
									<FlexLayout valign='center' spacing='loose'>
										<TextStyles
											content="$2,454"
											textcolor="dark"
											headingTypes="MD-2.7"
											type="Heading"
											fontweight="extraBold"
										/>
										<FlexLayout valign='center'>
											<TextStyles
												content="-11.4"
												textcolor="negative"
												subheadingTypes="XS-1.6"
												type="SubHeading"
												fontweight="extraBold"
											/>
											<svg viewBox="64 64 896 896" focusable="false" data-icon="arrow-down" width="1em" height="1em" fill="rgb(217,45,32)" aria-hidden="true"><path d="M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0048.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z"></path></svg>
										</FlexLayout>

									</FlexLayout>
									<TextStyles
										content="Compare to last year (2019)"
										textcolor="light"
									/>
								</FlexLayout>
							</Card>
							<Card title='Sales'>
								<FlexLayout
									direction="vertical"
									spacing="extraTight"
								>
									<FlexLayout valign='center' spacing='loose'>
										<TextStyles
											content="$6,982"
											textcolor="dark"
											headingTypes="MD-2.7"
											type="Heading"
											fontweight="extraBold"
										/>
										<FlexLayout valign='center'>
											<TextStyles
												content="8.2"
												textcolor="positive"
												subheadingTypes="XS-1.6"
												type="SubHeading"
												fontweight="extraBold"
											/>
											<svg viewBox="64 64 896 896" focusable="false" data-icon="arrow-up" width="1em" height="1em" fill="rgb(1,96,56)" aria-hidden="true"><path d="M868 545.5L536.1 163a31.96 31.96 0 00-48.3 0L156 545.5a7.97 7.97 0 006 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z"></path></svg>
										</FlexLayout>
									</FlexLayout>
									<TextStyles
										content="Compare to last year (2019)"
										textcolor="light"
									/>
								</FlexLayout>
							</Card>
							<Card title='Costs'>
								<FlexLayout
									direction="vertical"
									spacing="extraTight"
								>
									<FlexLayout valign='center' spacing='loose'>
										<TextStyles
											content="$2,454"
											textcolor="dark"
											headingTypes="MD-2.7"
											type="Heading"
											fontweight="extraBold"
										/>
										<FlexLayout valign='center'>
											<TextStyles
												content="0.7"
												textcolor="positive"
												subheadingTypes="XS-1.6"
												type="SubHeading"
												fontweight="extraBold"
											/>
											<svg viewBox="64 64 896 896" focusable="false" data-icon="arrow-up" width="1em" height="1em" fill="rgb(1,96,56)" aria-hidden="true"><path d="M868 545.5L536.1 163a31.96 31.96 0 00-48.3 0L156 545.5a7.97 7.97 0 006 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z"></path></svg>
										</FlexLayout>
									</FlexLayout>
									<TextStyles
										content="Compare to last year (2019)"
										textcolor="light"
									/>
								</FlexLayout>
							</Card>
							<Card title='Unique Visitors'>
								<ApexChart />
							</Card>
						</FlexLayout>
						<FlexLayout direction='vertical' wrap='noWrap' spacing='loose'>
							<Card>
								<FlexLayout valign="center" direction='vertical' spacing='loose'>
									<TextStyles
										content="Monthly Target"
										subheadingTypes="XS-1.6"
										type="SubHeading"
										alignment='center'
										fontweight="extraBold"
									/>

									<ProgressCircle
										enablePercent
										fontsize={7}
										percentage={87}
										size={150}
									/>
									<TextStyles
										alignment="center"
										content="You need abit more effort to hit monthly target"
										textcolor='light'
									/>
									<Button
										halign="Center"
										iconAlign="left"
										length="none"
										onAction={function noRefCheck() { }}
										onClick={function noRefCheck() { }}
										thickness="thin"
										type="Primary"
									>
										Learn More
									</Button>
								</FlexLayout>
							</Card>
							<Card>
								<FlexLayout
									direction="vertical"
									spacing="extraTight"
								>
									<SvgSlope />
									<FlexLayout valign='center' spacing='loose'>
										<TextStyles
											content="17,329"
											textcolor="dark"
											headingTypes="MD-2.7"
											type="Heading"
											fontweight="extraBold"
										/>
										<FlexLayout valign='center'>
											<TextStyles
												content="3.7"
												textcolor="positive"
												subheadingTypes="XS-1.6"
												type="SubHeading"
												fontweight="extraBold"
											/>
											<svg viewBox="64 64 896 896" focusable="false" data-icon="arrow-up" width="1em" height="1em" fill="rgb(1,96,56)" aria-hidden="true"><path d="M868 545.5L536.1 163a31.96 31.96 0 00-48.3 0L156 545.5a7.97 7.97 0 006 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z"></path></svg>
										</FlexLayout>

									</FlexLayout>
									<TextStyles
										content="Active members"
										textcolor="light"
									/>
								</FlexLayout>
							</Card>
						</FlexLayout>
					</MainLayout>
					<FlexLayout
						childWidth="fullWidth"
						spacing="extraLoose"
						wrap="noWrap"
						wrapMob="wrap"
					>
						<FlexChild
							desktopWidth="33"
							mobileWidth="100"
							tabWidth="100"
						>
							<Card title='New Join Member' action={<IoMdAddCircleOutline className='sizeclass' onClick={addNewUser}/>}>
								<AddUser />
							</Card>
						</FlexChild>

						<FlexChild
							desktopWidth="66"
							mobileWidth="100"
							tabWidth="100"
						>
							<Card title='Latest Transactions' action={<BsThreeDots />}>
								<GridTable />
							</Card>
						</FlexChild>
					</FlexLayout>
				</FlexLayout>
				{/* <HelpText /> */}
				<PageFooter>
					<TextStyles>Copyright © 2022 Emilus All rights reserved.</TextStyles>
				</PageFooter>
			</BodyLayout>
		</>
	)
}

export default Layout1;
