var request = require('request');

var url = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=1c3602f494b221b4d49fa7985cbc8636';


request({
	url: url,
	json: true,
	dataType: 'json'
}, function (error,response,body) {

	if(error){
		console.log('unable to fetch weather')
	}else{
		console.log(body);
	}
})