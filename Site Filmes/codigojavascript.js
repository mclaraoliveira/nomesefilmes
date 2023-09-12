const inputElement = document.getElementById("nome");
const buttonElement = document.getElementById("botao");
const nome = inputElement.value;
const inicial = nome[0];

buttonElement.addEventListener("click", function () {
  if (inicial == A) {
    window.open(
      "https://www.youtube.com/watch?v=DhfAT4jrdQg&ab_channel=F%C3%A3sdeCinema",
      "_blank"
    );
  }
});
