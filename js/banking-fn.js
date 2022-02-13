/* // basic function learning:-
function doubleIt(num){
    const result = num*2;
    return result;
}
const first = doubleIt(5);
const second = doubleIt(10);
console.log(first, second); */
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
// handle deposit-button by event handler in deposit section ///
 document.getElementById("deposit-button").addEventListener('click', function(){
    /* const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText); */
    const depositAmount = getInputValue('deposit-input');

    //imp-step: 1 get current deposit /
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = previousDepositTotal + depositAmount;  
    //imp-step: 2 get deposit amount in balance section /
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount;
    // imp-step: 3 clear deposit input field /
    /* depositInput.value = ''; */
})
// handle withdraw-button by event handler in withdraw section ////
document.getElementById("withdraw-button").addEventListener('click', function(){
/*  const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText); */
    const withdrawAmount = getInputValue('withdraw-input')
    //imp-step: 1 update withdraw total /
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount; 
    //imp-step: 2 update balance after withdraw in balance portion /
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
           
})