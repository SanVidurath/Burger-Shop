import items from "./items.js";
const selectedCategory = document.querySelector(".itemCategories");
const tableData = document.getElementById("tableData");
const itemCards = document.getElementById("item-cards");
const checkoutBtn = document.getElementById("checkoutBtn");

var cartItems = [];

document.addEventListener("DOMContentLoaded", () => {
  loadNavBar();
  setActiveNavLink();
  if (itemCards) {
    loadItems();
  } else {
    console.log("Element with ID 'item-cards' not found.");
  }
  loadTableData();
});

function setActiveNavLink() {
  const navLinkElements = document.querySelectorAll(".nav-link");
  const currentUrl = window.location.href;
  loadNavLinkActive(navLinkElements, currentUrl);
}

function loadNavLinkActive(navLinkElements, currentUrl) {
  if (currentUrl === "https://sanvidurath.github.io/Burger-Shop/") {
    document.getElementById("home").classList.add("navbar-active");
  } else {
    navLinkElements.forEach((navLink) => {
      if (currentUrl.includes(navLink.href)) {
        navLink.classList.add("navbar-active");
      } else {
        navLink.classList.remove("navbar-active");
      }
    });
  }
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
          <a class="nav-link" id="home" href="./index.html">Home</a>
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

function loadItems() {
  itemCards.innerHTML = "";

  items.forEach((item) => {
    const itemCard = document.createElement("div");

    itemCard.classList.add(
      "col-lg-3",
      "col-md-4",
      "col-sm-6",
      "col-xs-12",
      "my-2"
    );

    itemCard.innerHTML += `
              <div class="card h-100">
              <div class="parentContainer">
              <div class="top-left">${item.itemcode}</div>
                <img src=${selectImage(
                  item.itemtype
                )} class="card-img-top" alt="food" />                    
                    <div class="bottom-right discount-text" discount="${
                      item.discount
                    }">${item.discount > 0 ? item.discount + "% off" : ""}</div>
                </div>

                <div class="card-body text-end">
                  <h5 class="card-title text-center">${item.itemname}</h5>
                  <p class="card-text text-center">Rs.${item.price}</p>
                  <a href="#" class="btn btn-success"><i class="fa-solid fa-cart-shopping">+</i></a>
                </div>
              </div>
            `;

    itemCards.appendChild(itemCard);
  });

  document.querySelectorAll(".discount-text").forEach((element) => {
    if (parseInt(element.getAttribute("discount")) > 0) {
      element.classList.add("set-padding");
    }
  });

  document.querySelectorAll(".btn-success").forEach((button) => {
    button.addEventListener("click", (event) => {
      const itemCode = event.target
        .closest(".card")
        .querySelector(".top-left").innerText;
      const item = items.find((i) => i.itemcode === itemCode);

      let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

      if (containsObject(item, cartItems)) {
        Swal.fire("Already in cart!");
      } else {
        cartItems.push(item);
        Swal.fire("Added to cart!");
      }

      localStorage.setItem("cartItems", JSON.stringify(cartItems));

      loadTableData();
    });
  });
}

function containsObject(item, cartItems) {
  var i;
  for (i = 0; i < cartItems.length; i++) {
    if (cartItems[i].itemcode === item.itemcode) {
      return true;
    }
  }

  return false;
}

function selectImage(itemtype) {
  const images = {
    Burger: "./images/burger-3.jpg",
    Submarine: "./images/submarine-2.png",
    Fries: "./images/fries-2.png",
    Chicken: "./images/chicken.png",
    Pasta: "./images/pasta-2.png",
    Drinks: "./images/beverages-2.png",
  };
  return images[itemtype];
}

if (selectedCategory) {
  selectedCategory.addEventListener("change", getSelectedValue);
} else {
  console.log("Element with ID 'selectCategory' not found.");
}

function getSelectedValue() {
  itemCards.innerHTML = "";
  const itemCategory =
    selectedCategory.options[selectedCategory.selectedIndex].text;
  const filteredItems =
    itemCategory === "All"
      ? items
      : items.filter((item) => item.itemtype === itemCategory);
  filteredItems.forEach((item) => setInnerHtml(item));
}

function setInnerHtml(item) {
  const itemCard = document.createElement("div");

  itemCard.classList.add(
    "col-lg-3",
    "col-md-4",
    "col-sm-6",
    "col-xs-12",
    "my-2"
  );

  itemCard.innerHTML += `
                  <div class="card h-100">
                  <div class="parentContainer">
                  <div class="top-left">${item.itemcode}</div>
                    <img src=${selectImage(
                      item.itemtype
                    )} class="card-img-top" alt="food" />
                    
                    <div class="bottom-right discount-text" discount=${
                      item.discount
                    }>${item.discount > 0 ? item.discount + "% off" : ""}</div>
                    </div>
                    <div class="card-body text-end">
                      <h5 class="card-title text-center">${item.itemname}</h5>
                      <p class="card-text text-center">Rs.${item.price}</p>
                      <a href="#" class="btn btn-success"><i class="fa-solid fa-cart-shopping">+</i></a>
                    </div>
                  </div>
                `;

  itemCards.appendChild(itemCard);

  document.querySelectorAll(".discount-text").forEach((element) => {
    if (parseInt(element.getAttribute("discount")) > 0) {
      element.classList.add("set-padding");
    }
  });

  document.querySelectorAll(".btn-success").forEach((button) => {
    button.addEventListener("click", (event) => {
      const itemCode = event.target
        .closest(".card")
        .querySelector(".top-left").innerText;
      const item = items.find((i) => i.itemcode === itemCode);

      let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

      if (containsObject(item, cartItems)) {
        Swal.fire("Already in cart!");
      } else {
        cartItems.push(item);
        Swal.fire("Added to cart!");
      }

      localStorage.setItem("cartItems", JSON.stringify(cartItems));

      loadTableData();
    });
  });
}

function loadTableData() {
  const currentUrl = window.location.href;
  var url = currentUrl.split("/");
  if (url[url.length - 1] === "cart.html") {
    cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    let tableContent = `
      <table class="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Image</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Discount</th>
            <th>Final Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody id="cartTableBody">
    `;

    cartItems.forEach((item, index) => {
      let finalPrice = item.price - (item.price * item.discount) / 100;
      tableContent += `
        <tr>
          <td><img src="${selectImage(item.itemtype)}" alt="${
        item.itemname
      }" class="img-fluid" width="50" /></td>
          <td>${item.itemname}</td>
          <td>Rs.${item.price.toFixed(2)}</td>
          <td><input type="number" class="form-control quantity-input" data-index="${index}" value="1" min="1" /></td>
          <td>${item.discount}%</td>
          <td id="final-price">Rs.${finalPrice.toFixed(2)}</td>
          <td><button class="btn btn-danger delete-item" data-index="${index}">Delete</button></td>
        </tr>
      `;
    });

    tableContent += `</tbody></table>`;
    tableData.innerHTML = tableContent;

    document.querySelectorAll(".delete-item").forEach((button) => {
      button.addEventListener("click", deleteItem);
    });

    function deleteItem(event) {
      const index = event.target.getAttribute("data-index");
      cartItems.splice(index, 1);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      loadTableData();
    }

    document.querySelectorAll(".quantity-input").forEach((item) => {
      let finalPriceHtmlElement = item.parentElement.nextElementSibling.nextElementSibling;
      item.addEventListener("input", function (event) {
        finalPriceHtmlElement.innerHTML="Rs."+changeQuantity(event);
      });
    });

    function changeQuantity(event) {
      const index = event.target.getAttribute("data-index");
      var newTotalPrice = event.target.value * cartItems[index].price;
      let discountedPrice =
        newTotalPrice - (newTotalPrice * cartItems[index].discount) / 100;
      return discountedPrice;
    }
  }
}

if (checkoutBtn) {
  checkoutBtn.addEventListener("click", function () {
    cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    var total = 0.0;
    
    document.querySelectorAll("[id='final-price']").forEach((priceElement) => {
      let priceString = priceElement.innerHTML;
      let price = parseFloat(priceString.match(/[\d].+/)[0]); 
      total += price;
    });

    Swal.fire(`Your total is Rs.${total.toFixed(2)}`);
  });
} else {
  console.log("Element with ID 'checkoutBtn' not found.");
}
