import { Badge, Grid } from '@cedcommerce/ounce-ui'
import React from 'react'

const GridTable = () => {
	return <Grid
	columns={[
		{
			align: 'center',
			dataIndex: 'name',
			key: 'name',
			title: 'Name',
			width: 100
		},
		{
			align: 'center',
			dataIndex: 'date',
			key: 'date',
			title: 'date',
			width: 100
		},
		{
			align: 'center',
			dataIndex: 'age',
			key: 'age',
			title: 'Age',
			width: 100
		},
		{
			align: 'center',
			dataIndex: 'amount',
			key: 'amount',
			title: 'amount',
			width: 100
		},
		{
			align: 'center',
			dataIndex: 'status',
			key: 'status',
			title: 'status',
			width: 100
		},
	]}
	dataSource={[
		{
			status : <Badge type="Positive-100">Approved</Badge>,
			amount: '$137.00',
			date: '8 May 2020',
			age: 32,
			key: '1',
			name: 'Mike'
		},
		{
			status : <Badge type="Positive-100">Approved</Badge>,
			amount: '$137.00',
			date: '8 May 2020',
			age: 42,
			key: '2',
			name: 'John'
		},
		{
			status : <Badge type="Negative-200">Rejected</Badge>,
			amount: '$137.00',
			date: '8 May 2020',
			age: 32,
			key: '3',
			name: 'Mike'
		},
		{
			status : <Badge type="Positive-100">Approved</Badge>,
			amount: '$137.00',
			date: '8 May 2020',
			age: 42,
			key: '4',
			name: 'John'
		},
		{
			status : <Badge type="Negative-200">Rejected</Badge>,
			amount: '$137.00',
			date: '8 May 2020',
			age: 32,
			key: '5',
			name: 'Mike'
		},
		{
			status : <Badge type="Positive-100">Approved</Badge>,
			amount: '$137.00',
			date: '8 May 2020',
			age: 42,
			key: '6',
			name: 'John'
		},
		{
			status : <Badge type="Negative-200">Rejected</Badge>,
			amount: '$137.00',
			date: '8 May 2020',
			age: 32,
			key: '5',
			name: 'Mike'
		},
		{
			status : <Badge type="Info-100">Approved</Badge>,
			amount: '$137.00',
			date: '8 May 2020',
			age: 32,
			key: '7',
			name: 'Mike'
		},
		
	]}
/>	
}

export default GridTable;
