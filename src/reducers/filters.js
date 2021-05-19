const defaultFilterReducer = {
	text: "",
	sortBy: "date", // amount
	startDate: undefined,
	endDate: undefined,
};

const filtersReducer = (state = defaultFilterReducer, action) => {
	switch (action.type) {
		case "TEXT_FILTER":
			return {
				...state,
				text: action.text,
			};
		case "SORT_BY_DATE":
			return {
				...state,
				sortBy: "date",
			};
		case "SORT_BY_AMOUNT":
			return {
				...state,
				sortBy: "amount",
			};
		case "SET_START_DATE":
			return {
				...state,
				startDate: action.startDate,
			};
		case "SET_END_DATE":
			return {
				...state,
				endDate: action.endDate,
			};
		default:
			return state;
	}
};

export default filtersReducer;
