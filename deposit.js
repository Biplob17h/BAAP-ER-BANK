document.getElementById('btn-deposit').addEventListener('click', function(){
    
    const depositFild = document.getElementById('deposit-fild');
    const depositFildString = depositFild.value;
    const finalDepositFild = parseFloat(depositFildString);

    const mainDeposit = document.getElementById('main-deposit');
    const mainDepositString = mainDeposit.innerText;
    const finalMainDeposit = parseFloat(mainDepositString);

    const mainBalance = document.getElementById('main-balance');
    const mainBalanceString = mainBalance.innerText;
    const finalMainBalance = parseFloat(mainBalanceString);

    const total = finalDepositFild + finalMainDeposit;
    const total2 = finalMainBalance + finalDepositFild;

    mainDeposit.innerText = total;
    mainBalance.innerText = total2;

    depositFild.value = '';
})