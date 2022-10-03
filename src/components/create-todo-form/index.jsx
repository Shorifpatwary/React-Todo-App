import React from "react";
import PropTypes from "prop-types";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";

class CreateTodo extends React.Component {
	state = {
		text: "",
		description: "",
	};
	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};
	handleSubmite = (event) => {
		event.preventDefault();
		this.props.createTodo(this.state);
		event.target.reset();
		this.setState({
			text: "",
			description: "",
		});
	};

	render() {
		return (
			<div>
				<Form onSubmit={this.handleSubmite}>
					<FormGroup>
						<Label> Your name </Label>
						<Input
							className="form-control"
							placeholder="Enter your name . "
							name="text"
							value={this.state.text}
							onChange={this.handleChange}
						/>
					</FormGroup>
					<FormGroup>
						<Label> Describe Your task </Label>
						<Input
							className="form-control"
							type="textarea"
							placeholder=" Write some description about your task "
							name="description"
							value={this.state.description}
							onChange={this.handleChange}
						/>
					</FormGroup>
					<Button type="submit"> Create Task </Button>
				</Form>
			</div>
		);
	}
}
CreateTodo.propTypes = {
	createTodo: PropTypes.func.isRequired,
};
export default CreateTodo;
