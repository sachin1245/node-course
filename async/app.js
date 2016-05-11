var weather = require('./weather.js');
var location = require('./location.js');
var argv = require('yargs')
	.command('location','give the location of the weather to be display',function(yargs){
			yargs.options({

				location:{
				alias: 'l',
				demand:false,
				description: 'Your location goes here',
				type: 'string'
				}
			}).help('help');

	})
	.help('help')
	.argv;

console.log('weather started');



location(argv.location).then(function(location){

	return weather(location);

}).then(function(weather){

	console.log(weather);

}).catch(function(error){

	console.log(error);

});



// 	location(function(location){

// 		if(!location){
// 			console.log('unable to guess lcoation');
// 			return;
// 		}

// 		weather(location.city,function(body){
// 			console.log(body);
// 		});
	
// 	})
// }




