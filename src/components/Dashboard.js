import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { startLogOut } from "../actions/auth";

export const Dashboard = ({ startLogOut }) => (
	<header>
		<h1>Expensify</h1>
		<NavLink to="/dashboard">Dashboard</NavLink>
		<NavLink to="/create">Add Expense</NavLink>
		<button onClick={startLogOut}>Log Out</button>
	</header>
);

const mapDispatchToProps = (dispatch) => ({
	startLogOut: () => dispatch(startLogOut()),
});

export default connect(undefined, mapDispatchToProps)(Dashboard);
