import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";
import ExpenseSummary from "./ExpenseSummary";

export default function HomePage() {
	return (
		<div>
			<ExpenseSummary />
			<ExpenseListFilters />
			<ExpenseList />
		</div>
	);
}
