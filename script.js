'use strict'

var clickedNumbers = "";
var previousVal = 0;
var currentVal = 0;

$(document).ready(init);

function init(){
  $('.number').click(showNumbers);
  $('.operator2').click(showOperators);
  $('.operator1').click(showOperators);
  $('#equals').click(equals);
  $('#clear').click(clear);
}

function showNumbers() {
    var buttonVal = this.id;
    clickedNumbers += buttonVal;
    $("#numArea").text(clickedNumbers);
}

function showOperators() {
    var buttonVal = this.value;
    if (previousVal > 0 || previousVal < 0) {
      clickedNumbers += previousVal + buttonVal;
    } else {
      clickedNumbers += buttonVal;
    }
    $("#numArea").text(clickedNumbers);
}

function equals() {
  var result = equalsHelper(clickedNumbers);
  $('#answer').text(result);
  $('#numArea').text(result);
  clickedNumbers = result;
  buttonVal = "";
}

function equalsHelper(str){

  var o1 = str.lastIndexOf("+");
  var o2 = str.lastIndexOf("-");
  var o3 = str.lastIndexOf("*");
  var o4 = str.lastIndexOf("/");
  var o5 = str.lastIndexOf("%");
  var o6 = str.lastIndexOf("inv");
  var o7 = str.lastIndexOf("^");

  var maxOp = Math.max(o1, o2, o3, o4, o5, o6, o7);

  if (maxOp == o1 && str[str.lastIndexOf("+") + 1]) {
    var index = str.lastIndexOf("+");
    var frontPart = str.substring(0, index);
    var lastNum = str.substring(index + 1);
    if (frontPart) {
      return +equalsHelper(frontPart) + +lastNum;
    }
  }
  if (maxOp == o2 && str[str.lastIndexOf("-") + 1]) {
    var index = str.lastIndexOf("-");
    var frontPart = str.substring(0, index);
    var lastNum = str.substring(index + 1);
    if (frontPart) {
      return +equalsHelper(frontPart) - +lastNum;
    }
  }
  if (maxOp == o3 && str[str.lastIndexOf("*") + 1]) {
    var index = str.lastIndexOf("*");
    var frontPart = str.substring(0, index);
    var lastNum = str.substring(index + 1);
    if (frontPart) {
      return +equalsHelper(frontPart) * +lastNum;
    }
  }
  if (maxOp == o4 && str[str.lastIndexOf("/") + 1] != 0 && str[str.lastIndexOf("/") + 1]) {
    var index = str.lastIndexOf("/");
    var frontPart = str.substring(0, index);
    var lastNum = str.substring(index + 1);
    if (frontPart) {
      return +equalsHelper(frontPart) / +lastNum;
    }
  }
  // if (str.indexOf("/") > 0 && str[str.indexOf("/") + 1] == 0) {
  //   $("#answer").text("Error");
  // }
  if (maxOp == o5) {
    var index = str.lastIndexOf("%");
    var frontPart = str.substring(0, index);
    var lastNum = str.substring(index + 1);
    if (frontPart) {
      return +equalsHelper(frontPart) / 100;
    }
  }
  if (maxOp == o6) {
    var index = str.lastIndexOf("inv");
    var frontPart = str.substring(0, index);
    var lastNum = str.substring(index + 1);
    if (frontPart) {
      return +equalsHelper(frontPart) * (-1);
    }
  }
  if (maxOp == o7 && str[str.lastIndexOf("^") + 1] > 1) {
    var index = str.lastIndexOf("^");
    var frontPart = str.substring(0, index);
    var lastNum = str.substring(index + 1);
    if (frontPart) {
      return Math.pow(equalsHelper(frontPart), lastNum);
    }
  } 
  // previousVal = $('#answer').text();
  // $("#numArea").text(previousVal);
  // clickedNumbers = $("#numArea").val();
  return +str;
}

function clear() {
  var buttonVal = this.value;
  clickedNumbers += buttonVal;
  $("#numArea").text("0");
  $("#answer").text("0");
  clickedNumbers = "";
  previousVal = 0;
}


function sum(a, b){
  return +a + +b;
}

function minus(a, b){
  return +a - +b;
}

function multiply(a, b){
  return +a * +b;
}

function divide(a, b){
  return +a / +b;
}

function percent(a){
  return +a / 100;
}

function plusMinus(a){
  return a * (-1);
}

function expNum(a, b){
  return Math.pow(a, b);
}


    // if (index == -1) {
    // console.log('inhit');
    //   return +str;
    // }
