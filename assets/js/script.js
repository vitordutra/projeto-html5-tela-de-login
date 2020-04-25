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
