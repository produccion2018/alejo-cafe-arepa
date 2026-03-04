// ─────────── CONFIGURACIÓN ───────────
const ownerWhatsapp = "31613966455";
let selectedProductModal = null;

// ─────────── PRODUCTOS ───────────
const products = {
  pancakesSalados: [
    { id: 1, category: "pancakesSalados", title: { es: "Natural", en: "Natural", nl: "Natuurlijk" }, description: { es: "Pancake natural", en: "Natural pancake", nl: "Natuurlijke pannenkoek" }, img: "misProductos/IMG01.jpg", price: 6.99 },
    { id: 2, category: "pancakesSalados", title: { es: "Cheese", en: "Cheese", nl: "Kaas" }, description: { es: "Pancake con queso", en: "Cheese pancake", nl: "Pannenkoek met kaas" }, img: "misProductos/IMG02.jpg", price: 8.49 },
    { id: 3, category: "pancakesSalados", title: { es: "Bacon", en: "Bacon", nl: "Bacon" }, description: { es: "Pancake con bacon", en: "Bacon pancake", nl: "Pannenkoek met bacon" }, img: "misProductos/IMG03.jpg", price: 8.49 },
    { id: 4, category: "pancakesSalados", title: { es: "Champignon, onion, paprika", en: "Champignon, onion, paprika", nl: "Champignon, ui, paprika" }, description: { es: "Pancake con champiñones, cebolla y pimentón", en: "Pancake with mushrooms, onion, paprika", nl: "Pannenkoek met champignons, ui, paprika" }, img: "misProductos/IMG04.jpg", price: 8.49 },
    { id: 5, category: "pancakesSalados", title: { es: "Cheese + Bacon", en: "Cheese + Bacon", nl: "Kaas + Bacon" }, description: { es: "Pancake con queso y bacon", en: "Cheese & Bacon pancake", nl: "Pannenkoek met kaas & bacon" }, img: "misProductos/IMG05.jpg", price: 9.99 },
    { id: 6, category: "pancakesSalados", title: { es: "Cheese + Champignon + Onion + Pepper", en: "Cheese + Champignon + Onion + Pepper", nl: "Kaas + Champignon + Ui + Paprika" }, description: { es: "Pancake completo con queso, champiñones, cebolla y pimentón", en: "Full pancake with cheese, mushroom, onion, pepper", nl: "Volledige pannenkoek met kaas, champignon, ui, paprika" }, img: "misProductos/IMG06.jpg", price: 9.99 },
    { id: 7, category: "pancakesSalados", title: { es: "Bacon + Champignon + Onion + Pepper", en: "Bacon + Champignon + Onion + Pepper", nl: "Bacon + Champignon + Ui + Paprika" }, description: { es: "Pancake con bacon, champiñones, cebolla y pimentón", en: "Bacon & mushroom pancake", nl: "Pannenkoek met bacon, champignon, ui, paprika" }, img: "misProductos/IMG07.jpg", price: 9.99 },
    { id: 8, category: "pancakesSalados", title: { es: "Cheese + Bacon + Champignon + Onion + Pepper", en: "Cheese + Bacon + Champignon + Onion + Pepper", nl: "Kaas + Bacon + Champignon + Ui + Paprika" }, description: { es: "Pancake completo con queso, bacon, champiñones, cebolla y pimentón", en: "Full pancake with cheese, bacon, mushroom, onion, pepper", nl: "Volledige pannenkoek met kaas, bacon, champignon, ui, paprika" }, img: "misProductos/IMG08.jpg", price: 9.99 }
  ],
  pancakesDulces: [
    { id: 9, category: "pancakesDulces", title: { es: "Nutella", en: "Nutella", nl: "Nutella" }, description: { es: "Pancake dulce", en: "Sweet pancake", nl: "Zoete pannenkoek" }, img: "misProductos/pancake09.jpg", price: 8.49 },
    { id: 10, category: "pancakesDulces", title: { es: "Strawberries", en: "Strawberries", nl: "Aardbeien" }, description: { es: "Pancake dulce", en: "Sweet pancake", nl: "Zoete pannenkoek" }, img: "misProductos/pancake10.jpg", price: 8.49 },
    { id: 11, category: "pancakesDulces", title: { es: "Banana", en: "Banana", nl: "Banaan" }, description: { es: "Pancake dulce", en: "Sweet pancake", nl: "Zoete pannenkoek" }, img: "misProductos/pancake11.jpg", price: 8.49 },
    { id: 12, category: "pancakesDulces", title: { es: "Cheese + Nutella", en: "Cheese + Nutella", nl: "Kaas + Nutella" }, description: { es: "Pancake con queso y Nutella", en: "Cheese & Nutella pancake", nl: "Pannenkoek met kaas & Nutella" }, img: "misProductos/pancake12.jpg", price: 9.99 },
    { id: 13, category: "pancakesDulces", title: { es: "Nutella + Strawberries", en: "Nutella + Strawberries", nl: "Nutella + Aardbeien" }, description: { es: "Pancake con Nutella y fresas", en: "Nutella & strawberries pancake", nl: "Pannenkoek met Nutella & aardbeien" }, img: "misProductos/pancake13.jpg", price: 9.99 },
    { id: 14, category: "pancakesDulces", title: { es: "Nutella + Banana", en: "Nutella + Banana", nl: "Nutella + Banaan" }, description: { es: "Pancake con Nutella y plátano", en: "Nutella & banana pancake", nl: "Pannenkoek met Nutella & banaan" }, img: "misProductos/pancake14.jpg", price: 9.99 },
    { id: 15, category: "pancakesDulces", title: { es: "Strawberries + Banana", en: "Strawberries + Banana", nl: "Aardbeien + Banaan" }, description: { es: "Pancake con fresas y plátano", en: "Strawberries & banana pancake", nl: "Pannenkoek met aardbeien & banaan" }, img: "misProductos/pancake15.jpg", price: 9.99 }
  ],
  cakes: [
    { id: 16, category: "cakes", title: { es: "Cheesecake", en: "Cheesecake", nl: "Cheesecake" }, description: { es: "Cheesecake individual", en: "Individual cheesecake", nl: "Individuele cheesecake" }, img: "misProductos/cake01.jpg", price: 5.99 },
    { id: 17, category: "cakes", title: { es: "Lemon pie", en: "Lemon pie", nl: "Citroen taart" }, description: { es: "Pastel de limón", en: "Lemon pie", nl: "Citroen taart" }, img: "misProductos/cake02.jpg", price: 5.99 },
    { id: 18, category: "cakes", title: { es: "Apple pie", en: "Apple pie", nl: "Appeltaart" }, description: { es: "Pastel de manzana", en: "Apple pie", nl: "Appeltaart" }, img: "misProductos/cake03.jpg", price: 5.99 },
    { id: 19, category: "cakes", title: { es: "Apple kisses", en: "Apple kisses", nl: "Appelkussen" }, description: { es: "Pequeño pastel de manzana", en: "Small apple pie", nl: "Klein appeltaartje" }, img: "misProductos/cake04.jpg", price: 5.99 },
    { id: 20, category: "cakes", title: { es: "Chocolate Cake", en: "Chocolate Cake", nl: "Chocolade taart" }, description: { es: "Pastel de chocolate", en: "Chocolate Cake", nl: "Chocolade taart" }, img: "misProductos/cake05.jpg", price: 5.99 }
  ],
  
  stroopwafel: [
    { id: 21, category: "stroopwafel", title: { es: "Stroopwafel", en: "Stroopwafel", nl: "Stroopwafel" }, description: { es: "Stroopwafel clásico", en: "Classic Stroopwafel", nl: "Klassieke Stroopwafel" }, img: "misProductos/stroopwafel01.jpg", price: 5.99 },
    { id: 22, category: "stroopwafel", title: { es: "Nutella", en: "Nutella", nl: "Nutella" }, description: { es: "Stroopwafel con Nutella", en: "Stroopwafel with Nutella", nl: "Stroopwafel met Nutella" }, img: "misProductos/stroopwafel02.jpg", price: 5.99 },
    { id: 23, category: "stroopwafel", title: { es: "Strawberries", en: "Strawberries", nl: "Aardbeien" }, description: { es: "Stroopwafel con fresas", en: "Stroopwafel with strawberries", nl: "Stroopwafel met aardbeien" }, img: "misProductos/stroopwafel03.jpg", price: 5.99 },
    { id: 24, category: "stroopwafel", title: { es: "Pistachio", en: "Pistachio", nl: "Pistache" }, description: { es: "Stroopwafel con pistacho", en: "Stroopwafel with pistachio", nl: "Stroopwafel met pistache" }, img: "misProductos/stroopwafel04.jpg", price: 5.99 },
    { id: 25, category: "stroopwafel", title: { es: "Marshmallow", en: "Marshmallow", nl: "Marshmallow" }, description: { es: "Stroopwafel con malvavisco", en: "Stroopwafel with marshmallow", nl: "Stroopwafel met marshmallow" }, img: "misProductos/stroopwafel05.jpg", price: 5.99 },
    { id: 26, category: "stroopwafel", title: { es: "Choco sprinkles", en: "Choco sprinkles", nl: "Chocolade hagelslag" }, description: { es: "Stroopwafel con chispas de chocolate", en: "Stroopwafel with chocolate sprinkles", nl: "Stroopwafel met chocolade hagelslag" }, img: "misProductos/stroopwafel06.jpg", price: 5.99 },
    { id: 27, category: "stroopwafel", title: { es: "Choco raisin", en: "Choco raisin", nl: "Chocolade rozijn" }, description: { es: "Stroopwafel con chocolate y pasas", en: "Stroopwafel with chocolate & raisins", nl: "Stroopwafel met chocolade & rozijnen" }, img: "misProductos/stroopwafel07.jpg", price: 5.99 },
    { id: 28, category: "stroopwafel", title: { es: "Smarties", en: "Smarties", nl: "Smarties" }, description: { es: "Stroopwafel con Smarties", en: "Stroopwafel with Smarties", nl: "Stroopwafel met Smarties" }, img: "misProductos/stroopwafel08.jpg", price: 5.99 }
  ],
  drinks: [
    { id: 29, category: "drinks", title: { es: "Coffe", en: "Coffe", nl: "Koffie" }, description: { es: "Bebida caliente", en: "Hot drink", nl: "Warme drank" }, img: "misProductos/drink01.jpg", price: 3.50 },
    { id: 30, category: "drinks", title: { es: "Coffe milk", en: "Coffe milk", nl: "Koffiemelk" }, description: { es: "Bebida caliente con leche", en: "Hot drink with milk", nl: "Warme drank met melk" }, img: "misProductos/drink02.jpg", price: 3.50 },
    { id: 31, category: "drinks", title: { es: "Capuchino", en: "Capuchino", nl: "Cappuccino" }, description: { es: "Bebida caliente", en: "Hot drink", nl: "Warme drank" }, img: "misProductos/drink03.jpg", price: 3.50 },
    { id: 32, category: "drinks", title: { es: "Tea", en: "Tea", nl: "Thee" }, description: { es: "Té caliente", en: "Hot tea", nl: "Warme thee" }, img: "misProductos/drink04.jpg", price: 3.50 },
    { id: 33, category: "drinks", title: { es: "Chocomel hot o cool", en: "Chocomel hot or cold", nl: "Chocomel warm of koud" }, description: { es: "Bebida de chocolate", en: "Chocolate drink", nl: "Chocoladedrank" }, img: "misProductos/drink05.jpg", price: 3.50 },
    { id: 34, category: "drinks", title: { es: "Lipton/ Ice tea", en: "Lipton/ Ice tea", nl: "Lipton/ Ice tea" }, description: { es: "Té frío", en: "Iced tea", nl: "Ijsthee" }, img: "misProductos/drink06.jpg", price: 3.50 },
    { id: 35, category: "drinks", title: { es: "Coca Cola/ Cero/ Light", en: "Coca Cola/ Zero/ Light", nl: "Coca Cola/ Zero/ Light" }, description: { es: "Bebida gaseosa", en: "Soda drink", nl: "Frisdrank" }, img: "misProductos/drink07.jpg", price: 3.50 },
    { id: 36, category: "drinks", title: { es: "Sprite", en: "Sprite", nl: "Sprite" }, description: { es: "Bebida gaseosa", en: "Soda drink", nl: "Frisdrank" }, img: "misProductos/drink08.jpg", price: 3.50 },
    { id: 37, category: "drinks", title: { es: "Fanta Orange", en: "Fanta Orange", nl: "Fanta Orange" }, description: { es: "Bebida gaseosa", en: "Soda drink", nl: "Frisdrank" }, img: "misProductos/drink09.jpg", price: 3.50 },
    { id: 38, category: "drinks", title: { es: "Still water", en: "Still water", nl: "Plat water" }, description: { es: "Agua sin gas", en: "Still water", nl: "Plat water" }, img: "misProductos/drink10.jpg", price: 3.50 },
    { id: 39, category: "drinks", title: { es: "Sparkling water", en: "Sparkling water", nl: "Sprankelend water" }, description: { es: "Agua con gas", en: "Sparkling water", nl: "Sprankelend water" }, img: "misProductos/drink11.jpg", price: 3.50 }
  ]
};

