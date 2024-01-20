document
  .querySelector("#load-product")
  .addEventListener("click", function (event) {
    event.preventDefault();
    loadProducts();
  });

document
  .querySelector("#add-product")
  .addEventListener("click", function (event) {
    event.preventDefault();
    addProduct();
  });

const grocery_URL = "http://localhost:3030/jsonstore/grocery/";

async function loadProducts() {
  try {
    document.querySelector(".tbl-content #tbody").innerHTML = "";
    const response = await fetch(grocery_URL);
    const data = await response.json();

    const products = Object.values(data);

    const createElementPromises = products.map((element) => {
      return createElement(
        element.product,
        element.count,
        element.price,
        element._id
      );
    });

    const createdElements = await Promise.all(createElementPromises);

    const tbody = document.querySelector(".tbl-content #tbody");
    createdElements.forEach((element) => {
      tbody.appendChild(element);
    });
  } catch (error) {
    console.error("Error loading products:", error);
  }
}

async function addProduct() {
  try {
    const product = document.querySelector("#product").value;
    const count = document.querySelector("#count").value;
    const price = document.querySelector("#price").value;

    if (!product || !count || !price) {
      return;
    }

    await fetch(grocery_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ product, count, price }),
    });

    document.querySelector("#product").value = "";
    document.querySelector("#count").value = "";
    document.querySelector("#price").value = "";

    await loadProducts();
  } catch (error) {
    console.error("Error adding product:", error);
  }
}

async function updateProduct(e) {
  document.querySelector("#update-product").removeAttribute("disabled");
  document.querySelector("#add-product").setAttribute("disabled", true);
  const target = e.currentTarget.parentElement;
  const body = target.parentElement;
  const targetProduct = body.querySelector(".name");
  const product = targetProduct.textContent;
  const id = targetProduct.getAttribute("data-id");
  const count = body.querySelector(".count-product").textContent;
  const price = body.querySelector(".product-price").textContent;

  document.querySelector("#product").value = product;
  document.querySelector("#count").value = count;
  document.querySelector("#price").value = price;

  document.querySelector("#product").value = "";
  document.querySelector("#count").value = "";
  document.querySelector("#price").value = "";

  document
    .querySelector("#update-product")
    .addEventListener("click", function (event) {
      event.preventDefault();
      addUpdatedProduct(id);
    });
}

async function addUpdatedProduct(id) {
  try {
    const product = document.querySelector("#product").value;
    const count = document.querySelector("#count").value;
    const price = document.querySelector("#price").value;

    if (!product || !count || !price) {
      return;
    }

    await fetch(`${grocery_URL}${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ product, count, price }),
    });

    document.querySelector("#product").value = "";
    document.querySelector("#count").value = "";
    document.querySelector("#price").value = "";

    document.querySelector("#update-product").setAttribute("disabled", true);
    document.querySelector("#add-product").removeAttribute("disabled");

    await loadProducts();
  } catch (error) {
    console.error("Error updating product:", error);
  }
}

async function deleteProduct(e) {
  e.preventDefault();
  try {
    const target = e.currentTarget.parentElement;
    const body = target.parentElement;
    const product = body.querySelector(".name");
    const id = product.getAttribute("data-id");

    await fetch(`${grocery_URL}${id}`, {
      method: "DELETE",
    });

    await loadProducts();
  } catch (error) {
    console.error("Error deleting product:", error);
  }
}

function createElement(product, count, price, id) {
  const thread = document.createElement("tr");
  const productTd = document.createElement("td");
  const countTd = document.createElement("td");
  const priceTd = document.createElement("td");
  const buttonTd = document.createElement("td");
  const updateBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");

  productTd.classList.add("name");
  productTd.textContent = product;
  productTd.setAttribute("data-id", id);

  countTd.classList.add("count-product");
  countTd.textContent = count;

  priceTd.classList.add("product-price");
  priceTd.textContent = price;

  buttonTd.classList.add("btn");

  updateBtn.classList.add("update");
  updateBtn.textContent = "Update";
  updateBtn.addEventListener("click", updateProduct);

  deleteBtn.classList.add("delete");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", deleteProduct);

  buttonTd.appendChild(updateBtn);
  buttonTd.appendChild(deleteBtn);

  thread.appendChild(productTd);
  thread.appendChild(countTd);
  thread.appendChild(priceTd);
  thread.appendChild(buttonTd);

  return thread;
}
