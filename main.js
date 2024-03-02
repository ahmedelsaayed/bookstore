
const swiper = new Swiper('.head-parent',{
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay : true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
document.querySelector('.bx-search-alt-2').onclick=function(){
  document.querySelector('.header-search').classList.toggle('search');
  document.querySelector('.header-search').classList.remove('close');
  document.querySelector('.header-login').classList.remove('login');
  document.querySelector('.cart').classList.remove('drop');

}
document.querySelector('.header-search .bx-x').onclick=function(){
  document.querySelector('.header-search').classList.toggle('close');
}
document.querySelector('.bxs-user').onclick=function(){
  document.querySelector('.header-login').classList.toggle('login');
  document.querySelector('.header-search').classList.remove('search');
  document.querySelector('.cart').classList.remove('drop');

}
document.querySelector('.header-login .bx-x').onclick=function(){
    document.querySelector('header   .header-login').classList.remove('login');
    document.querySelector('header   .header-login').classList.add('close');
  }


document.querySelector(' header .create').onclick=function(){
    document.querySelector('.header-signup ').classList.add('open');
    document.querySelector('.header-login ').classList.remove('login');
  }
document.querySelector(' header .sign').onclick=function(){
    document.querySelector('.header-signup ').classList.remove('open');
    document.querySelector('.header-login ').classList.add('login');
  }
  document.querySelector('.header-signup .bx-x').onclick=function(){
    document.querySelector('header   .header-signup').classList.remove('open');
    document.querySelector('header   .header-signup').classList.add('close');
  }
  document.querySelector('.bx-menu').onclick=function(){
    document.querySelector('.nav-middle').classList.toggle('show');
  }
const swiperr = new Swiper('.testimonail-pa',{
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay : true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
const sr =ScrollReveal({
  distance:'35px',
  duration:2400,
  reset:true,
});


sr.reveal('.header-left',{delay:200 , origin:'bottom'});
sr.reveal('.discount-left',{delay:200 , origin:'top'});
sr.reveal('.head-right',{delay:200 , origin:'top'});
sr.reveal('.discount-right',{delay:200 , origin:'top'});
sr.reveal('.pro',{delay:200 , origin:'bottom'});
sr.reveal('.projects',{delay:250 , origin:'bottom'});
sr.reveal('.testimonialss',{delay:200 , origin:'bottom'});

// dark mode
document.querySelector('.bxs-moon').onclick=function(){
  document.querySelector('body').classList.add('dark');
  document.querySelector('.discount-left').classList.add('dark');
  document.querySelector('nav').classList.add('dark');
  document.querySelector('header .header-left').classList.add('dark');
  document.querySelector('.pro').classList.add('dark');
  document.querySelector('.project').classList.add('dark');
  document.querySelector('.testimonial').classList.add('dark');
  document.querySelector('.services h1').classList.add('dark');
  document.querySelector('footer').classList.add('dark');
  document.querySelector('footer a').classList.add('dark');
  document.querySelector('footer i').classList.add('dark');
  document.querySelector('.nav-middle a').classList.add('dark');
  document.querySelector('.bxs-moon').style.display='none';
  document.querySelector('.bxs-sun').style.display='block';
}
document.querySelector('.bxs-sun').onclick=function(){
  document.querySelector('body').classList.remove('dark');
  document.querySelector('nav').classList.remove('dark');
  document.querySelector('header .header-left').classList.remove('dark');
  document.querySelector('.pro').classList.remove('dark');
  document.querySelector('.project').classList.remove('dark');
  document.querySelector('.services h1').classList.remove('dark');
  document.querySelector('.testimonial').classList.remove('dark');
  document.querySelector('footer').classList.remove('dark');
  document.querySelector('footer a').classList.remove('dark');
  document.querySelector('footer i').classList.remove('dark');
  document.querySelector('.nav-middle a').classList.remove('dark');
  document.querySelector('.bxs-moon').style.display='block';
  document.querySelector('.bxs-sun').style.display='none';
}
let products = [
  {
      id : 1,
      title : "Lord && Kings",
      price : 35,
      img : './img/book-1.png'
  },
  {
      id : 2,
      title : "Simple Minimalist",
      price : 20,
      img : './img/book-2.png'

  },
  {
      id : 3,
      title : "Noted Poster",
      price : 32,
      img : './img/book-3.png'
  },
  {
      id : 4,
      title : "Puring Dreams",
      price : 97,
      img : './img/book-4.png'
  },
  {
      id : 5,
      title : "Active Book",
      price : 16,
      img : './img/book-5.png'
  },
  {
      id : 6,
      title : "Blue Book",
      price : 55,
      img : './img/book-6.png'
  },
  {
      id : 7,
      title : "Desinged Book",
      price : 41,
      img : './img/book-7.png'
  },
  {
      id : 8,
      title : "Plant Tree",
      price : 45,
      img : './img/book-8.png'
  },
  {
      id : 9,
      title : "Modern Poster",
      price : 86,
      img : './img/book-9.png'
  },
  {
      id : 10,
      title : "Bird Bark",
      price : 23,
      img : './img/book-10.png'
  },
  {
      id : 11,
      title : "Marque Book",
      price : 34,
      img : './img/discount-book-1.png'
  },
  {
      id : 12,
      title : "Art Book",
      price : 26,
      img : './img/discount-book-2.png'
  },

]
let p= products.map(function(product){
  return `
  <div class="project">
              <img src="${product.img}" alt="">
              <h3>${product.title}</h3>
              <p> price : ${product.price}$</p>
              <button onclick='addTocart(${product.id})'>Add To crat</button>
          </div>
  `
}) ;
document.querySelector('.projects').innerHTML=p;

let cart=[];
function addTocart(item){
  let selectedItem = products.find(product => product.id == item);
  if(cart.includes(selectedItem)){
    Swal.fire({
  title: "This Product Exist Added To The Cart!",
  icon: "warning",
  showConfirmButton:false,
  timer : 2000
});
}
else{
  cart.push(selectedItem);
  Swal.fire({
    showConfirmButton:false,
    timer : 2000,
   
      title: "Good job!",
      text: "You add to cart!",
      icon: "success"
  });
}
displayProductCart();
document.querySelector('.cart').style.display='flex';
}

function displayProductCart(){
  let x=''
  let total =0;
  cart.map(function(product){
    total=total+product.price;
    x+=`
    <div class="product">
    <img src="${product.img}" alt="" srcset="">
    <h2>${product.title}</h2>
    <h3>${product.price}$</h3>
    <button onclick='removeProduct(${product.id})'>remove</button>
    </div>
    `
  });
  document.querySelector('.cartss').innerHTML=x;
  document.querySelector('.total').innerHTML=`total: ${total}$`;
  document.querySelector(".counter").innerHTML=cart.length;
  if(cart.length==0){
    document.querySelector('.cart').style.display='none'
  }
}

function removeProduct(item){
 cart=cart.filter(product => product.id != item);
 Swal.fire({
  title: "This Product removed from The Cart Succefully",
  icon: "success",
  showConfirmButton : false,
  timer : 2000
})
  displayProductCart();
}


