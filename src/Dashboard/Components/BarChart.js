import React from "react";
import Chart from 'react-apexcharts'


export class BarChart extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			series: [{
				name: 'series1',
				// data: [0, 45, 30, 75, 15, 94, 40]
				data: [0, 30, 60, 90, 120, 150]
			}],
			options: {
				chart: {
					height: 190,
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
				fill: {
					colors: ['#444444']
				  }
			},
			


		};
	}

	render() {
		return (
			<Chart options={this.state.options} series={this.state.series} type="bar" height={220} />
		)
	}
}



