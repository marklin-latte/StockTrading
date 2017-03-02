import React, { Component, PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import  KlineViewComponent  from './klineView';
import	TradeViewComponent from './tradeView'; 
import { datas } from '../datas';

class App extends React.Component {
	render() {
		return (
      <div>
				<KlineViewComponent datas={datas} />
				<TradeViewComponent />
      </div>
		);
	}
}


export default App;
