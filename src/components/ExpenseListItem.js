import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import numeral from "numeral";

numeral.register("locale", "en-in", {
	delimiters: {
		thousands: ",",
		decimal: ".",
	},
	abbreviations: {
		thousand: "k",
		million: "m",
		billion: "b",
		trillion: "t",
	},
	currency: {
		symbol: "₹",
	},
});

// switch between locales
numeral.locale("en-in");

const ExpenseListItem = ({ description, id, createdAt, amount }) => {
	const createDate = format(createdAt, "do MMM yyyy");
	// const createDate = toDate(createdAt).toISOString().split("T")[0];
	return (
		<div>
			<Link to={`/edit/${id}`}>
				<h3>{description}</h3>
			</Link>
			<p>{`${numeral(amount).format(
				"$0,0.00"
			)} was spent on ${createDate}.`}</p>
		</div>
	);
};

export default ExpenseListItem;
