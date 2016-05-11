var i=9,j=2;

function countDownWhile(startingpont,stopingpoint){
	while(startingpont>= stopingpoint){
		console.log('while: ' + startingpont);
		startingpont--;
	}
}

function countDownFor(startingpont,stopingpoint){
	for(i=startingpont;i>=stopingpoint;i--)
	{
		console.log('For: ' + i);
	}

}


countDownWhile(i,j);

countDownFor(i,j);