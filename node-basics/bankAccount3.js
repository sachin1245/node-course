var accounts = [];

function createAccount(firstname,lastname){

	this.firstname = firstname;
	this.lastname = lastname;
	this.balance = 0;
	
}; 

function getAccount(checkAccount){
	var acc;
	for(i=0;i<accounts.length;i++){
		if(accounts[i].firstname === checkAccount)
		{
			acc = accounts[i];
			break;
		}

	}
	
	return acc;
}

function getBalanceAccount(person){
	return function(){
		return console.log(person.balance);
	}
}


createAccount.prototype.deposit = function(user,amount){
		if(typeof amount === 'number')
		{
			this.balance = this.balance + amount;
			console.log('Deposit of amount '+ amount + ' for user ' + user.firstname + ' succesful\n')
		}
		else
			console.log('Deposit failed, amount is not a number\n');
};	

createAccount.prototype.withdrawal = function(user,amount){
	if(typeof amount === 'number')
	{
		this.balance = this.balance - amount;
		console.log('withdrawal of amount '+ amount + ' for user ' + user.firstname + ' succesful\n')
	}
	else
		console.log('Withdrawal failed, amount is not a number\n');
};

createAccount.prototype.getBalance = function(person){
	console.log('The account balance is ' + this. balance + '$\n');
};



var person1 = new createAccount('Sachin','C');
person1.deposit(person1,5000);


person1.withdrawal(person1,2000);

// person1.getBalance(person1);

accounts.push(person1);

var person2 = new createAccount('Lionel','Messi');

person2.deposit(person2,8000);

person2.withdrawal(person2,555);

// person2.getBalance(person2);

accounts.push(person2);


console.log(getAccount('Sachin'));

console.log(getAccount('Lionel'));

console.log(getAccount());

var sac = getBalanceAccount(person1);
sac();
