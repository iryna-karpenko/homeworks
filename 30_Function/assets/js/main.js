//Способи створення функції: FunctionDeclaration, FunctionExpression

function getAndCheck(inputId = '') {
    let number = document.getElementById(inputId).value;
    if (number != "") {
        number = parseInt(number);
        if (!isNaN(number)) {
            return number;
        } else {
            return false
        }
    } else {
        return false;
    }
}

function showResult(result, whereId) {
    document.getElementById(whereId).innerHTML = result;
}

function isNumberPerfect(n) {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            sum += i;
        }
    }
    return sum === n;
    /*  if(sum ===n){
          return true;
      }else{
          return false;
      }*/
}

function task1() {
    let num = 0;
    rez = '';
    if (getAndCheck('task_1_number') !== false) {
        num = getAndCheck('task_1_number');
    } else {
        return false;
    }
    if (isNumberPerfect(num)) {
        rez = `Number ${num} is perfect`;
    } else {
        rez = `Number ${num} is not perfect`;
    }
    showResult(rez, 'task_1_result');
}

//Створи функцію, яка буде виводити кількість переданих їй аргументів.
function amountArg(a, b) {
    console.log(arguments.length);
}
amountArg(1, 2, 2, 3, 56);

//Напиши функцію, яка приймає 2 числа і повертає : -1, якщо перше число менше, ніж друге; 1 - якщо перше число більше, ніж друге; 0 - якщо числа рівні.
function compareNum(inputId1, inputId2) {
    let number1 = document.getElementById(inputId1).value;
    let number2 = document.getElementById(inputId2).value;

    if (number1 === number2) {
        return 0;
    }
    if (number1 > number2) {
        return 1;
    } else {
        return -1;
    }
}

function showRes(result, whereId) {
    document.getElementById(whereId).innerHTML = result;
}

function task2() {
    rez = compareNum('task_2_number', 'task_3_number');
    showRes(rez, 'task_2_result');
}

//Напиши функцію, яка обчислює факторіал переданого їй числа.

function factorial() {
    let i, num, f;
    f = 1;
    num = document.getElementById("task_4_number").value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }
    return f;
}

function task4() {
    rez = factorial();
    showResult(rez, 'task_4_result');
}

//Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.

function oneNumber(inputId1, inputId2, inputId3) {
    num = '';
    num1 = document.getElementById(inputId1).value;
    num2 = document.getElementById(inputId2).value;
    num3 = document.getElementById(inputId3).value;

    num = '' + num1 + num2 + num3;
    return num;
}

function task5() {
    rez = '';
    rez = oneNumber('task_5_number1', 'task_5_number2', 'task_5_number3');
    showResult(rez, 'task_5_result');
}

//Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу.
//Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

function calcSquare(widthId, lengthId) {
    s = '';
    a = document.getElementById(widthId).value;
    b = document.getElementById(lengthId).value;

    if (a !== '' && b !== '') {
        s = a * b;
    } else {
        if (a == '') {
            s = b * b;
        } else {
            s = a * a;
        }
    }
    return s;
}

function task6() {
    rez = '';
    rez = calcSquare('width', 'length');
    showResult(rez, 'task_6_result');
}

//Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. 
//Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.
function perfectNumFromRange(nmin, nmax) {
    min = document.getElementById(nmin).value;
    max = document.getElementById(nmax).value;

    let perfNum = [];
    for (i = min; i <= max; i++) {
        if (isNumberPerfect(i)) {
            perfNum.push(i);
        }
    }
    return perfNum;
}

function task7() {
    debugger
    rez = '';
    rez = perfectNumFromRange('begin', 'end');
    showResult(rez, 'task_7_result');
}