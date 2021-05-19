import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "../components/About";
import Help from "../components/Help";
import EditExpense from "../components/EditExpense";
import NotFound from "../components/NotFound";
import Dashboard from "../components/Dashboard";
import HomePage from "../components/HomePage";
import AddExpense from "../components/AddExpense";

const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Dashboard />

			<Switch>
				<Route path="/" component={HomePage} exact={true} />
				<Route path="/about" component={About} />
				<Route path="/help" component={Help} />
				<Route path="/create" component={AddExpense} />
				<Route path="/edit/:id" component={EditExpense} />
				<Route component={NotFound} />
			</Switch>
		</div>
	</BrowserRouter>
);

export default AppRouter;
