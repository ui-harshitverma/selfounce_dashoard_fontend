import { Alert, AutoComplete, BodyLayout, Button, ButtonDropdown, Card, FlexLayout, PageFooter, PageHeader, Pagination, TextStyles } from '@cedcommerce/ounce-ui'
import React, { useContext, useEffect, useState } from 'react'
import ProductListGrid from './Components/ProductListGrid'
import { ProductGridContext } from '../App'

const ProductList = () => {
	const productData = useContext(ProductGridContext)
	const countPerPage = 1;
	const [value, setValue] = useState();
	const [activePage, updateActivePage] = useState(1);
	const [countP, setCount] = useState(countPerPage);
	function onCountChange(count) {
	  setCount(count);
	}
	useEffect(() => {
	  setCount(countPerPage);
	}, [countPerPage]);
	// console.log("ddd",productData)
	return (
		<>
			<BodyLayout>
				<PageHeader title="Product List" sticky action={<Button onClick={() => window.history.back()}>Go Back</Button>}></PageHeader>
				<Card>
					<FlexLayout halign="fill" valign="stretch">
						<FlexLayout spacing="loose">
							<AutoComplete
								clearFunction={function noRefCheck() { }}
								onChange={(e)=> setValue(e)}
								onClick={function noRefCheck() { }}
								onEnter={function noRefCheck() { }}
								options={[
									{
										id: 'popover0',
										label: 'Barbara-anne',
										lname: 'hello',
										popoverContent: <FlexLayout direction="vertical" spacing="loose"><FlexLayout spacing="tight" wrap="noWrap"><TextStyles fontweight="bold">Size :</TextStyles><TextStyles textcolor="light">Barbara</TextStyles></FlexLayout><FlexLayout spacing="tight" wrap="noWrap"><TextStyles fontweight="bold">Intrests:</TextStyles><TextStyles textcolor="light">People who have expressed an interest in or liked pages related to Reading and Leed Festivals.</TextStyles></FlexLayout><FlexLayout spacing="tight" wrap="noWrap"><TextStyles fontweight="bold">Description</TextStyles><TextStyles textcolor="light">People who have expressed an interest in or liked pages related to Reading and Leed Festivals.</TextStyles></FlexLayout><Alert desciption="The audience size for the selected interest group is shown as a range. These numbers are subject to change over time." type="info">Alert text</Alert></FlexLayout>,
										value: 'Barbara-anne'
									},
									{
										id: 'popover1',
										label: 'Jahaj Jahaaj jahaajj',
										popoverContent: <FlexLayout direction="vertical" spacing="loose"><FlexLayout spacing="tight" wrap="noWrap"><TextStyles fontweight="bold">Size :</TextStyles><TextStyles textcolor="light">jahaaj</TextStyles></FlexLayout><FlexLayout spacing="tight" wrap="noWrap"><TextStyles fontweight="bold">Intrests:</TextStyles><TextStyles textcolor="light">People who have expressed an interest in or liked pages related to Reading and Leed Festivals.</TextStyles></FlexLayout><FlexLayout spacing="tight" wrap="noWrap"><TextStyles fontweight="bold">Description</TextStyles><TextStyles textcolor="light">People who have expressed an interest in or liked pages related to Reading and Leed Festivals.</TextStyles></FlexLayout><Alert desciption="The audience size for the selected interest group is shown as a range. These numbers are subject to change over time." type="info">Alert text</Alert></FlexLayout>,
										value: 'Jahaj Jahaaj jahaajj'
									},
									{
										id: 'popover2',
										label: 'Debi',
										popoverContent: <FlexLayout direction="vertical" spacing="loose"><FlexLayout spacing="tight" wrap="noWrap"><TextStyles fontweight="bold">Size :</TextStyles><TextStyles textcolor="light">42Debi</TextStyles></FlexLayout><FlexLayout spacing="tight" wrap="noWrap"><TextStyles fontweight="bold">Intrests:</TextStyles><TextStyles textcolor="light">People who have expressed an interest in or liked pages related to Reading and Leed Festivals.</TextStyles></FlexLayout><FlexLayout spacing="tight" wrap="noWrap"><TextStyles fontweight="bold">Description</TextStyles><TextStyles textcolor="light">People who have expressed an interest in or liked pages related to Reading and Leed Festivals.</TextStyles></FlexLayout><Alert desciption="The audience size for the selected interest group is shown as a range. These numbers are subject to change over time." type="info">Alert text</Alert></FlexLayout>,
										value: 'Debi'
									},
									{
										id: 'popover3',
										label: 'Debi one',
										popoverContent: <FlexLayout direction="vertical" spacing="loose"><FlexLayout spacing="tight" wrap="noWrap"><TextStyles fontweight="bold">Size :</TextStyles><TextStyles textcolor="light">4200000 , 520001.</TextStyles></FlexLayout><FlexLayout spacing="tight" wrap="noWrap"><TextStyles fontweight="bold">Intrests:</TextStyles><TextStyles textcolor="light">People who have expressed an interest in or liked pages related to Reading and Leed Festivals.</TextStyles></FlexLayout><FlexLayout spacing="tight" wrap="noWrap"><TextStyles fontweight="bold">Description</TextStyles><TextStyles textcolor="light">People who have expressed an interest in or liked pages related to Reading and Leed Festivals.</TextStyles></FlexLayout><Alert desciption="The audience size for the selected interest group is shown as a range. These numbers are subject to change over time." type="info">Alert text</Alert></FlexLayout>,
										value: 'Debi one'
									},
									{
										id: 'popover4',
										label: 'Cara',
										popoverContent: <FlexLayout direction="vertical" spacing="loose"><FlexLayout spacing="tight" wrap="noWrap"><TextStyles fontweight="bold">Size :</TextStyles><TextStyles textcolor="light">4200000 , 520002.</TextStyles></FlexLayout><FlexLayout spacing="tight" wrap="noWrap"><TextStyles fontweight="bold">Intrests:</TextStyles><TextStyles textcolor="light">People who have expressed an interest in or liked pages related to Reading and Leed Festivals.</TextStyles></FlexLayout><FlexLayout spacing="tight" wrap="noWrap"><TextStyles fontweight="bold">Description</TextStyles><TextStyles textcolor="light">People who have expressed an interest in or liked pages related to Reading and Leed Festivals.</TextStyles></FlexLayout><Alert desciption="The audience size for the selected interest group is shown as a range. These numbers are subject to change over time." type="info">Alert text</Alert></FlexLayout>,
										value: 'Cara'
									},
									{
										id: 'popover5',
										label: 'Cristin',
										value: 'Cristin'
									},
									{
										id: 'popover5',
										label: 'Auto Autox',
										value: 'Auto Autox'
									},
									{
										id: 'popover5',
										label: 'Auto pqr',
										value: 'Auto pqr'
									},
									{
										id: 'popover6',
										label: 'Jocelyne',
										value: 'Jocelyne'
									},
									{
										id: 'popover7',
										label: 'Elmo',
										value: 'Elmo'
									},
									{
										id: 'popover8',
										label: 'Ivette',
										value: 'Ivette'
									},
									{
										id: 'popover9',
										label: 'Lea',
										value: 'Lea'
									},
									{
										id: 'popover10',
										label: 'Michel',
										value: 'Michel'
									},
									{
										id: 'popover11',
										label: 'Leigha',
										value: 'Leigha'
									},
									{
										label: 'Titus',
										value: 'Titus'
									},
									{
										label: 'Nollie',
										value: 'Nollie'
									},
									{
										label: 'Celle',
										value: 'Celle'
									},
									{
										label: 'Thea',
										value: 'Thea'
									},
									{
										label: 'Brynn',
										value: 'Brynn'
									},
									{
										label: 'Sloane',
										value: 'Sloane'
									},
									{
										label: 'Margalo',
										value: 'Margalo'
									},
									{
										label: 'Genevieve',
										value: 'Genevieve'
									},
									{
										label: 'Niel',
										value: 'Niel'
									},
									{
										label: 'Heddi',
										value: 'Heddi'
									},
									{
										label: 'Gregg',
										value: 'Gregg'
									},
									{
										label: 'Eduard',
										value: 'Eduard'
									},
									{
										label: 'Kizzee',
										value: 'Kizzee'
									},
									{
										label: 'Truman',
										value: 'Truman'
									},
									{
										label: 'Merill',
										value: 'Merill'
									},
									{
										label: 'Lindie',
										value: 'Lindie'
									},
									{
										label: 'Vasily',
										value: 'Vasily'
									},
									{
										label: 'Averil',
										value: 'Averil'
									},
									{
										label: 'Golda',
										value: 'Golda'
									},
									{
										label: 'Zorine',
										value: 'Zorine'
									},
									{
										label: 'Odele',
										value: 'Odele'
									},
									{
										label: 'Amalie',
										value: 'Amalie'
									},
									{
										label: 'Ilsa',
										value: 'Ilsa'
									},
									{
										label: 'Pepillo',
										value: 'Pepillo'
									}
								]}
								setHiglighted
								thickness="thick"
								value={value}
							/>
							<ButtonDropdown
								halign="Start"
								list={[
									{
										label: 'All',
										onClick: function noRefCheck() { }
									},
									{
										label: 'Cloths',
										onClick: function noRefCheck() { }
									},
									{
										label: 'Shoes',
										onClick: function noRefCheck() { }
									},
									{
										label: 'Bags',
										onClick: function noRefCheck() { }
									},
									{
										label: 'Devices',
										onClick: function noRefCheck() { }
									}
								]}
								title="More Actions"
								type="Outlined"
							/>
							<ButtonDropdown
								halign="Start"
								list={[
									{
										label: 'Approved',
										onClick: function noRefCheck() { }
									},
									{
										label: 'Reject',
										onClick: function noRefCheck() { }
									},
								]}
								title="Sort by status"
								type="Outlined"
							/>
						</FlexLayout>
						<FlexLayout>
							<Button
								halign="Center"
								icon={<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"></path><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path></svg>}
								iconAlign="left"
								length="none"
								onAction={function noRefCheck() { }}
								onClick={()=> alert('clicked')}
								thickness="thin"
								type="Primary"
							>
								Add Product
							</Button>
						</FlexLayout>
					</FlexLayout>
				</Card>
				<ProductListGrid productData={productData}/>
				<Card>
					<Pagination
						onNext={() => {
							updateActivePage(activePage + 1);
						}}
						onPrevious={() => {
							updateActivePage(activePage - 1);
						}}
						currentPage={activePage}
						onEnter={(page) => updateActivePage(page)}
						countPerPage={countP}
						onCountChange={onCountChange}
						optionPerPage={[
							{
								label: '10',
								value: '10'
							},
							{
								label: '15',
								value: '15'
							},
							{
								label: '20',
								value: '20'
							},
							{
								label: '25',
								value: '25'
							},
							{
								label: '50',
								value: '50'
							},
							{
								label: '100',
								value: '100'
							}
						]}
						totalPages={20}
						totalitem={200}
					/>
				</Card>
				<PageFooter>
					<TextStyles>Cedcommerce @ 2020</TextStyles>
				</PageFooter>
			</BodyLayout>
		</>
	)
}

export default ProductList
