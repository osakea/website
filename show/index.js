window.addEventListener('load', ()=>{

    let productPhoto = productPhoto = document.getElementById('productPhoto');

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


