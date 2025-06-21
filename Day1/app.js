// ---------------Data types-----------------------//
// 1. String
var str1="Hello World";
console.log(str1,typeof(str1));

var num=1234;
console.log(num , typeof(num));

var bool=true;
console.log(bool,typeof(bool));

//------------------Variables------------------//
var str1="hello";
console.log(str1);

let num1=132;
console.log(num1);

const age=21;
console.log(age);

// ----------------------scope--------------------//
var test=1;
const practice=()=>{
    let test2=2;
    const test3=3;
    console.log(test); //output - 1
}
// console.log(test2);//error-test2 is not defined
// console.log(test3);//error-test2 is not defined
practice();

//-----------------------operators-------------------//
let counter=1;
console.log(counter+1);
console.log(counter++);
console.log(counter+=1);
console.log(counter--);





