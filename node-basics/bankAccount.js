function createAccount(firstname,lastname){

	this.firstname = firstname;
	this.lastname = lastname;
	this.balance = 0;
	
}; 

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

console.log(person1);

person1.deposit(5000);

person1.withdrawal(2000);

person1.getBalance(person1);