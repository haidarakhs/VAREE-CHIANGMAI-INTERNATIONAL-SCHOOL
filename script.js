// navbar-fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const navbarFixed = header.offsetTop;

    if (window.pageYOffset > navbarFixed){
        header.classList.add('navbar-fixed'); 
    }else{
        header.classList.remove('navbar-fixed');
    }
}

//button humberger 
const humberger =document.querySelector('#humberger');
humberger.addEventListener('click',function(){
    humberger.classList.toggle('active');
})

// navbar fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const navbarFixed = header.offsetTop;
    if (window.pageYOffset > navbarFixed) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};