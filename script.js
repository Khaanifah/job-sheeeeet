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

console.log(allComments);