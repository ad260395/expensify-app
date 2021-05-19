import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";

const ExpenseListItem = ({ description, id, createdAt, amount }) => {
	const createDate = format(createdAt, "do MMM yyyy");
	// const createDate = toDate(createdAt).toISOString().split("T")[0];
	return (
		<div>
			<Link to={`/edit/${id}`}>
				<h3>{description}</h3>
			</Link>
			<p>&#8377;{`${amount} was spent on ${createDate}.`}</p>
		</div>
	);
};

export default ExpenseListItem;
