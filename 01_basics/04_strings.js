const name ="manvika"
const age = 20

console.log(`my name is ${name} and my age is ${age}`);
const gameName = new String('Manvika-ag')

console.log(gameName[2]);
// for object in strings
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.charAt(4));
console.log(gameName.indexOf('k'));

//substring
const newString = gameName.substring(0,9)
console.log(newString);

//backword print with minus
const anotherString = gameName.slice(-8,4)
console.log(anotherString);


//donot save the value of unnecessary spaces
const newStringone ="   manvika    " 
console.log(newStringone);
console.log(newStringone.trim);

const url = "http://hitesh.com/hitesh%20"
console.log(url.replace('%20','-'));


console.log(url.includes('sun'));

//split
console.log(gameName.split('-'));






