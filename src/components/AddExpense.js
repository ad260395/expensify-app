import React from "react";
import { connect } from "react-redux";
import { startAddExpense } from "../actions/expenses";
import ExpenseForm from "./ExpenseForm";

function AddExpense(props) {
	return (
		<div>
			<ExpenseForm
				onSubmit={(expense) => {
					props.dispatch(startAddExpense({ ...expense }));
					props.history.push("/");
				}}
			/>
		</div>
	);
}

const mapDispatchToProps = (dispatch) => ({
	startAddExpense: (expense) => dispatch(startAddExpense(expense)),
	dispatch,
});

export default connect(null, mapDispatchToProps)(AddExpense);
