import items from "./items.js";

window.addEventListener("load", (event) => {
  loadNavBar();
  const navLinkElements = document.querySelectorAll(".nav-link");
  const windowPathname = window.location.pathname;
  navLinkElements.forEach((navLink) => {
    if (navLink.href.includes(windowPathname)) {
      navLink.classList.add("navbar-active");
    }
  });
});

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
          <a class="nav-link" href="./cart.html">Shopping Cart</a>
        </li>
      </ul>
      <button
        class="btn btn-outline-dark ms-2"
        type="submit"
        onclick="loginPage()"
      >
        LogIn
      </button>
    </div>
  </div>
</nav>
`;
}

function printPageName() {
  console.log("Hi");
}

function loginPage() {
  Swal.fire("Under construction!");
}

items.forEach((item) => {
  document.getElementById("item-cards").innerHTML += `
  <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 my-2">
            <div class="card">
              <img src="./images/submarine-2.png" class="card-img-top" alt="food" />
              <div class="card-body">
                <h5 class="card-title text-center">${item.itemname}</h5>
                <p class="card-text text-center">Rs.${item.price}</p>
                <a href="#" class="btn btn-success">Add to cart</a>
              </div>
            </div>
          </div>`;
});
