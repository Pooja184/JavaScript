//ternary operator
console.log("_____________________________________")
console.log("Ternary operator example")
const terOp=()=>{
    let age=19;
    let check= age>=18 ? "eligible for voting" :"Not eligible for voting"
    console.log(check)
}
terOp();
console.log("_____________________________________")
console.log("Ternary operator example")
const example2=()=>{
    let score=87;
    let result= score>=90 ? "A":
                score>80 ?"B":"c"
    console.log("grade",result)
}
example2()

console.log("_____________________________________")
console.log("do While example")
// do while
const doWhile=()=>{
    let i=0
    do {
        console.log("inside do while",i)
        i++
    } while (i<=5);  
}
doWhile();

console.log("_____________________________________")
console.log("For in loop with array example")
const forin=()=>{
    let arr=["hello","World",1,4];
    for(let data in arr){
        console.log(`${data} index, ${arr[data]} value`)
    }
}
forin()

console.log("_____________________________________")
console.log("For of loop example")
const forOf=()=>{
    let arr=[4,3,7,88];
    for(let key in arr){
        if(arr[key]%2==0){
            console.log(`${arr[key]} is even`)
        }
        // console.log(arr[key])
    }
}
forOf()

console.log("_____________________________________")
console.log("for in loop with object")
const forInObject=()=>{
    let data={name:"awdiz" , age:10, location:"vashi"}
    for(let key in data){
        console.log(data[key])
    }
}
forInObject()

console.log("_____________________________________")
console.log("this keyword")
const thisK=()=>{
    const institute={
        name:"john",
        surname:"doh",
        greet:()=>{
            console.log(`hello ${this.name} ${this.surname}`);
        },
        traditionalGreet:function(){
            console.log(`hello ${this.name} ${this.surname}`)
        }

    }
    institute.greet();
    institute.traditionalGreet();
}
thisK()



console.log("_____________________________________")
console.log("Self invoking functions")

(function(){
    console.log("I'm Self invoking function");
})();

console.log("_____________________________________")
console.log("class & constucture")
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age
    }
    greet(){
        return  `Hii, I'm ${this.name} and my age is ${this.age}`;
    }
}

const newPerson=new Person("alice",21);
console.log(newPerson.greet());
