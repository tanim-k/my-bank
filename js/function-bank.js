// 1:::
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    inputField.value = '';
    return amountValue;
}
// 2:::
function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount; 
}
// 3:::
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}
// 4:::
function updateBalance(amount, isADD) {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = getCurrentBalance();
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
    if(depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }

});
// handle withdraw-button by event handler in withdraw section ////
document.getElementById("withdraw-button").addEventListener('click', function(){
    const withdrawAmount = getInputValue('withdraw-input');
    const currnetBalance = getCurrentBalance();
    if(withdrawAmount > 0 && withdrawAmount <= currnetBalance) {
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    if(withdrawAmount > currnetBalance) {
        console.log('withdraw less amount than your current balance')
    }
})