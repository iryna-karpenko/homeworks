//var c;
//alert('Hello world');
//console.log('ewqtert');
//alert('Hello world2');
//const answer=confirm('Delete item?')
//console.log(answer);
/*if(confirm('Delete item?')){
    var q='w';
    alert('select YES')
} else {
    alert('select NO')
}
q=154654;
console.log(q);
const user_name = prompt('What is your name');
console.log(user_name);
if(user_name !=null){
    if(user_name !=''){
        alert(user_name)
    }
}*/

//hosting

//const a = 2;
//a = 5;//do not do this
/*console.log(a);

let b = 1;
b = 6;
console.log(b);

console.log(c);
c = 3;
console.log(c);*/

//--------------------------------------------------------------------------------------------
/*const integer = 12;
const float = 12.34;
const text = 'lorem ipsum'
const test2 = "I\'m";
const company = 'OOO "Fin and Mark"';
const isTrue = false;
const undef = undefined;
const Null = null;
const NoTANumber = NaN;
const arrow = [1,2,3,4];
const obj = {'a':1, 'b':2};
const func = function(){alert('1')}

console.log(integer, typeof integer);
console.log(float, typeof float);
console.log(text, typeof text);
console.log(isTrue, typeof isTrue);
console.log(undef, typeof undef);
console.log(Null, typeof Null);
console.log(NoTANumber, typeof NoTANumber);
console.log(arrow, typeof arrow);
console.log(obj, typeof obj);
console.log(func, typeof func);

//------------------------------------------------------------------------------------------------

function sum10(a) {
    return a+10
}

console.log (sum10(1))
console.log (sum10(20))
console.log (sum10('30'))*/



function myPow(){
    debugger
    const num = parseInt(prompt('Enter integer number'));
    const num2 = parseInt(prompt('Enter integer number 2'));
    const rez = num**num2;
    //const rez = Math.pow(num, num2);
    alert(rez);
}
//const PI = Math.PI;


function avgNum(){
    const num = parseInt(prompt('Enter integer number'));
    const num2 = parseInt(prompt('Enter integer number 2'));
    const rez = (num+num2)/2;
    alert(rez);
}

function squareNum(){
    const num = parseInt(prompt('Enter side of the square'));
    const rez = num**2;
    alert(rez);
}

function km2ml(){
    const km = parseInt(prompt('Enter km'));
    const K = 0.621371;
    const ml = km*K;
    alert(` it is ${ml} ml`);
}

function calc(){
    const num1 = parseInt(prompt('Enter integer number 1'));
    const num2 = parseInt(prompt('Enter integer number 2'));
    const action = prompt('Enter action');
    let rez;
    if(action==='+'){
        rez=num1+num2;
    } else if (action==='-'){
        rez=num1-num2;
    } else if (action==='*'){
        rez=num1*num2;
    }else if (action==='/'){
        rez=num1/num2;
    }else{
        alert('invalid character')
    }

    if(rez !=undefined){
    alert(`result-${rez}`);
}
}

function findX(){
    const a = parseInt(prompt('Enter integer number 1'));
    const b = parseInt(prompt('Enter integer number 2'));
    const x = b * (-1) / a;
    alert(`x= ${x}`);
}

function timeToDayEnd(){
    const hour = +prompt('Enter hour');
    const minutes = +prompt('Enter minutes');
    const minutesTotalLeft = ((24*60) - (hour * 60 + minutes));
    const hoursLeft = parseInt (minutesTotalLeft / 60);
    const minutesLeft = minutesTotalLeft - hoursLeft * 60;

    alert(`hoursLeft: ${hoursLeft}, minutesLeft ${minutesLeft}`);
}

function digit2(){
    const abc = +prompt('Enter three-digit number');
    const rez = parseInt((abc % 100) / 10);
    alert (`Second number: ${rez}`);
}