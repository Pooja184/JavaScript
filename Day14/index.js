// // fetch api
// const apiFetch=()=>{
//     fetch("https://fakestoreapi.com/products")
//     .then((res)=> res.json())
//     .then((parseRes)=> console.log(parseRes))
//     .catch((err)=>console.log("error found while fetching url",err))
// }
// apiFetch();


// // using async await and try & catch
// const apiFetch=async() => {
// try {
//         const res=await fetch("https://fakestoreapi.com/products");
//         const jsonRes=await res.json();
//         console.log(jsonRes)
        
// } catch (error) {
//     console.log("error",error)
    
// }
// }
// apiFetch()

// //In JavaScript, new Error() is used to create a custom error object. It helps in error handling and debugging.
// const getData=async()=>{
//     try {
//         let data=await fetch("https://fakestoreapi.com/products");
//         let jsonData=await data.json();
//         console.log(jsonData)
//         if(jsonData=="abc"){
//             throw new Error("data found")
//         }
//     } catch (err) {
//         console.log("error",err)
//     }finally{
//         console.log("loading false...")
//     }
// }

// getData();

// //this concept is called closure 
// //A closure is a function that remembers the variables from its outer function even after the outer function has executed.
// const outerFunction=()=>{
//     const greet="welcome"; // Local variable
//      function innerFunction(){
//            console.log(greet) //Accessing outer function variable
//     }
//     return innerFunction; // returing inner function
// }

// const outerCopy=outerFunction(); // outerFuntion() executes and returna inner function
// outerCopy(); // calls innerFunction


// //This concept is called function currying in js 
// // Currying is a technique where a function returns another function, allowing arguments to be passed one at a time instead of all at once.
// function add(a){
//     return function(b){
//         return a+b;
//     }
// }
// const addFive=add(5);
// console.log(addFive(3));

// //example of cuurying in react, we use currying concept in event handlers, custom hooks, higher order components, and reusable form handlers

// // const handleClick = (message) => (event) => {
// //     console.log(message);
// //   };
  
// //   <button onClick={handleClick("Button Clicked")}>Click Me</button>;

// // reusable form hadler example

// // const handleInputChange = (field) => (event) => {
// //     console.log(`Updated ${field}:`, event.target.value);
// //   };
  
// //   <input type="text" onChange={handleInputChange("username")} />;
// //   <input type="email" onChange={handleInputChange("email")} />;
  
  