var $ = require("jquery");
var _ = require("lodash");

var list = [ "john", "paul", "george", "ringo" ];

function message(){
	console.log("This is a message");
	alert("This is a message");
}

$(document).ready(function(){
	$("#nameList").append("Our list is going to go here!");
});

window.message = message;
