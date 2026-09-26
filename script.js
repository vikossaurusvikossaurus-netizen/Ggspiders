const products=[
 {id:1,name:"Phidippus regius",type:"jumping",price:25,tag:"Jumping spider",desc:"Exemplo de anúncio — fase juvenil. Substitui pelos teus dados reais."},
 {id:2,name:"Hasarius adansoni",type:"jumping",price:15,tag:"Jumping spider",desc:"Exemplo de anúncio — macho adulto. Substitui pelos teus dados reais."},
 {id:3,name:"Phidippus sp.",type:"jumping",price:20,tag:"Jumping spider",desc:"Exemplo de anúncio. Confirmar espécie, sexo e fase antes de publicar."}
];
let cart=[];
const productsEl=document.querySelector("#products");
const filter=document.querySelector("#filter");
function renderProducts(){
 const f=filter.value;
 productsEl.innerHTML=products.filter(p=>f==="all"||p.type===f).map(p=>`
 <article class="card"><div class="photo">🕷️</div><div class="cardBody">
 <span class="tag">${p.tag}</span><h3>${p.name}</h3><p class="muted">${p.desc}</p>
 <div class="price">€${p.price.toFixed(2)}</div>
 <button class="button add" onclick="addToCart(${p.id})">Adicionar ao pedido</button>
 </div></article>`).join("");
}
function addToCart(id){cart.push(products.find(p=>p.id===id));renderCart();openCart()}
function renderCart(){
 document.querySelector("#cartCount").textContent=cart.length;
 document.querySelector("#cartItems").innerHTML=cart.length?cart.map((p,i)=>`<div class="cartItem"><span>${p.name}</span><span>€${p.price.toFixed(2)} <button onclick="removeItem(${i})">✕</button></span></div>`).join(""):"<p class='muted'>O teu pedido está vazio.</p>";
 document.querySelector("#cartTotal").textContent="€"+cart.reduce((s,p)=>s+p.price,0).toFixed(2);
}
function removeItem(i){cart.splice(i,1);renderCart()}
function openCart(){document.querySelector("#cartPanel").classList.add("open");document.querySelector("#overlay").classList.add("open")}
function closeCart(){document.querySelector("#cartPanel").classList.remove("open");document.querySelector("#overlay").classList.remove("open")}
document.querySelector("#cartBtn").onclick=openCart;
document.querySelector("#closeCart").onclick=closeCart;
document.querySelector("#overlay").onclick=closeCart;
filter.onchange=renderProducts;
document.querySelector("#checkout").onclick=()=>alert("Protótipo: contacta o comprador e confirma legalidade, disponibilidade e condições antes de qualquer transferência.");
document.querySelector("#contactForm").onsubmit=e=>{e.preventDefault();document.querySelector("#formStatus").textContent="Pedido preparado! Num site real, aqui ligarias o formulário ao teu email/backend.";e.target.reset()};
renderProducts();renderCart();