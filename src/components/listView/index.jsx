import React from "react";
import PropTypes from "prop-types";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

// list item component / helper component
const ListItem = ({ todo, toggleSelect, toggleComplete }) => {
	return (
		<ListGroupItem className="d-flex align-items-center">
			<input
				type="checkbox"
				id={todo.id}
				checked={todo.isSelect}
				onChange={() => toggleSelect(todo.id)}
			/>
			<div className="mx-3">
				<h1> {todo.text}</h1>
				<p> {todo.time.toDateString()}</p>
			</div>
			<Button
				className="ms-auto"
				color={todo.isComplete ? "danger" : "success"}
				onClick={() => toggleComplete(todo.id)}
			>
				{todo.isComplete ? "Complete" : "Running..."}
			</Button>
		</ListGroupItem>
	);
};
ListItem.propTypes = {
	todo: PropTypes.object.isRequired,
	toggleSelect: PropTypes.func.isRequired,
	toggleComplete: PropTypes.func.isRequired,
};

// list view component / main component

const ListView = ({ todos, toggleSelect, toggleComplete }) => {
	return (
		<ListGroup>
			{todos.map((todo) => (
				<ListItem
					key={todo.id}
					todo={todo}
					toggleSelect={toggleSelect}
					toggleComplete={toggleComplete}
				/>
			))}
		</ListGroup>
	);
};
ListView.propTypes = {
	todos: PropTypes.array.isRequired,
	toggleSelect: PropTypes.func.isRequired,
	toggleComplete: PropTypes.func.isRequired,
};
export default ListView;
