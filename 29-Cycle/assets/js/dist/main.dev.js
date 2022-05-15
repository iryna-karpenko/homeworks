"use strict";

function task1() {
  var age = parseInt(document.getElementById('task_1_age').value);
  var rez = '';
  var errText = '';

  if (isNaN(age)) {
    errText = errText + 'Use only numbers';
  }

  if (age <= 0) {
    rez = 'Invalid input';
  } else if (age > 0 && age < 12) {
    rez = 'Child';
  } else if (age >= 12 && age < 18) {
    rez = 'Teenager';
  } else if (age >= 18 && age < 60) {
    rez = 'Adult';
  } else if (age >= 60) {
    rez = 'Pensioner';
  }

  if (errText !== '') {
    document.getElementById('task_1_result').innerText = errText;
  } else {
    document.getElementById('task_1_result').innerText = rez;
  }
}

function task2() {
  var num = parseInt(document.getElementById('task_2_number').value);
  var rez = '';

  switch (num) {
    case 0:
      rez = ')';
      break;

    case 1:
      rez = '!';
      break;

    case 2:
      rez = '@';
      break;

    case 3:
      rez = '#';
      break;

    case 4:
      rez = '$';
      break;

    case 5:
      rez = '%';
      break;

    case 6:
      rez = '^';
      break;

    case 7:
      rez = '&';
      break;

    case 8:
      rez = '*';
      break;

    case 9:
      rez = '(';
      break;

    default:
      rez = 'Please pick a number from 0 to 9!';
      break;
  }

  document.getElementById('task_2_result').innerText = rez;
}

function task3() {
  var num1 = parseInt(document.getElementById('task_3_number1').value);
  var num2 = parseInt(document.getElementById('task_3_number2').value);
  var sum = 0;
  /*i = num1;
  while(i<=num2){
      sum+=i;
      i++;
  }*/

  for (i = num1; i <= num2; i++) {
    sum += i;
  }

  document.getElementById('task_3_result').innerText = sum;
}

function task4() {
  var num = parseInt(document.getElementById('task_4_number').value);
  var rez = '';
  var i = 1;

  while (i <= num) {
    if (num % i == 0) {
      rez += i + ' ';
    }

    i++;
  }

  document.getElementById('task_4_result').innerText = rez;
}

function task5() {
  var num1 = parseInt(document.getElementById('task_5_number1').value);
  var num2 = parseInt(document.getElementById('task_5_number2').value);
  var rez = '';
  var minNam = num1 < num2 ? num1 : num2;
  var i = 1;

  while (i <= minNam) {
    if (num1 % i == 0 && num2 % i == 0) {
      rez = i;
    }

    i++;
  }

  document.getElementById('task_5_result').innerText = rez;
}

function isPalindrom() {
  var num = parseInt(document.getElementById('task_6_number').value);
  var rez = '';
  var dig5 = '';
  var dig4 = '';
  var dig2 = '';
  var dig1 = '';

  if (num > 9999 && num < 100000) {
    dig5 = num % 10;
    dig4 = parseInt(num / 10) % 10;
    dig1 = parseInt(num / 10000);
    dig2 = parseInt((num - 10000 * dig1) / 1000);

    if (dig5 === dig1 && dig4 === dig2) {
      rez = 'This is palindrome number';
    } else {
      rez = 'This is not palindrome number';
    }
  } else {
    rez = 'Enter, please, five digit number';
  }

  document.getElementById('task_6_result').innerText = rez;
}

function amount() {
  var sum = document.getElementById('task_7_number').value;
  var sumPay = '';

  if (sum < 200) {
    sumPay = sum;
  } else if (sum >= 200 && sum < 300) {
    sumPay = sum - sum * 3 / 100;
  } else if (sum >= 300 && sum < 500) {
    sumPay = sum - sum * 5 / 100;
  } else if (sum >= 500) {
    sumPay = sum - sum * 7 / 100;
  }

  document.getElementById('task_7_result').innerText = sumPay;
}

function checkTen() {
  var dodatni = 0;
  videmni = 0;
  nuli = 0;
  parni = 0;
  neparni = 0;
  rezult = '';
  allNumbers = '';
  number = 0;
  i = 0;
  var limit = 10;

  while (i < limit) {
    number = parseInt(prompt('Enter number'));

    if (!isNaN(number)) {
      allNumbers += number + ', ';

      if (number === 0) {
        nuli++;
      } else {
        if (number > 0) {
          dodatni++;
        } else {
          videmni++;
        }
      }

      if (number % 2 === 0) {
        parni++;
      } else {
        neparni++;
      }

      i++;
    }
  }

  result = "\u0414\u043E\u0434\u0430\u0442\u043D\u0456: ".concat(dodatni, ", \u0432\u0456\u0434\u0454\u043C\u043D\u0456: ").concat(videmni, ", \u043D\u0443\u043B\u044C: ").concat(nuli, ",\u043F\u0430\u0440\u043D\u0456: ").concat(parni, ", \u043D\u0435\u043F\u0430\u0440\u043D\u0456: ").concat(neparni);
  document.getElementById('task_8_result').innerHTML = allNumbers + '<br>' + result;
}

function dayOfWeek() {
  var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  var i = 0;

  while (confirm("".concat(days[i], ". Do you want to see next day?"))) {
    i = (i + 1) % days.length;
  }
}