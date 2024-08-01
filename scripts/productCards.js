const productsSelector = document.getElementById("products");

function createCard(product) {
  return `
      <article class="product-card">
        <a href="./details.html?id=${product.id}">
          <img class="product-img" src="${product.photo[0]}" alt="${product.id}" />
          <div class="product-info">
            <span class="product-title">${product.title}</span>
            <span class="product-description">${product.supplier}</span>
            <div class="product-price-block">
              <span class="price">s/.${product.price}</span>
              <span class="discount">${product.onsale}</span>
            </div>
            <div class="product-tax-policy">${product.taxPolicy}</div>
          </div>
        </a>  
      </article>
`;
}

function printCards(arrayOfProducts, idSelector) {
  let productsTemplate = "";
  for (const element of arrayOfProducts) {
    productsTemplate += createCard(element);
  }
  const productsSelector = document.getElementById(idSelector);
  productsSelector.innerHTML = productsTemplate;
}

// Ordenar los productos
function sortProducts(criteria) {
  let sortedProducts = [...products];
  switch (criteria) {
    case "price-asc":
      sortedProducts.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      sortedProducts.sort((a, b) => b.price - a.price);
      break;
    case "title-asc":
      sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "title-desc":
      sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
      break;
  }
  printCards(sortedProducts, "products");
}

document.getElementById("sort").addEventListener("change", (event) => {
  sortProducts(event.target.value);
});

// Inicializar con productos ordenados por defecto
printCards(products, "products");
