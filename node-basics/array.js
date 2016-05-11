var grades = [10,55,88];

grades.push(847);
grades.unshift(76);


console.log(grades);

var grade = grades.pop();
console.log(grade);
console.log(grades);

var grade1 = grades.shift();
console.log(grade1);
console.log(grades);


grades.forEach(function(grade){
	console.log(grade);
});

var totalGrade = 0;

grades.forEach(function(grade){
	totalGrade += grade;
});


console.log(totalGrade);
console.log(grades.length);
console.log(totalGrade/grades.length);