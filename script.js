let navbar = document.querySelector("nav");
document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};

let cartContainer = document.querySelector(".cart-container");
document.querySelector("#cart-btn").onclick = () => {
  cartContainer.classList.toggle("active");
};

let searchBox = document.querySelector(".search-box");
document.querySelector("#search-btn").onclick = () => {
  searchBox.classList.toggle("active");
};
