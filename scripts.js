function closeNavbar() {
  var navCollapse = document.getElementById("navbarSupportedContent");
  if (navCollapse && navCollapse.classList.contains("show")) {
    navCollapse.classList.remove("show");
  }
}
