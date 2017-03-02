import{ Types } from '../types';

const initialState = {
	currentData : {},
	currentDate : {},
	tradeInfo : {
		assets : 20000,
		position:0,
		buyTrade : [],
		sellTrade : []
	}
};

const trade = (state = initialState, action) => {
	switch (action.type) {
	case Types.ADD:
		return {
			...state,
			currentData : action.data,
			currentDate : action.date
		};
	case Types.BUY:
		return {
			...state,
			tradeInfo : {
				buyTrade : [].concat(state.tradeInfo.buyTrade,action.tradeInfo),
				sellTrade : state.tradeInfo.sellTrade,
				assets : (+state.tradeInfo.assets - action.tradeInfo.price).toFixed(0),
				position : state.tradeInfo.position+1
			}
		};
	case Types.SELL:
		return {
			...state,
			tradeInfo : {
				buyTrade : state.tradeInfo.buyTrade,
				sellTrade : [].concat(state.tradeInfo.sellTrade,action.tradeInfo),
				assets : (+state.tradeInfo.assets + action.tradeInfo.price).toFixed(0), 
				position : state.tradeInfo.position-1
			}
		};
	case Types.ADD_BUY_SIGN:
		return {
			...state,
			tradeInfo : {
				buyTrade : state.tradeInfo.buyTrade.map((item)=>{ 
					if(item.date == action.tradeObjInfo.date){
						item.isMarkPoint = true;
					}
					return item;
				}),
				sellTrade : state.tradeInfo.sellTrade,
				assets : state.tradeInfo.assets,
				position : state.tradeInfo.position 
			}
		};
	case Types.ADD_SELL_SIGN:
		return {
			...state,
			tradeInfo : {
				sellTrade : state.tradeInfo.sellTrade.map((item)=>{ 
					if(item.date == action.tradeObjInfo.date){
						item.isMarkPoint = true;
					}
					return item;
				}),
				buyTrade : state.tradeInfo.buyTrade,
				assets : state.tradeInfo.assets,
				position : state.tradeInfo.position 
			}
		};
	default:
		return state;
	}
};

export default trade;
