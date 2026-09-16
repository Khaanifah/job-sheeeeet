const initialProducts = [
  {
    id: 1,
    title: "Laptop Gaming",
    price: 1200,
    category: "laptops",
    rating: 4.5,
    thumbnail: "https://dummyjson.com/image/200x200"
  },
  {
    id: 2,
    title: "Smartphone Pro",
    price: 800,
    category: "phones",
    rating: 4.2,
    thumbnail: "https://dummyjson.com/image/200x200"
  },
  {
    id: 3,
    title: "Wireless Headphones",
    price: 100,
    category: "audio",
    rating: 4.0,
    thumbnail: "https://dummyjson.com/image/200x200"
  },
  {
    id: 4,
    title: "Smartwatch Sport",
    price: 250,
    category: "wearables",
    rating: 4.6,
    thumbnail: "https://dummyjson.com/image/200x200"
  },
  {
    id: 5,
    title: "Mechanical Keyboard",
    price: 90,
    category: "accessories",
    rating: 4.3,
    thumbnail: "https://dummyjson.com/image/200x200"
  }
];

const renderProducts = (products = []) => {
  const container = document.querySelector("#product-list");
  if (!container) return;

  container.innerHTML = "";
  
  if (products.length === 0) {
    container.innerHTML = "<p>Produk tidak ditemukan.</p>";
    return;
  }

  for (const product of products) {
    const { title, price, category, rating, thumbnail } = product;

    const card = document.createElement("div");
    card.classList.add("product-card");
    
    card.innerHTML = `
      <img src="${thumbnail ?? 'https://dummyjson.com/image/200x200'}}" alt="${title}">
      <h3>${title}</h3>
      <p>Kategori: ${category}</p>
      <p>Harga: $${price}</p>
      <p>Rating: ${rating}</p>
    `;
    
    container.append(card);
  }
}

//start bagian 18, diatas tadi bagian 17 dan ditambahin bagian 20
const state = {
  products: initialProducts,
  search: "",
  category: "all",
  sortBy: "default",
  favorites: [],
  status: "idle"
};

const getStatistics = (products = []) => {
  if (!products?.length) return { totalProducts: 0, averagePrice: 0, totalStock: 0 };
  const totalStock = products.reduce((sum, { stock = 0 }) => sum + stock, 0);
  const totalPrice = products.reduce((sum, { price = 0 }) => sum + price, 0);

  return {
    totalProducts: products.length,
    averagePrice: (totalPrice / products.length).toFixed(2),
    totalStock
  };
};


const render = () => {
let result = state.products.filter(({ title = "", category = "" }) => {    
  const matchesSearch = title
    .toLowerCase()
    .includes(state.search.toLowerCase().trim());

    const matchesCategory =
      state.category === "all" || category === state.category;    
    return matchesSearch && matchesCategory;
  });

  if (state.sortBy !== "default") {
    result = [...result].sort((a, b) => {
      if (state.sortBy === "price-asc") return a.price - b.price;
      if (state.sortBy === "price-desc") return b.price - a.price;
      if (state.sortBy === "rating") return b.rating - a.rating;
      if (state.sortBy === "title") return a.title.localeCompare(b.title);
      return 0;
    });
  }
  renderProducts(result);
}
render();

//bagian 20
document.querySelector("#search-input")?.addEventListener("input", (e) => {
  state.search = e.target.value;
  render();
});

document.querySelector("#category-select")?.addEventListener("change", (e) => {
  state.category = e.target.value;
  render();
});

document.querySelector("#sort-select")?.addEventListener("change", (e) => {
  state.sortBy = e.target.value;
  render();
});