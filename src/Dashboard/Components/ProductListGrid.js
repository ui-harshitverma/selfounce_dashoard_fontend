import { Badge, Grid } from '@cedcommerce/ounce-ui'
import React from 'react'
import { Avatar, FlexChild, FlexLayout, TextStyles } from '@cedcommerce/ounce-ui';
// import Grid from '../Grid'

const ProductListGrid = ({ productData }) => {
	const productDataGrid = productData.gridData
	console.log(productDataGrid)
	const col = [
		{
			align: 'center',
			dataIndex: 'id',
			key: 'id',
			title: 'Id',
			width: 10
		},
		// {
		// 	align: 'center',
		// 	dataIndex: 'product',
		// 	key: 'product',
		// 	title: 'Product',
		// 	width: 100
		// },
		{
			align: 'center',
			dataIndex: 'category',
			key: 'category',
			title: 'Category',
			width: 100
		},
		{
			align: 'center',
			dataIndex: 'price',
			key: 'price',
			title: 'Price',
			width: 100
		},
		{
			align: 'center',
			dataIndex: 'stock',
			key: 'stock',
			title: 'Stock',
			width: 100
		},
		// {
		// 	align: 'center',
		// 	dataIndex: 'status',
		// 	key: 'status',
		// 	title: 'Status',
		// 	width: 100
		// }
	]


	// console.log('ok')
	// console.log(productData)
	// console.log(productData.gridData)
	let rows = productDataGrid.length > 0 ?
		productDataGrid?.map((items, index) => ({
			new : [ {
				id: index+1,
				product: <FlexLayout valign="center" spacing="loose">
					<Avatar
						image={items.product_img}
						size="large"
					/>
					<FlexChild>
						<TextStyles
							fontweight="extraBold"
							content={items.product_name}
						/>
						<TextStyles
							fontweight="normal"
							textcolor="light"
							type="simpleText"
						/>
					</FlexChild>
				</FlexLayout>,
				category: items.category,
				price: items.price,
				stock: items.stock,
				status: <Badge type="Positive-100">{items.status}</Badge>,
				// key: items.key,
			}]
		})): []
		console.log(rows)
		// arr.push(rows)
	return (
		<Grid
			columns={col}
			rows={rows}
			// dataSource={rows}
			// dataSource={[
			// 	{
			// 		id: '1',
			// 		product: <FlexLayout valign="center" spacing="loose">
			// 			<Avatar
			// 				image="https://emilus.themenate.net/img/thumbs/thumb-7.jpg"
			// 				size="large"
			// 			/>
			// 			<FlexChild>
			// 				<TextStyles
			// 					fontweight="extraBold"
			// 					content="Blue Jacket"
			// 				/>
			// 				<TextStyles
			// 					fontweight="normal"
			// 					textcolor="light"
			// 					type="simpleText"
			// 				/>
			// 			</FlexChild>
			// 		</FlexLayout>,
			// 		category: 'Cloths',
			// 		price: '$20.00',
			// 		stock: '44',
			// 		status: <Badge type="Positive-100">Approved</Badge>,
			// 		key: '1',
			// 	},
			// 	{
			// 		id: '2',
			// 		product: <FlexLayout valign="center" spacing="loose">
			// 			<Avatar
			// 				image="https://emilus.themenate.net/img/thumbs/thumb-8.jpg"
			// 				size="large"
			// 			/>
			// 			<FlexChild>
			// 				<TextStyles
			// 					fontweight="extraBold"
			// 					content="White Backpack"
			// 				/>
			// 				<TextStyles
			// 					fontweight="normal"
			// 					textcolor="light"
			// 					type="simpleText"
			// 				/>
			// 			</FlexChild>
			// 		</FlexLayout>,
			// 		category: 'Bags',
			// 		price: '$90.00',
			// 		stock: '27',
			// 		status: <Badge type="Positive-100">Approved</Badge>,
			// 		key: '2',
			// 	},
			// 	{
			// 		id: '3',
			// 		product: <FlexLayout valign="center" spacing="loose">
			// 			<Avatar
			// 				image="https://emilus.themenate.net/img/thumbs/thumb-9.jpg"
			// 				size="large"
			// 			/>
			// 			<FlexChild>
			// 				<TextStyles
			// 					fontweight="extraBold"
			// 					content="Black Sneaker"
			// 				/>
			// 				<TextStyles
			// 					fontweight="normal"
			// 					textcolor="light"
			// 					type="simpleText"
			// 				/>
			// 			</FlexChild>
			// 		</FlexLayout>,
			// 		category: 'Shoes',
			// 		price: '$120.00',
			// 		stock: '35',
			// 		status: <Badge type="Positive-100">Approved</Badge>,
			// 		key: '3',
			// 	},
			// 	{
			// 		id: '4',
			// 		product: <FlexLayout valign="center" spacing="loose">
			// 			<Avatar
			// 				image="https://emilus.themenate.net/img/thumbs/thumb-10.jpg"
			// 				size="large"
			// 			/>
			// 			<FlexChild>
			// 				<TextStyles
			// 					fontweight="extraBold"
			// 					content="Gray Hoodies"
			// 				/>
			// 				<TextStyles
			// 					fontweight="normal"
			// 					textcolor="light"
			// 					type="simpleText"
			// 				/>
			// 			</FlexChild>
			// 		</FlexLayout>,
			// 		category: 'Cloths',
			// 		price: '$180.00',
			// 		stock: '54',
			// 		status: <Badge type="Positive-100">Approved</Badge>,
			// 		key: '4',
			// 	},
			// 	{
			// 		id: '5',
			// 		product: <FlexLayout valign="center" spacing="loose">
			// 			<Avatar
			// 				image="https://emilus.themenate.net/img/thumbs/thumb-11.jpg"
			// 				size="large"
			// 			/>
			// 			<FlexChild>
			// 				<TextStyles
			// 					fontweight="extraBold"
			// 					content="Blue Backpack"
			// 				/>
			// 				<TextStyles
			// 					fontweight="normal"
			// 					textcolor="light"
			// 					type="simpleText"
			// 				/>
			// 			</FlexChild>
			// 		</FlexLayout>,
			// 		category: 'Bags',
			// 		price: '$76.00',
			// 		stock: '19',
			// 		status: <Badge type="Positive-100">Approved</Badge>,
			// 		key: '5',
			// 	},
			// 	{
			// 		id: '6',
			// 		product: <FlexLayout valign="center" spacing="loose">
			// 			<Avatar
			// 				image="https://emilus.themenate.net/img/thumbs/thumb-12.jpg"
			// 				size="large"
			// 			/>
			// 			<FlexChild>
			// 				<TextStyles
			// 					fontweight="extraBold"
			// 					content="
			// 				White Sneaker"
			// 				/>
			// 				<TextStyles
			// 					fontweight="normal"
			// 					textcolor="light"
			// 					type="simpleText"
			// 				/>
			// 			</FlexChild>
			// 		</FlexLayout>,
			// 		category: 'Shoes',
			// 		price: '$43.00',
			// 		stock: '20',
			// 		status: <Badge type="Positive-100">Approved</Badge>,
			// 		key: '6',
			// 	},
			// 	{
			// 		id: '7',
			// 		product: <FlexLayout valign="center" spacing="loose">
			// 			<Avatar
			// 				image="https://emilus.themenate.net/img/thumbs/thumb-13.jpg"
			// 				size="large"
			// 			/>
			// 			<FlexChild>
			// 				<TextStyles
			// 					fontweight="extraBold"
			// 					content="Analog Watch"
			// 				/>
			// 				<TextStyles
			// 					fontweight="normal"
			// 					textcolor="light"
			// 					type="simpleText"
			// 				/>
			// 			</FlexChild>
			// 		</FlexLayout>,
			// 		category: 'Watches',
			// 		price: '$99.00',
			// 		stock: '23',
			// 		status: <Badge type="Positive-100">Approved</Badge>,
			// 		key: '7',
			// 	},
			// 	{
			// 		id: '8',
			// 		product: <FlexLayout valign="center" spacing="loose">
			// 			<Avatar
			// 				image="https://emilus.themenate.net/img/thumbs/thumb-14.jpg"
			// 				size="large"
			// 			/>
			// 			<FlexChild>
			// 				<TextStyles
			// 					fontweight="extraBold"
			// 					content="Red Headphone"
			// 				/>
			// 				<TextStyles
			// 					fontweight="normal"
			// 					textcolor="light"
			// 					type="simpleText"
			// 				/>
			// 			</FlexChild>
			// 		</FlexLayout>,
			// 		category: 'Devices',
			// 		price: '$67.00',
			// 		stock: '34',
			// 		status: <Badge type="Positive-100">Approved</Badge>,
			// 		key: '8',
			// 	},
			// 	{
			// 		id: '9',
			// 		product: <FlexLayout valign="center" spacing="loose">
			// 			<Avatar
			// 				image="https://emilus.themenate.net/img/thumbs/thumb-15.jpg"
			// 				size="large"
			// 			/>
			// 			<FlexChild>
			// 				<TextStyles
			// 					fontweight="extraBold"
			// 					content="Apple Macbook"
			// 				/>
			// 				<TextStyles
			// 					fontweight="normal"
			// 					textcolor="light"
			// 					type="simpleText"
			// 				/>
			// 			</FlexChild>
			// 		</FlexLayout>,
			// 		category: 'Devices',
			// 		price: '$30.00',
			// 		stock: '91',
			// 		status: <Badge type="Positive-100">Approved</Badge>,
			// 		key: '9',
			// 	},
			// 	{
			// 		id: '10',
			// 		product: <FlexLayout valign="center" spacing="loose">
			// 			<Avatar
			// 				image="https://emilus.themenate.net/img/thumbs/thumb-16.jpg"
			// 				size="large"
			// 			/>
			// 			<FlexChild>
			// 				<TextStyles
			// 					fontweight="extraBold"
			// 					content="Bronze Watch"
			// 				/>
			// 				<TextStyles
			// 					fontweight="normal"
			// 					textcolor="light"
			// 					type="simpleText"
			// 				/>
			// 			</FlexChild>
			// 		</FlexLayout>,
			// 		category: 'Watches',
			// 		price: '$129.00',
			// 		stock: '12',
			// 		status: <Badge type="Positive-100">Approved</Badge>,
			// 		key: '10',
			// 	},
			// ]}
			// row
			// // dataSource={arr}
			rowSelection={{
				onChange: function noRefCheck() { }
			}}
		/>
		// rows.length > 0 ?
		//  <Grid columns={col} rows={rows}/> : console.log('no')
	)
}

export default ProductListGrid
