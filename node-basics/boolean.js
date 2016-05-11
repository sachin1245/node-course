var isValid = true;
var a = 'Hello';

function checkBool(variable){
	if(typeof variable === 'boolean')
		return !variable;
	else
		return 'variable is not of boolean type';
}


console.log(checkBool(isValid));
console.log(checkBool(a));