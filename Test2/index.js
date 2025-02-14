//swap two variables without using a third variable
console.log("swap two variables without using a third variable")
const swap=(a,b)=>{
    a=a+b;
    b=a-b;
    a=a-b;
    console.log(a,b)
}
swap(3,2)
//find largest of three numbers
console.log("find largest of three numbers")
const large=()=>{
    let n1=34,n2=45,n3=88;
    if(n1>n2 && n1>n3){
        console.log(`${n1} is greater`)
    }else if(n2>n1 && n2>n3){
        console.log(`${n2} is greater`)
    }else{
        console.log(`${n3} is greater`)
    }

}
large()
console.log("check if a number is prime")

const prime=()=>{
    let num=7;
    for(let i=2;i<num;i++){
        if(num%i==0){
            // console.log("false"
            return "not prime";
        }
    }
    return `${num} prime number`
}
console.log(prime())
//reverse an array without using built in methods
console.log("reverse an array without using built in methods");
const reverseA=()=>{
    let arr=[1,3,5,6];
    let newArr=[];
    for(let i=arr.length-1;i>=0;i--){
     newArr[arr.length-i-1]=arr[i]
    }
    console.log(newArr)
}
reverseA()
//sum of all even numbers in an array
console.log("sum of all even numbers in an array")
const sumE=()=>{
    let arr=[2,4,1,2];
    let sum=0;
    for(let i=0;i<=arr.length-1;i++){
        if(arr[i]%2==0){
            sum+=arr[i]
        }
    }
    console.log(sum)

}
sumE()

//factorial
console.log("Factorial")
const fac=()=>{
    let num=5;
    let facN=1;
    for(let i=num;i>=1;i--){
        facN*=i
    }
    console.log(facN)
}
fac()

//numbers of vowels in string
console.log("numbers of vowels in string")
const vowels=(str)=>{
    for(let i=0;i<=str.length-1;i++){
        // console.log(str[i])
        if(str[i]=="o" || str[i]=="O" || str[i]=="a" || str[i]=="A" || str[i]=="e" || str[i]=="E" || str[i]=="i" || str[i]=="I" || str[i]=="u" || str[i]=="U"){
            console.log(`${str[i]} is vowel`)
        }
    }
}
vowels("awdiz")

// Q. 7 second largest number in an array
console.log("second largest number in an array")

var array = [10, 20, 4, 45, 99];

function QuestionSeven() {
  var newArray = [];
  var largest = 0; // first value

  for (let i = 0; i < array.length; i++) {
    // console.log(largest,"largest", array[i], "array[i]")
    if (array[i] > largest) {
      largest = array[i];
      newArray.push(largest);
      // console.log(newArray);
    }
  }
  console.log("second largest : ", newArray[newArray.length - 2]);
}

console.log(QuestionSeven(array));

// Q. 8 remove duplicate from array

var array = [1, 2, 2, 3, 4, 4, 5];

function QuestionEight(array) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    var equal = false;
    for (let j = i + 1; j < array.length; j++) {
      console.log(array[i], array[j]);

      if (array[i] == array[j]) {
        equal = true;
        console.log(equal);
      }
    }

    if (equal == false) {
      newArray.push(array[i]);
      console.log(newArray);
    }
  }
}

console.log(QuestionEight(array));


// Q. 10 Array is sorted or not

var array1 = [1, 2, 3, 4, 5];
var array2 = [1, 3, 2, 4, 5];

function QuestionTen(array) {
  let sorted = true;
  console.log(array, "array");

  for (let i = 0; i < array.length; i++) {
    if (i == 0 && array[i] < array[i + 1]) {
      console.log("sorted");
    } else if (
      i == array.length - 1 &&
      array[array.length - 1] > array[array.length - 2]
    ) {
      console.log("sorted");
    } else if (array[i] > array[i - 1] && array[i] < array[i + 1]) {
      console.log("sorted");
    } else {
      console.log("unsorted");
      sorted = false;
    }
  }

  return sorted;
}

console.log(QuestionTen(array1));

