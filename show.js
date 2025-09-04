const productParams = new URLSearchParams(window.location.search);
let productId = productParams.get('id');

window.addEventListener('load', ()=>{

    let carouselItem = document.querySelectorAll('.carousel-item');
    let des = document.getElementById('des');
    let price = document.getElementById('price');
    
    if(productId== null) {
        window.location.href = '/index.html'
    }

    fetch(`https://dummyjson.com/products/${productId}`)
    .then(res => res.json())
    .then(data => {        
        carouselItem.forEach((item) => {
            item.children[0].src = data.images[0];
        })
        des.innerHTML = data.description;
        price.innerHTML = data.price;
    });
})
