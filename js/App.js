function navbarHandeler (){
    const navItems = document.querySelectorAll(".nav-link");
    const pages = document.querySelectorAll(".page");

    navItems.forEach((item)=>{
    item.addEventListener("click",()=>{
        activeNavbar(item.name);
    })
    });
    
    const activeNavbar = (name)=>{
    navItems.forEach(item =>{
    item.name === name ? item.classList.add("active") : item.classList.remove("active") ;
    })
    }

    const scrollHandel = () =>{
    let scroll = Math.floor(window.scrollY);
    pages.forEach(item =>{
         if(item.offsetTop <= scroll){
         activeNavbar(`#${item.id}`);   
         }
    })
    }
    window.addEventListener("scroll",scrollHandel);
}
navbarHandeler();