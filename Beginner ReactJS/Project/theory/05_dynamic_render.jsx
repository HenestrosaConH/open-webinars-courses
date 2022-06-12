/* eslint-disable */
const exclaim = true;

// Check 02_falsy_operators.js form the Advanced JavaScript course for more insight into the && operator here.
const Farewell1 = () => (
	<span>
		Cheers{exclaim && <strong>!!</strong>}
	</span>
);

// Using the ternary operator:
const Farewell2 = () => (
	<span>
		Cheers{exclaim ? <strong>!!</strong> : ''}
	</span>
);

// Using a switch:
const partOfTheDay = 'morning';

const HelloPlanet1 = () => {
	switch (partOfTheDay) {
		case 'morning':
			return <span>Good morning!</span>;
		case 'afternoon':
			return <span>Good afternoon!</span>;
		case 'night':
			return <span>Sleep well!</span>;
		default: 'Cheers!';
	}
};

// Replacing a switch by the falsy operators
const HelloPlanet2 = () =>
	(partOfTheDay === 'morning' && <span>Good morning!</span>)
	|| (partOfTheDay === 'afternoon' && <span>Good afternoon!</span>)
	|| (partOfTheDay === 'night' && <span>Sleep well!</span>)
	|| 'Cheers!';


// Rendering through a loop:
const meals = [
	{ name: 'Salad', veggie: true },
	{ name: 'Burger', veggie: false }
];

// Each li in React must have the 'key' attribute in order to compare the changes faster and efficiently. It shouldn't be the index of the array because, if we remove an item, the index of the elements will change.
const MealsList = () => (
	<ul>
		{meals.map(({ name }) =>
			<li key={name}>{name}</li>
		)}
	</ul>
)

// If we want to print a veggie element only with a ternary operator approach:
const VeggieList = () => (
	<ul>
		{meals.map(({ veggie, name }) => veggie
			? <li key={name}>{name}</li>
			: null // If the value is null, React won't print the element.
		)}
	</ul>
)

// If we want to do the same with filter():
const VeggieListFiltered = () => (
	<ul>
		{meals
			.filter(({ veggie }) => veggie)
			.map(({ name }) => <li>{name}</li>)
		}
	</ul>
);