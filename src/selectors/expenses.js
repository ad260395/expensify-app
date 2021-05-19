const selectExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
	return (
		expenses
			.filter((expense) => {
				const startDateMatch = startDate
					? expense.createdAt >= startDate
					: true;
				const endDateMatch =
					typeof endDate !== "number" || expense.createdAt <= endDate;
				const textMatch = expense.description
					.toLowerCase()
					.includes(text.toLowerCase());

				return startDateMatch && endDateMatch && textMatch;
			})
			// eslint-disable-next-line array-callback-return
			.sort((a, b) => {
				if (sortBy === "date") {
					return a.createdAt < b.createdAt ? 1 : -1;
				} else if (sortBy === "amount") {
					return a.amount < b.amount ? 1 : -1;
				}
			})
	);
};

export default selectExpenses;
