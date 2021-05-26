import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { startLogOut } from "../actions/auth";

export const Dashboard = ({ startLogOut }) => (
	<header>
		<h1>Expensify</h1>
		<NavLink to="/dashboard" exact={true}>
			HomePage
		</NavLink>
		<NavLink to="/create">Add Expense</NavLink>
		<NavLink to="/about">About</NavLink>
		<NavLink to="/help">Help</NavLink>
		<button onClick={startLogOut}>Log Out</button>
	</header>
);

const mapDispatchToProps = (dispatch) => ({
	startLogOut: () => dispatch(startLogOut()),
});

export default connect(undefined, mapDispatchToProps)(Dashboard);
