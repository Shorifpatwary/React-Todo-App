import React from "react";
import SearchPanel from "./search-panel";
import PropTypes from "prop-types";

import FilterController from "./filter-controller";
import ViewController from "./view-controller";
import BulkController from "./bulk-controller";

const Controller = ({
	term,
	view,
	handleSearch,
	toggleForm,
	handleFilter,
	changeView,
	clearSelected,
	clearCompleted,
	reset,
}) => {
	return (
		<div>
			<SearchPanel
				term={term}
				handleSearch={handleSearch}
				toggleForm={toggleForm}
			/>
			<div className="row my-4">
				<div className="col-md-4">
					<FilterController handleFilter={handleFilter} />
				</div>
				<div className="col-md-4">
					<ViewController view={view} changeView={changeView} />
				</div>
				<div className="col-md-4 d-flex">
					<BulkController
						clearSelected={clearSelected}
						clearCompleted={clearCompleted}
						reset={reset}
					/>
				</div>
			</div>
		</div>
	);
};
SearchPanel.propTypes = {
	term: PropTypes.string.isRequired,
	view: PropTypes.string.isRequired,
	handleSearch: PropTypes.func.isRequired,
	toggleForm: PropTypes.func.isRequired,
	hanhandleFilter: PropTypes.func.isRequired,
	changeView: PropTypes.func.isRequired,
	clearSelected: PropTypes.func.isRequired,
	clearCompleted: PropTypes.func.isRequired,
	reset: PropTypes.func.isRequired,
};
export default Controller;
