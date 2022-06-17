var _a, _b;
/*
 ************* 1. Optional chaining *************
 To access the value of a variable or the property
 of an object, we can use '?' to safely access its
 value. We can even chain the '?' operators if there
 are more than one possible null values.
 ************************************************
 */
var user = {
    address: {
        street: {
            name: 'Street'
        }
    }
};
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
if (user.address
    && user.address.street
    && user.address.street.name
    && user.address.street.name === 'Street') {
    console.log(user.address.street.name);
}
// There are more possible approaches to tackle this, but I'll leave it at that
// for the sake of brevity
// TS APPROACH
if (((_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.street) === null || _b === void 0 ? void 0 : _b.name) === 'Street') {
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
var func1 = function (stringOrNull) {
    if (stringOrNull === null) {
        return 'default';
    }
    return stringOrNull;
};
// TS WAY
// Best approach:
var func2 = function (stringOrNull) { return stringOrNull !== null && stringOrNull !== void 0 ? stringOrNull : 'default'; };
// Alternative approach:
// const f = (stringOrNull: string | undefined | null) => stringOrNull ?? 'default'; // Same as above
