var value="";
var operation="";
var firstoperand="";
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
		display.innerHTML=value+
		"<div id = \"operator\"></div>"
	};
	 }) (i);
}

var plus = document.getElementById("button-+");
plus.onclick = function(e) {

	firstoperand=value;
	document.getElementById("operator").innerHTML="+";
	value="";
	operation="+";
};

var times = document.getElementById("button-multiply");
times.onclick = function(e) {
	firstoperand = value;
	document.getElementById("operator").innerHTML=" &#215;";
	value="";
	operation="*";
};

var divide = document.getElementById("button-divide");
divide.onclick = function(e) {
	firstoperand = value;
	document.getElementById("operator").innerHTML=" &divide;";
	value = "";
	operation="/";

};

var subtract = document.getElementById("button--");
subtract.onclick = function(e) {
	firstoperand = value;
	document.getElementById("operator").innerHTML=" -";
	value = "";
	operation = "-";
}

var plusmninus = document.getElementById("button-+-");
plusmninus.onclick = function(e) {
	
	if (value[0]=='-'){
		value=value.slice(1,value.length);
		display.innerHTML = value;
	}
	else {
		value = "-" + value;
		display.innerHTML=value;
	}

}

var decimal = document.getElementById("button-.");
decimal.onclick=function(e){
	value = value+".";
	display.innerHTML=value;
};
var equals = document.getElementById("button-=");
equals.onclick=function(e){
	
	if (operation=="+")
	{
		operation="=";
		var sum = parseFloat(firstoperand, 10) + parseFloat(value, 10);
		display.innerHTML=sum;
		firstoperand="";
	}
	else if (operation=="*"){
		operation="=";
		var prod = parseFloat(firstoperand, 10) * parseFloat(value, 10);
		display.innerHTML=prod;
		firstoperand="";
	}

	else if (operation=="/") {
		operation="=";
		var quot = parseFloat(firstoperand, 10) / parseFloat(value, 10);
		display.innerHTML=quot;
		firstoperand="";
	}
	else if (operation =="-") {
		operation = "-";
		var diff = parseFloat(firstoperand, 10 ) - parseFloat(value, 10);
		display.innerHTML = diff;
		firstoperand = "";
	}
}