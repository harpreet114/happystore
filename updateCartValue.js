const cartValue=document.querySelector("#cartValue");

export const updateCartValue=(cartProduct)=>{
    return(cartValue.innerHTML=`<i class="fa fa-shopping-cart" aria-hidden="true"> ${cartProduct.length} </i>`)
}
