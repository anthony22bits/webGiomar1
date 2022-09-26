const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurgerSVG = document.querySelector('.menu-burger');
const mobileMenuListas = document.querySelector('.mobile-menu');
const carIcon = document.querySelector('.navbar-shopping-cart');
const carIconListas = document.querySelector('#detail-product-car');
const flechaReturn = document.querySelector('.return-flecha');
const detailAdd = document.querySelector('#detail-product-add')
const mainContainer = document.querySelector('.main-container');
const contadorNav = document.querySelector('.contador');
const productDetailClose = document.querySelector('.product-detail-close');
const myOrderContent = document.querySelector('.container-shopping-cart');
const orderTotalId = document.querySelector('#orderTotal');
const btnWpp = document.querySelector("#btn-wpp");

/*const btnAddCar = document.querySelector('.btn-add-card');

const btnAddCarAll = btnAddCar.querySelectorAll('img');*/



function closeDetailProduct() {
   const detailAddClose = detailAdd.classList.contains('inactive');
   if (!detailAddClose) {
      detailAdd.classList.add('inactive');
   }
}


function flechaReturnDetail() {
   const carIconListasClose = carIconListas.classList.contains('inactive');
   if (!carIconListasClose) {
      carIconListas.classList.add('inactive');
   }
}
function toggleDesktopMenu() {
   const carIconListasClose = carIconListas.classList.contains('inactive');
   desktopMenu.classList.toggle('inactive');
   if (!carIconListasClose) {
      carIconListas.classList.add('inactive');
   }

}
function toggleMobileMenuBurger() {
   mobileMenuListas.classList.toggle('inactive');
}
function toggleCarIcon() {
   const iconDesktopMenu = desktopMenu.classList.contains('inactive');
   carIconListas.classList.toggle('inactive');
   if (!iconDesktopMenu) {
      desktopMenu.classList.add('inactive');
   }
}
function imgClick() {
   const detailAddContain = detailAdd.classList.contains('inactive');
   if (detailAddContain) {
      detailAdd.classList.remove('inactive');
   }
}
menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurgerSVG.addEventListener('click', toggleMobileMenuBurger);
carIcon.addEventListener('click', toggleCarIcon);
flechaReturn.addEventListener('click', flechaReturnDetail);
productDetailClose.addEventListener('click', closeDetailProduct);

const cartProducts = [];
const productList = [];


let findLastSumaTotalCar = (arr) => {
   let lastItem = arr[arr.length - 1];
   return lastItem;
}


btnWpp.addEventListener('click', function () {
   let valuebtnWpp = btnWpp.value;
   let relmsg = valuebtnWpp.replace(/ /g, "%20");
   let cartProductsString = cartProducts.join("-");

   window.open('https://wa.me/51949360557?text=' + relmsg + "los cuales tiene un precio de cada uno de: " + " " + cartProductsString + ", el cual tiene un costo total de: " + " " + "S/." + findLastSumaTotalCar(cartProducts), '_blank');

})


productList.push(
   {
      name: 'Pelota tricolor',
      price: 89.00,
      image: './imagenes/pelota3.jpeg'

   }
);
productList.push(
   {
      name: 'Guantes flex - naranja',
      price: 85.00,
      image: './imagenes/guante1.jpg'

   }
);
productList.push(
   {
      name: 'Pelota-naranja',
      price: 89.00,
      image: './imagenes/pelota1.jpeg'

   }
);
productList.push(
   {
      name: 'guante flex - azul',
      price: 95.00,
      image: './imagenes/guante3.jpg'

   }
);
productList.push(
   {
      name: 'guante flex-negro',
      price: 99.00,
      image: './imagenes/guantenuevo1.jpg'

   }
);
productList.push(
   {
      name: 'guante new-grix',
      price: 110.00,
      image: './imagenes/guantenuevo2.jpg'

   }
);
productList.push(
   {
      name: 'guante new-azul',
      price: 110.00,
      image: './imagenes/guantenuevo3.jpg'

   }
);
productList.push(
   {
      name: 'Guantes flex',
      price: 89.00,
      image: './imagenes/guante1.jpg'

   }
);
productList.push(
   {
      name: 'Pelota',
      price: 89.00,
      image: './imagenes/pelota3.jpeg'

   }
);
productList.push(
   {
      name: 'Guantes flex',
      price: 89.00,
      image: './imagenes/guante1.jpg'

   }
);
productList.push(
   {
      name: 'Guantes flex',
      price: 89.00,
      image: './imagenes/guante3.jpg'

   }
);
productList.push(
   {
      name: 'Pelota',
      price: 89.00,
      image: './imagenes/pelota3.jpeg'

   }
);
productList.push(
   {
      name: 'Guantes flex',
      price: 89.00,
      image: './imagenes/guante1.jpg'

   }
);
productList.push(
   {
      name: 'Pelota',
      price: 89.00,
      image: './imagenes/pelota3.jpeg'

   }
);
productList.push(
   {
      name: 'Guantes flex',
      price: 89.00,
      image: './imagenes/guante1.jpg'

   }
);