// ─────────── VARIABLES ───────────
let cart = JSON.parse(localStorage.getItem("cartAlejandroBecerra")) || [];
let currentLang = localStorage.getItem("langAlejandroBecerra") || "es";
document.getElementById("langSelect").value = currentLang;

// ─────────── FUNCIONES BÁSICAS ───────────
function translate(es, en, nl){
  if(currentLang==="es") return es;
  if(currentLang==="en") return en;
  return nl;
}

function saveCart(){ localStorage.setItem("cartAlejandroBecerra", JSON.stringify(cart)); }

function addToCart(productId){
  const product = Object.values(products).flat().find(p => p.id === productId);
  const existing = cart.find(item => item.id === productId);
  if(existing){ existing.qty += 1; } 
  else { cart.push({...product, qty: 1}); }
  saveCart(); renderCart();
  Swal.fire({icon:"success",title:translate("Agregado al carrito","Added to cart","Toegevoegd aan winkelwagen"),timer:1200,showConfirmButton:false});
}

function removeFromCart(productId){
  cart = cart.filter(item => item.id !== productId);
  saveCart(); renderCart();
}

function changeQty(productId, amount){
  const item = cart.find(i => i.id === productId);
  if(!item) return;
  item.qty += amount;
  if(item.qty <= 0){ removeFromCart(productId); } 
  else { saveCart(); renderCart(); }
}

