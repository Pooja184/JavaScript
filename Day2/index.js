//Assignment Q1
// write a for loop to print numbers from 1 to 10
console.log("1 to 10 numbers")
for (let i = 1; i <= 10; i++){
      console.log(i);   
}

// Use a for loop to print all even numbers from 1 to 20 
console.log("Even numbers")
for(let i=1;i<=20;i++){
    if(i%2==0){
        console.log(i)
    }
}

//write a loop to calculate the sum of the first 10 natural numbers

console.log("Natural numbers sum");

let sum=0;
for(let i=0;i<=10;i++){
    sum+=i;
}
console.log(sum)

// use a for loop to print all numbers divisible by 5 between 1 to 50
console.log("Numbers divisible by 5")
for(let i=1; i<=50;i++){
    if(i%5==0){
        console.log(i)
    }
}
console.log("_____________________________________________")

//write a loop to calculate the factorial of a given number
console.log("Factorial of 5")
let fac=1;
for(let i=5;i>=1;i--){
    fac*=i;
}
console.log(fac)
console.log("_____________________________________________")

//Use a for loop with a conditional to print all odd numbers between 1 to 20
console.log("Odd numbers between 1 to 20")
for(let i=1;i<=20;i++){
    if(i%2!=0){
        console.log(i)
    }
}
console.log("_____________________________________________")

//write a loop to calculate the sum of all even numbers between 1 to 100

console.log("Sum of all even numbers between 1 to 100")

let eSum=0;
for(let i=1;i<=100;i++){
    if(i%2==0){
        eSum+=i
    }
}
console.log(eSum)
console.log("_____________________________________________")


//write a loop to generate multiplication table for a given number
console.log("Multiplication table")
let num=10;
for(let i=num;i<=num*10;i+=num){ 
    console.log(i)
}
console.log("_____________________________________________")

//Use a loop and conditionals to print fibonacci sequence up to n terms
console.log("fibonacci sequence up to n terms")
let fNum=10;
let a=0, b=1,fib;
for(let i=0;i<=fNum;i++){
    if(i===0){
        console.log(a)
    }else if(i===1){
        console.log(b)
    }else{
       fib=a+b;
       console.log(fib)
      a=b;
      b=fib;
    }
}
// console.log(fib)
console.log("_____________________________________________")

//perfect square
console.log("Perfect square")
let sNum=10;
for(let i=1;i<=sNum;i++){
    console.log(i*i);
}
console.log("_____________________________________________")

//use a for loop and conditionals to print all numbers divisible by both  3 and 5 between 1 to 100
console.log("Numbers divisible by both 3 and 5 between 1 to 100")
for(let i=1;i<=100;i++){
    if(i%3==0){
        console.log(i,"divisible by 3");
    }else if(i%5==0){
        console.log(i,"divisible by 5")
    }
}
console.log("_____________________________________________")

//create a loop to find smallest number in an array
// let arr=[3,6,4,1];
// let smaller=arr[0]
// for(let i=0;i<=arr.length;i++){
//     if(smaller>=0){

//     }
// }

//find vowels in string using for loop
console.log("find vowels in string using for loop")
console.log("_____________________________________________")
let str="Avowel";

for(i=0;i<=str.length;i++){
    let char=str[i]
    if(char=="A" || char=="a" || char=="e" || char=="E" || char=="char" || char=="I" || char=="O" || char=="O" || char=="U" || char=="u"){
        console.log(`string contains letter ${char}, so it is vowel`)
    }else{
        console.log("Does not contains vowels")
    }
}

//print table
let numm=4;
for(i=1;i<=10;i++){
    console.log(i*numm)
    
}
//use a loop to check if a given number is prime


