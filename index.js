var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.ceil(Math.random()*100)
 var product = { itemName: item, itemPrice: price }
 
 cart.push(product)
 
 return `${product['itemName']} has been added to your cart.`
}

function viewCart() {
  
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
  if(cart.length === 1){
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.` 
    }
  
  
  if(cart.length === 2){
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
    }
  else{
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[2].itemName} at $${cart[2].itemPrice}.`
    }
  }

function total() {
  for(var i = 0; i < cart.length; i++){
    return 
  }
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

