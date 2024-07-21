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
