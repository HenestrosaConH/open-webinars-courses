function rollTheDice(userName, maxOfTries) {
  var results = [];
  var MAX_DICE_NUMBER = 6;
  for (var i = 0; i < maxOfTries; i++) {
    var result = Math.ceil(Math.random() * MAX_DICE_NUMBER);
    if (result === MAX_DICE_NUMBER) {
      results.push("".concat(userName, " is a WINNER"));
    } else {
      results.push("".concat(userName, " is a LOSER"));
    }
  }
  return results;
}
var results = rollTheDice("Player", 2);
console.log(results);
