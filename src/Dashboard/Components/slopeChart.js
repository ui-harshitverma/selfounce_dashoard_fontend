import React from "react";
import Chart from 'react-apexcharts'


export class ApexChart extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			series: [{
				name: 'series1',
				data: [0, 45, 30, 75, 15, 94, 40]
			}, {
				name: 'series2',
				data: [0, 60, 20, 130, 75, 130, 75]
			}],
			options: {
				chart: {
					height: 350,
					type: 'area',
					toolbar: {
						show: false
					},
				},
				
				dataLabels: {
					enabled: false
				},
				stroke: {
					curve: 'smooth'
				},
				xaxis: {
					type: 'datetime',
					categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
				},
				tooltip: {
					x: {
						format: 'dd/MM/yy HH:mm'
					},
				},
			},


		};
	}

	render() {
		return (
			<Chart options={this.state.options} series={this.state.series} type="area" height={350} />
		)
	}
}
