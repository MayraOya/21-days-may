//Criando variáveis 
let nome = prompt('Digite o seu nome')
let idade = prompt('Digite a sua idade')
let peso = parseInt(prompt('Digite o seu peso em kg'))
let altura = prompt('Digite a sua altura')
let profissao = prompt('Qual é a sua profissão')

//Verificando a idade
console.log('Olá, ' + nome + ' você tem ' + idade + ' anos, é ' 
    + profissao + ', tem ' + altura + 'M de altura e pesa ' + peso + 'kg.')

if(idade > 18) {
    console.log('Está liberado para tomar uma gelada')

}else{
    console.log('Sem gelada para você')
}

//Descobrindo a idade fracionada
let meses = idade * 12
let semanas = idade * 52
let dias = idade * 365

console.log('Sua idade em meses é ' + meses)
console.log('Sua idade em semanas é ' + semanas)
console.log('Sua idade em dias é ' + dias)

//Descobrindo imc
let imc = parseInt(peso / (altura * altura))

if(imc < 18,5) {
    console.log('Magreza')
}else if(imc >= 18,5 && imc <= 24,9) {
    console.log('Normal')
}else if(imc >= 24,9 && imc <= 30) {
    console.log('Sobrepeso')
}else {
    console.log('Obesidade')
}

//Descobrindo o ano Nascimento
let anoAtual = 2024
let anoNasc = anoAtual - idade
console.log('Você nasceu em ' + anoNasc)

let anoVivido = anoNasc
let idadeAtual = 0

for (let anoVivido = anoNasc; anoVivido <= anoAtual; anoVivido++) {
    console.log(anoVivido + ' - ' + idadeAtual + ' anos de idade')
    idadeAtual++
}

//Loop DoWhile
do {
    //Inserir Lógica Anterior
    continuar = prompt('Deseja inserir os dados novamente? (s/n)')
} while (continuar == 's')