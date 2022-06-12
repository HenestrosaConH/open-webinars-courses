/*
	- A callback is a function-parameter that is called by the target function when completing the task.
	- They can be sync or async.
	- Inside a promise, the callback is called when it finishes.
*/

const promise = (val) => {
	return new Promise((resolve, reject) => {
		if (val) {
			resolve("The value is true")
		} else {
			reject("The value is false")
		}
	})
}

const successHandler = (res) => {
	console.log(res);
};
const failHandler = (res) => {
	console.log(res)
};

promise(true).then(successHandler, failHandler);
promise(true).then(successHandler).catch(failHandler);

promise(false).then(successHandler, failHandler);
promise(false).then(successHandler).catch(failHandler);

// Promises chaining:
new Promise(function (resolve) {
	setTimeout(() => resolve(1), 1000);
}).then((result) => {
	alert(result); // => 1
	return result * 2;
}).then((result) => {
	alert(result); // => 2
	return result * 2;
}).then((result) => {
	alert(result); // => 4
	return result * 2;
});

// NOT a promise chaining:
let promise = new Promise(function(resolve) {
	setTimeout(() => resolve(1), 1000);
});
promise.then((result) => {
	alert(result); // => 1
	return result * 2;
})
promise.then((result) => {
	alert(result); // => 1
	return result * 2;
})
promise.then((result) => {
	alert(result); // => 1
	return result * 2;
})