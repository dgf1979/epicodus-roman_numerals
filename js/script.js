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
  if (number > 3999) {
    return 'Your number is too large';
  }
  number = number.toString();
  var results = '';
  var numbers = number.split("").reverse();
  for (var i = 0; i < numbers.length; i++) {
    var currentNumber = parseInt(numbers[i]);
    switch(i) {
      case 0: //one place
        if (currentNumber === 4) {
          results = results + 'IV';
        } else if (currentNumber >= 5 && currentNumber < 9) {
          results = results + 'V';
          if (currentNumber < 9) {
            results = results + digitPlace(currentNumber - 5, "I");
          }
        } else if (currentNumber === 9) {
          results = results + 'IX';
        } else {
          results = results + digitPlace(currentNumber, "I");
        }
        break;
      case 1: //tens place
        if (currentNumber < 5 && currentNumber >= 4) {
          results = 'XL' + results;
        } else if (currentNumber > 5 && currentNumber < 9) {
          if (currentNumber < 9) {
            results = digitPlace(currentNumber - 5, "X") + results
          }
          results = 'L' + results;
        } else if (currentNumber === 9) {
          results = 'XC' + results;
        } else {
          results = digitPlace(currentNumber, "X") + results;
        }
        break;
      case 2:

        if (currentNumber < 5 && currentNumber >= 4) {
          results = 'CD' + results;
        } else if (currentNumber > 5 && currentNumber < 9) {
          if (currentNumber < 9) {
            results = digitPlace(currentNumber - 5, "C") + results
          }
          results = 'D' + results;
        } else if (currentNumber === 9) {
          results = 'CM' + results;
        } else {
          results = digitPlace(currentNumber, "C") + results;
        }
        break;
      case 3:
        results = digitPlace(currentNumber, "M") + results;
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
