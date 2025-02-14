//Create a loop to find smallest number in an array

// 1.Given an range from 34 - 67 find out total count of even numbers and odd numbers use while loop only

function evenOdd(start,end){
    // let count=0;
    let evenNum=0; 
    let oddNum=0;
    // let i=34;
    while( start<=end ){
          if(start%2==0){
            evenNum++
          }else if(start%2 !=0){
            oddNum++
          }
          start++
    }
console.log(evenNum);
console.log(oddNum)    
}
evenOdd(34,67);


//Q Given an range from starting = 23, ending = 45,  find out count of even number by using function, while loop and conditional statement
console.log("Print even numbers count");
const even=(start,end)=>{
    let eNum=0;
    while(start<=end){
        if(start%2==0){
           eNum++;
        }
        start++;
    }
    console.log(eNum);
}
even(23,45);


//Given an array print all data from it.
console.log("Print data From Array")
let clss="Awdiz";
let arr=[34,5,"str",true,clss]

const arrPrint=()=>{
    console.log(arr);
}
arrPrint()

// let arr=[68,25,95,17,22,11];
// const UserAge=(arr)=>{
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]<18){
//             console.log("Not valid")
//         }else if(arr[i]==18){
//             console.log("learning");
//         }else{
//             console.log("Valid")
//         }
//     }
// }

// UserAge(arr);

//Write a JavaScript program that prints numbers from 10 to 1 in descending order using a while loop.
let i=10;
while(i>=1){
  console.log("numbers from 1 to 10",i)
  i--
}

//Write a JavaScript program using a while loop to find the sum of all even numbers between 1 and 20.
const sumE=()=>{
  let sum=0;
  let i=1,j=20;
  while(i<=j){
    if(i%2==0){
      // console.log(i)
      sum+=i;
    }
    i++;
  }
  console.log(sum)
}
sumE()

const sume=()=>{
  let sum=0;
   for(let i=0;i<=20;i++){
    if(i%2==0){
      // console.log(i)
      sum+=i
    }
   }
   console.log(sum,"sume")
}
sume()

//Prime numbers

console.log("Prime numbers");

const primeN=()=>{
  for(let i=0;i<=20;i++){
    if(i%1==0 && i%i==0){
      console.log(i)
    }
  }
}
primeN()
