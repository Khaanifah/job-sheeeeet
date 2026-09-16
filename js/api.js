import { initialProducts } from "./data.js";

const BASE_URL = "https://dummyjson.com";
export const fetchProductsMock = (isSuccess = true) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isSuccess) {
                resolve(initialProducts);
            } else {
                reject("Gagal mengambil data dari server lokal (mock)!");
            }
        }, 1000);
    });
};

export const fetchProducts = async () => {
    try {
        const response = await fetch(`${BASE_URL}/products?limit=30`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data.products;
    } catch (error) {
        console.error("Gagal mengambil data produk dari DummyJSON:", error);
        throw error;
    }
};

