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

console.log()


