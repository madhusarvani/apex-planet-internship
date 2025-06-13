const products = [
  { name: "iPhone 14", category: "phone", price: 79990, rating: 4.7 },
  { name: "Samsung Galaxy S23", category: "phone", price: 69999, rating: 4.6 },
  { name: "Realme Narzo 60", category: "phone", price: 17999, rating: 4.2 },
  { name: "Redmi Note 12", category: "phone", price: 14999, rating: 4.1 },
  { name: "Vivo V27", category: "phone", price: 29999, rating: 4.3 },
  { name: "Google Pixel 7a", category: "phone", price: 43999, rating: 4.6 },
  { name: "OnePlus Nord CE 3", category: "phone", price: 25999, rating: 4.4 },
  { name: "Poco X5 Pro", category: "phone", price: 22999, rating: 4.2 },
  { name: "Motorola G73", category: "phone", price: 18999, rating: 4.1 },
  { name: "iQOO Z7", category: "phone", price: 20999, rating: 4.3 },

  { name: "Dell XPS 13", category: "laptop", price: 110000, rating: 4.5 },
  { name: "MacBook Air M2", category: "laptop", price: 134990, rating: 4.8 },
  { name: "Lenovo IdeaPad Slim 3", category: "laptop", price: 45000, rating: 4.1 },
  { name: "HP Pavilion 14", category: "laptop", price: 58990, rating: 4.3 },
  { name: "Acer Aspire 7", category: "laptop", price: 52999, rating: 4.4 },
  { name: "ASUS VivoBook 15", category: "laptop", price: 39990, rating: 4.2 },
  { name: "MSI GF63 Thin", category: "laptop", price: 60999, rating: 4.5 },
  { name: "LG Gram 16", category: "laptop", price: 99990, rating: 4.6 },
  { name: "Honor MagicBook X14", category: "laptop", price: 45990, rating: 4.3 },
  { name: "Infinix INBook X2", category: "laptop", price: 34990, rating: 4.0 },

  { name: "Apple Watch SE", category: "watch", price: 29990, rating: 4.4 },
  { name: "Noise ColorFit Pulse", category: "watch", price: 1499, rating: 4.0 },
  { name: "Fire-Boltt Invincible", category: "watch", price: 4999, rating: 4.3 },
  { name: "Boat Wave Lite", category: "watch", price: 1999, rating: 4.1 },
  { name: "Fastrack Reflex Beat+", category: "watch", price: 2299, rating: 4.2 },
  { name: "Samsung Galaxy Watch 4", category: "watch", price: 15999, rating: 4.5 },
  { name: "Fitbit Charge 5", category: "watch", price: 11990, rating: 4.3 },
  { name: "Fire-Boltt Ninja Call Pro", category: "watch", price: 1799, rating: 4.0 },
  { name: "Realme Watch 3", category: "watch", price: 2699, rating: 4.2 },
  { name: "Amazfit GTS 2 Mini", category: "watch", price: 6499, rating: 4.4 },

  { name: "Boat Airdopes 441", category: "accessory", price: 1999, rating: 4.2 },
  { name: "JBL Tune 215BT", category: "accessory", price: 2499, rating: 4.1 },
  { name: "Samsung 25W Charger", category: "accessory", price: 1299, rating: 4.5 },
  { name: "Logitech M235 Mouse", category: "accessory", price: 899, rating: 4.4 },
  { name: "Sandisk 64GB Pen Drive", category: "accessory", price: 499, rating: 4.3 },
  { name: "HP K500F Keyboard", category: "accessory", price: 1299, rating: 4.0 },
  { name: "TP-Link WiFi Router", category: "accessory", price: 1499, rating: 4.3 },
  { name: "Anker PowerCore Power Bank", category: "accessory", price: 2999, rating: 4.6 },
  { name: "Zebronics USB Hub", category: "accessory", price: 899, rating: 4.2 },
  { name: "Belkin Surge Protector", category: "accessory", price: 1799, rating: 4.5 }
];

function displayProducts(list) {
  const container = document.getElementById("productList");
  container.innerHTML = "";
  list.forEach(p => {
    container.innerHTML += `
      <div class="product-card">
        <h3>${p.name}</h3>
        <p>Category: ${p.category}</p>
        <p>Price: ₹${p.price}</p>
        <p>Rating: ⭐ ${p.rating}</p>
        <a class="buy-now" href="https://www.amazon.in/s?k=${encodeURIComponent(p.name)}" target="_blank">Buy Now</a>
      </div>
    `;
  });
}

function applyFilter() {
  const category = document.getElementById("categoryFilter").value;
  const sortBy = document.getElementById("sortFilter").value;

  let filtered = category === "all"
    ? [...products]
    : products.filter(p => p.category === category);

  filtered.sort((a, b) => a[sortBy] - b[sortBy]);
  displayProducts(filtered);
}

applyFilter();
