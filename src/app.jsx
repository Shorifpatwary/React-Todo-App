import React from "react";
import Todos from "./components/todos";
import { Container, Row, Col } from "reactstrap";

const App = () => {
	return (
		<Container>
			<Row>
				<Col>
					<Todos />
				</Col>
			</Row>
		</Container>
	);
};
export default App;
