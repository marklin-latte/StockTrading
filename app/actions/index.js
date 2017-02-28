import Types from '../types';

export const add = (data,date) => {
	return {
		type: Types.ADD,
		data,
		date
	};
};

export const buy = (tradeObjInfo) => {
	return {
		type : Types.BUY,
		tradeObjInfo
	};
};

export const sell = (tradeObjInfo) => {
	return {
		type : Types.SELL,
		tradeObjInfo
	};
};

export const addBuySign = (tradeObjInfo) => {
	return {
		type: Types.Add_BUY_SIGN,
		tradeObjInfo
	};
};

export const addSellSign = (tradeObjInfo) => {
	return {
		type: Types.Add_SELL_SIGN,
		tradeObjInfo
	};
};