function AddProduct(arr) {
   for (product of arr) {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
      const img = document.createElement('img');
      img.setAttribute('src', product.image);
      img.addEventListener('click', imgClick);

      const productInfo = document.createElement('div');
      productInfo.classList.add('product-info');


      const productInfoDiv = document.createElement('div');
      const productPrice = document.createElement('p');
      productPrice.textContent = 'S/. ' + product.price;
      const productName = document.createElement('p');
      productName.textContent = product.name;
      productInfoDiv.appendChild(productPrice);
      productInfoDiv.appendChild(productName);

      const figure = document.createElement('figure');
      figure.classList.add('btn-add-car');
      const figureImg = document.createElement('img');

      figureImg.setAttribute('src', './imagenes/recursos/bt_add_to_cart.svg')
      figure.appendChild(figureImg);



      productInfo.appendChild(productInfoDiv);
      productInfo.appendChild(figure);
      productCard.appendChild(img);
      productCard.appendChild(productInfo);
      mainContainer.appendChild(productCard);
   }
}


let sumaIterada = createTotal();

AddProduct(productList);

let btnsAdd = document.querySelectorAll('.btn-add-car');

btnsAdd.forEach((btnAdd, index) => {

   btnAdd.addEventListener('click', function () {
      
      let indexSuma = cartProducts.length +1;
      contadorNav.textContent = indexSuma;
      console.log(contadorNav.textContent);
      
      if (index == 0) {
         createOrderProduct(0);
         cartProducts.push(productList[0].price);
         const sumaCart = cartProducts.reduce((a,element)=>a+element,0);
         console.log(cartProducts)
         
         console.log(sumaCart);

         
      }
      else if (index == 1) {
         createOrderProduct(1);
         cartProducts.push(productList[1].price);
         console.log(cartProducts);
         const sumaCart = cartProducts.reduce((a,element)=>a+element,0);
         console.log(sumaCart);
         sumaIterada(sumaCart);
         
      }
      else if (index == 2) {
         createOrderProduct(2);
         cartProducts.push(productList[2].price);
       
         const sumaCart = cartProducts.reduce((a,element)=>a+element,0);
         console.log(sumaCart);
         sumaIterada(sumaCart);


      }
      else if (index == 3) {
         createOrderProduct(3);
         cartProducts.push(productList[3].price);
         const sumaCart = cartProducts.reduce((a,element)=>a+element,0);
         console.log(sumaCart);
         sumaIterada(sumaCart);
      }
      else if (index == 4) {
         createOrderProduct(4);
         cartProducts.push(productList[4].price);
         const sumaCart = cartProducts.reduce((a,element)=>a+element,0);
         console.log(sumaCart);
         sumaIterada(sumaCart);

      }
      else if (index == 5) {
         createOrderProduct(5);
         cartProducts.push(productList[5].price);
         const sumaCart = cartProducts.reduce((a,element)=>a+element,0);
         console.log(sumaCart);
         sumaIterada(sumaCart);
      }
      else if (index == 6) {
         createOrderProduct(6);
         cartProducts.push(productList[6].price);
         const sumaCart = cartProducts.reduce((a,element)=>a+element,0);
         console.log(sumaCart);
         sumaIterada(sumaCart);
      }
      else if (index == 7) {
         createOrderProduct(7);
         cartProducts.push(productList[7].price);
         const sumaCart = cartProducts.reduce((a,element)=>a+element,0);
         console.log(sumaCart);
         sumaIterada(sumaCart);
      }
      else if (index == 8) {
         createOrderProduct(8);
         cartProducts.push(productList[8].price);
         const sumaCart = cartProducts.reduce((a,element)=>a+element,0);
         console.log(sumaCart);
         sumaIterada(sumaCart);
      }
      else if (index == 9) {
         createOrderProduct(9);
         cartProducts.push(productList[9].price);
         const sumaCart = cartProducts.reduce((a,element)=>a+element,0);
         console.log(sumaCart);
         sumaIterada(sumaCart);


      }
      else if (index == 10) {
         createOrderProduct(10);
         cartProducts.push(productList[10].price);
         const sumaCart = cartProducts.reduce((a,element)=>a+element,0);
         console.log(sumaCart);
         sumaIterada(sumaCart);


      }
      else if (index == 11) {
         createOrderProduct(11);
         cartProducts.push(productList[11].price);
         const sumaCart = cartProducts.reduce((a,element)=>a+element,0);
         console.log(sumaCart);
         sumaIterada(sumaCart);


      }
      else if (index == 12) {
         createOrderProduct(12);
         cartProducts.push(productList[12].price);
         const sumaCart = cartProducts.reduce((a,element)=>a+element,0);
         console.log(sumaCart);
         sumaIterada(sumaCart);


      }
      else if (index == 13) {
         createOrderProduct(13);
         cartProducts.push(productList[13].price);
         const sumaCart = cartProducts.reduce((a,element)=>a+element,0);
         console.log(sumaCart);
         sumaIterada(sumaCart);


      }
      else if (index == 14) {
         createOrderProduct(14);
         cartProducts.push(productList[14].price);
         const sumaCart = cartProducts.reduce((a,element)=>a+element,0);
         console.log(sumaCart);
         sumaIterada(sumaCart);


      }
   }

   )

});

