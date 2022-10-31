let btn  = document.querySelector(".menu");
let sidebar = document.querySelector(".sidebar")

btn.addEventListener("click" ,function(){
    sidebar.classList.toggle("show-sidebar")
})