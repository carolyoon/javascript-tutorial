// CODING CHALLENGE 1
/*
var johnHeight = 200;
var johnAge = 15;
var friendHeight = 200;
var friendAge = 15;
var carolHeight = 200;
var carolAge = 15;

var johnScore = johnAge * 5 + johnHeight
var friendScore = friendAge * 5 + friendHeight
var carolScore = carolAge * 5 + carolHeight

if (johnScore > friendScore && johnScore > carolScore) {
  console.log('John');
} else if (friendScore > johnScore && friendScore > carolScore) {
  console.log('Friend');
} else if (carolScore > johnScore && carolScore > friendScore) {
  console.log('Carol');
} else {
  console.log('It\'s a draw')
}
*/

// CODING CHALLENGE 2
 var birthYears = [1988, 1967, 2010, 1999]
 var ages = []

// for (var i = 0; i < birthYears.length; i++) {
//   ages[i] = 2018 - birthYears[i]
// }

// for (var i = 0; i < ages.length; i++) {
//   if (ages[i] >= 18) {
//     console.log("This person is " + ages[i] + " years old and is of full age.");
//   } else {
//     console.log("This person is " + ages[i] + " years old and is not of full age.");
//   }
// }


function printFullAge(birthYears) {
  var ages = []
  var fullAges = []

  for (var i = 0; i < birthYears.length; i++) {
    ages[i] = 2018 - birthYears[i]
  }

  for (var i = 0; i < ages.length; i++) {
    if (ages[i] >= 18) {
      console.log("Person " + (i + 1) + " is " + ages[i] + " years old and is of full age.");
      fullAges.push(true)
    } else {
      console.log("Person " + (i + 1) + " is" + ages[i] + " years old and is not of full age.");
      fullAges.push(false)
    }
  }
  return fullAges;
}

var full_1 = printFullAge(birthYears);
var full_2 = printFullAge([2012, 1915, 1999]);











