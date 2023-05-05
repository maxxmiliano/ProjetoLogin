// selecione o elemento "esqueceu a senha?"
const forgotPasswordLink = document.querySelector("#forgot-password");

// selecione o elemento "container1"
const container1 = document.querySelector("#container1");

// adicione um evento de clique ao link "esqueceu a senha?"
forgotPasswordLink.addEventListener("click", function(event) {
  event.preventDefault(); // previna a ação padrão do link
  container1.style.display = "block"; // exiba a div "container1"
});