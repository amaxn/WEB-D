

//  for(var i=0; i<5; i++) {
//  var link = document.getElementsByTagName("a")[i];
  
//   link.addEventlistener("click", function() {
// 	if (link[i].Id !="active"){
		
// 		link[i].Id="active";
// 	}
  
// });


//  }

// GALLERY ANIMATION

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

