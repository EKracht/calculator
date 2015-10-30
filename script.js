'use strict'

$(document).ready(function(){
  var clickedNumbers = [];
  var numArray = [];
  $(".button").click(function(){
    var buttonVal = this.id;
    clickedNumbers.push(buttonVal);
    console.log("numbers", clickedNumbers);
    $("#numArea").text(clickedNumbers);
    // console.log(clickedNumbers.indexOf("+/-") > 0);
    // console.log("str", clickedNumbers.join(""));
    // var str = clickedNumbers.join("");
    // numArray = str.split("+/-");
    // console.log("array", numArray);
    // console.log("answer", plusMinus(numArray[0]));
    if (clickedNumbers.indexOf("+") == true && clickedNumbers[clickedNumbers.indexOf("+") + 1] > 1) {
      var str = clickedNumbers.join("");
      numArray = str.split("+");
      $("#answer").text(sum(numArray[0], numArray[1]));
    }
    if (clickedNumbers.indexOf("-") == true && clickedNumbers[clickedNumbers.indexOf("-") + 1] > 1) {
      var str = clickedNumbers.join("");
      numArray = str.split("-");
      $("#answer").text(minus(numArray[0], numArray[1]));
    }
    if (clickedNumbers.indexOf("*") == true && clickedNumbers[clickedNumbers.indexOf("*") + 1] > 1) {
      var str = clickedNumbers.join("");
      numArray = str.split("*");
      $("#answer").text(multiply(numArray[0], numArray[1]));
    }
    if (clickedNumbers.indexOf("/") == true && clickedNumbers[clickedNumbers.indexOf("/") + 1] > 1) {
      var str = clickedNumbers.join("");
      numArray = str.split("/");
      $("#answer").text(divide(numArray[0], numArray[1]));
    }
    if (clickedNumbers.indexOf("?") > 0) {
      //console.log("hi");
      var str = clickedNumbers.join("");
      numArray = str.split("?");
      $("#answer").text(percent(numArray[0]));
    }
    if (clickedNumbers.indexOf("+/-") == true) {
      //console.log("hi");
      var str = clickedNumbers.join("");
      numArray = str.split("?");
      $("#answer").text(plusMinus(numArray[0]));
    }
});
});

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
  return +a * (-1);
}


/*
$(function(){
  resetCalculator("0");
  $(".btn-default").click(function(){
    if ($("#numArea").data("prev") == true) {
      resetCalculator($(this).text());
    } else if (($"#numArea").data("pendingOperator") == true ) && ($(#numArea).data("value1hold") == false) {
      $("#numArea").data("value1", $("#numArea").val());
      $("#numArea").data("value1hold", true);

      $("#numArea").val($(this).text());
      $("#numArea").data("value2", $("#numArea").val());
      $("#numArea").data("value2hold", true);
    } else if ($("#numArea").data("pendingOperator", true) && ($("#numArea").data("value1hold") == true) {
      var curValue = ("#numArea").val();
      var toAdd = $(this).text();
      var newValue = curValue + toAdd;

      $("#numArea").val(newValue);
      $("#numArea").data("value2", $("#numArea", val());

  })
})



$("#equals").click(function(){

  if(($("#numArea").data("value1hold") === true) && ($("numArea").data("value2hold")) === true) {
    if ($("#numArea").data("operator") == "+") {
      var finalValue = parseFloat($("numArea").data("value1")) + parseFloat($("numArea").data("value2"));
    } else if ($("#numArea").data("operator") == "-") {
      var finalValue = parseFloat($("numArea").data("value1")) - parseFloat($("numArea").data("value2"))
    } else if ($("#numArea").data("operator") == "*") {
      var finalValue = parseFloat($("numArea").data("value1")) * parseFloat($("numArea").data("value2"))
    } else if ($("#numArea").data("operator") == "/") {
      var finalValue = parseFloat($("numArea").data("value1")) / parseFloat($("numArea").data("value2"))
    } 
    $("#numArea").val(finalValue);
    resetCalculator(finalValue);
    $(#numArea).data("prev", true);
  } else {
    // do nothing
  }
});

$("#equals").click(function(){

  if(($("#numArea").data("value1hold") === true) && ($("numArea").data("value2hold")) === false) {
    if ($("#numArea").data("operator") == "%") {
      var finalValue = parseFloat($("numArea").data("value1")) / 100;
    } else if ($("#numArea").data("operator") == "+/-") {
      var finalValue = parseFloat($("numArea").data("value1")) * (-1);
    } 
    $("#numArea").val(finalValue);
    resetCalculator(finalValue);
    $(#numArea).data("prev", true);
  } else {
    // do nothing
  }
});



function resetCalculator(curValue) { 
  $("#numArea").val(curValue); 
  $("#func").removeClass("pendingFunction"); 
  $("#numArea").data("pendingOperator", false); 
  $("#numArea").data("operator", ""); 
  $("#numArea").data("value1hold", false); 
  $("#numArea").data("value2hold", false); 
  $("#numArea").data("value1", curValue); 
  $("#numArea").data("value2", 0); 
  $("#numArea").data("prev", false); 
}
*/


