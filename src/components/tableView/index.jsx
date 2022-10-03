import React from "react";
import PropTypes from "prop-types";
import { Button, Table } from "reactstrap";
// Row item component / helper component
const RowItem = ({ todo, toggleSelect, toggleComplete }) => (
	<tr>
		<td>
			<input
				type="checkbox"
				id={todo.id}
				checked={todo.isSelect}
				onChange={() => toggleSelect(todo.id)}
			/>
		</td>
		<td>{todo.time.toDateString()}</td>
		<td> {todo.text}</td>
		<td>
			<Button
				className="ms-auto"
				color={todo.isComplete ? "danger" : "success"}
				onClick={() => toggleComplete(todo.id)}
			>
				{todo.isComplete ? "Complete" : "Running..."}
			</Button>
		</td>
	</tr>
);
RowItem.propTypes = {
	todo: PropTypes.object.isRequired,
	toggleSelect: PropTypes.func.isRequired,
	toggleComplete: PropTypes.func.isRequired,
};

// Table view component / main component
const TableView = ({ todos, toggleSelect, toggleComplete }) => {
	return (
		<Table>
			<thead>
				<th>Id</th>
				<th>Time</th>
				<th>Todo</th>
				<th>Action</th>
			</thead>
			<tbody>
				{todos.map((todo) => (
					<RowItem
						key={todo.id}
						todo={todo}
						toggleSelect={toggleSelect}
						toggleComplete={toggleComplete}
					/>
				))}
			</tbody>
		</Table>
	);
};
TableView.propTypes = {
	todos: PropTypes.array.isRequired,
	toggleSelect: PropTypes.func.isRequired,
	toggleComplete: PropTypes.func.isRequired,
};

export default TableView;
