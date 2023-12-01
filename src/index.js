// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector(".quantity input").value;
  const subtotalPrice = price * quantity;
  product.querySelector(".subtotal span").innerHTML = subtotalPrice;
  return subtotalPrice;
}

function calculateAll() {
  let subtotalPrice = 0;
  let totalPrice = 0;
  const products = document.querySelectorAll(".product");
  // no forEach() with 'getElementByClassName'
  // 'getElementByClassName' gives you an HTML collection, to be converted to an array.
  products.forEach((product) => {
    subtotalPrice = updateSubtotal(product);
    totalPrice += subtotalPrice;
  })

  document.querySelector("#total-value span").innerHTML = totalPrice;
  return totalPrice;
}

function removeProduct(event) {
  // event.currentTarget refers to the element that triggered the event, the button. 
  // its parent is the table cell <td>, its grandparent the table row <tr>
  const target = event.currentTarget.parentNode.parentNode;
  target.parentNode.removeChild(target); // removes the row from the DOM
  calculateAll() // update the total price 
}

// ITERATION 5
function createProduct() {

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.querySelectorAll(".btn-remove");
  removeBtns.forEach((button) => {
    button.addEventListener('click', removeProduct);
  });

  //... your code goes here
});
