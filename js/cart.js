
Display = () => {
    let cartRec = JSON.parse(localStorage.getItem('Cartitem')) || [];
    let str = ''
    let container = document.querySelector('#cartItems');

    cartRec.forEach((ele, index) => {
        str += `
        <div class="cart-item">
        <img src="${ele.thumbnail}" alt="Product">
        <div class="item-info">
          <h6>${ele.title}</h6>
          
        </div>
        <div class="item-price">$${ele.price}</div>
        <div class="item-qty">
          <button >-</button>
          <span class="cqty">${ele.qty}</span>
          <button onclick="increse(${index})">+</button>
        </div>
        <div class="item-total">$${ele.price * ele.qty}</div>
        <div class="item-remove">
          <button>🗑</button>
        </div>
      </div>
        `;
    });
    container.innerHTML = str;

}
Display();

function duplicate(id) {

    let cart = JSON.parse(localStorage.getItem("Cartitem")) || [];

    if (cart.find((element) => (element.id == id))) {
        if (cart.map((element) => (element.id == id))) {
            cart.qty += 1;
            localStorage.setItem("Cartitem", JSON.stringify(cart));

        }
        else {
            cart.qty = 1;
            localStorage.setItem("Cartitegitm", JSON.stringify(cart));
        }
    }
    else {
        cart.qty = 1;
        localStorage.setItem("Cartitem", JSON.stringify(cart));
    }
    Display();
}
