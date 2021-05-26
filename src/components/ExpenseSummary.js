import numeral from "numeral";
import React from "react";
import { connect } from "react-redux";
import selectExpenses from "../selectors/expenses";
import expenseTotal from "../selectors/expenses-total";

const ExpenseSummary = ({ expenseCount, expenseTotal }) => {
	const expenseWord = expenseCount === 1 ? "expense" : "expenses";
	const formattedExpensesTotal = numeral(expenseTotal).format("$0,0.00");

	return expenseCount === 0 ? (
		<h1>There are no listed expenses!</h1>
	) : (
		<h1>
			Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}
		</h1>
	);
};

const mapStateToProps = (state) => {
	const visibleExpenses = selectExpenses(state.expenses, state.filters);
	return {
		expenseCount: visibleExpenses.length,
		expenseTotal: expenseTotal(visibleExpenses),
	};
};

export default connect(mapStateToProps)(ExpenseSummary);
