import React, { Component } from "react";
import { connect } from "react-redux";
import {
	setTextFilter,
	sortByAmount,
	sortByDate,
	setStartDate,
	setEndDate,
} from "../actions/filters";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class ExpenseListFilters extends Component {
	state = {
		startDate: this.props.filters.startDate,
		endDate: this.props.filters.endDate,
	};
	setDateRangeClicked = () => {
		const start = this.state.startDate;
		const end = this.state.endDate;
		if (!!start && !!end) {
			this.props.dispatch(setStartDate(start.valueOf()));
			this.props.dispatch(setEndDate(end.valueOf()));
		} else {
			this.props.dispatch(setStartDate(start));
			this.props.dispatch(setEndDate(end));
		}
	};
	clearDateRangeClicked = () => {
		this.setState(() => ({
			startDate: undefined,
			endDate: undefined,
		}));
		this.props.dispatch(setStartDate(undefined));
		this.props.dispatch(setEndDate(undefined));
	};
	render() {
		return (
			<div>
				<input
					type="text"
					placeholder="Enter your search text here..."
					value={this.props.filters.text}
					onChange={(e) => {
						this.props.dispatch(setTextFilter(e.target.value));
					}}
				/>
				<select
					value={this.props.filters.sortBy}
					onChange={(e) => {
						e.target.value === "date"
							? this.props.dispatch(sortByDate("date"))
							: this.props.dispatch(sortByAmount("amount"));
					}}>
					<option value="date">Date</option>
					<option value="amount">Amount</option>
				</select>

				<DatePicker
					placeholderText="Start Date"
					selected={this.state.startDate}
					onChange={(date) => {
						this.setState(() => ({ startDate: date }));
					}}
					selectsStart
					startDate={this.state.startDate}
					endDate={this.state.endDate}
					isClearable
					withPortal
				/>
				<DatePicker
					placeholderText="End Date"
					selected={this.state.endDate}
					onChange={(date) => {
						this.setState(() => ({ endDate: date }));
					}}
					selectsEnd
					startDate={this.state.startDate}
					endDate={this.state.endDate}
					minDate={this.state.startDate}
					isClearable
					withPortal
				/>
				<button onClick={this.setDateRangeClicked}>Set Range</button>
				<button onClick={this.clearDateRangeClicked}>Clear Range</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		filters: state.filters,
	};
};

export default connect(mapStateToProps)(ExpenseListFilters);
