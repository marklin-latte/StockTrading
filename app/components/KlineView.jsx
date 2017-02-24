import React from 'react';
import ReactEcharts from 'echarts-for-react';

const KlineViewComponent = React.createClass({
	propTypes: {
    
	},
	timeTicket: null,
	count:0,
	times:0,
	datas:{},
	getInitialState : function(){
		this.datas = this.props.datas;
		return {option:this.getOption()};
	},
	fetchData:function(){
		let option = this.state.option;
		if(this.times ===0){
			clearInterval(this.timeTicket);
		}
		let data = this.datas[this.count-this.times];
		let date = data[0]; 
		let priceInfo = [+data[1],+data[2],+data[5],+data[6]];
		if(!data[0]){
			this.times--;
			return;
		}
		option.xAxis.data.push(date);
		option.series[0].data.push(priceInfo);
		option.series[1].data = this.calculateMa(5,option.series[0].data);
		option.series[2].data = this.calculateMa(10,option.series[0].data);
		option.series[3].data = this.calculateMa(20,option.series[0].data);
		this.setState({option:option});
		this.times--;	
	},
	componentDidMount : function(){
		this.times = this.datas.length;
		this.count = this.datas.length;
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
	calculateMa :function(dayCount,data){
		var result = [];
		for (var i=0,len=data.length;i<len;i++){
			if(i<dayCount){
				result.push('-');
				continue;
			}
			var sum = 0;
			for (var j=0;j<dayCount;j++){
				sum+=data[i-j][1];
			}
			result.push(sum/dayCount);
		}
		return result;
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
				data: [],
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
			animation: true,
			series: [{
				type: 'candlestick',
				name: '日K',
				data: [],
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
				data: [],
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
				data: [],
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
				data: [],
				smooth: true,
				showSymbol: false,
				lineStyle: {
					normal: {
						width: 1
					}
				}
			}
			]
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
