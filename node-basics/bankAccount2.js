var accounts = [];

function createAccount(firstname,lastname){

	this.firstname = firstname;
	this.lastname = lastname;
	this.balance = 0;
	
}; 

function getAccount(checkAccount){
	var acc;
	accounts.forEach(function(account){
		if(account.firstname === checkAccount){
			acc = account;
		}
	});
	return acc;
}

createAccount.prototype.deposit = function(amount){
		this.balance = this.balance + amount;
		console.log('The current balance is = '+ this.balance + '$\n');
};

createAccount.prototype.withdrawal = function(amount){
	this.balance = this.balance - amount;
	console.log('The current balance is ='+ this.balance + '$\n')
};

createAccount.prototype.getBalance = function(person){
	console.log('The account balance is ' + this. balance + '$\n');
};

var person1 = new createAccount('Sachin','C');
person1.deposit(5000);

person1.withdrawal(2000);

// person1.getBalance(person1);

accounts.push(person1);

var person2 = new createAccount('Lionel','Messi');

person2.deposit(8000);

person2.withdrawal(555);

// person2.getBalance(person2);

accounts.push(person2);


console.log(getAccount('Sachin'));

console.log(getAccount('Lionel'));

console.log(getAccount());

