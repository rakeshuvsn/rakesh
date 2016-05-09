var jsArray= [];
var i;
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "skill.json", true);
  xhttp.send();
  
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
    	
     //document.getElementById("demo").innerHTML = xhttp.responseText;
     var resp = xhttp.responseText;
     var jsonContent = JSON.parse(resp);
     jsArray = jsonContent.skills;
     
     document.getElementById("nam").innerHTML=jsArray[0].Name;
     document.getElementById("add").innerHTML=jsArray[0].Address;
     document.getElementById("pos").innerHTML=jsArray[0].Position;
     document.getElementById("posd").innerHTML=jsArray[0].ProjectDescription;

     


    }
  };
 
}


function next(){
	if(i<jsArray.length-1){
		i++;
	}else{
		i=0;
	}
	
  
 

  document.getElementById("nam").innerHTML=jsArray[i].Name;
  document.getElementById("add").innerHTML=jsArray[i].Address;
  document.getElementById("pos").innerHTML=jsArray[i].Position;
  document.getElementById("posd").innerHTML=jsArray[i].ProjectDescription;

    

}

function previous(){
	if(i> 0){
		i--;
	}else{
		
    i=jsArray.length-1;
	}


 
	
  document.getElementById("nam").innerHTML=jsArray[i].Name;
  document.getElementById("add").innerHTML=jsArray[i].Address;
  document.getElementById("pos").innerHTML=jsArray[i].Position;
  document.getElementById("posd").innerHTML=jsArray[i].ProjectDescription;


}

$("#but1").click(function(){
  $("#nam").animate({
    


  });
});

$("#but2").click(function(){
  $("#nam").animate({
      
    
  });
});

 function startSlides(start, end, delay) {
        setTimeout(slideshow(start,start,end, delay), delay);
}
function slideshow(frame, start, end, delay) {
    return (function() {
        $('#slideshow' + frame).fadeOut();
        if (frame == end) { frame = start; } else { frame += 1; }
        setTimeout(function(){$('#slideshow' + frame ).fadeIn();}, 850);
        setTimeout(slideshow(frame, start, end, delay), delay + 850);
    })
}
    // usage: startSlides(first frame, end frame, delay time);
startSlides(1, 4, 5000);