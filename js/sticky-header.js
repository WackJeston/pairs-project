let previous_value;
let lastScrollTop = 0;

let headerPos;



document.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   let value = document.scrollTop || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (window.innerWidth <= 320 && previous_value > value && value <= 205) {
     document.querySelector(".header-content-inner").style.position = "relative";
   }
   else if (window.innerWidth <= 481 && previous_value > value && value <= 185) {
     document.querySelector(".header-content-inner").style.position = "relative";
   }
   else if (window.innerWidth <= 1024 && window.innerWidth >= 768 && previous_value > value && value <= 410) {
     document.querySelector(".header-nav-inner").style.position = "relative";
   }
   else if (window.innerWidth >= 1024 && previous_value > value && value <= 475) {
     document.querySelector(".header-nav-inner").style.position = "relative";
   }


   else if (window.innerWidth <= 481 && previous_value > value && value >= 206) {
    document.querySelector(".header-content-inner").className= `header-content-inner scroll-up`;
    document.querySelector(".header-content-inner").style.position = "fixed";
   }
   else if (window.innerWidth <= 1024 && window.innerWidth >= 768 && previous_value > value && value >= 400) {
    document.querySelector(".header-nav-inner").className= `header-nav-inner scroll-up`;
    document.querySelector(".header-nav-inner").style.position = "fixed";
   }
   else if (window.innerWidth >= 1025 && previous_value > value && value >= 475) {
    document.querySelector(".header-nav-inner").className= `header-nav-inner scroll-up`;
    document.querySelector(".header-nav-inner").style.position = "fixed";
   }


   else if (window.innerWidth <= 481 && previous_value < value && value >= 400) {
    document.querySelector(".header-content-inner").className = `header-content-inner scroll-down`;
   }
   else if (window.innerWidth >= 768 && window.innerWidth <= 1024 && previous_value < value && value >= 460) {
    document.querySelector(".header-nav-inner").className = `header-nav-inner scroll-down`;
   }
   else if (window.innerWidth >= 1025 && previous_value < value && value >= 530) {
    document.querySelector(".header-nav-inner").className = `header-nav-inner scroll-down`;
   }
  previous_value = value;
   // lastScrollTop = value <= 215 ? 215 : value; // For Mobile or negative scrolling
}, false);
