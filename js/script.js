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
        if (parseInt(numbers[i]) === 4) {
          results = results + 'IV';
        } else {
          results = results + digitPlace(numbers[i], "I");
        }
        break;
      case 1: //tens place
        results = digitPlace(numbers[i], "X") + results;
        break;
      case 2:
        results = digitPlace(numbers[i], "C") + results;
        break;
      case 3:
        results = digitPlace(numbers[i], "M") + results;
        break;
    };
  };

  return results;
};

var digitPlace = function (number, numeral) {
  number = parseInt(number);
  var result = '';
  for (var i = 1; i <= number; i++) {
    result += numeral;
  }
  return result;
}
