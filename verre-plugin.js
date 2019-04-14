function myFunction() {
  var x = document.getElementById("popup");
  if (x.style.visibility !== "visible") {
    x.style.opacity= "visible";
    /*x.style.zIndex= "100";*/

  } else {
    x.style.opacity = "";
    x.style.zIndex= "";
  }

}
