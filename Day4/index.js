console.log("Prime numbers");
//wrong output
const primeN=()=>{
  for(let i=0;i<=20;i++){
    if(i%1==0 && i%i==0){
      console.log(i)
    }
  }
}
primeN()
