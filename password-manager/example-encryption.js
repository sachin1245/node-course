var crypto = require('crypto-js');

var sercretMessage = {
	name: 'Sachin',
	secretName: '007'
};
var secretKey = '123abc';



//encrypt
var encryptedMessage = crypto.AES.encrypt(JSON.stringify(sercretMessage),secretKey);

console.log('encrypted message ' + encryptedMessage);

//decrypt

var bytes = crypto.AES.decrypt(encryptedMessage,secretKey);
var decryptedMessage = JSON.parse(bytes.toString(crypto.enc.Utf8));

console.log(decryptedMessage);