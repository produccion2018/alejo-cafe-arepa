const ownerWhatsapp = "31613966455";
let selectedProductModal = null;

const products = [
  {
    id: 1,
    category: "club",
    title: { es: "CLUB HOUSE", en: "CLUB HOUSE", nl: "CLUB HOUSE" },
    subtitle: { es: "", en: "", nl: "" },
    description: {
      es: "4 slices of bread, supreme chicken, ham, cheese, bacon, egg, lettuce, tomato + french fries",
      en: "4 slices of bread, supreme chicken, ham, cheese, bacon, egg, lettuce, tomato + french fries",
      nl: "4 sneetjes brood, kip, ham, kaas, bacon, ei, sla, tomaat + friet"
    },
    img: "misProductos/IMG01.jpg",
    price: 9.50
  },
  {
    id: 2,
    category: "choripanes",
    title: { es: "CHORIPANES", en: "CHORIPANES", nl: "CHORIPANEN" },
    subtitle: { es: "You must try them!", en: "You must try them!", nl: "Je moet ze proberen!" },
    description: {
      es: "Reina, Pork, Reina Palad, Shredded frentel, avocado",
      en: "Reina, Pork, Reina Palad, Shredded frentel, avocado",
      nl: "Reina, varkensvlees, avocado, kaas"
    },
    img: "misProductos/IMG02.jpg",
    price: 8.00
  },
  {
    id: 3,
    category: "arepas",
    title: { es: "AREPAS", en: "AREPAS", nl: "AREPAS" },
    subtitle: { es: "Gigantic & try them!", en: "Gigantic & try them!", nl: "Gigantisch & probeer ze!" },
    description: {
      es: "Pork, Regular (Beef or chicken & avocado), Shredded Beef, Vegan, Double + fries",
      en: "Pork, Regular (Beef or chicken & avocado), Shredded Beef, Vegan, Double + fries",
      nl: "Varken, rund, kip, avocado, vegan, dubbel + friet"
    },
    img: "misProductos/IMG03.jpg",
    price: 7.50
  },
  {
    id: 4,
    category: "pepitos",
    title: { es: "PEPITOS", en: "PEPITOS", nl: "PEPITOS" },
    subtitle: { es: "", en: "", nl: "" },
    description: {
      es: "Regular: 30 cm baguette (beef, chicken, ham, cheese, cabbage, carrot, lettuce, tomato, corn, onion + shoestring potatoes)",
      en: "Regular: 30 cm baguette (beef, chicken, ham, cheese, cabbage, carrot, lettuce, tomato, corn, onion + shoestring potatoes)",
      nl: "30cm baguette (rund, kip, ham, kaas, groenten + frietjes)"
    },
    img: "misProductos/IMG04.jpg",
    price: 10.00
  },
  {
    id: 5,
    category: "sandwiches",
    title: { es: "SANDWICHES", en: "SANDWICHES", nl: "SANDWICHES" },
    subtitle: { es: "The classics", en: "The classics", nl: "De klassiekers" },
    description: {
      es: "Ham & Cheese, Shredded Cheese",
      en: "Ham & Cheese, Shredded Cheese",
      nl: "Ham & kaas, geraspte kaas"
    },
    img: "misProductos/IMG05.jpg",
    price: 6.50
  },
  {
    id: 6,
    category: "empanadas",
    title: { es: "EMPANADAS", en: "EMPANADAS", nl: "EMPANADAS" },
    subtitle: { es: "The classics", en: "The classics", nl: "De klassiekers" },
    description: {
      es: "Scraden egg with vegetables and ham",
      en: "Scraden egg with vegetables and ham",
      nl: "Ei met groenten en ham"
    },
    img: "misProductos/IMG06.jpg",
    price: 5.00
  },
  {
    id: 7,
    category: "omelette",
    title: { es: "OMELETTE", en: "OMELETTE", nl: "OMELET" },
    subtitle: { es: "The classics", en: "The classics", nl: "De klassiekers" },
    description: {
      es: "Ham & Cheese, Shredded Cheese",
      en: "Ham & Cheese, Shredded Cheese",
      nl: "Ham & kaas, geraspte kaas"
    },
    img: "misProductos/IMG07.jpg",
    price: 6.00
  }
];

let cart = JSON.parse(localStorage.getItem("cartAlejandroBecerra")) || [];
let currentLang = localStorage.getItem("langAlejandroBecerra") || "es";

document.getElementById("langSelect").value = currentLang;

