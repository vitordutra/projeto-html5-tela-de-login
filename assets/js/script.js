// const: imutável, constante
// var: variável global
// let: variável local -> respeita o escopo.
// usar mais let e const. var é mais antigo.

const email = "joao@hcode.com.br";

console.log(email);

console.log("O seu email é: " + email);

// Template string: escrever a variável junto com texto sem concatenar.
// Sintaxe: string entre crases, ${variável}
console.log(`O seu email é: ${email}`);

// Acabei de inserir id="btn-submit no botão enviar"
/* Entendendo cada trecho de código:
    document: documento html
    getElementById: encontra o elemento com id btn submit e adiciona
    addEventListener: quero colocar um evento nesse botão
    argumentos addEventListener ->
    (nome do evento, função)
*/
document.getElementById("btn-submit").addEventListener("click", (e) => {
  console.log("o botão foi clicado");
});

// Se o usuário passou o mouse em alguma área
document.getElementById("form-login").addEventListener("mouseenter", (e) => {
  console.log("O mouse está sobre o formulário.");
});

// Usa um padrão parecido com o CSS
document
  .querySelector("#form-login")
  .addEventListener("mouseleave", (e) =>
    console.log("O documento está fora do formulário.")
  );

document.querySelector("#form-login").addEventListener("submit", (e) => {
  e.preventDefault();
  // querySelector(<ID HTML>)
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;

  // Datatype json. Declaração: {}
  /* Notação de objeto -> Atributos e métodos
        {<propriedade>:<variável>,
         <proprieade>: <variavel>

        }
    Se <nome_variavel> = <nome_propriedade>
        {
         nome_variavel1,
         nome variavel2,
         ...
        }
    */
  let json = {
    email,
    password,
  };

  // Defesa em camadas: várias camadas de validação
  if (!json.email) {
    console.error("O campo e-mail deve ser preenchido!");
  } else if (!json.password) {
    console.error("O campo senha deve ser preenchido!");
  } else {
    console.log("Campos validados com sucesso");
  }
});
