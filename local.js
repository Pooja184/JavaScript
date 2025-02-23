// const h1=document.querySelector("h1")
// h1.style.color="red"


// localStorage.setItem("userName","pooja")

// localStorage.removeItem("userName")
const redLight=()=>{
    const red=document.querySelector(".red");
    const first=document.querySelector(".first")
    if(red){
        console.log("slow down")
        red.style.backgroundColor="red"
        if(first){
            first.appendChild(red)
        }else{
            alert("first does not exist")
        }
    }else{
        alert("Red does not exist")
    }

}

const greenLight=()=>{
    const green=document.querySelector(".green");
    const sec=document.querySelector(".sec")
    if(green){
        console.log("slow down")
        green.style.backgroundColor="green"
        if(sec){
            sec.appendChild(green)
        }else{
            alert("second does not exist")
        }
    }else{
        alert("green does not exist")
    }

}

const yellowLight=()=>{
    const yellow=document.querySelector(".yellow");
    const third=document.querySelector(".third")
    if(yellow){
        console.log("slow down")
        yellow.style.backgroundColor="yellow"
        if(third){
            third.appendChild(yellow)
        }else{
            alert("first does not exist")
        }
    }else{
        alert("Red does not exist")
    }

}
let speed=40;
if(speed<20){
    greenLight();
}else if(speed>20 && speed<35){
    yellowLight();
}else{
    redLight();
}