var linkCriarConta = document.getElementById("create-account-link");
var formulario = document.getElementById("signup-form");

linkCriarConta.addEventListener("click", function(event) {
  event.preventDefault();
  formulario.style.display = "block";
});

var botaoCriarConta = document.getElementById("create-account-button");

botaoCriarConta.addEventListener("click", function(event) {
  event.preventDefault();

  var nome = document.getElementById("name").value;
  var email = document.getElementById("email-signup").value;
  var senha = document.getElementById("password-signup").value;

  localStorage.setItem("nome", nome);
  localStorage.setItem("email", email);
  localStorage.setItem("senha", senha);

  window.location.href = "pagina-de-login.html";
});