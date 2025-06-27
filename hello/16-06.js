// Find second largest number in an array
// Q1
const secLargest = () => {
  let arr = [1, 8, 4, 5, 6, 3];
  let large = arr[0];
  let secLargest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > large) {
      let temp = large;
      large = arr[i];
      secLargest = temp;
    } else if (arr[i] > secLargest && arr[i] != large) {
      secLargest = arr[i];
    }
  }
  console.log(secLargest);
};
// secLargest();

//  Count Frequency of Characters in a String
// Q2

const frequency = () => {
  let str = "hadvyvwAbsadbchbweyu";
  let newStr = {};
  for (let i = 0; i < str.length; i++) {
    if (newStr[str[i]]) {
      newStr[str[i]]++;
    } else {
      newStr[str[i]] = 1;
    }
  }
  console.log(newStr);
};
// frequency();

// Q3

const armstrong = () => {
  let number = 370;
  // console.log(number.toString().length);
  let num = number.toString();
  let power = num.length;
  let sum = 0;
  for (let i = 0; i < power; i++) {
    let digit = parseInt(num[i]);
    sum += digit ** power;
  }
  console.log(sum);
  if (sum === number) {
    console.log("armstrong");
  } else {
    console.log("not");
  }
};
// armstrong();

// Q3

const armstrongOptimal = () => {
  let number = 25;
  let oldNum = number;
  let numStr = number.toString();
  let power = numStr.length;
  let sum = 0;
  while (number > 0) {
    let lastDigit = number % 10;
    // console.log(lastDigit)
    sum += Math.floor(lastDigit ** power);
    number = Math.floor(number / 10);
    // console.log(number)
  }
  // console.log(sum);
  if (sum === oldNum) {
    console.log(oldNum, "is armstrong");
  } else {
    console.log(oldNum, "is not armstrong");
  }
};
// armstrongOptimal();

//reverse a number
// Q4

const reverse = () => {
  let num = 1234;
  let rever = 0;
  while (num > 0) {
    let rem = num % 10;
    rever = rever * 10 + rem;
    // console.log(rever);
    num = Math.floor(num / 10);
  }

  console.log(rever);
};
// reverse();

// Remove Duplicates from Array without Inbuilt
// Q5

const removeDuplicates = () => {
  let arr = [1, 2, 1, 4, 2, 1];
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let isDuplicate=false;
    for(let j=0;j<newArr.length;j++){
        if(arr[i]===arr[j]){
            isDuplicate=true;
            break;
        }
    }
    if(isDuplicate===false){
        newArr[newArr.length]=arr[i];
    }

}
console.log(newArr)
};
// removeDuplicates();

// Q5

const removeDuplicatesBrut=()=>{
    let arr=[1,2,1,4,2,1];
    let newArr=[];
    for(let i=0;i<arr.length;i++){
            if(!newArr[arr[i]] ){
                newArr.push(arr[i]);
            }
    }

    console.log(newArr);
}
// removeDuplicatesBrut();

//Check if Two Strings are Anagrams
// Input: "listen", "silent"
// Output: true

// Q6

const anagrams=()=>{
  let str1="silent";
  let str2="listen";

  if(str1.length != str2.length){
    console.log("strings are not anagrams");
  }
  let isAnagram=false;
for(let i=0;i<str1.length;i++){
  // isAnagram=false;
  for(j=str2.length;j>0;j--){
    if(str1[i]===str2[j]){
      isAnagram=true;
      break;
    }else{
      isAnagram=false;
    }
  }
}
// console.log(isAnagram)
 if (isAnagram===true) {
  console.log("strings are anagrams");
 }else{
  console.log("Strings are not anagrams");
 }
}
// anagrams();

//  Print All Prime Numbers Between 1 to N
const primeNumbers=()=>{
  let n=20;
  for(let i=2;i<=n;i++){

    let isPrime=true;
    // j<i
    // j<=Math.sqrt(i)
    for(let j=2;j*j<=i;j++){
      if(i%j===0){
        isPrime=false;
        break;
      }
    }
    if (isPrime) {
      console.log(i);
    }
  }
}
// primeNumbers();

