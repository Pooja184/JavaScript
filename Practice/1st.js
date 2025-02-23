// console.log("check string is good string or not")
// const goodString=(str)=>{
//      for(let i=0;i<=str.length-1;i++){
//         // console.log(str[i])
//         if((str[0]=="a" || "A") && str.length>3){
//             console.log("goodStr")
//         }else{
//             console.log("badStr")
//         }
//      }
// }
// goodString("app")

// console.log("Take the user'sname &age as input using prompts.Then return back the following statement to the user as an alert(by substituting their name&age):name is age years old.");
// const age=()=>{
//     // let name=prompt("Enter your name:");
//     // let uAge=prompt("Enter your age");
//     // alert(`${name} is ${uAge} year's old`);
// }
// age();

// console.log("write a program to check is 2 numbers have the same last digit.")

// const checkLastDigit=()=>{
    
// }

//  console.log("write a program to check is 2 numbers have the same last digit.")

//  const checkLastDigit=()=>{
//         let num1=39992;
//         let num2=767632;
//         if(num1.toString()[num1.toString().length-1]==num2.toString()[num2.toString().length-1]){
//             console.log("same last digit")
//         }else{
//             console.log("not same last digit")
//         }

//  }
//     checkLastDigit()


// let num1=39992;
// let num2=767631;

// const lastDigit=(num1,num2)=>{
       
//        for(let i=0; i<=num1.toString().length-1;i++){
//         console.log(num1.toString()[i])
//            for(let j=0; j<=num2.toString().length-1;i++){
//             console.log(num2.toString()[j])
//            }
//        }
// }
// lastDigit(num1,num2);


//swap to variables without using third
const swapVar=(a,b)=>{
    a=a+b;   // a=3a+2b=5a
    b=a-b;   // b=5a-2b=3b
    a=a-b   // a=5a-3b=2b
    console.log(a,b)
}
swapVar(3,2)

// a=3a+2b=5a
// b=5a-2b=3b
// a=5a-3b=2b

// 4a,6b
// a=4a+6b=10a
// b=10a-6b=4b
// a=10a-4b=6a

//prime number
// console.log("prime numbers")
// const primeNumber=()=>{
//     let num=8;
//     for(let i=1;i<=10;i++){
//         // console.log(num*i,i)
//         console.log(num*i%num==0)
//     }
// }
// primeNumber();

// console.log("prime numbers");
// const primeNumber=(num)=>{
//     for(let i=2;i<num;i++){
//         if(num%i==0){
//             console.log("not prime",num,i)
//         }else{
//             console.log("prime",num,i)
//         }
//     }
// }
// primeNumber(8);

function isPrime(num) {
    if (num < 2) return false; // 0 and 1 are not prime numbers

    for (let i = 2; i * i <= num; i++) { // Avoiding Math.sqrt()
        if (num % i === 0) return `${num} is not prime`; // If divisible, it's not prime
    }

    return `${num} is prime`; // If no divisor found, it's prime
}

// Example Usage
console.log(isPrime(20));  // true
console.log(isPrime(10)); // false
console.log(isPrime(13)); // true
