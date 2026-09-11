//BAGIAN 1, 2, 3, 4
const cart = [
    { title: "Laptop", price: 1000, discountPercent: 10},
    { title: "Mouse", price: 20, discountPercent: 5 },
    { title: "keyboard", price: 50, discountPercent: 0 }
];

function calculatedDiscountedPrice(price, discountPercent) {
    return price - (price*discountPercent) / 100;
}

function applyDiscounts(cart) {
    const discount = [];
    for (const item of cart) {
        const discountedPrice = calculatedDiscountedPrice(item.price, item.discountPercent);
        discount.push({ title: item.title, discountedPrice: discountedPrice });
    }
    return discount;
}

//console.log(applyDiscounts(cart));

const products = [
    {
    id: 1,
    title: "Laptop",
    price: 1200,
    rating: 5,
    stock: 5,
    category: "laptops",
    tags: ["computer", "electronics", "office"],
    dimensions: { width: 30, height: 2, depth: 20 },
    reviews: [
      { user: "A", rating: 5, comment: "Good product" },
      { user: "B", rating: 5, comment: "Worth it" }
    ]
  },
  {
    id: 2,
    title: "Smartphone",
    price: 800,
    rating: 4.2,
    stock: 15,
    category: "phones",
    tags: ["mobile", "electronics"],
    dimensions: { width: 7, height: 0.8, depth: 15 },
    reviews: [
      { user: "C", rating: 4, comment: "Nice camera" },
      { user: "D", rating: 5, comment: "Fast" },
      { user: "E", rating: 3, comment: "Battery so-so" }
    ]
  },
  {
    id: 3,
    title: "Headphones",
    price: 100,
    rating: 4.3,
    stock: 3,
    category: "audio",
    tags: ["audio", "music", "wireless"],
    dimensions: { width: 18, height: 8, depth: 20 },
    reviews: [
      { user: "F", rating: 5, comment: "Great sound" },
      { user: "G", rating: 4, comment: "Comfortable" }
    ]
  },
  {
    id: 4,
    title: "Tablet",
    price: 600,
    rating: 4.4,
    stock: 8,
    category: "tablets",
    tags: ["tablet", "mobile", "electronics"],
    dimensions: { width: 18, height: 0.7, depth: 25 },
    reviews: [
      { user: "H", rating: 5, comment: "Very useful" },
      { user: "I", rating: 4, comment: "Good display" }
    ]
  },
  {
    id: 5,
    title: "Smartwatch",
    price: 250,
    rating: 4.1,
    stock: 12,
    category: "wearables",
    tags: ["watch", "smart", "wearable"],
    dimensions: { width: 4, height: 1, depth: 4 },
    reviews: [
      { user: "J", rating: 4, comment: "Nice features" },
      { user: "K", rating: 4, comment: "Good battery" }
    ]
  },
  {
    id: 6,
    title: "Keyboard",
    price: 75,
    rating: 4.6,
    stock: 20,
    category: "accessories",
    tags: ["keyboard", "computer", "office"],
    dimensions: { width: 44, height: 3, depth: 14 },
    reviews: [
      { user: "L", rating: 5, comment: "Very comfortable" },
      { user: "M", rating: 4, comment: "Good quality" }
    ]
  },
  {
    id: 7,
    title: "Mouse",
    price: 50,
    rating: 4.5,
    stock: 25,
    category: "accessories",
    tags: ["mouse", "computer", "wireless"],
    dimensions: { width: 6, height: 4, depth: 11 },
    reviews: [
      { user: "N", rating: 5, comment: "Smooth and responsive" },
      { user: "O", rating: 4, comment: "Good mouse" }
    ]
  },
  {
    id: 8,
    title: "Monitor",
    price: 300,
    rating: 4.3,
    stock: 7,
    category: "monitors",
    tags: ["monitor", "display", "computer"],
    dimensions: { width: 54, height: 32, depth: 5 },
    reviews: [
      { user: "P", rating: 5, comment: "Clear display" },
      { user: "Q", rating: 4, comment: "Good for work" }
    ]
  },
  {
    id: 9,
    title: "Webcam",
    price: 90,
    rating: 4.0,
    stock: 10,
    category: "accessories",
    tags: ["camera", "webcam", "computer"],
    dimensions: { width: 8, height: 4, depth: 3 },
    reviews: [
      { user: "R", rating: 4, comment: "Good video quality" },
      { user: "S", rating: 4, comment: "Easy to use" }
    ]
  },
  {
    id: 10,
    title: "Speaker",
    price: 150,
    rating: 4.4,
    stock: 6,
    category: "audio",
    tags: ["speaker", "audio", "music"],
    dimensions: { width: 20, height: 25, depth: 18 },
    reviews: [
      { user: "T", rating: 5, comment: "Great sound" },
      { user: "U", rating: 4, comment: "Good bass" }
    ]
  }
];

function findProductById(products, id) {
    return products.find(product => product.id === id);
}

function applyFindProduct(products) {
    const result = [];
    for (const item of products) {
        const foundProduct = findProductById(products, item.id);
        result.push(foundProduct);
    }
    return result;
}

//console.log(findProductById(products, 5));

function filterProductByStock(products, stock) {
    return products.filter(item => item.stock < 10);
}

function applyFilterProduct(products) {
    const result = [];
    for (const item of products) {
        const filteredProduct = filterProductByStock(products, item.stock);
        result.push(filteredProduct);
    }
    return result;
}

