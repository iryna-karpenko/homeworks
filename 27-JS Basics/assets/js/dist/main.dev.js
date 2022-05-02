"use strict";

var name = 'Iryna Karpenko';
var $nameSurname = 'Iryna Karpenko';
var firstSecondName = 'Iryna Karpenko'; //camelCase

var FirstSecondName = 'Iryna Karpenko'; //PascalCase

var _firstSecondName = 'Iryna Karpenko';
var first_second_name = 'Iryna Karpenko'; //snake_case

/*wrong names*/
//const name surname = 'Iryna Karpenko'; 
//const name-surname = 'Iryna Karpenko';-kebab-case

/*const 2name = 'Iryna Karpenko'*/

/*const class = 'Iryna Karpenko';-reserved name and doesn't make sense*/

function digit5() {
  var digit = +prompt('Enter five-digit number');
  var fifthDigit = digit % 10 * 10000;
  var digit4 = parseInt(digit / 10);
  var rez = fifthDigit + digit4;
  alert("Last digit is first: ".concat(rez));
}

function salary() {
  var sumSales = prompt('Enter the amount of sales per month');
  var rez = 250 + sumSales * 10 / 100;
  alert("Salary ".concat(rez, " $"));
}

function userName() {
  var name = prompt('What is your name?');
  alert("\"Hello ".concat(name, "!\""));
}

function age() {
  var birthYear = +prompt('Enter your year of birth');
  var year = 2022;
  var age = year - birthYear;
  alert("Your age ".concat(age));
}

function perimeter() {
  var sideLength = +prompt('Enter side length');
  var perimeter = 4 * sideLength;
  alert("Perimeter of the square: ".concat(perimeter));
}

function circleArea() {
  var radius = +prompt('Enter radius of the circle');
  var area = Math.PI * Math.pow(radius, 2);
  alert("Area of the circle ".concat(area));
}

function speed() {
  var s = +prompt('Enter distance km');
  var t = +prompt('Enter time hours');
  var v = s / t;
  alert("Speed ".concat(v, " km/h"));
}

function converter() {
  var USD = +prompt('Enter the amount in dollars');
  var rateEUR = 0.948289;
  var EUR = USD * rateEUR;
  alert("Your amount in euro ".concat(EUR));
}