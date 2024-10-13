document.getElementById('login').addEventListener('click', function(event){
    event.preventDefault();
    const number = document.getElementById('input-number');
    const inputNumber = number.value;
    
    const password = document.getElementById('pass');
    const pin= password.value;


    if(inputNumber === '0' && pin === '1123'){
        window.location.href="home.html"
        
    }
    else{
        alert('Wrong Phone Number OR Pin')
    }
    
})