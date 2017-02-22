import {
	datas
}
from './datas';

function calculateMA(dayCount, data) {
	var result = [];
	for (var i = 0, len = data.length; i < len; i++) {
		if (i < dayCount) {
			result.push('-');
			continue;
		}
		var sum = 0;
		for (var j = 0; j < dayCount; j++) {
			sum += data[i - j][1];
		}
		result.push(sum / dayCount);
	}
	return result;
}

var dates = datas.map(function(item) {
	return item[0];
});

var data = datas.map(function(item) {
	return [+item[1], +item[2], +item[5], +item[6]];
});

export {option};
