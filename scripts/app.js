import items from "./items.js";

document.addEventListener("DOMContentLoaded", (event) => {
  loadNavBar();
  setActiveNavLink();
});

function setActiveNavLink() {
  const navLinkElements = document.querySelectorAll(".nav-link");
  const currentUrl = window.location.href;
  navLinkElements.forEach((navLink) => {
    if (currentUrl.includes(navLink.href)) {
      navLink.classList.add("navbar-active");
    } else {
      navLink.classList.remove("navbar-active");
    }
  });
}

function loadNavBar() {
  document.getElementById(
    "navbarPage"
  ).innerHTML = `<nav class="navbar navbar-expand-lg navbar-light bg-success-subtle">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"
      ><img src="./images/logo-design-1.jpeg" alt="logo"
    /></a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="./index.html">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./items.html">Items</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./cart.html">Cart</a>
        </li>
      </ul>
      <button
        class="btn btn-outline-dark ms-2"
        type="submit"
        id="loginBtn"
      >
        LogIn
      </button>
    </div>
  </div>
</nav>
`;
  document.getElementById("loginBtn").addEventListener("click", loginPage);
}

function loginPage() {
  Swal.fire("Under construction!");
}

items.forEach((item) => {
  document.getElementById("item-cards").innerHTML += `
  <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 my-2">
            <div class="card h-100">
              <img src=${selectImage(
                item.itemtype
              )} class="card-img-top" alt="food" />
              <div class="card-body text-end">
                <h5 class="card-title text-center">${item.itemname}</h5>
                <p class="card-text text-center">Rs.${item.price}</p>
                <a href="#" class="btn btn-success"><i class="fa-solid fa-cart-shopping">+</i></a>
              </div>
            </div>
          </div>`;
});

function selectImage(itemtype) {
  switch (itemtype) {
    case "Burger":
      return "./images/burger-3.jpg";
    case "Submarine":
      return "./images/submarine-2.png";
    case "Fries":
      return "./images/fries-2.png";
    case "Chicken":
      return "./images/chicken.png";
    case "Pasta":
      return "./images/pasta-2.png";
    case "Drinks":
      return "./images/beverages-2.png";
  }
}
