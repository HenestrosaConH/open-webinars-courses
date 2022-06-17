/*
	DECONSTRUCTING ASSIGNMENT
	Extract properties from objects and bind them to variables.
*/

const track = {
	trackTitle: "Hell To Pay",
	artist: "Converge",
	album: "Jane Doe",
	likedBy: ["Me", "You", "Us", "Them"]
};

// Extract attributes from object param:
const getAlbumAndArtist = ({ album, artist }) => `${album} by ${artist}`;
console.log(`getAlbumAndArtist: ${getAlbumAndArtist(track)}`)
// We can also do the following:
const { album, artist } = track;
console.log(`by const: ${album} by ${artist}`);

// Deconstructing an object into another:
const newTrack = {
	...track,
	trackTitle: "Concubine"
};
console.log(`newTrack: ${newTrack.trackTitle}`);

// Extracting the value of an attribute of the object and assigning it to a new variable (newTrackTitle):
const { trackTitle: newTrackTitle } = newTrack;
console.log(`newTrack.newTrackTitle: ${newTrackTitle}`);
console.log(`newTrack.trackTitle: ${newTrack.trackTitle}`);

// Extracting array items:
const [firstLikeBy, secondLikeBy, ...restOfLikes] = newTrack.likedBy;
console.log(`firstLikedBy: "${firstLikeBy}", secondLike by: "${secondLikeBy}" and otherLikes: "${restOfLikes.join(", ")}"`)

// Shortened object key-value assignment:
const newObject = { newTrackTitle, firstLikeBy };
// The same as: const newObject = { newTrackTitle: newTrackTitle, firstLikeBy: firstLikeBy };
console.log(`newObject.newTrackTitle: ${newObject.newTrackTitle}, newObject.firstLikeBy: ${newObject.firstLikeBy}`);

// Deconstructed params of a function
/* 
	reduce(func, initialValue)
	- func: Run for each element in the array. We have to pass these parameters to it:
		- total: Required. The initialValue, or the previously returned value of the function.
		- accumulatedValue: Required. The value of the current element.
		- currentIndex: Optional. The array index of the current element.
		- arr: Optional. The array object the current element belongs to.
	- initialValue: Optional. A value to be passed to the function as the initial value.
*/ 

const sum = (...nums) => nums.reduce((total, accumulatedValue) => total + accumulatedValue, 0);
console.log(`sum: ${sum(1, 2, 3, 4, 5, 6, 7, 8, 9)}`)