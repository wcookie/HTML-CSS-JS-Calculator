var value=""
var display=document.getElementById("display");
var button = document.getElementById("button-C");
button.onclick = function(e) { 
	display.innerHTML="0";
	value="";
	};

for (var i=0; i<10;i++){
	(function (i){
	var string = "button-"+i;
	var clicked = document.getElementById(string);
	clicked.onclick=function(e) {
		//display.innerHTML=i;
		value=value+String(i);
		display.innerHTML=value;
	};
	 }) (i);
}
