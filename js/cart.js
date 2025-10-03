function display() {
  let cart = JSON.parse(localStorage.getItem('Cartitem')) || [];
  let row = document.getElementById('cart-item');
  let checkout = document.querySelector('.checkout-box');
  let str = "";
  let rts = "";
  let sum = 0;
  let subqty = 0;
    cart.forEach((element, index) => {
    str += `
    <tr>
        <td>
            <div class="d-flex align-items-center">
              <img src="${element.thumbnail}" alt="">
              <span class="ms-3">${element.title}</span>
            </div>
        </td>
        <td>₹${element.price}</td>
        
        <td>
          <div class="qty-box">
            <button class="btn btn-sm btn-outline-danger" onclick="decreaseQty(${index})">-</button>
            <span>${element.quantity}</span>
            <button class="btn btn-sm btn-outline-success" onclick="increaseQty(${index})">+</button>
          </div>
        </td>
        
        <td>₹${element.price * element.quantity}</td>
        <td>
          <button class="btn btn-sm btn-outline-dark" onclick="deleteItem(${index})">🗑️</button>
        </td>
    </tr>
    `;

    row.innerHTML = str;

    subqty += element.quantity;
    sum += Math.round(element.price * element.quantity);

    rts = `
      <h5>Order Summary</h5>
      <hr>
      <p>Total Quantity: ${subqty}</p>
      <p>Shipping: ₹100</p>
      <p>Sub Total : ₹${sum}</p>
      <h5>Total: ₹${100 + sum}</h5>
      <a href="#" class="btn btn-success w-100 mt-3">Checkout</a>
    `;
    checkout.innerHTML = rts;
  });
}
display();

function increaseQty(index) {
  let cart = JSON.parse(localStorage.getItem('Cartitem')) || [];
  cart[index].quantity += 1;
  localStorage.setItem('Cartitem', JSON.stringify(cart));
  display();
}
function decreaseQty(index) {
  let cart = JSON.parse(localStorage.getItem('Cartitem')) || [];
  if (cart[index].quantity > 1) {
    cart[index].quantity -= 1;
  } 
  localStorage.setItem('Cartitem', JSON.stringify(cart));
  display();
}

function deleteItem(index) {
  
  let cart = JSON.parse(localStorage.getItem('Cartitem')) || [];
   
  cart.splice(index, 1);
  localStorage.setItem('Cartitem', JSON.stringify(cart));
  display();
}
