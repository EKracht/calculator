'use strict'

var clickedNumbers = "";
var buttonVal = "";
var previousVal = 0;
var currentVal = 0;

$(document).ready(init);

function init() {
  $('.number').click(showNumbers);
  $('.operator2').click(showOperators);
  $('#equals').click(equals);
  $('#clear').click(clear);
  $('#plusMinus').click(plusMinus);
  $('#percent').click(doPercent);
}

function showNumbers() {
  var str = clickedNumbers.toString();
  var dec = str.lastIndexOf(".");
  var buttonVal = this.id;
  if (dec == -1) {
    clickedNumbers += buttonVal;
    $("#numArea").text(clickedNumbers);
    return;
  }
  if (dec != -1 && buttonVal != ".") {
    clickedNumbers += buttonVal;
    $("#numArea").text(clickedNumbers);
    return;
  }
}

function showOperators() {
  var buttonVal = this.value;
  clickedNumbers += buttonVal;
  $("#numArea").text(clickedNumbers);
}

function equals() {
  currentVal = equalsHelper(clickedNumbers);
  $('#answer').text(currentVal);
  $('#numArea').text(currentVal);
  clickedNumbers = currentVal;
  buttonVal = "";
}

function equalsHelper(str){
  var o1 = str.lastIndexOf("+");
  var o2 = str.lastIndexOf("-");
  var o3 = str.lastIndexOf("*");
  var o4 = str.lastIndexOf("/");
  var o5 = str.lastIndexOf("^");

  var maxOp = Math.max(o1, o2, o3, o4, o5);

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
  if (maxOp == o5 && str[str.lastIndexOf("^") + 1] > 1) {
    var index = str.lastIndexOf("^");
    var frontPart = str.substring(0, index);
    var lastNum = str.substring(index + 1);
    if (frontPart) {
      return Math.pow(equalsHelper(frontPart), lastNum);
    }
  } 
  return +str;
}

function plusMinus() {
  var str = clickedNumbers.toString();
  if (str.lastIndexOf("+") != -1 || str.lastIndexOf("-") > 0 || str.lastIndexOf("*") != -1 || str.lastIndexOf("/") != -1 || str.lastIndexOf("^") != -1) {
    return;
  }
  currentVal = invNum(clickedNumbers);
  $('#answer').text(currentVal);
  $('#numArea').text(currentVal);
  clickedNumbers = currentVal;
  buttonVal = "";
}

function doPercent() {
  var str = clickedNumbers.toString();
  if (str.lastIndexOf("+") != -1 || str.lastIndexOf("-") != -1 || str.lastIndexOf("*") != -1 || str.lastIndexOf("/") != -1 || str.lastIndexOf("^") != -1) {
    return;
  }
  currentVal = percent(clickedNumbers);
  $('#answer').text(currentVal);
  $('#numArea').text(currentVal);
  clickedNumbers = currentVal;
  buttonVal = "";
}

function clear() {
  var buttonVal = this.value;
  clickedNumbers += buttonVal;
  $("#numArea").text("0");
  $("#answer").text("0");
  clickedNumbers = "";
  previousVal = 0;
}

function percent(a){
  return +a / 100;
}

function invNum(a){
  return +a * (-1);
}

// function sum(a, b){
//   return +a + +b;
// }

// function minus(a, b){
//   return +a - +b;
// }

// function multiply(a, b){
//   return +a * +b;
// }

// function divide(a, b){
//   return +a / +b;
// }

// function expNum(a, b){
//   return Math.pow(a, b);
// }