var $ = require("jquery");
var _ = require("lodash");

var list = [ "john", "paul", "george", "ringo" ];

function addlist(){
	var newItem = $("#newItem").val();
	list.push(newItem);
	printList();
	$("#newItem").val("");
}

function printList(){
	var ourlist = $("#nameList");
	ourlist.html("");
	_(list).forEach(function(el){
		ourlist.append("<li>" + el + "</li>");
	});
}

$(document).ready(printList);

window.addlist = addlist;
window.printList = printList;
