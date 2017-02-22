import React from 'react';
import ReactEcharts from 'echarts-for-react';

import { datas } from './datas';
import { option }  from './option';

const KlineViewComponent = React.createClass({
	propTypes: {
    
	},
	timeTicket: null,
	times:0,
	getInitialState : function(){
		return {option:this.getOption()};
	},
	fetchData:function(){
		let option = this.state.option;
	},
	componentDidMount : function(){
		if (this.timeTicket) {
			clearInterval(this.timeTicket);
		}
		this.timeTicket = setInterval(this.fetchData, 1000);
	},
	componentWillUnmount : function(){
		if (this.timeTicket) {
			clearInterval(this.timeTicket);
		}
	},
	getOption:function(){

		const option = {
			backgroundColor: '#21202D',
			legend: {
				data: ['日K', 'MA5', 'MA10', 'MA20', 'MA30'],
				inactiveColor: '#777',
				textStyle: {
					color: '#fff'
				}
			},
			xAxis: {
				type: 'category',
				data: dates,
				axisLine: {
					lineStyle: {
						color: '#8392A5'
					}
				}
			},
			yAxis: {
				scale: true,
				axisLine: {
					lineStyle: {
						color: '#8392A5'
					}
				},
				splitLine: {
					show: false
				}
			},
			animation: false,
			series: [{
				type: 'candlestick',
				name: '日K',
				data: data,
				itemStyle: {
					normal: {
						color: '#FD1050',
						color0: '#0CF49B',
						borderColor: '#FD1050',
						borderColor0: '#0CF49B'
					}
				}
			}, {
				name: 'MA5',
				type: 'line',
				data: calculateMA(5, data),
				smooth: true,
				showSymbol: false,
				lineStyle: {
					normal: {
						width: 1
					}
				}
			}, {
				name: 'MA10',
				type: 'line',
				data: calculateMA(10, data),
				smooth: true,
				showSymbol: false,
				lineStyle: {
					normal: {
						width: 1
					}
				}
			}, {
				name: 'MA20',
				type: 'line',
				data: calculateMA(20, data),
				smooth: true,
				showSymbol: false,
				lineStyle: {
					normal: {
						width: 1
					}
				}
			}, {
				name: 'MA30',
				type: 'line',
				data: calculateMA(30, data),
				smooth: true,
				showSymbol: false,
				lineStyle: {
					normal: {
						width: 1
					}
				}
			}]
		};
		return option;
	},
	render: function(){
		return (
			<div className="Chart">
				<ReactEcharts
					option= {this.state.option} 
            style={{height: '550px', width: '100%'}} 
            className="Chart__main" />
			</div>
		);
	}


});

export default KlineViewComponent;