//console.log(filterProductByStock(products));

function updateStock(products, id, newStock) {
    return products.map(product => {
        if (product.id === id) {
            return { ...product, stock: newStock };
        }
        return product;
    });
}

//console.log(updateStock(products, 5, 20));

function productTags(products) {
    const result = [];
    for (const item of products) {
        result.push(item.tags);
    }
    return result;
}

//console.log(productTags(products));

function findProductByTag(products, tag) {
    return products.filter(item => item.tags.includes(tag));
}

//console.log(findProductByTag(products, "computer"));

function reviewsValue(products, id, title, totalReviews) {
    const result = [];
    for (const item of products) {
        result.push({
            id: item.id,
            title: item.title,
            totalReviews: item.reviews.length
        });
    }
    return result;
}

//console.log(reviewsValue(products));

const fiveStarReviews = products
    .flatMap(product => product.reviews)
    .filter(review => review.rating === 5);

//console.log(fiveStarReviews);

function calculatedAverageRating(reviews) {
    const totalRating = reviews.reduce(
        (total, reviews) => total + reviews.rating, 0
    );
    return totalRating/reviews.length;
}

const averageRatings = products.map(product => {
    return {
        id: product.id,
        title: product.title,
        averageRating: calculatedAverageRating(product.reviews)
    };
});

//console.log(averageRatings);

function mostReviewedProduct(products) {
    let mostReviewed = products[0];
    for (const item of products) {
        if (item.reviews.length > mostReviewed.reviews.length) {
            mostReviewed = item;
        }
    }

    return {
        id: mostReviewed.id,
        title: mostReviewed.title,
        totalReviews: mostReviewed.reviews.length
    };
}

const result = mostReviewedProduct(products);

//console.log(mostReviewedProduct(products));

function getAllRatings(products) {
    return products.flatMap(product =>
        product.reviews.map(review => review.rating)
    );
}

const ratings = getAllRatings(products);

//console.log(ratings);

function getAllTags(products) {
    return products.flatMap(product => product.tags);
}

const allTags = getAllTags(products);

//console.log(allTags);

function getAllComments(products) {
    return products.flatMap(product =>
        product.reviews.flatMap(review => review.comment)
    );
}

const allComments = getAllComments(products);

//console.log(allComments);

//BAGIAN 5, 6, 7, 8
const laptopPrice = products
    .filter(product => product.category === "laptops")
    .map(product => product.price);

const averagePrice = laptopPrice.reduce((total, price) => total + price, 0) / laptopPrice.length;

//console.log(averagePrice);

function getStatistics(products) {
    const totalProducts = products.length;

    const totalPrice = products.reduce(
        (sum, product) => sum + product.price,
        0
    );

    const averagePrice = totalPrice / totalProducts;

    const highestPrice = Math.max(
        ...products.map(product => product.price)
    );

    const lowestPrice = Math.min(
        ...products.map(product => product.price)
    );

    const totalStock = products.reduce(
        (sum, product) => sum + product.stock,
        0
    );

    const totalRating = products.reduce(
        (sum, product) => sum + product.rating,
        0
    );

    const averageRating = totalRating / totalProducts;

    return {
        totalProducts,
        averagePrice,
        highestPrice,
        lowestPrice,
        totalStock,
        averageRating
    };
}

//console.log(getStatistics(products));

const number = [4, 16, 3, 7, 9];

function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }

    return -1;
}

//console.log(linearSearch(number, 3));
//console.log(linearSearch(products, 2));

function findProductById(products, targetId) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === targetId) {
            return i;
        }
    }

    return -1;
}

//console.log(findProductById(products, 3));

function binarySearch(products, targetId) {
    let left = 0;
    let right = products.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (products[mid].id === targetId) {
            return mid;
        }

        if (products[mid].id < targetId) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

//console.log(binarySearch(products, 5));

const sortedProducts = [...products].sort((a, b) => a.price - b.price);

function binarySearchByPrice(sortedProducts, targetPrice) {
    let left = 0;
    let right = sortedProducts.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (sortedProducts[mid].price === targetPrice) {
            return sortedProducts[mid];
        }

        if (sortedProducts[mid].price < targetPrice) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return null;
}

//console.log(sortedProducts);
//console.log(binarySearchByPrice(sortedProducts, 800));

function bubbleSort(products) {
  const arr = [...products];

  for (let i = 0; i < arr.length - 1; i++) {
    let swapped = false;

    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j].price > arr[j + 1].price) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    if (!swapped) break;
  }

  return arr;
}

const bubbleSortProducts = bubbleSort(products);

//console.log(bubbleSortProducts);

function sortProducts(products, sortBy) {
  const arr = [...products];

  if (sortBy === "price-asc") {
    return arr.sort((a, b) => a.price - b.price);
  }

  if (sortBy === "price-desc") {
    return arr.sort((a, b) => b.price - a.price);
  }

  if (sortBy === "rating") {
    return arr.sort((a, b) => b.rating - a.rating);
  }

  if (sortBy === "title") {
    return arr.sort((a, b) => a.title.localeCompare(b.title));
  }

  return arr;
}

//console.log("Harga termurah:");
//console.log(sortProducts(products, "price-asc"));

//console.log("Harga termahal:");
//console.log(sortProducts(products, "price-desc"));

//console.log("Rating tertinggi:");
//console.log(sortProducts(products, "rating"));

console.log("Judul A-Z:");
console.log(sortProducts(products, "title"));