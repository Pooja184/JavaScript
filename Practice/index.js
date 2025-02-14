//swap to numbers without using third variable

const swap=(a,b)=>{
console.log(a,b)
    a=a+b;
    b=a-b;
    a=a-b;
    // console.log(b,"b")

    // console.log(a,"a")
    console.log(a,b)
}
swap(4,5);

console.log("write a function to reverse a string");

const reverseStr=()=>{
    let str="hello";
    for(let i=0;i<=str.length-1;i++){
        // console.log(i,"i")
        // console.log(str[i])
        console.log(str[str.length-1-i])
    }
}
reverseStr()

console.log("find the factorial of given number");
const fac=()=>{
    let num=4;
    let facN=1;
    for(let i=num;i>1;i--){
        facN*=i
    }
    console.log(facN)
}
fac();

console.log("Remove duplicates from array");

// const removeDp=()=>{
//     let arr=[2,5,2,3,8,5];
//     let newArr=[]
//     for(let i=0;i<=arr.length-1;i++){
//           console.log(arr[i],"i")
//           newArr.push(arr[i])
//           for(let j=arr[i];j<=newArr.length-1;j++){
//               console.log(newArr[j],"j",j)
//         }
//     }
    
//     console.log(newArr)
// }
// removeDp()
