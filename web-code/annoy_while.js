// VERSION 1

// while(q!== "yes" && q!== "yeah"){
// var q =prompt("Are we there yet?");
// }
// alert("YAY! we made it!!!!");

// VERSION 2

var q=prompt("Are we there yet?");
while(q.indexOf("yes")===-1 && q.indexOf("yeah")=== -1){
	var q =prompt("Are we there yet?");
}
alert("YAY! we made it!!!!");

