// Retrieve user data from localStorage (if available)
const user = JSON.parse(localStorage.getItem('user'));

if (user) {
    // If user data exists, display personalized message
    document.getElementById('user-welcome').innerHTML = `Welcome back, ${user.name}! Enjoy shopping.`;
} else {
    // If no user data, show a generic message
    document.getElementById('user-welcome').innerHTML = 'Welcome to Donut Shop! Please sign up.';
}

// Shopping Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function renderCart() {
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = '';

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItemsList.appendChild(li);
    });
}

document.getElementById('view-cart').addEventListener('click', function() {
    document.getElementById('products').classList.add('hidden');
    document.getElementById('cart').classList.remove('hidden');
    renderCart();
});

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productElement = this.closest('.product');
        const productId = productElement.getAttribute('data-id');
        const productName = productElement.querySelector('h3').textContent;
        const productPrice = parseFloat(productElement.querySelector('p').textContent.replace('$', ''));

        const newProduct = {
            id: productId,
            name: productName,
            price: productPrice
        };

        cart.push(newProduct);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${productName} added to cart!`);
    });
});

document.getElementById('clear-cart').addEventListener('click', function() {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
    alert('Cart cleared!');
});

document.getElementById('checkout').addEventListener('click', function() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        alert('Proceeding to Checkout!');
    }
});
