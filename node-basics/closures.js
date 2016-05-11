

function greetMaker(name){

	function greet(){
		console.log(name);
	}
	return greet;
}


var sachin = greetMaker('Sachin');
sachin();


function createAdder(baseNumber){
	return function (number){
		return baseNumber + number;
	}

}

var addTen = createAdder(10);

console.log(addTen(5));