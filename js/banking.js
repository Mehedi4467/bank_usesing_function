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

function getCurrentBalance(){
    const balanceBox = document.getElementById('total-balance');
    const currentBalance = parseFloat(balanceBox.innerText);
    return currentBalance;
}

//update balance
function updateBalane(amount, isAdd){
    const balanceBox = document.getElementById('total-balance');
    const currentBalanceValue = getCurrentBalance();
    if(isAdd == true){
        balanceBox.innerText = currentBalanceValue + amount;
    }
    else{
        balanceBox.innerText = currentBalanceValue - amount;
    }
  
}
// deposit area js start here

document.getElementById('deposit-button').addEventListener('click', function(){

    const depositInputText = getInputValue('deposit-input');
    if(depositInputText > 0){
        // total deposite
    totalFeild(depositInputText,'deposit-box')
    // total balance 
    updateBalane(depositInputText, true);
    }
});

document.getElementById('withdraw-button').addEventListener('click', function(){
    //withdraw input text
    const withdrawInputText = getInputValue('withdraw-input');
    const currentbalance = getCurrentBalance();
   if(withdrawInputText > 0 && withdrawInputText < currentbalance){
        // total withdraw 
    totalFeild(withdrawInputText, 'withdraw-text');

    updateBalane(withdrawInputText, false);
   }

})


