
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateForm();
});

function validateForm() {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('senha').value.trim();
  
    if (email === '') {
      alert('Por favor, insira seu endereço de e-mail.');
      return;
    }
  
    if (password.length < 8) {
      alert('A senha deve ter pelo menos 8 caracteres.');
      return;
    }
  
    
}

const form2 = document.querySelector('#form');

form2.addEventListener('submit', function(event) {
  event.preventDefault();

  const senha = document.querySelector('#senha');

  if (senha.value.length < 6) {
    alert('A senha deve ter pelo menos 6 caracteres.');
  } else {
    form2.submit();
  }
});



