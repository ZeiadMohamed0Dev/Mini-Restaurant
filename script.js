const API_URL = "http://localhost:5000/api/Products";


async function getProducts() {

    try {

        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("API Error: " + response.status);
        }

        const products = await response.json();

        console.log("Products from API:", products);

        const productsContainer =
            document.getElementById("products");

        productsContainer.innerHTML = "";

        products.forEach(product => {

            productsContainer.innerHTML += `
                <div class="product">

                    <h2>${product.name}</h2>

                    <p>${product.price} EGP</p>

                    <button onclick="addToCart(${product.id})">
                        Add to Cart
                    </button>

                </div>
            `;

        });

    }
    catch (error) {

        console.error("Error:", error);

    }
}


function addToCart(id) {

    alert("Product ID: " + id);

}


getProducts();