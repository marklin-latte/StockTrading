import React, { Component, PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';

import  KlineViewComponent  from './klineView';
import { datas } from '../datas';

class App extends Component {
	render() {
		const { actions } = this.props;
		return (
      <div>
				<KlineViewComponent datas={datas} actions={actions}/>);
      </div>
		);
	}
}


function mapStateToProps(state) {
	return {
		trades: state.trades
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
