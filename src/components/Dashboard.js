import { NavLink } from "react-router-dom";


const Dashboard = () => (
	<header>
		<h1>Expensify</h1>
		<NavLink to="/" exact={true}>
			HomePage
		</NavLink>
		<NavLink to="/create">Add Expense</NavLink>
		<NavLink to="/about">About</NavLink>
		<NavLink to="/help">Help</NavLink>
	</header>
);

export default Dashboard;
