window.addEventListener('load', ()=>{

    let productPhoto = document.getElementById('productPhoto');

    console.log('ready');
    
    fetch('https://dummyjson.com/products/1')
    .then(res => res.json())
    .then(data => {
        
        console.log(productPhoto);
        
        let NewproductPhoto = productPhoto.children.map((e)=>{
            console.log(e);
        })
    });
})


function setTemplate(title, price, des, img) {

    return `<div class="card" style="width: 18rem; background-color: #FAFAFA">
        <img src="${img[0]}" class="card-img-top" alt="..." style="background-color: #E0F7F7">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${des}</p>
          <a href="#" class="btn btn-primary" style="background-image: linear-gradient(to right, #ffda63, #FDEB82);">View more</a>
        </div>
      </div>`;
}

const product = document.getElementById('product')
fetch('https://dummyjson.com/products?limit=1&skip=0&select=title,price,description,images')
.then(res => res.json())
.then(res =>{
    const htmlContent = res.products.map(e =>
        setTemplate(e.title, e.price, e.description, e.images)
    )

    product.innerHTML = htmlContent.join('')
});