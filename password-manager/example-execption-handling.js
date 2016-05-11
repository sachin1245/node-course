function doWork(){
	throw new Error('unable to do Work');
}

try{
	doWork();
}catch(e){
	console.log(e.message);
}finally{
	console.log('finally ran');
}

console.log('Try Catch Done');