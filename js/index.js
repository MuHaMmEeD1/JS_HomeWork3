class ProductCard {
  productName;
  price;
  imageUrl;

  constructor(productName, price, imageUrl) {
    this.productName = productName;
    this.price = price;
    this.imageUrl = imageUrl;
  }

  getInfo() {
    console.log("productName :>> ", this.productName);
    console.log("price :>> ", this.price);
    console.log("imageUrl :>> ", this.imageUrl);
  }
}

class CommentMessage {
  authorName;
  message;
  timestamp;

  constructor(authorName, message, timestamp) {
    this.authorName = authorName;
    this.message = message;
    this.timestamp = timestamp;
  }

  getInfo() {
    console.log("authorName :>> ", this.authorName);
    console.log("message :>> ", this.message);
    console.log("timestamp :>> ", this.timestamp);
  }
}

class MenuItem {
  name;
  price;
  description;

  constructor(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
  }

  getInfo() {
    console.log("name :>> ", this.name);
    console.log("price :>> ", this.priceprice);
    console.log("description :>> ", this.description);
  }
}

function createProductCard(productName, price, imageUrl) {
  return new ProductCard(productName, price, imageUrl);
}

function createCommentMessage(authorName, message, timestamp) {
  return new CommentMessage(authorName, message, timestamp);
}

function createMenuItem(name, price, description) {
  return new MenuItem(name, price, description);
}

function applyHTML_ProductCard(productCard) {
  const products = document.querySelector(".products");

  let img = `<img src="${productCard.imageUrl}" alt="${productCard.productName}">`;
  let h3 = `<h3>${productCard.productName}</h3>`;
  let p = `<p>${productCard.price}</p>`;

  let li = `<li> ${img} ${h3} ${p} </li>`;

  products.insertAdjacentHTML("beforeend", li);

  console.log(products);
}

function applyHTML_CommentMessage(commentMessage) {
  const authorComments = document.querySelector(".authorComments");

  let h3 = `<h3>${commentMessage.authorName}</h3>`;
  let pMessaeg = `<p>${commentMessage.message}</p>`;
  let pTimestamp = `<p>${commentMessage.timestamp}</p>`;

  let li = `<li>${h3} ${pMessaeg} ${pTimestamp}</li>`;

  authorComments.insertAdjacentHTML("beforeend", li);
}

function applyHTML_MenuItem(menuItem) {
  const menuItem_ = document.querySelector(".menu");

  let h3 = `<h3>${menuItem.name}</h3>`;
  let pPrice = `<p>${menuItem.price}</p>`;
  let pDescription = `<p>${menuItem.description}</p>`;

  let li = `<li>${h3} ${pPrice} ${pDescription}</li>`;

  menuItem_.insertAdjacentHTML("beforeend", li);
}

applyHTML_ProductCard(createProductCard("apple", 10, "./img/apple.png"));
applyHTML_ProductCard(createProductCard("orange", 5, "./img/orange.png"));
applyHTML_ProductCard(createProductCard("apple", 15, "./img/pineapple.png"));
applyHTML_CommentMessage(createCommentMessage("muhammed", "salam", 5));
applyHTML_CommentMessage(createCommentMessage("ehmed", "salam", 5));
applyHTML_CommentMessage(createCommentMessage("seid", "salam", 5));
applyHTML_MenuItem(createMenuItem("muhammed", 15, "test1"));
applyHTML_MenuItem(createMenuItem("muhammed", 20, "test2"));
applyHTML_MenuItem(createMenuItem("muhammed", 30, "test3"));
