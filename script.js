const cart = [];

function addToCart(product, price) {
  cart.push({ product, price });
  updateCartUI();

  const cartBtn = document.querySelector('.cart-toggle');
  cartBtn.classList.add('animate');
  setTimeout(() => cartBtn.classList.remove('animate'), 300);
}

function updateCartUI() {
  const cartItems = document.getElementById('cart-items');
  const cartCount = document.getElementById('cart-count');
  const cartTotal = document.getElementById('cart-total');
  cartItems.innerHTML = '';

  let total = 0;
  cart.forEach((item, index) => {
    total += item.price;
    const li = document.createElement('li');
    li.innerHTML = `${item.product} - $${item.price.toFixed(2)} 
      <button class="btn btn-sm btn-outline-danger ms-2" onclick="removeFromCart(${index})">×</button>`;
    cartItems.appendChild(li);
  });

  cartCount.textContent = cart.length;
  cartTotal.textContent = total.toFixed(2);
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartUI();
}

function toggleCart() {
  document.getElementById('cart').classList.toggle('show');
}