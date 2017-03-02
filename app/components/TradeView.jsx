import React from 'react';
import { connect } from 'react-redux';
import { buy , sell  } from '../actions/index';

class TradeViewComponent extends React.Component {
	constructor(props) {
		super(props);
		this.buyClick = this.buyClick.bind(this);
		this.sellClick = this.sellClick.bind(this);
	}
	buyClick(){
		let data = this.props.currentData;
		let buyPrice = +data[1];
		let highestPrice = +data[6];
		let buyDate = this.props.currentDate;

		if(this.props.tradeInfo.assets > buyPrice){
			this.props.buy({
				highest : highestPrice, 
				price : buyPrice,
				date : buyDate,
				isMarkPoint : false
			});
		}
	}

	sellClick(){
		let data = this.props.currentData;
		let sellPrice = +data[1];
		let highestPrice = +data[6];
		let sellDate = this.props.currentDate;
		if(this.props.tradeInfo.position > 0){
			this.props.sell({
				highest : highestPrice, 
				price : sellPrice,
				date : sellDate,
				isMarkPoint : false
			});
		}
	}

	render (){
		return (
		<div className='tradeInfo'>
			<button className='tradeInfo__BuyBtn' onClick={this.buyClick} >BUY</button>
			<button className='tradeInfo__SellBtn' onClick={this.sellClick} >SELL</button>
			<div className='tradeInfo__Information'>
				<div className='tradeInfo__Assets'>{this.props.tradeInfo.assets}</div>
				<div className='tradeInfo__Position'>{this.props.tradeInfo.position}</div>
				<div className='tradeInfo__Buy'></div>
				<div className='tradeInfo__Sell'></div>
			</div>
		</div>
		);
	}
}

// Map Redux state to component props
function mapStateToProps(state) {
	return {
		currentData: state.trade.currentData,
		currentDate: state.trade.currentDate,
		tradeInfo : state.trade.tradeInfo
	};
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
	return {
		buy : (tradeInfo) => dispatch(buy(tradeInfo)),
		sell : (tradeInfo) => dispatch(sell(tradeInfo))
	};
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(TradeViewComponent);
export default App;

