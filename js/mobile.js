document.getElementById("mobile-qty-plus").addEventListener('click',function(){
    totalQty("mobile-input-fild",true);
    
    unitTotalPrice("mobilie-unit-price",1219,"mobile-input-fild")

    subTotal("sub-total")
    getTax("tax-amount")
    getTotalAmmount("total")
   

    
})

document.getElementById("mobile-qty-minus").addEventListener('click', function(){
    totalQty("mobile-input-fild", false);
    unitTotalPrice("mobilie-unit-price",1219,"mobile-input-fild")
    subTotal("sub-total")
    getTax("tax-amount")
    getTotalAmmount("total")
})