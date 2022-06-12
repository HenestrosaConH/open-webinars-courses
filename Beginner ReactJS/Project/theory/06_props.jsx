/*
	PROPS
	- Components are pure functions (see Advanced JavaScript > 07_pure_and_idempotent_functions.js)
*/
// Declaration:
const Header = props => <h1>{props.label}</h1>;
// Usage:
<Header label="My wishlist" />

// USING DESTRUCTURING
// Functional component:
const Header = ({ label }) =>
	<h1>{label}</h1>;
// Class component:
class Header extends Component {
	render() {
		const { label } = this.props;
		return <h1>{label}</h1>;
	}
}

/*
	PROPTYPES
	- Define the type of the properties of a component.
*/
import PropTypes from 'prop-types';

const Header = ({ label }) => <h1>{label}</h1>;

Header.propTypes = {
	label: PropTypes.string.isRequired
}

Header.defaultProps = {
	label: 'My wishlist'
}