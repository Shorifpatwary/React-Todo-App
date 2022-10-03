import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ListView from "../listView";
import TableView from "../tableView";
import Controller from "../controller";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import CreateTodo from "../create-todo-form";

class Todos extends React.Component {
	state = {
		todos: [
			{
				id: "dfgsf",
				text: "Lorem ipsum dummy text ",
				description: "simple description text is goes here  ",
				time: new Date(),
				isComplete: false,
				isSelect: false,
			},
			{
				id: "dfgsdfgfd",
				text: "Hello this is a text ",
				description: "simple description text is goes here  ",
				time: new Date(),
				isComplete: false,
				isSelect: false,
			},
		],
		isOpenTodoForm: false,
		searchTerm: "",
		view: "list",
		filter: "all",
	};
	// functions implementation
	toggleSelect = (todoid) => {
		const todos = [...this.state.todos];
		const todo = todos.find((todo) => todo.id === todoid);
		todo.isSelect = !todo.isSelect;
		this.setState({ todos });
	};
	toggleComplete = (todoid) => {
		const todos = [...this.state.todos];
		const todo = todos.find((todo) => todo.id === todoid);
		todo.isComplete = !todo.isComplete;
		this.setState({ todos });
	};
	toggleForm = () => {
		this.setState({
			isOpenTodoForm: !this.state.isOpenTodoForm,
		});
	};
	handleSearch = (value) => {
		this.setState({ searchTerm: value });
	};
	performSearch = () => {
		return this.state.todos.filter((todo) =>
			todo.text
				.toLowerCase()
				.includes(this.state.searchTerm.toLowerCase())
		);
	};
	createTodo = (todo) => {
		// short id is not installing becuase of Your internet has no access to this device
		// dummy short id
		todo.id = `ldjf234${todo.text}${todo.description}${new Date()}`;
		todo.time = new Date();
		todo.isComplete = false;
		todo.isSelect = false;
		const todos = [todo, ...this.state.todos];
		this.setState({ todos });
		this.toggleForm();
	};
	handleFilter = (filterValue) => {
		this.setState({
			filter: filterValue,
		});
	};
	parformFilter = (todos) => {
		const { filter } = this.state;
		if (filter === "completed") {
			return todos.filter((todos) => todos.isComplete);
		} else if (filter === "running") {
			return todos.filter((todos) => !todos.isComplete);
		} else {
			return todos;
		}
	};
	changeView = (event) => {
		this.setState({
			view: event.target.value,
		});
	};
	clearSelected = () => {
		const todos = this.state.todos.filter((todo) => !todo.isSelect);
		this.setState({ todos });
	};
	clearCompleted = () => {
		const todos = this.state.todos.filter((todo) => !todo.isComplete);
		this.setState({ todos });
	};
	reset = () => {
		this.setState({
			isOpenTodoForm: false,
			searchTerm: "",
			view: "list",
			filter: "all",
		});
	};
	getView = () => {
		let todos = this.performSearch();
		todos = this.parformFilter(todos);
		return this.state.view === "list" ? (
			<ListView
				todos={todos}
				toggleSelect={this.toggleSelect}
				toggleComplete={this.toggleComplete}
			/>
		) : (
			<TableView
				todos={todos}
				toggleSelect={this.toggleSelect}
				toggleComplete={this.toggleComplete}
			/>
		);
	};
	render() {
		const viewType = this.state.view === "list" ? "List" : "Table";
		return (
			<div className="container">
				<h1 className=" display-1 text-center mb-5">Create Todos</h1>
				<Controller
					term={this.searchTerm}
					toggleForm={this.toggleForm}
					handleSearch={this.handleSearch}
					view={this.state.view}
					handleFilter={this.handleFilter}
					changeView={this.changeView}
					clearSelected={this.clearSelected}
					clearCompleted={this.clearCompleted}
					reset={this.reset}
				/>
				<div>
					<h4 className="h4"> {viewType} View </h4>
					{this.getView()}
				</div>
				<Modal
					isOpen={this.state.isOpenTodoForm}
					toggle={this.toggleForm}
				>
					<ModalHeader toggle={this.toggleForm}>
						Create new todo item
					</ModalHeader>
					<ModalBody>
						<CreateTodo createTodo={this.createTodo} />
					</ModalBody>
				</Modal>
			</div>
		);
	}
}
export default Todos;
