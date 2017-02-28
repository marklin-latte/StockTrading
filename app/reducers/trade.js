import{ Types } from '../types';

const initialState = {
	currentData : {},
	currentDate : {},
	tradeInfo : {
		income : 0,
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
	default:
		return state;
	}
};

export default trade;
