document.getElementById('add-money').addEventListener('click',function(event){
    event.preventDefault();
    console.log(1111);
})


// cashout section
document.getElementById('cash-out').addEventListener('click',function(event){
    event.preventDefault();
    console.log(1111);
})


document.getElementById('add-money-btn').addEventListener('click',function(event){
    event.preventDefault();
    const pinn = document.getElementById('pin').value;
    if (pinn === '1123'){
        const money = document.getElementById('available').innerText;
        const enterMoney = document.getElementById('amount').value;
        
        const addNewMoney = parseInt(money);
        const addedMoney = parseInt(enterMoney);
        const newBalanace = addNewMoney + addedMoney;

        document.getElementById('available').innerText = newBalanace;
        
    }
    else{
        alert('Wrong Pin');
    }

    



})