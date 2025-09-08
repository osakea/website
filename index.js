let limit = 20;
let skip = 0;

function setTemplate(title, price, des, img, id) {

    return `<div class="card" style="width: 18rem; background-color: #FAFAFA">
        <img src="${img[0]}" class="card-img-top" alt="..." style="background-color: #E0F7F7">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${des}</p>
          <a href="/show.html?id=${id}" class="btn btn-primary" style="background-image: linear-gradient(to right, #ffda63, #FDEB82);">View more</a>
        </div>
      </div>`;
}

const product = document.getElementById('product')
fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=title,price,description,images`)
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

// ---------Responsive-navbar-active-animation-----------
function test(){
	var tabsNewAnim = $('#navbarSupportedContent');
	var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
	var activeItemNewAnim = tabsNewAnim.find('.active');
	var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
	var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
	var itemPosNewAnimTop = activeItemNewAnim.position();
	var itemPosNewAnimLeft = activeItemNewAnim.position();
	$(".hori-selector").css({
		"top":itemPosNewAnimTop.top + "px", 
		"left":itemPosNewAnimLeft.left + "px",
		"height": activeWidthNewAnimHeight + "px",
		"width": activeWidthNewAnimWidth + "px"
	});
	$("#navbarSupportedContent").on("click","li",function(e){
		$('#navbarSupportedContent ul li').removeClass("active");
		$(this).addClass('active');
		var activeWidthNewAnimHeight = $(this).innerHeight();
		var activeWidthNewAnimWidth = $(this).innerWidth();
		var itemPosNewAnimTop = $(this).position();
		var itemPosNewAnimLeft = $(this).position();
		$(".hori-selector").css({
			"top":itemPosNewAnimTop.top + "px", 
			"left":itemPosNewAnimLeft.left + "px",
			"height": activeWidthNewAnimHeight + "px",
			"width": activeWidthNewAnimWidth + "px"
		});
	});
}
$(document).ready(function(){
	setTimeout(function(){ test(); });
});
$(window).on('resize', function(){
	setTimeout(function(){ test(); }, 500);
});
$(".navbar-toggler").click(function(){
	$(".navbar-collapse").slideToggle(300);
	setTimeout(function(){ test(); });
});



// --------------add active class-on another-page move----------
jQuery(document).ready(function($){
	// Get current path and find target link
	var path = window.location.pathname.split("/").pop();

	// Account for home page with empty path
	if ( path == '' ) {
		path = 'index_copy.html';
	}

	var target = $('#navbarSupportedContent ul li a[href="'+path+'"]');
	// Add active class to target link
	target.parent().addClass('active');
});




// Add active class on another page linked
// ==========================================
// $(window).on('load',function () {
//     var current = location.pathname;
//     console.log(current);
//     $('#navbarSupportedContent ul li a').each(function(){
//         var $this = $(this);
//         // if the current path is like this link, make it active
//         if($this.attr('href').indexOf(current) !== -1){
//             $this.parent().addClass('active');
//             $this.parents('.menu-submenu').addClass('show-dropdown');
//             $this.parents('.menu-submenu').parent().addClass('active');
//         }else{
//             $this.parent().removeClass('active');
//         }
//     })
// });
