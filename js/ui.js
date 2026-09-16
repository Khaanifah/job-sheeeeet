export const renderProducts = (products = []) => {
    const container = document.querySelector("#product-list");
    if (!container) return;

    container.innerHTML = "";

    if (products.length === 0) {
    container.innerHTML =`<div><p>Produk tidak ditemukan.</p></div>`;        
    return;
    }

    const cardsHTML = products.map(
        (product) => `
        <div class="product-card">
        <img src="${product.thumbnail}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p><strong>Kategori:</strong> ${product.category}</p>
        <p><strong>Harga:</strong> $${product.price}</p>
        <p><strong>Stok:</strong> ${product.stock}</p>
        <p><strong>Rating:</strong> ${product.rating}</p>
        </div>
        `
        )
        .join("");
        container.innerHTML = cardsHTML;
    }   

export function renderStatusUI(status, errorMessage = "") {
    const container = document.querySelector("#product-list");
    if (!container) return;

    if (status === "loading") {
        container.innerHTML = `
        <div class="status-msg loading">
        <p>Memuat data produk dari DummyJSON...</p>
        </div>`;
    } else if (status === "error") {   
        container.innerHTML = `
        <div class="status-msg error">
        <p>Gagal mengambil data produk: ${errorMessage}</p>
        <small>Silakan periksa koneksi internet Anda dan coba lagi.</small>
        </div>`;
    }
}

export function populateCategoryDropdown(products = []) {
  const categorySelect = document.querySelector("#category-select");
  if (!categorySelect) return;

  const categories = ["all", ...new Set(products.map((p) => p.category))];

  categorySelect.innerHTML = categories
    .map(
      (cat) => `
        <option value="${cat}">
          ${cat === "all" ? "Semua Kategori" : cat.charAt(0).toUpperCase() + cat.slice(1)}
        </option>
      `
    )
    .join("");
}

export function renderStatistics(stats) {
  const container = document.querySelector("#stats-container");
  if (!container) return;
  container.innerHTML = `
    <div class="stats-wrapper">
      <p><strong>Total Produk:</strong> ${stats.totalProducts}</p>
      <p><strong>Rata-rata Harga:</strong> $${stats.averagePrice}</p>
      <p><strong>Total Stok:</strong> ${stats.totalStock}</p>
      <p><strong>Rata-rata Rating:</strong> ${stats.averageRating}</p>
    </div>
  `;
}