import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from "react-redux";
import Page  from "./contairnes/page"
import allReducers from './reducers/index';

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
	<Provider store = {store}>
	<Page />
	</Provider>,
	document.getElementById("root")
);
