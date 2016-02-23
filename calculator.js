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
		
		
		if (value=="." ||(value=="" || value.match(/\d/g).length <27) && (value!=""   || i!=0)){

		value=value+String(i);
		display.innerHTML=value+
		"<div id = \"operator\"></div>"
}
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
	if (value!="0" && firstoperand !="0"){
		if (value[0]=='-'){
			value=value.slice(1,value.length);
			display.innerHTML = value;
		}
		else {
			value = "-" + value;
			display.innerHTML=value;
		}
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
		if (value!=""){
			var sum = parseFloat(firstoperand, 10) + parseFloat(value, 10);
		}
		else{
			var sum = 2* parseFloat(firstoperand, 10);
		}
		value=String(sum);
		display.innerHTML=sum+
		"<div id = \"operator\"></div>";
		firstoperand="";
	}
	else if (operation=="*"){
		operation="=";
		if (value!=""){
			var prod = parseFloat(firstoperand, 10) * parseFloat(value, 10);
		}
		else{
			var prod = parseFloat(firstoperand, 10) * parseFloat(firstoperand, 10);
		}
		value=String(prod);
		display.innerHTML=prod+
		"<div id = \"operator\"></div>";
		firstoperand="";
	}

	else if (operation=="/") {
		operation="=";
		if (value!=""){
			var quot = parseFloat(firstoperand, 10) / parseFloat(value, 10);
		}
		else{
			var quot = 1;
		}
		value=String(quot);
		display.innerHTML=quot+
		"<div id = \"operator\"></div>";
		firstoperand="";
	}
	else if (operation =="-") {
		operation = "=";
		if (value!=""){
			var diff = parseFloat(firstoperand, 10 ) - parseFloat(value, 10);
		}
		else{
			var diff = 0;
		}
		value=String(diff);
		display.innerHTML = diff+
		"<div id = \"operator\"></div>";
		firstoperand = "";
	}
}