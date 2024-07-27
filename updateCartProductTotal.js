import { getCartProductFromLS } from "./getCartProducts"
let productSubTotal=document.querySelector(".productSubTotal");
let productFinalTotal=document.querySelector(".productFinalTotal");
export const updateCartProductTotal=()=>{
 let localCartProducts=getCartProductFromLS();
 let initialValue=0;
 let totalProductPrice=localCartProducts.reduce((accum,curElem)=>{
    let productPrice=parseInt(curElem.price) || 0;
    return accum+ productPrice;
 },initialValue);
 
 productSubTotal.textContent= `₹${totalProductPrice}`;
 productFinalTotal.textContent=`₹${totalProductPrice+50}`;

}
updateCartProductTotal();