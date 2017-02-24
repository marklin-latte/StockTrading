import React from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';

import  KlineViewComponent  from './components/klineView';
import { datas } from './datas';

function App ()  {
	return (
	<KlineViewComponent datas={datas}/>);
}

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<App/>, app);


