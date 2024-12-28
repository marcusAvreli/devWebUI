//INITIALIZING
const burger = document.querySelector(".burger");
const sidebar = document.querySelector(".sideBar-container");
const closeBurger = document.querySelector(".close-burger");
const menuItems = document.querySelectorAll(".menu ul li");

//ADDING EVENT LISTENER TO THE BURGER
burger.addEventListener("click", ()=>{
    sidebar.classList.toggle("sideBar-container2");    
});

//ADDING EVENT LISTENER TO THE BURGER TO THE CLOSING BURGER ON THE SIDEBAR
closeBurger.addEventListener("click", ()=>{
    sidebar.classList.remove("sideBar-container2");    
});

//ADDING EVENT LISTENERS TO LINKS ON THE SIDEBAR

menuItems.forEach((item)=>{

    item.addEventListener("click", ()=>{
        sidebar.classList.toggle("sideBar-container2"); 
})   
});