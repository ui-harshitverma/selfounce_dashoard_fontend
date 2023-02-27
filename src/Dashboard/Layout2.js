import React from 'react'
import { BodyLayout, Button, Card, FlexChild, FlexLayout, PageFooter, PageHeader, ProgressCircle, TextStyles } from '@cedcommerce/ounce-ui';
import { HiOutlineCloudDownload } from "react-icons/hi";
import { ApexChart } from './Components/slopeChart';
import { BarChart} from './Components/BarChart';
import { AiOutlineDown } from "react-icons/ai";
import { TopProduct } from './Components/TopProduct';
import GridTable2 from './Components/GridTable2';


const Layout2 = () => {
	return (
		<>
			<BodyLayout>
				<PageHeader title="Sales" sticky action={<Button onClick={()=> window.history.back()}>Go Back</Button>}></PageHeader>
				<FlexLayout direction="vertical" spacing="loose" wrap="noWrap">
					<FlexLayout spacing="loose">
						<FlexChild desktopWidth="66" tabWidth="100" mobileWidth="100">
							<Card title='Weekly Revenue' subTitle="8 - 15 Jul, 2020" action={<Button icon={<HiOutlineCloudDownload />} type="Outlined">Download Report</Button>}>
								<FlexLayout
									childWidth="fullWidth"
									spacing="Loose"
									wrap="noWrap"
									wrapMob="wrap"
									valign="center"
								>
									<FlexChild
										desktopWidth="33"
										mobileWidth="100"
										tabWidth="33"
									>
										<FlexLayout
												direction="vertical"
												spacing="extraTight"
											>
												<TextStyles
													content="$27,188.00"
													textcolor="dark"
													headingTypes="MD-2.7"
													type="Heading"
													fontweight="extraBold"
												/>
												<FlexLayout valign='center'>
													<svg viewBox="64 64 896 896" focusable="false" data-icon="arrow-up" width="1em" height="1em" fill="rgb(1,96,56)" aria-hidden="true"><path d="M868 545.5L536.1 163a31.96 31.96 0 00-48.3 0L156 545.5a7.97 7.97 0 006 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z"></path></svg>
													<TextStyles
														content="17% growth"
														textcolor="positive"
														subheadingTypes="XS-1.6"
														type="SubHeading"
														fontweight="extraBold"
													/>
												</FlexLayout>

												<TextStyles
													content="Total gross income figure based from the date range given above."
													textcolor="light"
												/>
										</FlexLayout>
									</FlexChild>
									<FlexChild
										desktopWidth="66"
										mobileWidth="100"
										tabWidth="66"
									>
											<BarChart />
									</FlexChild>
								</FlexLayout>
							</Card>
						</FlexChild>

						<FlexChild desktopWidth="33" tabWidth="100" mobileWidth="100">

							<FlexLayout desktopWidth="50" tabWidth="50" mobileWidth="100" spacing="loose">
								<Card>
									<FlexLayout direction="vertical" valign="center" halign="center" spacing="loose" wrap="noWrap">
									<svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.75" y="0.5" width="50" height="50" rx="8" fill="url(#paint0_linear_363_2402)"></rect><g clipPath="url(#clip0_363_2402)"><path d="M29.9163 33V31.3333C29.9163 30.4493 29.5652 29.6014 28.94 28.9763C28.3149 28.3512 27.4671 28 26.583 28H19.9163C19.0323 28 18.1844 28.3512 17.5593 28.9763C16.9342 29.6014 16.583 30.4493 16.583 31.3333V33" stroke="#413BBC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M23.2503 24.6667C25.0913 24.6667 26.5837 23.1743 26.5837 21.3333C26.5837 19.4924 25.0913 18 23.2503 18C21.4094 18 19.917 19.4924 19.917 21.3333C19.917 23.1743 21.4094 24.6667 23.2503 24.6667Z" stroke="#413BBC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M34.917 32.9999V31.3333C34.9164 30.5947 34.6706 29.8773 34.2181 29.2935C33.7656 28.7098 33.1321 28.2929 32.417 28.1083" stroke="#413BBC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M29.083 18.1083C29.8 18.2919 30.4355 18.7089 30.8894 19.2935C31.3432 19.8782 31.5895 20.5973 31.5895 21.3374C31.5895 22.0776 31.3432 22.7967 30.8894 23.3814C30.4355 23.966 29.8 24.383 29.083 24.5666" stroke="#413BBC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></g><defs><linearGradient id="paint0_linear_363_2402" x1="50.75" y1="25.5" x2="-23" y2="25.5" gradientUnits="userSpaceOnUse"><stop stopColor="#EEEDFA"></stop><stop offset="1" stopColor="#DEDCFA"></stop></linearGradient><clipPath id="clip0_363_2402"><rect width="20" height="20" fill="white" transform="translate(15.75 15.5)"></rect></clipPath></defs></svg>
										<FlexChild>
											<TextStyles fontweight="extraBold" alignment="center" type="SubHeading"  subheadingTypes="MD-2.2">
												11,831
											</TextStyles>
											<TextStyles alignment="center" textcolor="light">
												Total order
											</TextStyles>
										</FlexChild>
									</FlexLayout>
								</Card>
								<Card>
									<FlexLayout direction="vertical" valign="center" halign="center" spacing="loose" wrap="noWrap">
									<svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.75" y="0.5" width="50" height="50" rx="8" fill="url(#paint0_linear_363_2402)"></rect><g clipPath="url(#clip0_363_2402)"><path d="M29.9163 33V31.3333C29.9163 30.4493 29.5652 29.6014 28.94 28.9763C28.3149 28.3512 27.4671 28 26.583 28H19.9163C19.0323 28 18.1844 28.3512 17.5593 28.9763C16.9342 29.6014 16.583 30.4493 16.583 31.3333V33" stroke="#413BBC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M23.2503 24.6667C25.0913 24.6667 26.5837 23.1743 26.5837 21.3333C26.5837 19.4924 25.0913 18 23.2503 18C21.4094 18 19.917 19.4924 19.917 21.3333C19.917 23.1743 21.4094 24.6667 23.2503 24.6667Z" stroke="#413BBC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M34.917 32.9999V31.3333C34.9164 30.5947 34.6706 29.8773 34.2181 29.2935C33.7656 28.7098 33.1321 28.2929 32.417 28.1083" stroke="#413BBC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M29.083 18.1083C29.8 18.2919 30.4355 18.7089 30.8894 19.2935C31.3432 19.8782 31.5895 20.5973 31.5895 21.3374C31.5895 22.0776 31.3432 22.7967 30.8894 23.3814C30.4355 23.966 29.8 24.383 29.083 24.5666" stroke="#413BBC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></g><defs><linearGradient id="paint0_linear_363_2402" x1="50.75" y1="25.5" x2="-23" y2="25.5" gradientUnits="userSpaceOnUse"><stop stopColor="#EEEDFA"></stop><stop offset="1" stopColor="#DEDCFA"></stop></linearGradient><clipPath id="clip0_363_2402"><rect width="20" height="20" fill="white" transform="translate(15.75 15.5)"></rect></clipPath></defs></svg>
										<FlexChild>
											<TextStyles alignment="center" type="SubHeading" fontweight="extraBold" subheadingTypes="MD-2.2">
												26.9%
											</TextStyles>
											<TextStyles alignment="center" textcolor="light">
												Conversion rate
											</TextStyles>
										</FlexChild>
									</FlexLayout>
								</Card>
								<Card>
									<FlexLayout direction="vertical" valign="center" halign="center" spacing="loose" wrap="noWrap">
									<svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.75" y="0.5" width="50" height="50" rx="8" fill="url(#paint0_linear_363_2402)"></rect><g clipPath="url(#clip0_363_2402)"><path d="M29.9163 33V31.3333C29.9163 30.4493 29.5652 29.6014 28.94 28.9763C28.3149 28.3512 27.4671 28 26.583 28H19.9163C19.0323 28 18.1844 28.3512 17.5593 28.9763C16.9342 29.6014 16.583 30.4493 16.583 31.3333V33" stroke="#413BBC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M23.2503 24.6667C25.0913 24.6667 26.5837 23.1743 26.5837 21.3333C26.5837 19.4924 25.0913 18 23.2503 18C21.4094 18 19.917 19.4924 19.917 21.3333C19.917 23.1743 21.4094 24.6667 23.2503 24.6667Z" stroke="#413BBC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M34.917 32.9999V31.3333C34.9164 30.5947 34.6706 29.8773 34.2181 29.2935C33.7656 28.7098 33.1321 28.2929 32.417 28.1083" stroke="#413BBC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M29.083 18.1083C29.8 18.2919 30.4355 18.7089 30.8894 19.2935C31.3432 19.8782 31.5895 20.5973 31.5895 21.3374C31.5895 22.0776 31.3432 22.7967 30.8894 23.3814C30.4355 23.966 29.8 24.383 29.083 24.5666" stroke="#413BBC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></g><defs><linearGradient id="paint0_linear_363_2402" x1="50.75" y1="25.5" x2="-23" y2="25.5" gradientUnits="userSpaceOnUse"><stop stopColor="#EEEDFA"></stop><stop offset="1" stopColor="#DEDCFA"></stop></linearGradient><clipPath id="clip0_363_2402"><rect width="20" height="20" fill="white" transform="translate(15.75 15.5)"></rect></clipPath></defs></svg>
										<FlexChild>
											<TextStyles alignment="center" type="SubHeading" fontweight="extraBold" subheadingTypes="MD-2.2">
												$6,922
											</TextStyles>
											<TextStyles alignment="center" textcolor="light">
												Total profit
											</TextStyles>
										</FlexChild>
									</FlexLayout>
								</Card>
								<Card>
									<FlexLayout direction="vertical" valign="center" halign="center" spacing="loose" wrap="noWrap">
									<svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.75" y="0.5" width="50" height="50" rx="8" fill="url(#paint0_linear_363_2402)"></rect><g clipPath="url(#clip0_363_2402)"><path d="M29.9163 33V31.3333C29.9163 30.4493 29.5652 29.6014 28.94 28.9763C28.3149 28.3512 27.4671 28 26.583 28H19.9163C19.0323 28 18.1844 28.3512 17.5593 28.9763C16.9342 29.6014 16.583 30.4493 16.583 31.3333V33" stroke="#413BBC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M23.2503 24.6667C25.0913 24.6667 26.5837 23.1743 26.5837 21.3333C26.5837 19.4924 25.0913 18 23.2503 18C21.4094 18 19.917 19.4924 19.917 21.3333C19.917 23.1743 21.4094 24.6667 23.2503 24.6667Z" stroke="#413BBC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M34.917 32.9999V31.3333C34.9164 30.5947 34.6706 29.8773 34.2181 29.2935C33.7656 28.7098 33.1321 28.2929 32.417 28.1083" stroke="#413BBC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M29.083 18.1083C29.8 18.2919 30.4355 18.7089 30.8894 19.2935C31.3432 19.8782 31.5895 20.5973 31.5895 21.3374C31.5895 22.0776 31.3432 22.7967 30.8894 23.3814C30.4355 23.966 29.8 24.383 29.083 24.5666" stroke="#413BBC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></g><defs><linearGradient id="paint0_linear_363_2402" x1="50.75" y1="25.5" x2="-23" y2="25.5" gradientUnits="userSpaceOnUse"><stop stopColor="#EEEDFA"></stop><stop offset="1" stopColor="#DEDCFA"></stop></linearGradient><clipPath id="clip0_363_2402"><rect width="20" height="20" fill="white" transform="translate(15.75 15.5)"></rect></clipPath></defs></svg>
										<FlexChild>
											<TextStyles alignment="center" type="SubHeading" fontweight="extraBold" subheadingTypes="MD-2.2">
												873
											</TextStyles>
											<TextStyles alignment="center" textcolor="light" >
												Total visitors
											</TextStyles>
										</FlexChild>
									</FlexLayout>
								</Card>
							</FlexLayout>

						</FlexChild>
					</FlexLayout>
					<FlexLayout
						spacing="loose"
					>
						<FlexChild
							desktopWidth="50"
							mobileWidth="100"
							tabWidth="100"
						>

							<Card title='Top product' action={<Button onClick={() => alert("button clicked")} icon={<AiOutlineDown />} type='Outlined'>This week</Button>}>
								<TopProduct />
							</Card>

						</FlexChild>
						<FlexChild
							desktopWidth="50"
							mobileWidth="100"
							tabWidth="100"
						>
							<Card>
								<FlexLayout
									direction="vertical"
									spacing="loose"
									valign="center" >
									<ProgressCircle
										enablePercent
										fontsize={7}
										percentage={0}
										size={200}
									/>
								</FlexLayout>

								<FlexLayout direction="vertical"
									spacing="loose"
								>
									<FlexLayout halign="fill"
										spacing="loose"
									>
										<TextStyles>Cloths</TextStyles>
										<TextStyles fontweight='extraBold'>3561</TextStyles>
									</FlexLayout>
									<FlexLayout halign="fill"
										spacing="loose"
										valign="start">
										<TextStyles>Devices</TextStyles>
										<TextStyles fontweight='extraBold'>1443</TextStyles>
									</FlexLayout>
									<FlexLayout halign="fill"
										spacing="loose"
										valign="start">
										<TextStyles>Bags</TextStyles>
										<TextStyles fontweight='extraBold'>2462</TextStyles>
									</FlexLayout>
									<FlexLayout halign="fill"
										spacing="loose"
										valign="start">
										<TextStyles>Watches</TextStyles>
										<TextStyles fontweight='extraBold'>1693</TextStyles>
									</FlexLayout>
									<FlexLayout halign="fill"
										spacing="loose"
										valign="start">
										<TextStyles>Watches</TextStyles>
										<TextStyles fontweight='extraBold'>1693</TextStyles>
									</FlexLayout>
								</FlexLayout>
							</Card>
						</FlexChild>
					</FlexLayout>
					<FlexLayout desktopWidth='100' mobileWidth='100' tabWidth='100'>
						<Card title='Customers' action={<Button onClick={() => alert("button clicked")} icon={<AiOutlineDown />} type='Outlined'>This week</Button>}>
							<ApexChart/>
						</Card>
					</FlexLayout>
					<FlexLayout desktopWidth='100' mobileWidth='100' tabWidth='100'>
						<Card title='Recent Order'>
							<GridTable2/>
						</Card>
					</FlexLayout>
				</FlexLayout>
				<PageFooter>
					<TextStyles>Cedcommerce @ 2020</TextStyles>
				</PageFooter>
			</BodyLayout>
		</>
	)
}

export default Layout2;






