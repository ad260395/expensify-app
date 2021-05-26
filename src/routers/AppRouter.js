import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import About from "../components/About";
import Help from "../components/Help";
import EditExpense from "../components/EditExpense";
import NotFound from "../components/NotFound";
import HomePage from "../components/HomePage";
import AddExpense from "../components/AddExpense";
import LoginPage from "../components/LoginPage";
import PrivateRoute from "./PrivateRoute";

export const history = createBrowserHistory();

const AppRouter = () => (
	<Router history={history}>
		<div>
			<Switch>
				<Route path="/" component={LoginPage} exact={true} />
				<Route path="/about" component={About} />
				<Route path="/help" component={Help} />
				<PrivateRoute path="/dashboard" component={HomePage} />
				<PrivateRoute path="/create" component={AddExpense} />
				<PrivateRoute path="/edit/:id" component={EditExpense} />
				<Route component={NotFound} />
			</Switch>
		</div>
	</Router>
);

export default AppRouter;
