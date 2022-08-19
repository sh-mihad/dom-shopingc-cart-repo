
//Get quantity
function totalQty(inputFildId,isIncrase){
    const mobileQtyFild =  document.getElementById(inputFildId);
    const mobileQtyValue = mobileQtyFild.value;
    const mobileQty = parseInt(mobileQtyValue)
    let Qty;
    if(isIncrase === true){
        Qty = mobileQty + 1;
       
    }else{
      Qty = mobileQty - 1;
       
    }
    mobileQtyFild.value = Qty;
  
}


// Get unitTotal Price

function unitTotalPrice(UnitPriceId,unitPrice,inputFildId){
    const  unitPriceElement = document.getElementById(UnitPriceId);
    const perProductPrice = unitPrice;
    const totalQtyElement = document.getElementById(inputFildId);
    const totalQty = parseInt(totalQtyElement.value)

    const calculateTotalUnitPrice = perProductPrice * totalQty;

    unitPriceElement.innerText = calculateTotalUnitPrice;
}

// convertString to Number
function getNumber(elementId,isInt){
    const getElement = document.getElementById(elementId);
    if(isInt === true){
        const getElementValue = parseInt(getElement.innerText);

     return getElementValue;
    }else{
        const getElementValue = parseFloat(getElement.innerText);

     return getElementValue;
    }
    

}
// get Sub total functoin
function subTotal (elementId){
    const subTotalElemnt = document.getElementById(elementId)
    const mobileTotalUnitPrice = getNumber("mobilie-unit-price",true);
    const caseTotalUnitPrice = getNumber("case-price",true)

    const calculateSubTotal = mobileTotalUnitPrice + caseTotalUnitPrice;
    subTotalElemnt.innerText = calculateSubTotal;

}

//get Tax ammounmt
function getTax(elementId){
    const getTax = document.getElementById(elementId,false)
    const subTotatlValue = getNumber("sub-total");
    const taxAmount = subTotatlValue * .15;
    getTax.innerText = taxAmount.toFixed(2);
}

// get Total Ammount
function getTotalAmmount (elementId){
    const previousTotal = document.getElementById(elementId)
    const subTotal =  getNumber("sub-total");
    const taxAmount = getNumber("tax-amount");

    const netTotalAmount = subTotal + taxAmount;
    previousTotal.innerText = netTotalAmount;

    
    
}