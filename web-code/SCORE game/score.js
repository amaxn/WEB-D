
var num = document.getElementsByClassName("playto")[0];
var play1 = document.getElementById("play1");
var play2 = document.getElementById("play2");


var input = document.getElementsByTagName("input")[0];
document.querySelector("input").addEventListener("click", function(){
   
   if(input.value >=1) {
	num.textContent = input.value;
   }

   else{
   	alert("ERROR!!"+
		  " Value of input must be atleat ' 1 ' ");
   	 restart();
   }

});

function restart () {

	play1.textContent = "0";
	play2.textContent = "0";
	play1.style.color = "black";
    play2.style.color = "black";
    num.textContent   = "5";
    input.value       = null;


}


document.querySelector("#reset").addEventListener("click", restart );


document.querySelector("#button1").addEventListener("click", function () {

       if(play2.textContent==num.textContent) {
       	return false;
       }

       if(play1.textContent< num.textContent || num.textContent>=10 && play1.textContent!=num.textContent) {
      	play1.textContent++;

      	play1.style.color = "black";
       	play2.style.color = "black";
      }

       if(play1.textContent==num.textContent) {
       	play1.style.color = "green";
       	play2.style.color = "red";
      }
} );

document.querySelector("#button2").addEventListener("click", function () {

       if(play1.textContent==num.textContent) {
       	return false;
       }

      if(play2.textContent< num.textContent || num.textContent>=10 && play2.textContent!=num.textContent ) {
      	play2.textContent++;

      	play1.style.color = "black";
       	play2.style.color = "black";
      }

      if(play2.textContent==num.textContent) {
       	play2.style.color = "green";
       	play1.style.color = "red";
      }
} );






