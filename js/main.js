import { state } from "../state.js";
import { renderProducts, renderStatusUI, populateCategoryDropdown, renderStatistics } from "../ui.js";
import { filterProducts, sortProducts, getStatistics } from "./algorithms.js";
import { fetchProducts } from "../api.js";

const render = () => {
    if (state.status === "loading" || state.status === "error") return;
    const filtered = filterProducts(state.products, state.search, state.category);
    const sorted = sortProducts(filtered, state.sortBy);
    const stats = getStatistics(sorted);
    renderStatistics(stats);
    renderProducts(sorted);
};

async function loadProducts() {
    try {
        state.status = "loading";
        renderStatusUI(state.status);
        const products = await fetchProducts();
        state.products = products;
        state.status = "success";
        populateCategoryDropdown(products);
    } catch (error) {
        state.status = "error";
        renderStatusUI(state.status, error.message);
        console.error("Gagal memuat produk:", error);
    } finally {
        render();
    }
}

loadProducts();

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