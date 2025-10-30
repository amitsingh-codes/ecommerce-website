const add_to_cart = document.querySelectorAll(".add");
const cart_icon = document.querySelector(".carticon");

let cart = [];

const inside_cart = document.createElement("div");
inside_cart.classList.add("inside_cart")
inside_cart.style.cssText = `
  position: fixed;
  top: 70px;
  right: 40px;
  width: 300px;
  height: 400px;
  background: white;
  border: 2px solid #111;
  border-radius: 10px;
  display: none;
  z-index: 10;
`;
document.body.appendChild(inside_cart); 

add_to_cart.forEach((button) => {
  button.addEventListener("click", () => {
    const productCard = button.closest(".product-card");
    const name = productCard.querySelector("h3").innerText;
    const price = productCard.querySelector(".price").innerText;
    const img = productCard.querySelector("img").src;

    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
      existingItem.quantity += 1; 
    } else {
      cart.push({ name, price, img, quantity: 1 }); // add new item
    }

    console.log(cart);

   
    inside_cart.innerHTML = cart.map(item => `
      <div style="display:flex;align-items:center;gap:10px;margin:8px 0;border-bottom:1px solid #ddd;padding-bottom:8px;">
        <img src="${item.img}" style="width:40px;height:40px;border-radius:5px;">
        <div>
          <p style="margin:0;font-weight:600;">${item.name}</p>
          <p style="margin:0;color:#f76c6c;">${item.price}</p>
          <p style="margin:0;color:#333;">Qty: ${item.quantity}</p>
        </div>
      </div>
    `).join("");
  });
});


cart_icon.addEventListener("click", () => {
  inside_cart.style.display = inside_cart.style.display === "none" ? "block" : "none";
});

document.body.addEventListener("dblclick",() => {
  inside_cart.style.display = "none"
})
