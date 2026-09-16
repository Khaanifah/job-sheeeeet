export function filterProducts(products = [], search = "", category = "all") {
  return products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory = category === "all" || product.category === category;
    return matchesSearch && matchesCategory;
  });
}

export function sortProducts(products = [], sortBy = "default") {
  const arr = [...products]; 
  
  switch (sortBy) {
    case "price-asc":
      return arr.sort((a, b) => a.price - b.price);
    case "price-desc":
      return arr.sort((a, b) => b.price - a.price);
    case "rating":
      return arr.sort((a, b) => b.rating - a.rating);
    case "title":
      return arr.sort((a, b) => a.title.localeCompare(b.title));
    default:
      return arr;
  }
}

export function getStatistics(products = []) {
  if (!products || products.length === 0) {
    return {
      totalProducts: 0,
      averagePrice: 0,
      highestPrice: 0,
      lowestPrice: 0,
      totalStock: 0,
      averageRating: 0,
    };
  }

  const totalProducts = products.length;
  

  const totalPrice = products.reduce((sum, p) => sum + (p.price || 0), 0);
  const totalStock = products.reduce((sum, p) => sum + (p.stock || 0), 0);
  const totalRating = products.reduce((sum, p) => sum + (p.rating || 0), 0);
  
 
  const prices = products.map((p) => p.price || 0);
  const highestPrice = Math.max(...prices);
  const lowestPrice = Math.min(...prices);

  return {
    totalProducts,
    averagePrice: +(totalPrice / totalProducts).toFixed(2),
    highestPrice,
    lowestPrice,
    totalStock,
    averageRating: +(totalRating / totalProducts).toFixed(2),
  };
}


export function getCategoryAnalytics(products = []) {
  if (!products || products.length === 0) return {};


  const grouped = products.reduce((acc, product) => {
    const cat = product.category || "uncategorized";
    if (!acc[cat]) {
      acc[cat] = [];
    }
    acc[cat].push(product);
    return acc;
  }, {});


  const analytics = {};
  for (const [cat, itemArray] of Object.entries(grouped)) {
    const count = itemArray.length;
    const catTotalPrice = itemArray.reduce((sum, p) => sum + (p.price || 0), 0);
    const catTotalRating = itemArray.reduce((sum, p) => sum + (p.rating || 0), 0);
    const catTotalStock = itemArray.reduce((sum, p) => sum + (p.stock || 0), 0);
    
    analytics[cat] = {
      count,
      averagePrice: +(catTotalPrice / count).toFixed(2),
      averageRating: +(catTotalRating / count).toFixed(2),
      totalStock: catTotalStock,
    };
  }
  
  return analytics;
}

export function exactSearch(products = [], keyword = "") {
  if (!keyword) return products;
  return products.filter((p) => p.title === keyword);
}


export function partialSearch(products = [], keyword = "") {
  if (!keyword) return products;
  return products.filter((p) => p.title.includes(keyword));
}


export function caseInsensitiveSearch(products = [], keyword = "") {
  if (!keyword) return products;
  const lowerKeyword = keyword.toLowerCase();
  return products.filter((p) => p.title.toLowerCase().includes(lowerKeyword));
}