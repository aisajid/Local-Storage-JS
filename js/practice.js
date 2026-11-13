const addToCart =() => {
    const productField = document.getElementById('product-field');
    const quantityField = document.getElementById('Quantity-field');
    const product = productField.value.toLowerCase().trim();
    const quantity = quantityField.value.toLowerCase().trim();
    productField.value = '';
    quantityField.value = '';

    if(product && quantity){
    displayProduct(product, quantity);
    saveProductToLocalStorage(product, quantity);
    }
}


const displayProduct = (product, quantity) =>{
    const p = product.toUpperCase();
    const q = quantity.toUpperCase();
    const displayField = document.getElementById('display-field');
    const li = document.createElement('li');
    li.innerText = `${p} : ${q}`;    
    displayField.appendChild(li);
}

const getProductFromLocalStorage = ()=>{
    const storedCart = localStorage.getItem('cart');
    let cart = {};
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    console.log(cart);
    return cart;
}

// save card to local storage:
const saveProductToLocalStorage = (product, quantity) =>{
    const cart = getProductFromLocalStorage();
    cart[product] = quantity;
    const cartString = JSON.stringify(cart);
    localStorage.setItem('cart', cartString);
}

// local storage e thaka ager product guluke dekhanor jonno:
const displayProductFromLocalStorage =()=>{
    const savedCard = getProductFromLocalStorage();
    for(const key in savedCard){
        const product = key;
        const quantity = savedCard[key];
        displayProduct(product, quantity);
    }
}


displayProductFromLocalStorage();

