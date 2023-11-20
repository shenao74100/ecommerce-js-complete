const navMenuEmailUser = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
/* mobile menu */
const hamMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
/* Shopping cart detail */
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartDetail = document.querySelector('.product-detail');
const shoppingCartBackButton = document.querySelector('.title-container');
/* product detail */
const cardsContainer = document.querySelector('.cards-container');
const productDetails = document.querySelector('.aside-product-detail');
const closeProductDetails = document.querySelector('.product-detail-close');

navMenuEmailUser.addEventListener('click', toggleDesktopMenu);
hamMenuIcon.addEventListener('click', toggleMobileMenu);
shoppingCartIcon.addEventListener('click', toggleShoppingCartIcon);
shoppingCartBackButton.addEventListener('click', toggleShoppingCartIcon);
cardsContainer.addEventListener('click', handleImageClick);
closeProductDetails.addEventListener('click', closeProductDetail);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    shoppingCartDetail.classList.add('inactive');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    shoppingCartDetail.classList.add('inactive');
    productDetails.classList.add('inactive');
}

function toggleShoppingCartIcon() {
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetails.classList.add('inactive');
    shoppingCartDetail.classList.toggle('inactive');
}

function handleImageClick(event) {
  const imageElement = event.target.closest('.product-image');
  if (imageElement) {
    productDetails.classList.remove('inactive');
    shoppingCartDetail.classList.add('inactive');
    mobileMenu.classList.add('inactive');
  }
}

function closeProductDetail() {
    productDetails.classList.add('inactive');
}


const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Proyector HD',
    price: 350,
    image: 'https://http2.mlstatic.com/D_NQ_NP_672352-CBT70781901058_082023-O.webp'
});

productList.push({
    name: 'Iphone 15',
    price: 850,
    image: 'https://cdn.andro4all.com/andro4all/2023/10/iphone-15-pro-max-bordes.jpg'
});

for(product of productList){
    const card = `<div class="product-card">
    <img src="${product.image}" alt="" class="product-image">
    <div class="product-info">
      <div>
        <p>${product.price}</p>
        <p>${product.name}</p>
      </div>
      <figure>
        <img src="./icons/bt_add_to_cart.svg" alt="">
      </figure>
    </div>
  </div>`

  document.querySelector(".cards-container").innerHTML += card;
}