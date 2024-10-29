const form = document.querySelector('.input-wrap');
const input = document.getElementById('emailInput');
const submit = document.getElementById('submit-btn');
const errorMsg = document.querySelector('.error');
const desc = document.querySelector('.desc');
const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if(emailPattern.test(input.value)){
        errorMsg.style.display = 'none';
        desc.textContent = "Thank you for joining us!";
    } else{
        errorMsg.style.display = 'block';
    }
})

