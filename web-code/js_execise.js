// basic info

var name=prompt("What's your first name?");
var s_name=prompt("What's your last name?");
var age=prompt("What's your age?");
var fullname=name+" "+s_name;
alert("your full name is "+fullname);
console.log("your full name is "+fullname);
alert("you are "+age+" years old");
console.log("you are "+age+" years old");

// calculations

var days;
days=365*age;
age = age/4;
days= days + age;
alert("You have been alive for minimum of "+days+" days!!!!");
console.log("You have been alive for minimum of "+days+" days!!!!");