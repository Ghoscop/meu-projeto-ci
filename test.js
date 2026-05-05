const saudacao = require('./hello');

const resultado = saudacao("Mundo");
const esperado = "Olá, Mundo!";
if (resultado !== esperado) {
console.error(` FALHA: esperado "${esperado}", mas
recebeu "${resultado}"`);
process.exit(1); 
}
console.log(" Todos os testes passaram!");

const resultadoVazio = saudacao("");
if (resultadoVazio !== "Olá, !") {
console.error(` FALHA: teste de string vazia`);
process.exit(1);
}
