import React from "react";
import ReactDOM from "react-dom";
import AppRouter, { history } from "./routers/AppRouter";
import reportWebVitals from "./reportWebVitals";
import configureStore from "./store/configureStore";
import { startSetExpenses } from "./actions/expenses";
import { login, logout } from "./actions/auth";
import { Provider } from "react-redux";
import { firebase } from "../src/firebase/firebase";
import LoadingPage from "./components/LoadingPage"
import "./styles/styles.scss";

const store = configureStore();

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(<LoadingPage />, document.getElementById("root"));

let hasRendered = false;
const renderApp = () => {
	if (!hasRendered) {
		ReactDOM.render(jsx, document.getElementById("root"));
		hasRendered = true;
	}
};

firebase.auth().onAuthStateChanged((user) => {
	if (user) {
		store.dispatch(login(user.uid));
		store.dispatch(startSetExpenses()).then(() => {});
		renderApp();
		if (history.location.pathname === "/") {
			history.push("/dashboard");
		}
	} else {
		store.dispatch(logout());
		history.push("/");
		renderApp();
	}
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
