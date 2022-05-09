function sum(){
    const a = 0.1;
    const b = 0.2;
    const rez = a+b;
    alert (rez.toFixed(1));
}

function sumStringNum(){
    const string = '1';
    const num = 2;
    const rez = +string + num;
    alert (rez);
}

function file() {
    const sizeFlashdrive = +prompt ('Enter the size of the flash drive in GB');
    const amountOfFile = Math.trunc (sizeFlashdrive*1024/820);
    alert (` ${amountOfFile} files are placed on the flash drive`);
}

function reverseNum (){
    const threeDigitNum = +prompt ('Enter three digit number');
    const lastDigit = threeDigitNum%10;
    const secondDigit = Math.floor((threeDigitNum/10)%10);
    const firstDigit = Math.floor((threeDigitNum/100)%10);
    const reverseNum = lastDigit*100+secondDigit*10+firstDigit;
    alert(reverseNum);
}

function interest(){
    const amountDeposit = +prompt ('Enter the amount of the deposit for two months');
    const interestTwoMonths = 2*5/12;
    const amountInterest = amountDeposit*interestTwoMonths/100;
    alert (`The amount of accrued interest ${amountInterest}`);
}

function numChocolatesRest (){
    const money = +prompt ('Enter how much money you have.');
    const chocolatePrice = +prompt ('Enter the price of the chocolate.');
    const numChocolate = Math.trunc (money/chocolatePrice);
    const pricePurchasedChocolate = numChocolate*chocolatePrice;
    const numRest = money-pricePurchasedChocolate;
    alert (`You can buy ${numChocolate} chocolate and your balance: ${numRest.toFixed(2)}`);
}

function num (){
    const num = +prompt ('Enter number');
    if (num<0){
        alert ('The number is negative');
    } else if (num>0){
        alert ('The number is positive');
    }else if (num===0)
    alert ('The number is 0');
}

function age (){
    const age = prompt ('Enter your age');
    let errText = '';
    if (isNaN(age)){
        errText = errText + 'Use numbers for age value';
    }
    if (age<0 || age>120) {
        errText = errText + 'Enter age valid value [0...120]';
    }
    if (errText !== ''){
        alert (errText);
    } else{
        alert ('Age is correct');
    }
}

function mod (){
    const num = +prompt ('Enter the number');
    let mod = '';
    let errText = '';
    if (isNaN(num)){
        errText = errText + 'Use number';
    }
    if (num >=0 ){
        mod = num;
    }else {
        mod = -num;
    } if (errText !== ''){
        alert(errText);
    } else {
        alert (`Module of the number is ${mod}.`);
    }
}

function checkTime() {
    debugger
    const hours = parseInt(prompt('Enter hours'));
    const minutes = parseInt(prompt('Enter minutes'));
    const sec = parseInt (prompt('Enter seconds'));
    let errText = '';
    if (isNaN(hours)){
        errText = errText + 'Use numbers for hours value ';
    }
    if (isNaN(minutes)){
        errText = errText + 'Use numbers for minutes value ';
    }
    if (isNaN(sec)){
        errText = errText + 'Use numbers for seconds value ';
    }
    if (hours < 0 || hours > 24) {
        errText = errText + 'Enter hours valide value [0...23]';
    }
    if (minutes < 0 || minutes > 60){
        errText = errText + 'Enter minutes valide value [0...59]';
    }
    if (sec < 0 || sec > 60){
        errText = errText + 'Enter seconds valide value [0...59]';
    }
    if (errText !== ''){
        alert(errText);
    }else {
        alert (`Time is correct: ${hours}:${minutes}:${sec}`);
    }
}

function nameMonth (){
    const numMonth = prompt ('Enter number of the month');
    switch (numMonth){
        case '1':
            alert ('January');
            break;
        case '2':
            alert ('February');
            break;
        case '3':
            alert ('March');
            break;
        case '4':
            alert ('April');
            break;
        case '5':
            alert ('May');
            break;
        case '6':
            alert ('June');
            break;
        case '7':
            alert ('July');
            break;
        case '8':
            alert ('August');
            break;
        case '9':
            alert ('September');
            break;
        case '10':
            alert ('October');
            break;
        case '11':
            alert ('November');
            break;
        case '12':
            alert ('December');
            break;
        default: 
        alert ('Please pick a number from 1 to 12!');
        break;
    }
}

function calc(){
    const symb = prompt('Enter operator +,-,* or /');
    const num1 = parseFloat(prompt('Enter first number'));
    const num2 = parseFloat(prompt('Enter second number'));
    let rez;
    switch(symb){
        case '+':
            rez= num1+num2;
            alert(`${num1}+${num2}=${rez}`);
            break;
        case '-':
            rez=num1-num2;
            alert(`${num1}-${num2}=${rez}`);
            break;
        case '*':
            rez=num1*num2;
            alert(`${num1}*${num2}=${rez}`);
            break;
        case '/':
            rez=num1/num2;
            alert(`${num1}/${num2}=${rez}`);
            break;
        default:
            alert('Invalide operator');
            break;
    }
}

function biggerNum(){
    const num1 = parseFloat(prompt('Enter first number'));
    const num2 = parseFloat(prompt('Enter second number'));
    const biggerNum = (num1 > num2) ? num1 : num2;
    alert(biggerNum);
}

function multipleNum(){
    const num = parseFloat(prompt('Enter number'));
    const multipleNum = (num%5==0) ? 'A multiple of five' : 'Not a multiple of five';
    alert(multipleNum);
}

function planet(){
    const planet = prompt ('Enter name of planet');
    const hello = (planet=='Earth' || planet=='earth') ? 'Hello, earthling' : 'Hello, alien!';
    alert (hello);
}