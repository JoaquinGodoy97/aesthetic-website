// function parallax() {
//     const item = document.querySelector(element);
//     item.style.transform = `translateY(${distance * speed}px)`

// }

// window.addEventListener('scroll', function(){
//     parallax('header', window.scrollY, 1);
    
// })



let img = document.getElementById('img1');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    img.style.left = value * 0.20 + 'px';
})