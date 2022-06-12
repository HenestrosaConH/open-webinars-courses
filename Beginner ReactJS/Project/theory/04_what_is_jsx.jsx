/*
	We use JSX instead of HTML for the structure to have a strong relation between the structure and the logic to generate dynamic views efficiently and in a more integrated way
	JSX is an extension of JavaScript. In appearance, it looks similar to HTML
	JSX
*/

// PureJS vs JSX

// PureJS
React.createElement(
	'h1', 
	{ className: 'header' },
	'Hello, world!'
);
// JSX
<h1 className="header">
	Hello World
</h1>

/////////////////////////////////
const planet = 'Earth';
const getExclamation = () => '!';
const Comp = () => <div>Hello {planet}{getExclamation()}</div>;
// translated into HTML as <div>Hello Earth!</div>

// Using sparse operator for attributes
const imageAttr = {
	src: 'https://...',
	alt: 'My image'
};
const Img = () => <img {...imageAttr}/>
// translated into <img src="https://…" alt="My image" />

// EMPTY TAGS
/* Error because JSX components must have a parent component
	const Empty = () => (
		<p>Hello 1</p>
		<p>Hello 2</p>
	);
*/
const Empty = () => (<>
	<p>Hello 1</p>
	<p>Hello 2</p>
</>)

// JSX vs HTML
/* JSX (commented to avoid errors)
<div className="field"> // We can't use "class" because it's a JS reserved keyword
	Hello world
	<input tabIndex="1" />
	<button onClick={fn()}>
		Click me!
	</button>
</div>
*/

/* HTML (commented to avoid errors)
<div class="field">
	Hello world
	<input tabindex="1">
	<button onclick="fn()">
		Click me!
	</button>
</div>
*/