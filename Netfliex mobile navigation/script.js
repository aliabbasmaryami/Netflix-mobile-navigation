const netflix_open_btn = document.querySelector(".netflix-open-btn")
const netflix_close_btn = document.querySelector(".netflix-close-btn")
const netflix_navs = document.querySelectorAll(".netflix-nav")

netflix_open_btn.addEventListener('click',()=>{
//    add visible class
   netflix_navs.forEach(nav_el=>{
    nav_el.classList.add('visible');
   })
});
netflix_close_btn.addEventListener('click',()=>{
    // remove visible class
    netflix_navs.forEach(nav_el=>{
        nav_el.classList.remove('visible');
       })

});