// ─────────── RENDER CARDS ───────────
function renderProducts(filter = ""){
  const container = document.getElementById("productsContainer");
  container.innerHTML = "";
  const allCategories = Object.keys(products);

  allCategories.forEach(cat => {
    const catProducts = products[cat].filter(p => 
      p.title[currentLang].toLowerCase().includes(filter.toLowerCase()) ||
      p.description[currentLang].toLowerCase().includes(filter.toLowerCase())
    );

    if(catProducts.length > 0){

      // 🔥 TÍTULO CATEGORÍA 
      const catTitle = document.createElement("h2");
      catTitle.className = "category-title text-center my-5";
      catTitle.innerHTML = `
        <span class="category-badge">
          ${translate(cat, cat, cat)}
        </span>
      `;
      container.appendChild(catTitle);

      const row = document.createElement("div");
      row.className = "row";

      catProducts.forEach(p => {
        const col = document.createElement("div");
        col.className = "col-12 col-sm-6 col-md-4 mb-3";

        col.innerHTML = `
          <div class="card product-card h-100" style="cursor:pointer;" onclick="openProductModal(${p.id})">
            <img src="${p.img}" class="card-img-top" alt="${p.title[currentLang]}">
            <div class="card-body">
              <h5 class="card-title">${p.title[currentLang]}</h5>

              <!-- ⭐ ESTRELLAS -->
              <div class="stars mb-2">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>

              <p class="card-text">${p.description[currentLang]}</p>

              <div class="d-flex justify-content-between align-items-center">
                <span class="price-tag">€ ${p.price.toFixed(2)}</span>
                <button class="btn btn-sm btn-primary" style="font-size:0.85rem;"
                  onclick="event.stopPropagation(); addToCart(${p.id})">
                  <i class="fa fa-cart-plus"></i>
                  ${translate("Agregar","Add","Toevoegen")}
                </button>
              </div>
            </div>
          </div>
        `;

        row.appendChild(col);
      });

      container.appendChild(row);
    }
  });
}
// ─────────── MODAL ───────────
function openProductModal(productId){
  const product = Object.values(products).flat().find(p => p.id === productId);
  selectedProductModal = product;
  document.getElementById("modalTitle").textContent = product.title[currentLang];
  document.getElementById("modalImage").src = product.img;
  document.getElementById("modalDesc").textContent = product.description[currentLang];
  document.getElementById("modalPrice").textContent = "€ " + product.price.toFixed(2);
  document.getElementById("modalAddText").textContent = translate("Agregar al carrito","Add to cart","Toevoegen aan winkelwagen");
  const modal = new bootstrap.Modal(document.getElementById("productModal"));
  modal.show();
}

