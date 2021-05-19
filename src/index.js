import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import reportWebVitals from "./reportWebVitals";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
// import { setTextFilter } from "./actions/filters";
// import getVisibleExpenses from "./selectors/expenses";
import { Provider } from "react-redux";

const store = configureStore();

store.dispatch(
	addExpense({
		description: "Water Bill",
		amount: 2000,
		createdAt: 1620950300000,
	})
);
store.dispatch(
	addExpense({
		description: "Gas Bill",
		amount: 300,
		createdAt: 1620066600000,
	})
);

store.dispatch(
	addExpense({
		description: "Rent Bill",
		amount: 1500,
		createdAt: 1620604800000,
	})
);
store.dispatch(
	addExpense({
		description: "Electricity Bill",
		amount: 1800,
		createdAt: 1622332800000,
	})
);

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(
	<React.StrictMode>{jsx}</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
