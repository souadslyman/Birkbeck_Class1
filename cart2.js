console.log("SHOPPING CART");

// store all the products and its details, make sure the ids are always unique
const products = [
  {
    id: "1",
    name: "Product 1",
    imagePath: "./images/product-1.jpeg",
    price: 1.5,
  },
  {
    id: "2",
    name: "Product 2",
    imagePath: "./images/product-2.jpeg",
    price: 2,
    cart: 0,
  },
  {
    id: "3",
    name: "Product 3",
    imagePath: "./images/product-3.jpeg",
    price: 2,
    cart: 0,
  },
  {
    id: "4",
    name: "Product 4",
    imagePath: "./images/product-4.jpeg",
    price: 3,
    cart: 0,
  },
  {
    id: "5",
    name: "Product 5",
    imagePath: "./images/product-5.jpeg",
    price: 2,
    cart: 0,
  },
  {
    id: "6",
    name: "Product 6",
    imagePath: "./images/product-6.jpeg",
    price: 5,
    cart: 0,
  },
];

// store all the products in the cart
const shoppingCart = [];

// function to display products when the document first loads
function displayProducts() {
  const productsElement = document.querySelector("#products");

  products.forEach((item) => {
    const itemElement = document.createElement("div");
    itemElement.classList.add("product");

    const headingElement = document.createElement("h3");
    headingElement.textContent = item.name;

    const priceElement = document.createElement("p");
    priceElement.classList.add("price");
    priceElement.textContent = `Price: £${item.price.toFixed(2)}`;

    const imageElement = document.createElement("img");
    imageElement.classList.add("product-image");
    imageElement.src = item.imagePath;
    imageElement.alt = item.name;

    const addToCartElement = document.createElement("button");
    addToCartElement.classList.add("add-to-cart-button");
    addToCartElement.type = "button";
    addToCartElement.textContent = "Add to Cart";
    addToCartElement.dataset.id = item.id;
    addToCartElement.addEventListener("click", addToCartHandler);

    itemElement.appendChild(headingElement);
    itemElement.appendChild(priceElement);
    itemElement.appendChild(imageElement);
    itemElement.appendChild(addToCartElement);

    productsElement.appendChild(itemElement);
  });
}

// this function will be called when the Add to Cart button is clicked
function addToCartHandler(event) {
  updateShoppingCartArray(event.target.dataset.id);
}

// this function will update the cart array declared at the top
function updateShoppingCartArray(id) {
  const indexOfItemInCart = shoppingCart.findIndex(
    (itemInCart) => itemInCart.id === id
  );
  if (indexOfItemInCart === -1) {
    // this is to check if the product being added already exists in the shopping cart
    shoppingCart.push({
      // push the new product to the end of the array
      id: id,
      quantity: 1,
    });
    addProductToShoppingCartDisplay(id); // add product to the of the display of the cart
  } else {
    const newQuantity = shoppingCart[indexOfItemInCart].quantity + 1;
    shoppingCart[indexOfItemInCart] = {
      ...shoppingCart[indexOfItemInCart],
      quantity: newQuantity, // update the existing the quantity
    };
    updateProductInShoppingCartDisplay(id, newQuantity);
  }
}

// add product to the shopping cart display
function addProductToShoppingCartDisplay(id) {
  const cartElement = document.querySelector("#cart");

  const productDetails = products.find((product) => {
    return product.id === id;
  });

  const itemElement = document.createElement("div");
  itemElement.classList.add("cart-item");
  itemElement.dataset.id = id;

  const headingElement = document.createElement("h3");
  headingElement.textContent = productDetails.name;

  const priceElement = document.createElement("p");
  priceElement.classList.add("price");
  priceElement.textContent = `Price: £${productDetails.price.toFixed(2)}`;

  const quantityElement = document.createElement("p");
  quantityElement.classList.add("quantity");
  quantityElement.innerHTML = `Quantity: <span>1</span>`;

  const totalElement = document.createElement("p");
  totalElement.classList.add("total");
  totalElement.innerHTML = `Total: £<span>${(1 * productDetails.price).toFixed(
    2
  )}</span>`;

  const imageElement = document.createElement("img");
  imageElement.classList.add("product-image");
  imageElement.src = productDetails.imagePath;
  imageElement.alt = productDetails.name;

  itemElement.appendChild(imageElement);
  itemElement.appendChild(headingElement);
  itemElement.appendChild(priceElement);
  itemElement.appendChild(quantityElement);
  itemElement.appendChild(totalElement);

  cartElement.appendChild(itemElement);
}

// update the quantity and total of an existing product in the shopping cart
function updateProductInShoppingCartDisplay(id, quantity) {
  const allProductsInShoppingCart = document.querySelectorAll(".cart-item");
  const productElement = Array.from(allProductsInShoppingCart).find((item) => {
    return item.dataset.id === id;
  });
  const productObject = products.find((item) => {
    return item.id === id;
  });
  productElement.querySelector(".quantity span").textContent = quantity;
  productElement.querySelector(".total span").textContent = (
    productObject.price * quantity
  ).toFixed(2);
}

// display the products when the page first loads
displayProducts();