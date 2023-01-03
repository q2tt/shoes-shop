import getEl from "../utils /getEl.js";

function displayPagination(arrData, productItem, productsPage) {
  const pagesCount = Math.ceil(arrData.length / productItem);
  let paginationBox = "";
  if (pagesCount > 1) {
    for (let i = 0; i < pagesCount; i++) {
      let page = i + 1;

      if (page == productsPage) {
        paginationBox += `<a href="/products/${page}" class="product__paginator_page product__paginator_page-active" data-link>${page}</a>`;
      } else {
        paginationBox += `<a href="/products/${page}" class="product__paginator_page" data-link>${page}</a>`;
      }
    }
  }
  getEl("pagination").innerHTML = paginationBox;
}

export default displayPagination;