function addToCartFromModal(){
  if(!selectedProductModal) return;
  addToCart(selectedProductModal.id);
}

// ─────────── RENDER CART ───────────
function renderCart(){
  const container = document.getElementById("cartItems");
  const totalEl = document.getElementById("cartTotal");
  const countEl = document.getElementById("cartCount");
  container.innerHTML = "";
  let total = 0, count = 0;

  cart.forEach(item => {
    total += item.price * item.qty;
    count += item.qty;

    const div = document.createElement("div");
    div.className = "cart-item d-flex justify-content-between align-items-center mb-2";
    div.innerHTML = `
      <div>
        <b>${item.title[currentLang]}</b><br>
        <small>€ ${item.price.toFixed(2)} x ${item.qty}</small>
      </div>
      <div class="cart-controls">
        <button class="btn btn-sm btn-secondary" onclick="changeQty(${item.id},-1)">-</button>
        <span class="mx-1"><b>${item.qty}</b></span>
        <button class="btn btn-sm btn-secondary" onclick="changeQty(${item.id},1)">+</button>
        <button class="btn btn-sm btn-danger" onclick="removeFromCart(${item.id})"><i class="fa fa-trash"></i></button>
      </div>
    `;
    container.appendChild(div);
  });

  totalEl.textContent = total.toFixed(2);
  countEl.textContent = count;
}

