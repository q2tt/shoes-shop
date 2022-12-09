const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "56f2b15022msh57d6967c0fa7862p1dbd46jsn7f6b4a288a84",
    "X-RapidAPI-Host": "asos2.p.rapidapi.com",
  },
};

async function start() {
  const response = await fetch(
    "https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=51&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US",
    options
  );
  const data = await response.json();
  const { products } = data;
  return products;
}

export default start;
