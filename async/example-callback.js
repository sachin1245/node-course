var request = require('request');
var weather = require('./weather');

weather();

var url ="http://api.openweathermap.org/data/2.5/weather?q=bangalore,uk&appid=1c3602f494b221b4d49fa7985cbc8636";

request({
	url:url, 
	json:true
},function (error,response,body){
	if(error){
		console.log('Unable to Fetch weather');
	}else{
		console.log('It\'s ' + body.main.temp + ' in ' + body.name);
	}
});