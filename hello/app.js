// -------------------------------Beginner Level --------------------------------------//


// Check if two strings are anagrams
//Count frequency of each element in array
//Check if string is palindrome

const reverseStr = () => {
  let str = "hello";
  for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);
  }
};
// reverseStr();

const reverseOptimize = () => {
  let str = "hello";

  let arr = [];
  for (let i = 0; str[i] !== undefined; i++) {
    arr[i] = str[i];
  }

  let start = 0;
  let end = str.length - 1;
  // console.log(end);
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  // console.log(str);

  let reverseStr = "";
  for (let i = 0; arr[i] !== undefined; i++) {
    reverseStr += arr[i];
  }
  console.log(reverseStr);
};
// reverseOptimize();

const prime = () => {
  let num = 12;
  let nd = 0;
  for (let i = 1; i <= num/2; i++) {
    if (num % i === 0) {
      nd++;
    }
    if(nd>2){
      break;
    } 
  }
  if (nd > 2) {
      console.log(num, " not prime");

    } else {
      console.log(num, "prime");
    
    }
  console.log(nd);
};
// prime();

const primeN = () => {
  let num = 12;
  let isPrime = true;
  for (let i = 2; i < num / 2; i++) {
    if (num % i === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    console.log(num, "is Prime");
  } else {
    console.log(num, "is Not prime");
  }
};
// primeN();

const secMax = () => {
  let arr = [2, 3, 1, 5, 6, 7];
  let max = 0;
  let secMax = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secMax = max;
      max = arr[i];
    } else if (arr[i] > secMax && arr[i] != max) {
      secMax = arr[i];
    }
  }
  console.log(secMax);
};
// secMax();

const facto = () => {
  let num = 5;
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  console.log(fact);
};
// facto();

const maxNum = () => {
  let arr = [2, 3, 10, 6, 9];
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(max);
};
// maxNum();

const removeDuplicates = () => {
  let arr = [1, 4, 1, 1, 2, 4];
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArr[arr[i]]) {
      newArr[newArr.length] = arr[i];
    }
  }
  console.log(newArr);
};
// removeDuplicates(); //wrong

const removeDuplicate = () => {
  let arr = [1, 3, 2, 1, 3];
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < newArr.length; j++) {
      if (arr[i] === newArr[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      newArr[newArr.length] = arr[i];
    }
  }
  console.log(newArr);
};
// removeDuplicate();

const anagram = () => {
  let str1 = "hello";
  let str2 = "lloeh3";

  if (str1.length != str2.length) {
    console.log("Strings are not anagrams");
  } else {
    let isAnagram = false;
    for (let i = 0; i < str1.length; i++) {
      for (let j = 0; j < str2.length; j++) {
        if (str1[i] === str2[j]) {
          isAnagram = true;
          break;
        } else {
          isAnagram = false;
        }
      }
    }
    if (isAnagram) {
      console.log("Strings are anagrams");
    } else {
      console.log("Strings are not anagrams");
    }
  }
};
// anagram();

const frequencyOfEle=()=>{
  let arr=[1,2,5,1,2,3,2];
  let freq={};
    
  for(let i=0; arr[i] !==undefined;i++){
    let count=arr[i];
    if(freq[count]===undefined){
      freq[count]=1;
    }else{
      freq[count] += 1;
    }
  }
  console.log(freq);

}
// frequencyOfEle();

const palindrome=()=>{
  let str='madam';
  let start=0;
  let end=str.length-1;
  let isPalindrome=false;
  // console.log(start,end);
  while(start<end){
    if(str[start]===str[end]){
      isPalindrome=true;
    }else{
      isPalindrome=false;
    }
    start++;
    end--;
  }
if(isPalindrome){
  console.log("String is palindrome");
}else{
  console.log("String is not palindrome");
}
}
// palindrome();

//---------------------------------------Intermediate Level-------------------------------------------//

// Flatten nested array
// Input: [1, [2, [3, 4]], 5] → Output: [1, 2, 3, 4, 5]

// Rotate array to left by 1 position
// Input: [1, 2, 3, 4] → Output: [2, 3, 4, 1]

// Sum of digits of a number
// Input: 123 → Output: 6

// Merge two sorted arrays
// Input: [1, 3, 5] and [2, 4, 6] → Output: [1, 2, 3, 4, 5, 6]

// Find missing number in array 1 to N
// Input: [1, 2, 4, 5] → Output: 3


const flattenArr=()=>{
  let arr= [1, [2, [3, 4]], 5];

}

// flattenArr(); //not completed

const rotateArr=()=>{
    let arr=[1,2,3,4,5];
    // let newArr=[];
    let firstEl=arr[0];
    for(let i=0;i<arr.length;i++){
        // newArr[newArr.length]=arr[i]
        arr[i]=arr[i+1];
    }
    arr[arr.length-1]=firstEl;
    console.log(arr);
}
// rotateArr();