document.getElementById('btn-withdraw').addEventListener('click', function(){

    const withdrawFild = document.getElementById('withdraw-fild');
    const  withdrawFildstring = withdrawFild.value;
    const finalWithdrawFild = parseFloat(withdrawFildstring);

    const mainWithdraw = document.getElementById('main-withdraw');
    const mainWithdrawString = mainWithdraw.innerText;
    const finalMainWithdraw = parseFloat(mainWithdrawString);
    
    const mainBalance = document.getElementById('main-balance');
    const mainBalanceString = mainBalance.innerText;
    const finalMainBalance = parseFloat(mainBalanceString);

    const total = finalMainWithdraw + finalWithdrawFild;
    const total2 = finalMainBalance - finalWithdrawFild;

    mainWithdraw.innerText = total;
    mainBalance.innerText = total2;

    withdrawFild.value = ''

})