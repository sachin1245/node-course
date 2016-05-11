// setTimeout(function(){
// 	console.log('1');
// },1000);

// console.log('2');


function printInTwoSeconds(message){
	setTimeout(function(){
		console.log(message);
	},2000);
}

printInTwoSeconds('Hello Async!');