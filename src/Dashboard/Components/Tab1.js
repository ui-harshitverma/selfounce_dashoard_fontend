import { Card, FlexChild, FlexLayout, MainLayout, Select, TextArea, TextField, Uploadnew } from '@cedcommerce/ounce-ui'
import React, { useState } from 'react'
import { FiDollarSign } from "react-icons/fi";

const Tab1 = () => {
	const [value1, setValue1] = useState()
	const [value2, setValue2] = useState()
	const [change1, onSelectChange1] = useState();
	const [change2, onSelectChange2] = useState();
	const [changeValue1, setChangeValue1] = useState();
	const [changeValue2, setChangeValue2] = useState();
	const [changeValue3, setChangeValue3] = useState();
	const [changeValue4, setChangeValue4] = useState();
	const optionsArr = [
		{
			label: "Cloths",
			value: "Cloths",
		},
		{
			label: "Bags",
			value: "Bags",
		},
		{
			label: "Shoes",
			value: "Shoes",
		},
		{
			label: "Watches",
			value: "Watches",
		},
		{
			label: "Devices",
			value: "Devices",
		},
	];


	return (
		<FlexLayout spacing="loose" direction='vertical'>
			<MainLayout>
				<>
					<FlexLayout direction='vertical' wrap='noWrap' spacing='loose'>
						<Card title='Basic Info'>
							<FlexLayout direction='vertical' spacing='loose'>
								<TextField
									name="Product Name"
									onChange={(e) => setValue1(e)}
									placeHolder="Enter here"
									type="text"
									value={value1}
								/>
								<TextArea
									id="id"
									name="Discription"
									onChange={(e) => setValue2(e)}
									onEnter={function noRefCheck() { }}
									onFocus={function noRefCheck() { }}
									placeHolder="Type.."
									rows={4}
									type="textarea"
									value={value2}
								/>
							</FlexLayout>
						</Card>
						<Card title="Pricing">
							<FlexLayout desktopWidth='100' spacing='loose'>
								<FlexChild desktopWidth='50'>
									<FlexLayout spacing='loose' desktopWidth='50'>
										<TextField
											innerPreIcon={<FiDollarSign />}
											name="Price"
											onChange={(e) => setChangeValue1(e)}
											placeHolder="Enter here"
											type="number"
											value={changeValue1}
										/>
										<TextField
											innerPreIcon={<FiDollarSign />}
											name="Cost per items"
											onChange={(e) => setChangeValue2(e)}
											placeHolder="Enter here"
											type="number"
											value={changeValue2}
										/>
									</FlexLayout>
								</FlexChild>
								<FlexChild desktopWidth='50'>
									<FlexLayout spacing='loose' desktopWidth='50'>
										<TextField
											innerPreIcon={<FiDollarSign />}
											name="Compare price"
											onChange={(e) => setChangeValue3(e)}
											placeHolder="Enter here"
											type="number"
											value={changeValue3}
										/>
										<TextField
											innerPreIcon={<FiDollarSign />}
											name="Text rate"
											onChange={(e) => setChangeValue4(e)}
											placeHolder="Enter here"
											type="number"
											value={changeValue4}
										/>

									</FlexLayout>
								</FlexChild>

							</FlexLayout>
						</Card>
					</FlexLayout>
				</>
				<>
					<FlexLayout direction='vertical' wrap='noWrap' spacing='loose'>
						<Card title='Media' extraClass="hellos">
							<Uploadnew
								className="avatar-uploader"
								listType="picture-card"
								name="Avtar"
								uploadbutton
							/>
						</Card>
						<Card title='Organization'>
							<FlexLayout direction='vertical' spacing='loose'>
								<Select
									name="Category"
									placeholder='Category'
									options={optionsArr}
									value={change1}
									onChange={(e) => {
										onSelectChange1(e);
									}}
								/>
								<Select
									name="Tags"
									placeholder='Tags'
									options={optionsArr}
									value={change2}
									onChange={(e) => {
										onSelectChange2(e);
									}}
								/>
							</FlexLayout>
						</Card>
					</FlexLayout>
				</>
			</MainLayout>
		</FlexLayout>
	)
}

export default Tab1
