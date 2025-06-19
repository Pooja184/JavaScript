// Find second largest number in an array
const secLargest=()=>{
    let arr=[1,8,4,5,6,3];
    let large=arr[0];
    let secLargest=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>large){
            let temp=large;
            large=arr[i];
            secLargest=temp;
        }else if(arr[i]>secLargest && arr[i] != large){
            secLargest=arr[i];
        }
    }
    console.log(secLargest);
}
// secLargest();


//  Count Frequency of Characters in a String

const frequency=()=>{
    let str="hadvyvwAbsadbchbweyu";
    let newStr={};
    for(let i=0;i<str.length;i++){
        if(newStr[str[i]]){
           newStr[str[i]]++;
        }else{
            newStr[str[i]]=1;
        }
    }
    console.log(newStr);
}
// frequency();

const armstrong=()=>{
    let number=370;
    // console.log(number.toString().length);
    let num=number.toString();
    let power=num.length;
    let sum=0;
    for(let i=0;i<power;i++){
        let digit=parseInt(num[i]);
        sum+=digit ** power;
    }
    console.log(sum)
    if(sum===number){
        console.log("armstrong");
    }else{
        console.log("not");
    }
}
// armstrong();

const armstrongOptimal=()=>{
    let number=25;
    let oldNum=number;
    let numStr=number.toString();
    let power=numStr.length;
    let sum=0;
    while(number>0){
        let lastDigit=number%10;
        // console.log(lastDigit)
        sum+=Math.floor(lastDigit ** power);
        number=Math.floor(number/10);
        // console.log(number)
    }
    // console.log(sum);
    if(sum===oldNum){
        console.log(oldNum,"is armstrong");
    }else{
        console.log(oldNum,"is not armstrong");

    }
}
armstrongOptimal();