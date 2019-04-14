function myFunction() {
  var x = document.getElementById("popup");
  if (x.style.opacity !== "1") {
    x.style.opacity= "1";
    x.style.zIndex= "100";
    /*x.style.transition = "all 2s";*/
  } else {
    x.style.opacity = "";
    x.style.zIndex= "";
  }

}
