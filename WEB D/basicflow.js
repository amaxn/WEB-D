console.log("Print all the numbers between 10 to 50 and  - 50 to +50");

console.log("from 10 to 50");

for(var i = 10; i<=50; i++){
	console.log(i);
}
console.log("from -50 to +50");

for(var j=-50; j<=50; j++){
	console.log(j);
}

// 

console.log("Print all Even numbers between 50 to 100");

for(var i=50; i<=100; i++){
	if(i%2===0){
		console.log(i);
	}
}

// 

console.log("Print all Odd numbers between 200 to 400");

for(var i=200; i<=400; i++){
	if(i%2!==0){
		console.log(i);
	}
}

// 

console.log("Print all prime numbers between 0 to 50");

var p =0;
for(var i=2; i<=50; i++){
	var q = 0;
	for(var j=1; i>=j; j++){
	   if(i%j===0){
	   	  q = q+1;
	   	}
	   }
	   	 if(q===2){
	 	console.log(i);
	 	p = p+1;
	 }  
}
console.log("total no. of prime no. between 0 and 50 are " + p);
