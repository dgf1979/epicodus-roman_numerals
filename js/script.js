"use strict";


//jQuery
$( document ).ready(function() {
    console.log( "jQuery Ready" );

    $("#jqtest").text('jQuery Ready')
});

//raw js
var foo = function(bar) {
  return false;
};

var convertToNumerals = function (number) {
  number = number.toString();
  var results = '';
  var numbers = number.split("");
  for (var i = 0; i < numbers.length; i++) {
    switch(i) {
      case 0: //one place
        results = results + onesPlace(numbers[i]);
        break;
      case 1: //tens place
        results = tensPlace(numbers[i]) + results;
        break;
    }
  };

  return results;
};

var onesPlace = function (number) {
  number = parseInt(number);
  var result = ''
  for (var i = 1; i <= number; i++) {
    result += 'I'
  }
  return result;
}

var tensPlace = function (number) {
  number = parseInt(number);
  var result = ''
  for (var i = 1; i <= number; i++) {
    result += 'X'
  }
  return result;
}
