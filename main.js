document.addEventListener('DOMContentLoaded',() =>{
 const addtoCartButtons = document.querySelectorAll('.add-to-cart');
 const cartItemCount = document.querySelector('.cart-icon-span');
 const cartItemList = document.querySelector('.cart-items');
 const cartTotal = document.querySelector('.cart-total');
 const cartIcon = document.querySelector('.cart-icon');
 const sidebar = document.getElementById('sidebar');

 let cartItems = [];
 let totalAmount = 0;

 addtoCartButtons.forEach((button, index) =>{
    button.addEventListener('click',()=>{
        const item = {
            name: document.querySelectorAll('.card .card-title')[index].textContent,
            price: parseFloat(
                document.querySelectorAll('.price')[index].textCount.slice(1),
            ),
            quantity: 1,
        };

        const exisitingItem =cartItems.find(
            (cartItem)=>cartItem.name === item.name,
       );
        if (exisitingItem){
            exisitingItem.quantity++;
        }
        else{
            cartItems.push(items)
        }
        totalAmount += item.price;

        updateCartUI();
    });

    function updateCartUI(){
        updateCartItemCount (cartItems.length);
        updateCartItemList();
        updateCartTotal();
    }

    function updateCartItemCount(count){
        cartItemCount.textContent = count;
    }
 
    function updateCartItemList() {
        cartItemList.innerHTML = '';
        cartItems.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item', 'individual-cart-item');
            cartItem.innerHTML = 
            <span>(${item.quantity}x)${item.name}</span>
            <span class="cart-item-price">${(item.price * item.quantity).toFixed(
                2,
                )}
            <button class="remove-btn" data-index="$(index)"><i class="fa-solid .fa-items"></i></button>
            </span>
            ;
            
            cartItemList.append(cartItem);
        });
    }
 });

});