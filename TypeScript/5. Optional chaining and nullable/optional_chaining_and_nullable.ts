/*
 ************* 1. Optional chaining *************
 To access the value of a variable or the property
 of an object, we can use '?' to safely access its
 value. We can even chain the '?' operators if there
 are more than one possible null values.
 ************************************************
 */
const user = {
	address: {
		street: {
			name: 'Street'
		}
	}
}

// JS APPROACH 1
if (user.address) {
	if (user.address.street) {
		if (user.address.street.name) {
			if (user.address.street.name === 'Street') {
				console.log(user.address.street.name);
			}
		}
	}
}

// JS APPROACH 2
if (
	user.address 
	&& user.address.street 
	&& user.address.street.name 
	&& user.address.street.name === 'Street'
) {
	console.log(user.address.street.name);
}

// There are more possible approaches to tackle this, but I'll leave it at that
// for the sake of brevity

// TS APPROACH
if (user?.address?.street?.name === 'Street') {
	// We can access the property without '?' because we know that the value won't
	// be null nor undefined
	console.log(user.address.street.name);
}


 /*
 ***************** 2. Nullable ******************
 We use null coalescing to check whether a variable
 is null or undefined with the operator '??'.
 ************************************************
 */
// JS WAY
const func1 = (stringOrNull: string | null): string => {
	if (stringOrNull === null) {
		return 'default';
	}

	return stringOrNull;
}

// TS WAY
// Best approach:
const func2 = (stringOrNull?: string) => stringOrNull ?? 'default';

// Alternative approach:
// const f = (stringOrNull: string | undefined | null) => stringOrNull ?? 'default'; // Same as above