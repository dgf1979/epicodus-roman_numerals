"use strict";


//jQuery
$( document ).ready(function() {
    console.log( "jQuery Ready" );

    $("#jqtest").text('jQuery Ready')
});

//raw js

var convertToNumerals = function (number) {
  if (number > 3999) {
    return 'Your number is too large';
  }
  number = number.toString();
  var results = '';
  var numbers = number.split("").reverse();
  for (var i = 0; i < numbers.length; i++) {
    var currentNumber = parseInt(numbers[i]);
    results = digitPlace(currentNumber, i) + results;
  };

  return results;
};

var digitPlace = function (number, index) {
  var ones, fives, tens;

  switch (index) {
    case 0: ones = 'I'; fives = 'V'; tens = 'X'
      break;
    case 1: ones = 'X'; fives = 'L'; tens = 'C'
      break;
    case 2: ones = 'C'; fives = 'D'; tens = 'M'
      break;
    case 3: ones = 'M'
      break;
  }

  var results = '';
  if (number < 5 && number >= 4) {
    results = ones + fives + results;
  } else if (number === 5) {
    results = fives + results;
  } else if (number > 5 && number < 9) {
    if (number < 9) {
      results = addsOnes(number - 5, ones) + results
    }
    results = fives + results;
  } else if (number === 9) {
    results = ones + tens + results;
  } else {
    results = addsOnes(number, ones) + results;
  }

  return results;
}

var addsOnes = function (number, numeral) {
  var result = '';
  for (var i = 1; i <= number; i++) {
    result += numeral;
  }
  return result;
}
