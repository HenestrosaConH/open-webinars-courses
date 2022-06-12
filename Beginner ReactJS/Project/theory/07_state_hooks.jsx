/*
	ALL HOOKS start with 'use'. E.g. useEffect(), useState()
*/

import { useState } from "react"

// This is thanks to the hooks
const ToDoItem = ({ label, defChecked }) => {
	// 'false' is the value of 'checked'
	// setChecked modifies the value of 'checked'
	const [checked, setChecked] = useState(defChecked);
	return (
		<p onClick={() => setChecked(!checked)}>
			{checked ? '✓' : 'X'} {label}
		</p>
	)
}

// Traditional way with classes & extending the Component class:
class ToDoItem extends Component {
	// here, 'state' is a property of the class
	state = { checked: this.props.defChecked };

	render() {
		const { checked } = this.state;
		const { label } = this.props;
		return (
			<p onClick={() =>
				// setState() is setChecked()
				this.setState({ checked: !checked })
			}>
				{checked ? '✓' : 'X'} {label}
			</p>
		);
	}
}

/*
	!! Siblings can't transfer the state between them. It has to be from parents to children.
*/