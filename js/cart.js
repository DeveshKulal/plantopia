window.onload = function() {
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    var cartContainer = document.getElementById('cartItems');

    cartItems.forEach((item, index) => {
        var itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.setAttribute('data-index', index);

        var img = document.createElement('img');
        img.src = item.imgSrc;
        img.alt = item.name;

        var name = document.createElement('p');
        name.textContent = item.name;

        var price = document.createElement('p');
        price.innerHTML =  item.price;

        var quantity = document.createElement('p');
        quantity.textContent = 'Quantity: ' + item.quantity;

        var size = document.createElement('p');
        size.textContent = 'Size: ' + item.size;

        var removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('btn-remove');
        removeBtn.onclick = function() {
            removeFromCart(index);
        };

        itemDiv.appendChild(img);
        itemDiv.appendChild(name);
        itemDiv.appendChild(price);
        itemDiv.appendChild(quantity);
        itemDiv.appendChild(size);
        itemDiv.appendChild(removeBtn);

        cartContainer.appendChild(itemDiv);
    });
}

function removeFromCart(index) {
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    location.reload();  // Reload the page after removing an item
}

function goBack() {
    window.location.href = 'home.html';
}
function goBacktoDetail() {
    window.location.href = 'detail.html';
}
