import ProductView from "./views/ProductView.js";
import About from "./views/About.js";
import HomePage from "./views/HomePage.js";
import Products from "./views/Products.js";
import getBrand from "./modules/sort/getBrands.js";
import getPrise from "./modules/sort/getPrise.js";
import renderBag from "./modules/shoppingBag/renderBag.js";
import innerCountBag from "./modules/innerPages/innerCountBag.js";
import showShopBox from "./modules/buyBox/shoowShopBox.js";
import innerShoesBox from "./modules/innerPages/innerShoesBox.js";
import innerProductsBox from "./modules/innerPages/innrerProductsBox.js";
import getEl from "./modules/utils /getEl.js";
import productsData from "./modules/utils /productsData.js";

const pathToRegex = (path) =>
  new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = (match) => {
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
    (result) => result[1]
  );

  return Object.fromEntries(
    keys.map((key, i) => {
      return [key, values[i]];
    })
  );
};

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const routes = [
    { path: "/", view: HomePage },
    { path: "/about", view: About },
    { path: "/products", view: Products },
    { path: "/products/:id", view: ProductView },
  ];

  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path)),
    };
  });

  let match = potentialMatches.find(
    (potentialMatch) => potentialMatch.result !== null
  );

  if (!match) {
    match = {
      route: routes[0],
      result: [location.pathname],
    };
  }

  const view = new match.route.view(getParams(match));

  document.querySelector("#app").innerHTML = await view.getHtml();

  if (match.route.path === "/") {
    innerShoesBox(productsData);
  } else if (match.route.path === "/products") {
    innerProductsBox(productsData);
    getBrand(productsData);
    getPrise(productsData);
    getEl("allBrands").addEventListener("click", () => {
      innerProductsBox(productsData);
    });
    getEl("showMoreBrands").addEventListener("click", () => {
      getEl('blockBrands').classList.toggle("d-block")
      getEl('showMoreBrands').classList.toggle("btn-img");
    });
  } else if (match.route.path === "/products/:id") {
    let productsId = document.location.href.split("/products/")[1];
    let chosenProduct;
    for (let i = 0; i < productsData.length; i++) {
      if (productsData[i].id == productsId) {
        chosenProduct = productsData[i];
      }
    }
    showShopBox(chosenProduct);
  }
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});

innerCountBag();

getEl("basked").addEventListener("click", function () {
  getEl("bagBox").classList.toggle("d-none");
  getEl("body").classList.toggle("hidden");
  renderBag();
});

getEl("bagExit").addEventListener("click", function () {
  getEl("bagBox").classList.toggle("d-none");
  getEl("body").classList.toggle("hidden");
});

getEl("burgerLinks").addEventListener("click", function () {
  getEl("burgerCheckbox").checked = false;
});



// slider
