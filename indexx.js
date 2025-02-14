// // let i;
// // for(i=1; i<=20; i++) {
// //     if(i %2== 0){

// //         console.log(i)
// //     }
// // }

// // let n = 2;
// for(let i=1;i<=10;i++) {
//     if(i%i!=0){
//         console.log(i)
//     }
//     // console.log(n*i);
// }

// let count=0;
// for(let i=43; i>=11;i--){
//     if(i%2===0){
//         count++
//     }
// }
// console.log(count)


//print even number between range of 35 to 79
// for(let i=35;i<=79;i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }

// Q1  Print numbers from 1 to 50 
// for(let i=1;i<=50;i++){
//     console.log(i);
// }

// Q2 Print even and odd numbers separately (1 to 30)

// for(let i=1;i<=30;i++){
//     if(i%2===0){
//         console.log("even numbers",i)
//     }else{
//         console.log("Odd numbers",i)
//     }
// }


// Q3 Print multiples of 5 from 1 to 50.
// for(let i=0;i<=50;i+=5){
//     //  let j=i*5
//       console.log(i)
// }

//Q4 Sum of numbers from 1 to 100.

// let sum=0;
// for(let i=1;i<=100;i++){
//     sum+=i
// }
// console.log(sum)

//Print "FizzBuzz" for multiples of 3 and 5 (1 to 50).

for(let i=1;i<=50;i++){
    if(i%3==0 && i%5==0){
        console.log(`${i} FizzBuzz`)
    }
    else if(i%3==0){
        console.log(`${i} 3 buzz`)
    }else if(i%5==0){
        console.log(`${i} 5 fizz`)
    } 
    else{
        console.log(i)
    }
}

