// function doWork(){
// 	console.log('Inside the DoWork');
// }


// function doWorkPromise(data){
// 	return new Promise( function (resolve , reject){

// 		setTimeout(function(){
// 			reject('Something Went Wrong');
// 		},1000)
// 	});
// }


// doWorkPromise('some data').then(function(data){
// 	console.log(data);
// },function(error){
// 	console.log(error);
// });

var request = require('request');

function getWeather(location){
	return new Promise(function(resolve,reject){
		if(typeof location === 'undefined'){
			reject('location not provided')
		}else{
			var encodedLocation = encodeURIComponent(location);
			var url ='http://api.openweathermap.org/data/2.5/weather?q='+ encodedLocation + '&appid=1c3602f494b221b4d49fa7985cbc8636';

			request({
				url:url, 
				json:true,
			},function (error, response, body){
				if(error){
					reject('Unable to Fetch weather');
				} else{
					resolve('It\'s 20 oC in ' + location);
				}
			});
		}
	});
}


getWeather().then(function(curentWeather){
	console.log(curentWeather);
},function  (error) {
	console.log(error);
});
