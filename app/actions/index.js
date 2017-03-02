import { Types } from '../types';

export const add = (data,date) => {
	return {
		type: Types.ADD,
		data,
		date
	};
};

export const buy = (tradeInfo) => {
	return {
		type : Types.BUY,
		tradeInfo
	};
};

export const sell = (tradeInfo) => {
	return {
		type : Types.SELL,
		tradeInfo
	};
};

export const addBuySign = (tradeObjInfo) => {
	return {
		type: Types.ADD_BUY_SIGN,
		tradeObjInfo
	};
};

export const addSellSign = (tradeObjInfo) => {
	return {
		type: Types.ADD_SELL_SIGN,
		tradeObjInfo
	};
};
