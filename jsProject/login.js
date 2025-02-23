document.getElementById("btn1").addEventListener("click",function(e){
    e.preventDefault();
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;

    if(!email || !password){
        alert("All fields are required");
        return;
    }

    const userList= JSON.parse( localStorage.getItem("userlist"))
    for(let i=0;i<=userList.length-1;i++){
        console.log(userList[i].email)
        if(userList[i].email === email ){
            window.location.href="./home.html";
            return;
        }
    }
    alert("Inavlid email or password")
    
})