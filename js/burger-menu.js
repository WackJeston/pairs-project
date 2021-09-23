document.querySelector(".burger-button").addEventListener("click", function(){
  document.querySelector(".burger-overlay").style.visibility = "visible"
});

document.querySelector(".burger-overlay").addEventListener("click", function(){
    document.querySelector(".burger-overlay").style.visibility = "hidden"
});
