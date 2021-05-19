import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";

export default function HomePage() {
	return (
		<div>
			<ExpenseListFilters />
			<ExpenseList />
		</div>
	);
}
