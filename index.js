let limit = 20;
let skip = 0;

function setTemplate(title, price, des, img, id) {

    return `<div class="card" style="width: 18rem; background-color: #FAFAFA">
        <img src="${img[0]}" class="card-img-top" alt="..." style="background-color: #E0F7F7">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${des}</p>
          <a href="http://127.0.0.1:3000/show/show.html?id=${id}" class="btn btn-primary" style="background-image: linear-gradient(to right, #ffda63, #FDEB82);">View more</a>
        </div>
      </div>`;
}

const product = document.getElementById('product')
fetch('https://dummyjson.com/products?limit=30&skip=0&select=title,price,description,images')
.then(res => res.json())
.then(res =>{
    const htmlContent = res.products.map(e =>
        setTemplate(e.title, e.price, e.description, e.images, e.id)
    )

    product.innerHTML = htmlContent.join('')
});

document.getElementById('prev').addEventListener('click', ()=>{
  skip -= 10;
  const product = document.getElementById('product')
  fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=title,price,description,images`)
  .then(res => res.json())
  .then(res =>{
      const htmlContent = res.products.map(e =>
          setTemplate(e.title, e.price, e.description, e.images, e.id)
      )
  
      product.innerHTML = htmlContent.join('')
    });
})

document.getElementById('next').addEventListener('click', ()=>{
  skip += 10;
  const product = document.getElementById('product')
  fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=title,price,description,images`)
  .then(res => res.json())
  .then(res =>{
      const htmlContent = res.products.map(e =>
          setTemplate(e.title, e.price, e.description, e.images, e.id)
      )
  
      product.innerHTML = htmlContent.join('')
    });
})

function hide_button() {
  document.getElementById('prev').style.display = 'none';
  
}

function onSearch(query){
  fetch(`https://dummyjson.com/products/search?q=${query}&select=title,price,description,images&limit=10`)
  .then(res => res.json())
  .then(res =>{
    const htmlContent = res.products.map(e =>
        setTemplate(e.title, e.price, e.description, e.image, e.id)
    )
  
    product.innerHTML = htmlContent.join('')
  });
}  

document.getElementById('searchBtn').addEventListener('click', (e)=>{
  e.preventDefault()
  let query = document.getElementById('searchInput').value;
  onSearch(query)

})

