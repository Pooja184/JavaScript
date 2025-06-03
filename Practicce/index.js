// const occuCount=()=>{
//     let str="the dog is lazzy";
//     let obj={};
//     for(let i=0;i<=str.length;i++){
//         for(let j=i+1;j<=str.length;j++){
//             if(str[i]===str[j]){
//                 console.log(str[i])
//             }
//         }
//     }

// }
// occuCount();

    // const occuCount=()=>{
    //     let str="the dog is lazzy";
    //     let obj={};
    //     for(let i=0;i<str.length;i++){
    //         console.log(obj[str[i]])
    //     }

    // }
    // occuCount();

    const occuCount = () => {
        let str = "The quick brown box for the lazy dog";
        let obj = {};
    
        for (let i = 0; i < str.length; i++) {
            // let char = str[i];
            // If character already exists, increment count
            if (obj[str[i]]) {
            // console.log(obj[str[i]]);
                obj[str[i]]++;
            } else {
                // If character doesn't exist, start from 1
                obj[str[i]] = 1;
            }
        }
    
        console.log(obj); 
    }
    
    // occuCount();

const rever=()=>{
    let str="hello";
    let newStr="";
    for(let i=str.length-1;i>=0;i--){
        // console.log(str[i])
        newStr+=str[i];
    }
    console.log(newStr)
}
// rever();

const vowels=()=>{
    let str="Hello World";
    let count=0;
    for(let i=0;i<=str.length-1;i++){
        if(str[i]=='A' || str[i]=='a' || str[i]=='E' || str[i]=='e' || str[i]=='I' || str[i]=='i' || str[i]=='O' || str[i]=='o' || str[i]=='U' || str[i]=='u'){
            count++
        }
    }
    console.log(count);
}
// vowels();

const removeDuplicate=()=>{
    let arr=[1,4,2,6,1,2,1];
    let newArr=[];
    for(let i=0;i<=arr.length-1;i++){
        let isDuplicate=false;
        for(let j=0;j<=newArr.length-1;j++){
            // console.log(arr[i])
            if(arr[i]===newArr[j]){
                isDuplicate=true;
                break;
            }
        }
        if(isDuplicate===false){
            newArr[newArr.length]=arr[i]
        }
    }
    console.log(newArr)
}
// removeDuplicate()

const anagrams=()=>{
    let str1="silent";
    let str2="zidwaq";
    if(str1.length != str2.length){
        console.log("String is not anagram");
        return;
    }
    for(let i=0;i<=str1.length-1;i++){
        let isAnagram=false;
        for(let j=0;j<=str2.length-1;j++){
            if(str1[i]===str2[j]){
                isAnagram=true;
                break;
            }
        }
        if(isAnagram===true){
            console.log("Strings are anagrams")
        }else{
            console.log("Strings are not anagrams")
        }
    }
}
// anagrams()

const secLargest=()=>{
   let arr=[2,5,4,7,6,1];
   let max=Math.max(arr[0],arr[1]);
   let secMax=Math.min(arr[0],arr[1]);
//    console.log(secMax)
   for(let i=0;i<=arr.length-1;i++){
    if(arr[i]>max){
        secMax=max;
        max=arr[i]
    }
   }
   console.log(secMax);
}
// secLargest()

const primeNum=()=>{
    let n=20;
    if (n<2) {
        console.log("Please provide valid Range");
    }
    for(let i=2;i<=n;i++){
        let isPrime=true;
        for(let j=2;j<=Math.sqrt(i);j++){
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
// primeNum();

    

    

    