// Agregar producto en 'Shopping Cart'


/*<div class="shopping-cart">
<figure>
  <img src="./imagenes/guante1.jpg" alt="bike">
</figure>
<p>Guantes Flex</p>
<p> S/. 95.00</p>
<img src="./imagenes/recursos/bxs-tachito.svg" alt="close">
</div>*/



function createTotal() {
   const textTotalCount = document.createElement('p');
   const spanTotal = document.createElement('span');
   spanTotal.textContent = "Total";
   textTotalCount.appendChild(spanTotal);
   const numberTotalCount = document.createElement('p');
   orderTotalId.appendChild(textTotalCount);
   orderTotalId.appendChild(numberTotalCount);
   function addTotalCar(totalSuma) {
      numberTotalCount.textContent = ` Total: S/.  ${totalSuma}.00`;
   }
   return addTotalCar;

}

function createOrderProduct(indice) {
   const shoppingCart = document.createElement('div');
   shoppingCart.classList.add('shopping-cart');
   const figureOrder = document.createElement('figure');
   const figureOrderImg = document.createElement('img');
   figureOrderImg.setAttribute('src', productList[indice].image);
   figureOrder.appendChild(figureOrderImg);
   const nameOrder = document.createElement('p');
   nameOrder.textContent = productList[indice].name;
   const priceOrder = document.createElement('p');
   priceOrder.textContent = 'S/. ' + productList[indice].price + ".00";
   const imgIcon = document.createElement('img');
   imgIcon.setAttribute('src', './imagenes/recursos/bxs-tachito.svg');
   imgIcon.addEventListener("click", function () {

      cartProducts.pop();
      restaTotalIterada = cartProducts.reduce((a, elemento) => a+elemento,0)
      myOrderContent.removeChild(shoppingCart);
      console.log(cartProducts);
      sumaIterada(restaTotalIterada);
      contadorNav.textContent = cartProducts.length;

      console.log(contadorNav.textContent)


      
   })
   shoppingCart.appendChild(figureOrder);
   shoppingCart.appendChild(nameOrder);
   shoppingCart.appendChild(priceOrder);
   shoppingCart.appendChild(imgIcon);
   myOrderContent.appendChild(shoppingCart);
}


