let cart = [];

function addToCart(productName, productPrice, quantity) {
    quantity = parseInt(quantity);

    let productIndex = cart.findIndex(item => item.name === productName);
    if (productIndex !== -1) {
        cart[productIndex].quantity += quantity;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: quantity });
    }

    updateCart();
    showSuccessMessage();
}

function updateCart() {
    const cartItemsTable = document.getElementById('cart-items').getElementsByTagName('tbody')[0];
    cartItemsTable.innerHTML = ''; 
    let totalPrice = 0;

    cart.forEach(item => {
        const row = cartItemsTable.insertRow();
        row.insertCell(0).textContent = item.name;
        row.insertCell(1).textContent = `Rp ${item.price.toLocaleString()}`;
        row.insertCell(2).textContent = item.quantity;
        row.insertCell(3).textContent = `Rp ${(item.price * item.quantity).toLocaleString()}`;
        
        totalPrice += item.price * item.quantity;
    });

    document.getElementById('total-price').textContent = totalPrice.toLocaleString();
}

function checkout() {
    if (cart.length === 0) {
        alert('Keranjang belanja kosong!');
    } else {
        let totalPrice = 0;
        cart.forEach(item => {
            totalPrice += item.price * item.quantity;
        });
        alert(`Total Pembayaran: Rp ${totalPrice.toLocaleString()}`);
        cart = []; 
        updateCart(); 
    }
}


function showSuccessMessage() {

    const successMessage = document.createElement('div');
    successMessage.classList.add('success-message');
    successMessage.textContent = 'Tambah Barang Berhasil!';

    document.body.appendChild(successMessage);

    setTimeout(() => {
        successMessage.remove();
    }, 3000); 
}
