/*
	useEffect() will only be executed the first time the component is rendered and whenever the given variable(s) is modified.
	A component can have more than one useEffect() hook.
*/

import { useEffect, useState } from "react"

const FullName = ({ name, surname }) => {
	const [fullName, setFullName] = useState(); // Hook
	useEffect(() => {
		setFullName(`${name} ${surname}`);
	}, [name, surname]); // [name, surname] means that the hook will be executed whenever one of these variables change their value
	return <div>Hello {fullName}</div>
}

const Counter = () => {
	const [counter, setCounter] = useState(0); // 0 is the initial value of 'counter'.
	useEffect(() => {
		// setInterval() and clearInterval() are pure JavaScript functions.
		const interval = setInterval(
			() => setCounter(counter + 1), 1000
		);
		// This return is ONLY executed once the component is destroyed/unmounted (both terms are the same).
		return () => clearInterval(interval);
	}, [counter]);
	return <p>{counter}</p>;
}

// In order to avoid declaring an interval for each value of the counter, we can do the following:
const Counter = () => {
	const [counter, setCounter] = useState(0);
	useEffect(() => {
		const interval = setInterval(
			// The 'c' parameter of setCounter is set by the useState() hook from above. We are passing the value of 'counter' to setFunction()
			() => setCounter(c => c + 1), 1000
		);
		// This return is ONLY executed once the component is destroyed/unmounted (both terms are the same).
		return () => clearInterval(interval);
	}, []); // We leave the array empty because we don't have to listen to an update of the 'counter' value.
	return <p>{counter}</p>;
}