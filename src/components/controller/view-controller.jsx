import React from "react";
import { Label } from "reactstrap";
import PropTypes from "prop-types";

const ViewController = ({ view, changeView }) => (
	<div className="d-flex">
		<div className=" form-check form-check-inline">
			<input
				className="form-check-input"
				type="radio"
				id="list-view"
				name="view"
				value="list"
				onChange={changeView}
				checked={view === "list"}
			/>
			<Label htmlFor="list-view" className="form-check-label">
				List View
			</Label>
		</div>
		<div className=" form-check form-check-inline">
			<input
				className="form-check-input"
				type="radio"
				id="table-view"
				name="view"
				value="table"
				onChange={changeView}
				checked={view === "table"}
			/>
			<Label htmlFor="table-view" className="form-check-label">
				Table View
			</Label>
		</div>
	</div>
);
ViewController.prototype = {
	view: PropTypes.string.isRequired,
	changeView: PropTypes.func.isRequired,
};
export default ViewController;
