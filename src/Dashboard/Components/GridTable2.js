import { Badge, Grid } from '@cedcommerce/ounce-ui'
import React from 'react'

const GridTable2 = () => {
	return <Grid
	columns={[
		{
			align: 'center',
			dataIndex: 'id',
			key: 'id',
			title: 'Id',
			width: 100
		},
		{
			align: 'center',
			dataIndex: 'product',
			key: 'product',
			title: 'Product',
			width: 100
		},
		{
			align: 'center',
			dataIndex: 'date',
			key: 'date',
			title: 'Date',
			width: 100
		},
		{
			align: 'center',
			dataIndex: 'amount',
			key: 'amount',
			title: 'Amount',
			width: 100
		},
		{
			align: 'center',
			dataIndex: 'status',
			key: 'status',
			title: 'Status',
			width: 100
		},
		{
			align: 'center',
			dataIndex: 'total',
			key: 'total',
			title: 'Total',
			width: 100
		},
	]}
	dataSource={[
		{
			status : <Badge type="Positive-100">Approved</Badge>,
			amount: '$137.00',
			date: '8 May 2020',
			total: '$629.00',
			key: '1',
			product: 'Mike',
			id: '#5321'
		},
		{
			status : <Badge type="Positive-100">Approved</Badge>,
			amount: '$137.00',
			date: '8 May 2020',
			total: '$329.00',
			key: '2',
			product: 'John',
			id: '#5322'
		},
		{
			status : <Badge type="Negative-200">Rejected</Badge>,
			amount: '$137.00',
			date: '8 May 2020',
			total: '$929.00',
			key: '3',
			product: 'Mike',
			id: '#5323'
		},
		{
			status : <Badge type="Positive-100">Approved</Badge>,
			amount: '$137.00',
			date: '8 May 2020',
			total: '$329.00',
			key: '4',
			product: 'John',
			id: '#5324'
		},
		{
			status : <Badge type="Negative-200">Rejected</Badge>,
			amount: '$137.00',
			date: '8 May 2020',
			total: '$129.00',
			key: '5',
			product: 'Mike',
			id: '#5325'
		},
		{
			status : <Badge type="Positive-100">Approved</Badge>,
			amount: '$137.00',
			date: '8 May 2020',
			total: '$329.00',
			key: '6',
			product: 'John',
			id: '#5326'
		},
		{
			status : <Badge type="Negative-200">Rejected</Badge>,
			amount: '$137.00',
			date: '8 May 2020',
			total: '$429.00',
			key: '5',
			product: 'Mike',
			id: '#5327'
		},
		{
			status : <Badge type="Info-100">Approved</Badge>,
			amount: '$137.00',
			date: '8 May 2020',
			total: '$629.00',
			key: '7',
			product: 'Mike',
			id: '#5328'
		},
		{
			status : <Badge type="Info-100">Approved</Badge>,
			amount: '$137.00',
			date: '8 May 2020',
			total: '$629.00',
			key: '7',
			product: 'Mike',
			id: '#5328'
		},
		{
			status : <Badge type="Info-100">Approved</Badge>,
			amount: '$137.00',
			date: '8 May 2020',
			total: '$629.00',
			key: '7',
			product: 'Mike',
			id: '#5328'
		},
		{
			status : <Badge type="Info-100">Approved</Badge>,
			amount: '$137.00',
			date: '8 May 2020',
			total: '$629.00',
			key: '7',
			product: 'Mike',
			id: '#5328'
		},
		{
			status : <Badge type="Info-100">Approved</Badge>,
			amount: '$137.00',
			date: '8 May 2020',
			total: '$629.00',
			key: '7',
			product: 'Mike',
			id: '#5328'
		},
		{
			status : <Badge type="Info-100">Approved</Badge>,
			amount: '$137.00',
			date: '8 May 2020',
			total: '$629.00',
			key: '7',
			product: 'Mike',
			id: '#5328'
		},
		{
			status : <Badge type="Info-100">Approved</Badge>,
			amount: '$137.00',
			date: '8 May 2020',
			total: '$629.00',
			key: '7',
			product: 'Mike',
			id: '#5328'
		},
		
	]}
	scrollY={500}
/>	
}

export default GridTable2;
