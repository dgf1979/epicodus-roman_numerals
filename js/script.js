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
  var numbers = number.split("").reverse();
  for (var i = 0; i < numbers.length; i++) {
    var currentNumber = parseInt(numbers[i]);
    switch(i) {
      case 0: //one place
        if (currentNumber === 4) {
          results = results + 'IV';
        } else if (currentNumber === 5) {
          results = results + 'V';
        } else if (currentNumber > 5 && currentNumber < 9) {
          results = results + 'V' + digitPlace(currentNumber - 5, "I");
        } else if (currentNumber === 9) {
          results = results + 'IX';
        } else {
          results = results + digitPlace(currentNumber, "I");
        }
        break;
      case 1: //tens place
        if (currentNumber < 5 && currentNumber >= 4) {
          results = 'XL' + results;
        } else {
          results = digitPlace(numbers[i], "X") + results;
        }
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
  var result = '';
  for (var i = 1; i <= number; i++) {
    result += numeral;
  }
  return result;
}
