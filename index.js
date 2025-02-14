
// Assignment question 1 = Write a program to check if a given number is even or odd
console.log("If else Questions")
console.log("Write a program to check if a given number is even or odd")
let number = 4;
if(number%2==0){
    console.log("Number is even");
}else{
    console.log("Number is odd")
}


// Assignment question 2 = W.A.P to check if a person is eligible to vote based on their age
console.log("W.A.P to check if a person is eligible to vote based on their age")

let age= 19;
if(age >=18){
    console.log("Eligible for voting");
}else{
    console.log("Not eligible");
}



// Assignment question 3 = W.A.P to find the largest of three numbers
console.log("W.A.P to find the largest of three numbers")

 let num1=5,num2=6,num3=1;

// //step-1 check if num1 > num2 & num3
// //step-2 check num2>num1 & num3
// //else num3 >

if(num1>num2 && num1>num3){
    console.log(`${num1} is greater`);
}else if(num2>num1 && num2> num3){
    console.log(`${num2} is greater`);
}else{
    console.log(`${num3} is greater`)
}

// Assignment question 4 = W.A.P to determine if a given year is a leap year or not
console.log("W.A.P to determine if a given year is a leap year or not")

let year=2001;
if(year%4==0){
    console.log(`${year} is leap year`)
}else{
    console.log(`${year} is not a leap year`)
}

// Assignment question 5 = W.A.P to check if a character is vowel or consonant
console.log("W.A.P to check if a character is vowel or consonant")

let char="y";

if(char=="a" || char=="A" ||char== "e"|| char=="E"||char== "i" ||char=="I"||char== "o" || char== "O" ||char=="u" ||char=="U"){
   console.log("Vowel")
}else{
    console.log("Consonant")
}

// Assignment question 6 = W.A.P to classify a number as a positive , negative or zero
console.log("W.A.P to classify a number as a positive , negative or zero")

let n=4

if (n>0) {
    console.log(`${n} is positive`)
}else if(n<0){
    console.log(`${n} is negative`)
}else{
    console.log(`${n} is zero`)
}

// Assignment question 7 = W.A.P to determine whether a student passed or failed based on their score (pass marks:40)
console.log("W.A.P to determine whether a student passed or failed based on their score (pass marks:40)")

let studentScore=44

if(studentScore>=40){
    console.log("Pass")
}else{
    console.log("Fail")
}

// Assignment question 8 = W.A.P to calculate the grade of a student based on the following condition : Score >=90:Grade A, Score >=80:Grade b, Score >=70:Grade c, Score <70:Grade f
console.log("W.A.P to calculate the grade of a student based on the following condition : Score >=90:Grade A, Score >=80:Grade b, Score >=70:Grade c, Score <70:Grade f")

let sScore= 85;

if(sScore>=90){
    console.log("Grade A")
}else if(sScore>=80){
    console.log("Grade B")
}else if(sScore>=70){
    console.log("Grade C")

}else{
    console.log("Grade F")
}

// Assignment question 9 = W.A.P to  check if a given string contains the word "JavaScript"
console.log("W.A.P to  check if a given string contains the word javascript")

let word="JavaScript"

if(word=="JavaScript"){
    console.log("string contain word JavaScript")
}else{
    console.log("string does not contain word JavaScript")
}


// Assignment question 10 = W.A.P to validate if a number is within the range of 10 and 100
console.log(" W.A.P to validate if a number is within the range of 10 and 100")

let n6=44

if(n6>=10 && n6<=100 ){
    console.log(`${n6} is within range of 10 and 100`)
}else{
    console.log(`${n6} is not in range between 10 and 100`)
}


//Switch Q

// Assignment question 1 = W.A.P to print the day of the week based on a number 
console.log("Switch case Questions")
console.log("W.A.P to print the day of the week based on a number")

let day=7

switch (day) {
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thrusday")
        break
    case 5:
            console.log("Friday")
            break;
    case 6:
            console.log("Saturday")
            break
    case 7:
        console.log("Sunday")
        break;
    default:
        console.log("Invalid")
        break;
}

// Assignment question 2 = W.A.P to print the day of the week based on a number 
console.log("W.A.P to print the day of the week based on a number")

let op="/";
let nn1=3;
let nn2=7;

switch (op) {
    case "+":
        console.log(`The addition of two number is ${nn1+nn2}`)
        break;
    case "-":
        console.log(`The subtraction of two number is ${nn1-nn2}`)
        break;
    case "*":
        console.log(`The multiplication of two number is ${nn1*nn2}`)
        break;
    case "/":
        console.log(`The division of two number is ${nn1/nn2}`)
        break;
    default:
        console.log("Invalid")
        break;
}

// Assignment question 3 = W.A.P to display the season based on the month number
console.log("W.A.P to display the season based on the month number")

let month=4;

switch (month) {
    case 1:
        console.log("Jan - Winter")
        break;
    case 2:
        console.log("Feb - Winter")
        break;
    case 3:
        console.log("March- Winter")
        break;
    case 4:
        console.log("April- Summer")
        break;
    case 5:
        console.log("May - Summer")
        break;
    case 6:
        console.log("june- Summer")
        break;
    case 7:
        console.log("Jully - Monsoon")
        break;
    case 8:
        console.log("Aug- Monsoon")
        break;
    case 9:
        console.log("sep - Monsoon")
        break;
    case 10:
        console.log("Oct - Monsoon")
        break;
    case 11:
        console.log("Nove- Winter")
        break;
    case 12:
        console.log("Dec - Winter")
        break;


    default:
        console.log("Invalid")
        break;
}

// Assignment question 4 = W.A.P to display the type of vehicle
console.log("W.A.P to display the type of vehicle")

let vehicle="car";

switch (vehicle) {
    case "car":
        console.log("This is car")
        break;
    case "bus":
        console.log("This is bus")
        break;
    case "bike":
        console.log("This is bike")
        break;
    default:
        console.log("Invalid")
        break;
}

//Assignment question 5 = W.A.P to check if a character is vowel or consonant
console.log(" W.A.P to check if a character is vowel or consonant")

let charc="u";

switch (charc) {
    case "a" || "A":
        console.log(`${charc} is vowel`)
        break;
    case "e" || "E":
        console.log(`${charc} is vowel`)
        break;
    case "i" || "I":
        console.log(`${charc} is vowel`)
        break;
    case "o" || "O":
        console.log(`${charc} is vowel`)
        break;
    case "u" || "U":
        console.log(`${charc} is vowel`)
        break;
    default:
        console.log(`${charc} is consonant`)
        break;
}