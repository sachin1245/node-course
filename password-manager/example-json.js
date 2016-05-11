var person={
	name: 'Sachin',
	age: 22
}


var personJSON = JSON.stringify(person);
console.log(typeof personJSON);
console.log(personJSON);

var personObject = JSON.parse(personJSON);
console.log(typeof personObject);
console.log(personObject);


var animal = '{"name": "dolphin"}';

var animalObject = JSON.parse(animal);

animalObject.age = 10;

var animalJSON = JSON.stringify(animalObject);

console.log(animalJSON); 