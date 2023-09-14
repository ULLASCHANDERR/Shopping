let searchForm = document.querySelector('.search-form');               /* which we did display none*/
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    shoppingcart.classList.remove('active');
    loginform.classList.remove('active');
}


let shoppingcart = document.querySelector('.shopping-cart');              
document.querySelector('#cart-btn').onclick = () =>{
    shoppingcart.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    loginform.classList.remove('active');
}

let  loginform = document.querySelector('.login-form');              
document.querySelector('#login-btn').onclick = () =>{
    loginform.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    shoppingcart.classList.remove('active');
}

let navbar = document.querySelector('.navbar');              
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingcart.classList.remove('active');
    loginform.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    shoppingcart.classList.remove('active');
    loginform.classList.remove('active');
}







var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 150 + "px";
  blur.style.top = dets.y - 150 + "px";
});

