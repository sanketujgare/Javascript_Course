import { products } from "./products.js";

export let cart=JSON.parse(localStorage.getItem('cart'));
if(!cart){
cart=[
    {
        productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity:1
    },
    {
        productId:"83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
        quantity:3
    }
];
}


function saveToStorage(){
    localStorage.setItem(`cart`,JSON.stringify(cart));
}

export function addtocart(productId){
    let matchingitem; 
    cart.forEach((cartItem)=>{
     if(productId === cartItem.productId){
         matchingitem=cartItem;
         }
     });
     if(matchingitem){
             matchingitem.quantity+=1;
         }
     else{
         cart.push({
         productId:productId,
         quantity:1});
         }
         saveToStorage();
}

export function removeFromCart(productId){
    const newCart=[];
    cart.forEach((cartItem)=>{
        if(cartItem.productId!==productId){
            newCart.push(cartItem);
        }
    });
    cart=newCart;
    saveToStorage();
};
