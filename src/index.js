import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import reportWebVitals from "./reportWebVitals";
import configureStore from "./store/configureStore";
import {startSetExpenses} from "./actions/expenses"
import { Provider } from "react-redux";

const store = configureStore();

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

store.dispatch(startSetExpenses()).then(() => {
	ReactDOM.render(jsx, document.getElementById('root'));
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
