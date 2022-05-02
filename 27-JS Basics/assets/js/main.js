const name = 'Iryna Karpenko'; 
const $nameSurname = 'Iryna Karpenko';
const firstSecondName = 'Iryna Karpenko'; //camelCase
const FirstSecondName = 'Iryna Karpenko'; //PascalCase
const _firstSecondName = 'Iryna Karpenko';
const first_second_name = 'Iryna Karpenko';//snake_case

/*wrong names*/
//const name surname = 'Iryna Karpenko'; 
//const name-surname = 'Iryna Karpenko';-kebab-case
/*const 2name = 'Iryna Karpenko'*/
/*const class = 'Iryna Karpenko';-reserved name and doesn't make sense*/



function digit5(){
    const digit = +prompt('Enter five-digit number');
    const fifthDigit = (digit % 10)*10000;
    const digit4 = parseInt (digit/10);
    const rez = fifthDigit+digit4;
    alert (`Last digit is first: ${rez}`);
}

function salary(){
    const sumSales = prompt('Enter the amount of sales per month');
    const rez = 250 + sumSales*10/100;
    alert (`Salary ${rez} $`);
}

function userName(){
    const name = prompt('What is your name?');
    alert (`"Hello ${name}!"`);
}

function age(){
    const birthYear = +prompt('Enter your year of birth');
    const year = 2022;
    const age = year - birthYear;
    alert (`Your age ${age}`);
}

function perimeter(){
    const sideLength = +prompt('Enter side length');
    const perimeter = 4*sideLength;
    alert (`Perimeter of the square: ${perimeter}`);
}

function circleArea(){
    const radius = +prompt('Enter radius of the circle');
    const area = Math.PI*Math.pow(radius, 2);
    alert (`Area of the circle ${area}`);
}

function speed(){
    const s = +prompt('Enter distance km');
    const t = +prompt('Enter time hours');
    const v = s / t;
    alert (`Speed ${v} km/h`);
}

function converter(){
    const USD = +prompt('Enter the amount in dollars');
    const rateEUR = 0.948289;
    const EUR = USD*rateEUR;
    alert (`Your amount in euro ${EUR}`);
}