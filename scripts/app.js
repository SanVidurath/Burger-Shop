window.addEventListener("load", (event) => {
  loadNavBar();
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
          <a class="nav-link navbar-active" href="./index.html">Home</a>
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
