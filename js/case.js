document.getElementById("cover-plus-btn").addEventListener('click', function(){
    totalQty("cover-qty-input-fild",true);
    unitTotalPrice("case-price",59,"cover-qty-input-fild")
    subTotal("sub-total")
    getTax("tax-amount")
    getTotalAmmount("total")
})


document.getElementById("cover-minus-btn").addEventListener('click', function(){
    totalQty("cover-qty-input-fild",false);
    unitTotalPrice("case-price",59,"cover-qty-input-fild")
    subTotal("sub-total")
    getTax("tax-amount")
    getTotalAmmount("total")
})