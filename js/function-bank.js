// 1:::
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // imp-step: 3 clear deposit input field /
    inputField.value = '';
    //imp-step: 3 clear withdraw input field /
    // withdrawInput.value = ''; 
    return amountValue;
}
// 2:::
function updateTotalField(totalFieldId, amount) {
    // debugger;
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount; 
}
// 3:::
function updateBalance(amount, isADD) {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    if(isADD == true){
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else{
        balanceTotal.innerText = previousBalanceTotal - amount; 
    }
}

// handle deposit-button by event handler in deposit section ///
document.getElementById("deposit-button").addEventListener('click', function(){
    const depositAmount = getInputValue('deposit-input');
    updateTotalField('deposit-total', depositAmount);
    updateBalance(depositAmount, true);
});

// handle withdraw-button by event handler in withdraw section ////
document.getElementById("withdraw-button").addEventListener('click', function(){
    const withdrawAmount = getInputValue('withdraw-input');
    updateTotalField('withdraw-total', withdrawAmount);
    updateBalance(withdrawAmount, false);
})