function renderProducts(filter = "") {
  const container = document.getElementById("productsContainer");
  container.innerHTML = "";

  const filtered = products.filter(p =>
    p.title[currentLang].toLowerCase().includes(filter.toLowerCase()) ||
    p.description[currentLang].toLowerCase().includes(filter.toLowerCase())
  );

  filtered.forEach(p => {
    const col = document.createElement("div");
    col.className = "col-12 col-md-6";

    col.innerHTML = `
      <div class="product-card">
        <h3 class="product-title" style="cursor:pointer;" onclick="openProductModal(${p.id})">${p.title[currentLang]}</h3>
        <p class="product-subtitle">${p.subtitle[currentLang]}</p>

        <img src="${p.img}" class="product-img" alt="${p.title[currentLang]}" onclick="openProductModal(${p.id})" style="cursor:pointer;">

        <p class="product-list mt-2">${p.description[currentLang]}</p>

        <div class="d-flex justify-content-between align-items-center mt-2">
          <span class="price-tag">€ ${p.price.toFixed(2)}</span>
          <button class="btn btn-add btn-sm" onclick="addToCart(${p.id})">
            <i class="fa fa-cart-plus"></i> ${translate("Agregar", "Add", "Toevoegen")}
          </button>
        </div>
      </div>
    `;

    container.appendChild(col);
  });
}

function translate(es, en, nl) {
  if (currentLang === "es") return es;
  if (currentLang === "en") return en;
  return nl;
}

/* CARRITO */
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const existing = cart.find(item => item.id === productId);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  saveCart();
  renderCart();

  Swal.fire({
    icon: "success",
    title: translate("Agregado al carrito", "Added to cart", "Toegevoegd aan winkelwagen"),
    timer: 1200,
    showConfirmButton: false
  });
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  renderCart();
}

function changeQty(productId, amount) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.qty += amount;

  if (item.qty <= 0) {
    removeFromCart(productId);
  } else {
    saveCart();
    renderCart();
  }
}

function renderCart() {
  const container = document.getElementById("cartItems");
  const totalEl = document.getElementById("cartTotal");
  const countEl = document.getElementById("cartCount");

  container.innerHTML = "";
  let total = 0;
  let count = 0;

  cart.forEach(item => {
    total += item.price * item.qty;
    count += item.qty;

    const div = document.createElement("div");
    div.className = "cart-item";

    div.innerHTML = `
      <div class="cart-item-title">${item.title[currentLang]}</div>
      <div>€ ${(item.price * item.qty).toFixed(2)}</div>

      <div class="cart-controls">
        <button onclick="changeQty(${item.id}, -1)">-</button>
        <span><b>${item.qty}</b></span>
        <button onclick="changeQty(${item.id}, 1)">+</button>
        <button class="btn btn-sm btn-danger" onclick="removeFromCart(${item.id})">
          <i class="fa fa-trash"></i>
        </button>
      </div>
    `;

    container.appendChild(div);
  });

  totalEl.textContent = total.toFixed(2);
  countEl.textContent = count;
}

function saveCart() {
  localStorage.setItem("cartAlejandroBecerra", JSON.stringify(cart));
}

function clearCart() {
  cart = [];
  saveCart();
  renderCart();
}

function toggleCart() {
  document.getElementById("cartPanel").classList.toggle("active");
}

