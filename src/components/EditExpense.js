import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";
const EditExpense = (props) => {
	return (
		<div>
			<ExpenseForm
				expense={props.expense}
				onSubmit={(expense) => {
					props.dispatch(startEditExpense(props.expense.id, expense));
					props.history.push("/");
				}}
			/>
			<button
				onClick={() => {
					props.dispatch(startRemoveExpense({ id: props.expense.id }));
					props.history.push("/");
				}}>
				Remove
			</button>
		</div>
	);
};

const mapStateToProps = (state, props) => {
	return {
		expense: state.expenses.find(
			(expense) => expense.id === props.match.params.id
		),
	};
};

const mapDispatchToProps = (dispatch, props) => ({
	editExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
	startRemoveExpense: (data) => dispatch(startRemoveExpense(data)),
	dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);
