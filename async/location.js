var request = require('request');
var url = 'http://ipinfo.io';



module.exports = function(location){

	return new Promise(function	(resolve,reject){

		if(typeof location !== 'undefined'){

			resolve(location);
			
		}else{

			request({
				url:url,
				json: true
			},function	(error,response,body){
				if(error){
					reject('can\'t get the location');
				}else{

					resolve(location);
				}

			});
			
		}

	});
}
