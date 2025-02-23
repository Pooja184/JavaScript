
  // document.getElementById("btn").addEventListener("click",function(e){
  //   e.preventDefault();
  // const user = document.getElementById("name").value;
  // const email = document.getElementById("email").value;
  // const password = document.getElementById("password").value;

  // if(!user || !email || !password){
  //   alert("All fields are required");
  //   return;
  // }

  // //for username
  // const userName= JSON.parse(localStorage.getItem('userList')) || [];
  // // console.log(userName,"username")
  // userName.push(user)
  // // console.log(userName);
  // localStorage.setItem("userList",JSON.stringify(userName));
  // document.getElementById("name").value="";

  // //for email
  // const userEmail=JSON.parse(localStorage.getItem('emailList')) || []

  // for(let i=0;i<=userEmail.length-1;i++){
  //   if(userEmail[i]==email){
  //     console.log(`${email} exist`)
  //     alert("Email already exist");
  //     return;
  //   }
  // }
  // // console.log(userEmail)
  // userEmail.push(email)
  // localStorage.setItem("emailList",JSON.stringify(userEmail));
  // document.getElementById("email").value="";

  // //for password
  // const userPassword=JSON.parse(localStorage.getItem('passwordList')) || [];
  // console.log(userPassword)
  // userPassword.push(password)
  // localStorage.setItem("passwordList",JSON.stringify(userPassword))
  // document.getElementById("password").value="";
  
  // })

  
  document.getElementById("btn").addEventListener("click", function (e) {
    e.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (!name || !email || !password) {
        alert("All fields are required!");
        return;
    }

    const localdata = JSON.parse(localStorage.getItem("userlist")) || []
    for (var i = 0; i < localdata.length; i++) {
        if (localdata[i].email === email) {
            alert("Email already exists, try login or use another email.");
            return;
        }
    }
    


    localdata.push({ name: name, email: email, password: password });

    localStorage.setItem("userlist", JSON.stringify(localdata));
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("password").value="";

    
    window.location.href = "./Login.html"
     console.log(localdata)
    
})