// ─────────── FINALIZAR PEDIDO ───────────
function checkout(){
  if(cart.length === 0){
    Swal.fire(translate("Carrito vacío","Cart empty","Winkelwagen leeg"), "", "warning");
    return;
  }

  Swal.fire({
    title: translate("Finalizar pedido","Checkout","Bestelling afronden"),
    html: `
      <input type="text" id="swalName" class="swal2-input" placeholder="${translate("Nombre","Name","Naam")}">
      <input type="text" id="swalAddress" class="swal2-input" placeholder="${translate("Dirección (solo si es Delivery)","Address (if Delivery)","Adres (alleen bij bezorging)")}">
      <select id="swalType" class="swal2-input">
        <option value="Delivery">${translate("Delivery","Delivery","Bezorging")}</option>
        <option value="Retiro">${translate("Retiro en el local","Pickup at store","Afhalen in winkel")}</option>
      </select>
    `,
    showCancelButton: true,
    confirmButtonText: translate("Enviar por WhatsApp","Send via WhatsApp","Versturen via WhatsApp"),
    cancelButtonText: translate("Cancelar","Cancel","Annuleren"),
    preConfirm: () => {
      const name = document.getElementById("swalName").value;
      const address = document.getElementById("swalAddress").value;
      const type = document.getElementById("swalType").value;
      if(!name) Swal.showValidationMessage(translate("Ingresa tu nombre","Enter your name","Voer je naam in"));
      return { name, address, type };
    }
  }).then(result => {
    if(result.isConfirmed){
      let message = `*Pedido de ${result.value.name}*\nTipo: ${result.value.type}\nDirección: ${result.value.address}\n\nProductos:\n`;
      cart.forEach(i => { message += `${i.title[currentLang]} x ${i.qty} - €${(i.price*i.qty).toFixed(2)}\n`; });
      message += `\n*Total: €${document.getElementById("cartTotal").textContent}*`;
      window.open(`https://wa.me/${ownerWhatsapp}?text=${encodeURIComponent(message)}`, "_blank");
      clearCart();
    }
  });
}

