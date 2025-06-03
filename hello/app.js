const reverseStr=()=>{
    let str='hello';
    for(let i=str.length-1;i>=0;i--){
        console.log(str[i]);
    }
}
// reverseStr();

const reverseOptimize=()=>{
    let str='hello';
    
    let arr=[];
    for(let i=0;str[i] !== undefined;i++){
        arr[i] =str[i];
    }

    let start=0;
    let end=str.length-1;
    // console.log(end);
    while(start<end){
        let temp=arr[start];
        arr[start]=arr[end];
        arr[end]=temp;
        start++;
        end--;
    }
    // console.log(str);

    let reverseStr='';
    for(let i=0;arr[i]!==undefined;i++){
        reverseStr +=arr[i];
    }
    console.log(reverseStr);
}
// reverseOptimize();

const prime=()=>{
    let num=12;
    let md=0;
    for(let i=1;i<=num;i++){
        if(num%i===0){
            md++;
        }
        if(md>2){
            console.log(num," not prime");
            break;
        }else{
            console.log(num,"prime");
            break;
        }
        
    }
    console.log(md);
}
// prime();

const primeN=()=>{
    let num=12;
    let isPrime=true;
    for(let i=2;i<num/2;i++){
        if(num%i===0){
            isPrime=false;
        }
    }
    if(isPrime){
        console.log(num,"is Prime");
    }else{
        console.log(num,"is Not prime");
    }
}
// primeN();