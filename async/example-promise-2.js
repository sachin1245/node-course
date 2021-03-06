// function doWork(shouldFail){
// 	return new Promise(function (resolve,reject){
// 		setTimeout(function(){
// 			if(typeof shouldFail === 'boolean' && shouldFail === true){
// 				reject('Error Occured');
// 			}else{
// 				resolve('success');
// 			}
// 		},1000);

// 	});
// }


// doWork().then(function(message){
// 	console.log(message);
// 	return doWork(true);
// }).then(function(message){
// 	console.log(message);
// }).catch(function (error) {
// 	console.log(error);
// });


function getLocation () {
	return new Promise(function(resolve,reject){
		resolve('Bangalore');
	});
}

function getWeather(location){
	return new Promise(function(resolve,reject){
		resolve('It\'s 78.8 in ' + location);
	});
}


getLocation().then(function(location){
	return getWeather(location);
}).then(function(weather){
	console.log(weather);
}).catch(function(error){
	console.log('something went wrong');
});