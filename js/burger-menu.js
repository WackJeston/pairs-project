document.querySelector(".burger-button").addEventListener("click", function(){
  document.querySelector(".burger-overlay").style.visibility = "visible"
  document.body.style.overflow = "hidden";
});

document.querySelector(".burger-overlay").addEventListener("click", function(){
    document.querySelector(".burger-overlay").style.visibility = "hidden"
    document.body.style.overflow = "auto";
});
