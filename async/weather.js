var request = require('request');

module.exports = function(location){

	return new Promise(function(resolve,reject){

		console.log(location);

		var encodedLocation = encodeURIComponent(location);
		var url ='http://api.openweathermap.org/data/2.5/weather?q='+ encodedLocation + '&appid=1c3602f494b221b4d49fa7985cbc8636';
		console.log(url);

		request({
			url:url, 
			JSON:true,
		},function (error, response, body){
			if(error){
				reject('Unable to Fetch weather');
			} else{
				resolve('its 78 in' + location);
				// resolve('It\'s ' + body.main.temp + ' in ' + body.name);
			}
		});

	});

	
}