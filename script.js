// Lecture: variables
/*
var name = 'Caroline';
console.log(name);

var lastName = 'Yoon';
console.log(lastName);

var age = 29;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/

//Lecture: variables 2

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