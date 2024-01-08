let navbar = document.getElementById('navbar');
let navBtn = document.getElementById('navBtn');
let navbarMenu = document.getElementById('navbarMenu');

function onload() {
    if(window.scrollY >= 5){
        navbar.classList.add('showNavbar')
    }else{
        let arry = Array.from(navBtn.classList)
        if(!arry.includes("showNavBtn")){
            navbar.classList.remove('showNavbar')
        }
    }
}
onload()
window.addEventListener('scroll', onload)


navBtn.addEventListener('click', ()=>{
    navBtn.classList.toggle('showNavBtn')
    navbarMenu.classList.toggle('showNavbarMenu')

    if(scrollY < 5){
        navbar.classList.toggle('showNavbar')
    }
})