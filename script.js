// Lecture: Variables
/*
var name = 'Caroline';
console.log(name);

var lastName = 'Yoon';
console.log(lastName);

var age = 29;
console.log(age);

var fullAge = true;
console.log(fullAge);

var name = 'Caroline';
var age = 29;

console.log(name + age) // Caroline29
console.log(age + age) // 58

var job, isMarried; 

console.log(job); //undefined

job = 'teacher';
isMarried = false;

console.log(name + ' is a ' + age + ' year old ' + job + '. Is she married? ' + '' + isMarried);

age = 'thirty six';
job = 'driver';

console.log(name + ' is a ' + age + ' year old ' + job + '. Is she married? ' + '' + isMarried);

var lastName = prompt('What is the last name?');
console.log(lastName);

alert('name' + ' is a ' + age + ' year old ' + job + '. Is she married? ' + ' ' + isMarried);
*/


// Lecture: Operators
/*
var now = 2016
var birthYear = now - 26;

birthYear = now - 26 * 2;
//2016 - 52 = 1964

var ageJohn = 30;
var ageMark = 30;

ageJohn = 3 + 5 * 4 -6
console.log(birthYear);
console.log(ageJohn);
*/

// Lecture: If/Else Statements
/*
var name = 'Caroline';
var age = 29;
var isMarried = 'yes';

if (isMarried === 'yes') {
  console.log(name + ' is married!');
} else {
  console.log(name + 'is not married!');
}

isMarried = true;

if(isMarried) {
  console.log('Yes');
} else {
  console.log('No');
}

if(isMarried) {
  console.log('Yes');
}
*/

// Lecture: Boolean Logic and Switch
/*
var age = 25;

if (age < 20) {
  console.log('Carol is a teenager');
} else if (age > 20 && age < 30) {
  console.log('Carol is a young woman')
} else {
  console.log('Carol is a woman');
}

var job = 'teacher';

job = prompt('What does Caroline do?')

switch (job) {
  case 'teacher':
    console.log('Caroline teaches kids.');
    break;
  case 'driver':
    console.log('Caroline drives cabs.');
    break;
  case 'singer':
    console.log('Caroline sings.');
    break;
  default: 
    console.log('Caroline is unemployed.');
}
*/

// Lecture: Functions
/*
function calculateAge(yearOfBirth) {
  var age = 2016 - yearOfBirth;
  return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1988);
console.log(ageMike);

function yearsUntilRetirement(name, year) {
  var age = calculateAge(year);
  var retirement = 65 - age;
  if (retirement >= 0) {
    console.log(name + ' retires in ' + retirement + ' years. ');  
  } else {
    console.log(name + ' is already retired. ');
  }
}

yearsUntilRetirement('John', 1940);
*/

// Lecture: Statements vs Expressions
/*
Statement => performs an action but doesn't store any immediate values 
function someFun(par) {
  // code
}

Expressions => produces a value or outcome
var someFun = function(par) {
  // code
}
*/

// Lecture: Arrays
/*
var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
names[1] = 'Ben';
console.log(names);

var john = ['John', 'Smith', 1990, 'architect', 'false'];

john.push('blue');
john.unshift('Mr.');
john.pop();
john.shift();
john.indexOf('Smith');

console.log(john);

if (john.indexOf('teacher') === -1) {
  console.log('John is not a teacher.');
}
*/

// Lecture: Object Literal 
/*
var john = {
  name: 'John',
  lastName: 'Smith',
  yearOfBirth: '1990',
  job: 'teacher',
  isMarried: false
};

// How to read values out of an object
console.log(john.lastName);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]); 

john.lastName = 'Miller';
john['job'] = 'programmer';

console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969
jane['job'] = 'retired'
jane['isMarried'] = true 

console.log(jane)
*/

// Lecture: Objects & Methods 
/*
var john = {
  name: 'John',
  lastName: 'Smith',
  yearOfBirth: '1990',
  job: 'teacher',
  isMarried: false,
  family: ['Jane', 'Mark', 'Bob'],
  calculateAge: function() {
    return 2016 - this.yearOfBirth;
  }
};
  
var age = john.calculateAge();
john.age = age;

var john = {
  name: 'John',
  lastName: 'Smith',
  yearOfBirth: '1990',
  job: 'teacher',
  isMarried: false,
  family: ['Jane', 'Mark', 'Bob'],
  calculateAge: function() {
    this.age = 2016 - this.yearOfBirth;
  }
};

john.calculateAge();
console.log(john);
console.log(john.age)
*/

// Lecture: Loops & Iteration

// "for" loops
// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }

// var names = ['John', 'Jane', 'Mark', 'Mary', 'Bob'];

// for (var i = 0 ; i < names.length; i++) {
//   console.log(names[i]);
// }

// for (var i = names.length - 1; i >= 0; i--) {
//   console.log(names[i]);
// }

// "while" loops 
// var i = 0;
// while (i < names.length){
//   console.log(names[i]);
//   i++;
// }

// "break"
for (var i = 1; i <= 5; i++) {
  console.log(i);

  if (i === 3) {
    break;
  }
}

// "continue" 
for (var i = 1; i <= 5; i++) {
 if (i === 3) {
    continue;
  }
  console.log(i);
}











