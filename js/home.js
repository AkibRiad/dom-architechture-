document.getElementById('add-money').addEventListener('click',function(event){
    event.preventDefault();
    const remove =document.getElementById('remove-hidden-cash');
    remove.classList.add('hidden');
    const addMoneyRemoved=document.getElementById('remove-hidden');
    addMoneyRemoved.classList.remove('hidden');
})


// cashout section
document.getElementById('cash-out').addEventListener('click',function(event){
    event.preventDefault();
    const removed =document.getElementById('remove-hidden-cash');
    removed.classList.remove('hidden');
    const addMoneyRemoved=document.getElementById('remove-hidden');
    addMoneyRemoved.classList.add('hidden');

    
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

    document.getElementById('cash-out-btn').addEventListener('click',function(event){
        event.preventDefault();
        const pinn = document.getElementById('pin-out').value;
        if (pinn === '1123'){
            const money = document.getElementById('available').innerText;
            const enterMoney = document.getElementById('amount-out').value;
            
            const addNewMoney = parseInt(money);
            const addedMoney = parseInt(enterMoney);
            const newBalanace = addNewMoney - addedMoney;
    
            document.getElementById('available').innerText = newBalanace;
            
        }
        else{
            alert('Wrong Pin');
        }

    })