/* CHECKOUT */
function checkout() {
  if (cart.length === 0) {
    Swal.fire({
      icon: "warning",
      title: translate("Carrito vacío", "Empty cart", "Lege winkelwagen"),
      text: translate("Agrega productos antes de finalizar.", "Add products before checkout.", "Voeg producten toe.")
    });
    return;
  }

  Swal.fire({
    title: translate("Finalizar Pedido", "Checkout", "Bestelling afronden"),
    html: `
      <input type="text" id="customerName" class="swal2-input" placeholder="${translate("Tu nombre", "Your name", "Jouw naam")}">
      <input type="text" id="customerAddress" class="swal2-input" placeholder="${translate("Dirección (si delivery)", "Address (if delivery)", "Adres (bij bezorging)")}">

      <select id="deliveryType" class="swal2-select">
        <option value="delivery">${translate("Delivery", "Delivery", "Bezorging")}</option>
        <option value="pickup">${translate("Retirar en local", "Pick-up", "Afhalen")}</option>
      </select>
    `,
    confirmButtonText: translate("Enviar por WhatsApp", "Send via WhatsApp", "Versturen via WhatsApp"),
    showCancelButton: true,
    cancelButtonText: translate("Cancelar", "Cancel", "Annuleren"),
    preConfirm: () => {
      const name = document.getElementById("customerName").value.trim();
      const address = document.getElementById("customerAddress").value.trim();
      const deliveryType = document.getElementById("deliveryType").value;

      if (!name) {
        Swal.showValidationMessage(translate("Escribe tu nombre.", "Enter your name.", "Vul je naam in."));
        return false;
      }

      return { name, address, deliveryType };
    }
  }).then((result) => {
    if (!result.isConfirmed) return;

    const { name, address, deliveryType } = result.value;

    let message = `📌 *${translate("NUEVO PEDIDO", "NEW ORDER", "NIEUWE BESTELLING")} - BATTER BOUTIQUE*\n\n`;
    message += `👤 ${translate("Cliente", "Customer", "Klant")}: *${name}*\n`;

    if (deliveryType === "delivery") {
      message += `🚚 ${translate("Tipo", "Type", "Type")}: *${translate("Delivery", "Delivery", "Bezorging")}*\n`;
      message += `📍 ${translate("Dirección", "Address", "Adres")}: *${address || translate("NO INDICADA", "NOT PROVIDED", "NIET OPGEGEVEN")}*\n`;
    } else {
      message += `🏪 ${translate("Tipo", "Type", "Type")}: *${translate("Retira en local", "Pick-up", "Afhalen")}*\n`;
    }

    message += `\n🛒 *${translate("Productos", "Products", "Producten")}:*\n`;

    let total = 0;
    cart.forEach(item => {
      total += item.price * item.qty;
      message += `- ${item.title[currentLang]} x${item.qty} (€ ${(item.price * item.qty).toFixed(2)})\n`;
    });

    message += `\n💰 ${translate("Total", "Total", "Totaal")}: *€ ${total.toFixed(2)}*\n\n`;
    message += `✅ ${translate("Pedido generado desde el menú digital.", "Order generated from the digital menu.", "Bestelling gemaakt via het digitale menu.")}\n`;
    message += `👨‍💻 ${translate("Sistema", "System", "Systeem")}: Alejandro Becerra`;

    const whatsappUrl = `https://wa.me/${ownerWhatsapp}?text=${encodeURIComponent(message)}`;

    // ✅ FIX PARA CELULAR / TABLET / PC
    if (/Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent)) {
      window.location.href = whatsappUrl;
    } else {
      window.open(whatsappUrl, "_blank");
    }

    clearCart();

    Swal.fire({
      icon: "success",
      title: translate("Pedido enviado!", "Order sent!", "Bestelling verzonden!"),
      text: translate("Se abrió WhatsApp con el mensaje listo.", "WhatsApp opened with message ready.", "WhatsApp is geopend met het bericht."),
      timer: 1800,
      showConfirmButton: false
    });
  });
}

/* MODAL PRODUCTO */
function openProductModal(productId) {
  const product = products.find(p => p.id === productId);
  selectedProductModal = product;

  document.getElementById("modalTitle").textContent = product.title[currentLang];
  document.getElementById("modalName").textContent = product.title[currentLang];
  document.getElementById("modalDesc").textContent = product.description[currentLang];
  document.getElementById("modalPrice").textContent = product.price.toFixed(2);
  document.getElementById("modalImage").src = product.img;

  const modal = new bootstrap.Modal(document.getElementById("productModal"));
  modal.show();
}

function addToCartFromModal() {
  if (!selectedProductModal) return;
  addToCart(selectedProductModal.id);
}

/* BUSCADOR */
document.getElementById("searchInput").addEventListener("input", (e) => {
  renderProducts(e.target.value);
});

/* IDIOMA */
document.getElementById("langSelect").addEventListener("change", (e) => {
  currentLang = e.target.value;
  localStorage.setItem("langAlejandroBecerra", currentLang);
  applyLanguage();
  renderProducts(document.getElementById("searchInput").value);
  renderCart();
});

function applyLanguage() {
  document.getElementById("titleMain").textContent =
    currentLang === "es" ? "BATTER BOUTIQUE – AREPA" :
    currentLang === "en" ? "BATTER BOUTIQUE – AREPA" :
    "BATTER BOUTIQUE – AREPA";

  document.getElementById("subtitleMain").textContent =
    currentLang === "es" ? "Comida callejera Holandesa y Venezolana" :
    currentLang === "en" ? "Dutch & Venezuela Street Food" :
    "Nederlands & Venezolaans Street Food";

  document.getElementById("cartTitle").textContent =
    translate("🛒 Carrito", "🛒 Cart", "🛒 Winkelwagen");

  document.getElementById("clearCartBtn").textContent =
    translate("Vaciar carrito", "Clear cart", "Winkelwagen leegmaken");

  document.getElementById("checkoutBtn").textContent =
    translate("Finalizar pedido", "Checkout", "Bestelling afronden");

  document.getElementById("totalText").innerHTML =
    translate("Total: €", "Total: €", "Totaal: €") + `<span id="cartTotal">${document.getElementById("cartTotal").textContent}</span>`;

  document.getElementById("searchInput").placeholder =
    translate("Buscar comida... (ej: arepa, pepito, empanada)", "Search food... (e.g. arepa, pepito, empanada)", "Zoek eten... (bijv. arepa, pepito, empanada)");
}

/* INIT */
applyLanguage();
renderProducts();
renderCart();