// ─────────── OTROS ───────────
function clearCart(){ cart=[]; saveCart(); renderCart(); }
function toggleCart(){ document.getElementById("cartPanel").classList.toggle("active"); }

// ─────────── BUSCADOR ───────────
document.getElementById("searchInput").addEventListener("input", e => {
  renderProducts(e.target.value);
});

// ─────────── CAMBIO DE IDIOMA ───────────
document.getElementById("langSelect").addEventListener("change", e => {
  currentLang = e.target.value;
  localStorage.setItem("langAlejandroBecerra", currentLang);
  applyLanguage();
  renderProducts(document.getElementById("searchInput").value);
  renderCart();
});

// ─────────── APLICAR IDIOMA ───────────
function applyLanguage(){
  document.getElementById("titleMain").textContent = "BATTER BOUTIQUE ";
  document.getElementById("subtitleMain").textContent = translate("“Sabores Holandeses ”","Dutch Flavor","Nederlandse smaken");
  document.getElementById("cartTitle").textContent = translate("🛒 Carrito","🛒 Cart","🛒 Winkelwagen");
  document.getElementById("clearCartBtn").textContent = translate("Vaciar carrito","Clear cart","Winkelwagen leegmaken");
  document.getElementById("checkoutBtn").textContent = translate("Finalizar pedido","Checkout","Bestelling afronden");
  document.getElementById("searchInput").placeholder = translate("Buscar comida... (ej: pancakesSalados, pancakesDulces, cakes, drinks)","Search food... (e.g. savory pancakes, sweet pancakes, cakes, drinks)","Zoek eten... (bijv. hartige pannenkoeken, zoete pannenkoeken, cakes, drinks )");
applyNosotrosLanguage();

}

// nosotro // ─────────── TRADUCCIÓN SECCIÓN NOSOTROS ───────────
const nosotrosContent = {
  es: {
    title: "Nosotros",
    p1: `En <strong>Batter Boutique</strong> no vendemos postres. Creamos momentos.
    Nacimos de una obsesión: transformar el clásico <em>stroopwafel holandés</em>
    en una experiencia moderna, artesanal y memorable.`,
    p2: `Nuestro equipo combina creatividad y pasión por la cocina rápida,
    asegurando que cada pedido sea especial y memorable.`
  },
  en: {
    title: "About Us",
    p1: `At <strong>Batter Boutique</strong> we don’t sell desserts. We create moments.
    We were born from an obsession: transforming the classic <em>Dutch stroopwafel</em>
    into a modern, handcrafted and memorable experience.`,
    p2: `Our team blends creativity and passion for fast cuisine,
    ensuring every order feels special and unforgettable.`
  },
  nl: {
    title: "Over Ons",
    p1: `Bij <strong>Batter Boutique</strong> verkopen we geen desserts. We creëren momenten.
    We zijn ontstaan uit één obsessie: de klassieke <em>Nederlandse stroopwafel</em>
    omvormen tot een moderne, ambachtelijke ervaring.`,
    p2: `Ons team combineert creativiteit en passie voor snelle keuken,
    zodat elke bestelling bijzonder en memorabel is.`
  }
};

function applyNosotrosLanguage(){
  const data = nosotrosContent[currentLang];
  const title = document.querySelector(".nosotros-title");
  const paragraphs = document.querySelectorAll(".nosotros-text p");

  if (title) title.textContent = data.title;
  if (paragraphs.length >= 2) {
    paragraphs[0].innerHTML = data.p1;
    paragraphs[1].innerHTML = data.p2;
  }
}

// ─────────── INIT ───────────
applyLanguage();
renderProducts();
renderCart();



