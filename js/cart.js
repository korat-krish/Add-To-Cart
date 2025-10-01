Display = () => {
    let cartRec = JSON.parse(localStorage.getItem('Cartitem')) || [];
    let str = ''
    let data1 = document.querySelector('#row1');


    let qty = 1;
    
    cartRec.forEach((ele, index) => {
        str += `
        <tr>
        <div class="d-flex bg-white mt-2">
            <td class="col-3">
                <img src="${ele.thumbnail}" class="img-fluid w-25" alt="image1"/>
            </td>
            <td class="d-flex justify-content-center align-items-center">
                <h5 class="col-3 text-center  d-flex justify-content-center align-items-center">${ele.title}</h5>
            </td>
            <td class="col-2">
                <h5 class="col-2 text-center  d-flex justify-content-center align-items-center">${qty}</h5>
            </td>
            <td>
                <h5 class="col-1  d-flex justify-content-center align-items-center">${ele.price}</h5>
            </td>
            <td>
            <h5 class="col-3 d-flex justify-content-center align-items-center">${ele.price * qty}</h5> 
            </td>
            </div>
        </tr>
        `;
    });
    data1.innerHTML = str;

}
Display();
//  product = JSON.parse(localStorage.getItem("product"));
// function AddToCart(product){
//     let cart = JSON.parse(localStorage.getItem("Cartitem"));

//     let curIndex = cart.findIndex(item => item.id == product.id);

//     if(curIndex !== -1){
//         cart[curIndex].qty+=1;
//     }
//     else
//     {
//         product.qty = 1;
//         cart.push(product);
//     }

//     localStorage.setItem("Cartitem",JSON.stringify(cart));
// }