let num=7;
const prime=(num)=>{
    // let num=6;
    for(let i=2;i<num;i++){
        if(num%i==0){
            // console.log("false"
            return "not prime";
        }
    }
    return `${num} prime number`
}
console.log(prime(num))


//second largest number

const large=()=>{
    let arr=[2,3,6,1,9];
    let largest=0;
    let newArr=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            largest=arr[i]
            // console.log(largest,"large")
            newArr.push(largest)
            // console.log(newArr)
        }
    }
    // console.log(newArr.length-2)
    console.log(newArr[newArr.length-2])
    // console.log(l,"large")
}
large()


// function QuestionSeven() {
//     let array=[3,5,1,7,2,9,4]
//     var newArray = [];
//     var largest = 0; // first value
  
//     for (let i = 0; i < array.length; i++) {
//       console.log(largest,"largest", array[i], "array[i]")
//       if (array[i] > largest) {
//         largest = array[i];
//         // console.log(largest,"la")
//         newArray.push(largest);
//         console.log(newArray);
//       }
//     }
//     console.log("second largest : ", newArray[newArray.length - 2]);
//   }
  
// QuestionSeven()
console.log("equal")

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

console.log("Fibonacci series !");

const fib=(num)=>{
  let fibSeq=0;
  for(let i=0;i<=num;i++){
        //  console.log(i)
        fibSeq +=i
        console.log(fibSeq,"i",i)
  }
}
fib(10);
