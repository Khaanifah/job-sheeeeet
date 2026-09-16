import { initialProducts } from "./data.js";
export const state = {
    products: initialProducts,
    search: "",
    category: "all",
    sortBy: "default",
    favorites: [],
    status: "idle"
};