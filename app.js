//Data Types

let a = 24;
let b = 10;

let name = "monik";
let char = 'm';

//Arithmetic & Logical Statements

let sum = a+b;
console.log(sum);

let minus = a-b;
console.log(minus);

let multiply = a*b;
console.log(multiply);

let divide = a / b;
if (b != 0) {
    
} else{
    console.log("Error: Division by zero is not allowed.");
    return;
}
console.log(divide);

//Conditional Statements

let age = 16;
if (age >= 24) {
    console.log("cutiepayyyy");
} else {
    console.log("swetiepay");
}

let mamamiya = 'A';

switch (mamamiya) {
  case 'A':
    console.log('tahilak');
    break;
  case 'B':
    console.log('kayooo');
    break;
  case 'C':
    console.log('emeeee');
    break;
  case 'D':
    console.log('ihihih');
    break;
  default:
    console.log('papiyyy');
}

//LOOPS

for (let n = 0; n < 5; n++) {
    console.log("For Loop "+n);
}

let v = 0;
while (v < 5) {
    console.log("While Loop "+v);
    v++;
}

//Functional Programming

function showOddorEven(){
    if(a%2==0){
        let result = console.log("Odd");
    } else {
        let result = console.log("Even");
    }
} 
function showPrime(){
    if(a%2==1){
        let result = console.log("Number is Prime");
    } else {
        let result = console.log("Number is not Prime");
    }
} 
console.log(showOddorEven());
console.log(showPrime());