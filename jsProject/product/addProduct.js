document.getElementById("btn").addEventListener("click",function(e){
    e.preventDefault();
 
    let name=document.getElementById("name").value;
    let price=document.getElementById("price").value
    let category=document.getElementById("category").value;
    
    if(!name && !price || !category){
        alert("All field are required");
    }

    const product=JSON.parse(localStorage.getItem("productList")) || [];
    console.log(product)

    product.push({name:name,price:price,category:category});

    console.log(product)
    localStorage.setItem("productList",JSON.stringify(product));
    document.getElementById("name").value="";
    document.getElementById("price").value="";
    document.getElementById("category").value="";

})