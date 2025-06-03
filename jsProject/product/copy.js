document.getElementById("btn").addEventListener("click", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let category = document.getElementById("category").value;
    let imageFile = document.getElementById("image").files[0];

    if (!name || !price || !category || !imageFile) {
        alert("All fields are required");
        return;
    }

    let reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onload = function () {
        let imageData = reader.result; // Convert image to Base64

        let productList = JSON.parse(localStorage.getItem("productList")) || [];

        productList.push({ name, price, category, image: imageData });

        localStorage.setItem("productList", JSON.stringify(productList));

        document.getElementById("productForm").reset();
        displayProducts();
    };
});

function displayProducts() {
    let productList = JSON.parse(localStorage.getItem("productList")) || [];
    let productContainer = document.getElementById("productList");

    productContainer.innerHTML = ""; // Clear previous data

    productList.forEach((product, index) => {
        let productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <img src="${product.image}" alt="Product Image">
            <h3>${product.name}</h3>
            <p>Price: ₹${product.price}</p>
            <p>Category: ${product.category}</p>
            <button onclick="deleteProduct(${index})">Delete</button>
        `;

        productContainer.appendChild(productCard);
    });
}

function deleteProduct(index) {
    let productList = JSON.parse(localStorage.getItem("productList")) || [];
    productList.splice(index, 1); // Remove product at the given index
    localStorage.setItem("productList", JSON.stringify(productList));
    displayProducts();
}

// Display products on page load
displayProducts();
