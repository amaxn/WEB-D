console.log("print all no. b/w -10 and 19");

var num = -10;
while(num<=19){
	console.log(num);
	num++;
}

console.log("print all even no. b/w 10 and 40");

var num = 10;
while(num<=40){
	if (num%2===0){
	console.log(num);
}
	num++;
}
// OR
// var num = 10;
// while(num<=40){
// 	console.log(num);
// 	num+=2;
// }

console.log("print all odd no. b/w 300 and 333");

var num =300;
while(num<=333){
	if (num%2!==0){
		console.log(num);
	}
	num++;
}

console.log("print all the no. divisible by 5 and 3 b/w 5 and 50");

var num =5;
while(num<=50){
	if(num%3===0 && num%5===0){
		console.log(num);
	}
	num++;
}