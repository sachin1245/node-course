console.log('starting password manager!');

var storage = require('node-persist');
storage.initSync();

var crypto = require('crypto-js');

var argv = require('yargs')
	.command('create','create new account',function(yargs){
		yargs.options({
			name:{
				demand: true,
				alias: 'n',
				description: 'Your Account name goes here',
				type: 'string'
			},
			username:{
				demand: true,
				alias: 'u',
				description: 'Your username goes here',
				type: 'string'
			},
			password:{
				demand: true,
				alias: 'p',
				description: 'Your password goes here',
				type: 'string'
			},
			masterPassword:{
				demand: true,
				alias: 'm',
				description: 'masterPassword to encrypt your password',
				type: 'string'
			}
		}).help('help');
	})
	.command('get','Get the details of Current Account',function(yargs){
		yargs.options({
			name:{
				demand: true,
				alias: 'n',
				description: 'Your Account name goes here',
				type: 'string'
			},
			masterPassword:{
				demand: true,
				alias: 'm',
				description: 'masterPassword to encrypt your password',
				type: 'string'
			}
		}).help('help')
	})
	.help('help')
	.argv;

var command = argv._[0];


function saveAccounts(accounts,masterPassword){


	var encryptedAccount = crypto.AES.encrypt(JSON.stringify(accounts),masterPassword);

	storage.setItemSync('accounts',encryptedAccount.toString());

	return encryptedAccount;

}

function getAccounts(masterPassword){

	var decryptedAccounts = [];
	var accounts = storage.getItemSync('accounts');
	

	if(typeof accounts !== 'undefined'){
		var bytes = crypto.AES.decrypt(accounts,masterPassword);

		decryptedAccounts = JSON.parse(bytes.toString(crypto.enc.Utf8));
	}

	return decryptedAccounts;
}

function createAccount(account){
	var accounts = storage.getItemSync('accounts');

	if(typeof accounts === 'undefined')
	{
		accounts = [];
	}else{
		var bytes = crypto.AES.decrypt(accounts,account.masterPassword);

		accounts = JSON.parse(bytes.toString(crypto.enc.Utf8));
	}

	accounts.push(account);

	saveAccounts(accounts,account.masterPassword);


	return account;
}


function getAccount (accountName,masterPassword) {
	var foundAccount = [];

	var decryptedAccounts  = getAccounts(masterPassword);

	decryptedAccounts.forEach(function(account){
		
		if(account.name === accountName)
		{
			foundAccount.push(account);
		}
	});

	
	if (foundAccount.length !== 0)
		return foundAccount;
	else{
		return 0;
	}
}


if(command === 'create'){
	try{
		var Account = createAccount({
			name: argv.name,
			username: argv.username,
			password: argv.password,
			masterPassword: argv.masterPassword
		});
		console.log('Account successfully Created');
		console.log(Account);
	}catch(e){
		console.log('unable to create account');
	}
}
if(command === 'get'){

	try{

		var fetchedAccount = getAccount(argv.name,argv.masterPassword);
		if(fetchedAccount === 0)
		{
			console.log('Account not found!');
		}else{
			console.log('Account Found!');
			console.log(fetchedAccount);
		}
	}catch(e){
		console.log('Unable to get the account details');
	}
	
}

