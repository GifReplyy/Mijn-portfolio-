const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartContent = document.getElementById('cart-items');
const cartButton = document.getElementById('cart-button');
const cart = document.getElementById('cart');
const closeCartButton = document.getElementById('close-cart');
const productContainer = document.querySelector('.product-container');

let cartItems = [];

// Add product to cart
function addToCart(product) {
  const productQuantity = product.querySelector('.quantity').value;
  const productPrice = parseFloat(product.querySelector('.price').innerText.replace('€', '').replace(',', '.'));
  const productName = product.querySelector('.name').innerText;

  // Check if product is already in cart
  const cartItem = cartItems.find(item => item.name === productName);
  if (cartItem) {
    cartItem.quantity += parseInt(productQuantity);
  } else {
    cartItems.push({ name: productName, quantity: parseInt(productQuantity), price: productPrice });
  }

  // Update cart content
  updateCartContent();

  // Update cart button
  updateCartButton();
}

// Remove product from cart
function removeCartItem(productName) {
  cartItems = cartItems.filter(item => item.name !== productName);

  // Update cart content
  updateCartContent();

  // Update cart button
  updateCartButton();
}

// Update cart content
function updateCartContent() {
  cartContent.innerHTML = '';
  cartItems.forEach(item => {
    if (item.quantity > 0) {
      const itemElement = document.createElement('li');
      itemElement.innerHTML = `${item.name} - <button class="remove-item" data-product="${item.name}">-</button> ${item.quantity} x €${item.price.toFixed(2).replace('.', ',')}`;
      cartContent.appendChild(itemElement);

      // Add event listener to remove button
      itemElement.querySelector('.remove-item').addEventListener('click', (e) => {
        const productName = e.target.dataset.product;
        const cartItem = cartItems.find(item => item.name === productName);
        cartItem.quantity -= 1;
        if (cartItem.quantity === 0) {
          removeCartItem(productName);
        } else {
          updateCartContent();
          updateCartButton();
        }
      });
    }
  });

  // Update cart button at the end of the function
  updateCartButton();
}

// Update cart button
function updateCartButton() {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  cartButton.innerText = `Winkelmandje - €${total.toFixed(2).replace('.', ',')}`;

  // Get the total element and update its content
  const totalElement = document.getElementById('cart-total');
  totalElement.innerText = `€${total.toFixed(2).replace('.', ',')}`;
}

// Add product to cart when button is clicked
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const product = button.parentNode;
    addToCart(product);
  });
});

cartButton.addEventListener('click', () => {
  cart.classList.add('open');
  if (window.innerWidth < 786) {
    productContainer.style.gridTemplateColumns = "repeat(1, 1fr)";
  } 
  else if (window.innerWidth > 786){
    productContainer.style.gridTemplateColumns = "repeat(2, 1fr)";
  }
});

closeCartButton.addEventListener('click', () => {
  cart.classList.remove('open');
  if (window.innerWidth < 786) {
    productContainer.style.gridTemplateColumns = "repeat(2, 1fr)";
  } 
  else if (window.innerWidth > 786) {
    productContainer.style.gridTemplateColumns = "repeat(3, 1fr)";
  }
});
