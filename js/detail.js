function saveImageSource(button) {
    var box = button.closest('.box');
    var imgSrc = box.getAttribute('data-image');
    var name = box.getAttribute('data-name');
    var price = box.getAttribute('data-price');

    localStorage.setItem('imageSrc', imgSrc);
    localStorage.setItem('plantName', name);
    localStorage.setItem('plantPrice', price);

    window.location.href = 'detail.html';
}

function selectSize(size) {
    var sizeBoxes = document.querySelectorAll('.size-box');
    sizeBoxes.forEach(function(box) {
        box.classList.remove('selected');
    });
    var selectedBox = document.querySelector('.size-box[onclick="selectSize(\'' + size + '\')"]');
    selectedBox.classList.add('selected');
}


function increment() {
    var count = parseInt(document.getElementById('count').innerText);
    document.getElementById('count').innerText = count + 1;
}

function decrement() {
    var count = parseInt(document.getElementById('count').innerText);
    if (count > 1) {
        document.getElementById('count').innerText = count - 1;
    }
}

function addToCart() {
    var imgSrc = document.getElementById('image').src;
    var name = document.getElementById('plantName').innerText;
    var price = document.getElementById('plantPrice').innerText;
    var quantity = document.getElementById('count').innerText;
    var size = document.querySelector('.size-box.selected') ? document.querySelector('.size-box.selected').innerText : '';

    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ imgSrc, name, price, quantity, size });
    localStorage.setItem('cart', JSON.stringify(cart));

    window.location.href = 'cart.html';
}

window.onload = function() {
    var imgSrc = localStorage.getItem('imageSrc');
    var name = localStorage.getItem('plantName');
    var price = localStorage.getItem('plantPrice');

    if (imgSrc) {
        var imgElement = document.getElementById('image');
        imgElement.src = imgSrc;
    }
    if (name) {
        var nameElement = document.getElementById('plantName');
        nameElement.textContent = name;
        document.getElementById('headerPlantName').textContent = name;
        document.getElementById('descriptionPlantName').textContent = name;
    }
    if (price) {
        var priceElement = document.getElementById('plantPrice');
        priceElement.innerHTML =  price;
    }
}

function goBack() {
    window.location.href = 'home.html';
}
