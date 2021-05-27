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
	return (
		<Link className="list-item" to={`/edit/${id}`}>
			<div>
				<h3 className="list-item__title">{description}</h3>
				<span className="list-item__sub-title">{createDate}</span>
			</div>
			<h3 className="list-item__data">{`${numeral(amount).format("$0,0.00")}`}</h3>
		</Link>
	);
};

export default ExpenseListItem;
