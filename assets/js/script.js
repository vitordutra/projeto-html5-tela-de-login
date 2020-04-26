const email = "joao@email.com.br";

console.log(email);

console.log("O seu email é: " + email);

console.log(`O seu email é: ${email}`);

document.getElementById("btn-submit").addEventListener("click", (e) => {
  console.log("o botão foi clicado");
});

document.getElementById("form-login").addEventListener("mouseenter", (e) => {
  console.log("O mouse está sobre o formulário.");
});

document
  .querySelector("#form-login")
  .addEventListener("mouseleave", (e) =>
    console.log("O documento está fora do formulário.")
  );

document.querySelector("#form-login").addEventListener("submit", (e) => {
  e.preventDefault();
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;

  let json = {
    email,
    password,
  };

  if (!json.email) {
    console.error("O campo e-mail deve ser preenchido!");
  } else if (!json.password) {
    console.error("O campo senha deve ser preenchido!");
  } else {
    console.log("Campos validados com sucesso");
  }
});
