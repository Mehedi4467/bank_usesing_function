// input value function

function getInputValue(input){
    const inputFeild = document.getElementById(input);
    const inputAmountText = inputFeild.value;
    const amountValue = parseFloat(inputAmountText);
    inputFeild.value = '';
    return amountValue;

}


function totalFeild(amount,textBoxValue){
   
    const boxText = document.getElementById(textBoxValue);
    const boxTextValue = boxText.innerText;
    const boxValue = parseFloat(boxTextValue);
    const totalAmount = amount + boxValue;
    boxText.innerText = totalAmount;
 
}
// deposit area js start here

document.getElementById('deposit-button').addEventListener('click', function(){

    const depositInputText = getInputValue('deposit-input');

    // total balance box
    const balanceBox = document.getElementById('total-balance');
    // total deposite
    totalFeild(depositInputText,'deposit-box')
    // total balance 
    const totalBalance = parseFloat(balanceBox.innerText) + depositInputText;
    balanceBox.innerText = totalBalance;

});

document.getElementById('withdraw-button').addEventListener('click', function(){
    //withdraw input text
    const withdrawInputText = getInputValue('withdraw-input');

    // balance box text 
    const balanceBox = document.getElementById('total-balance');
    // total withdraw 
    totalFeild(withdrawInputText, 'withdraw-text');

    // due total balance 
    const totalDueBalance =parseFloat(balanceBox.innerText) -  withdrawInputText;

    balanceBox.innerText = totalDueBalance;

})


