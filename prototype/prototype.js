// Manipulando String e Numeros

// Contar quantos caracteres tem uma palavbaras e quantnos digitos tem um numero
let word = "Paralelepipedo"
console.log(word.length)
let number = 1234
console.log(String(number).length)

// Transformar um numero quebrado com 2 casas decimais e trocar ponto por vingula
let number1 = 123498142412.145241412
// replce e para substitutir algo 
console.log(number1.toFixed(2).replace("." , ","))

//Transformar letrras minusculas e maisuculas. Faca o contrario disso tambem
let word1 = "Programar e muito bacana!"
console.log(word1.toUpperCase())

let word2 = "Programar e muito bacana!"
console.log(word2.toLowerCase())

// Separe um texto que contem espacos, em um novo array onde cada textgo e uma posicao do array.
//Depois disso transforme o array bem um texto e onde eram espacos, coloque _


let phrase= "Eu quero viver o amor!"
let myArray = phrase.split(" ")
console.log(myArray)
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore.toLowerCase())

//Verificar se o texto contem a palavara amor
let phrase1 = "Eu quero viver o amor!"
console.log(phrase1.includes("amor"))

//Criar array com construtor
let myArray1 = new Array ('a', 'b', 'c')
console.log(myArray1)

//contas elementos de um array
console.log(['a', 'b', 'c'].length)

//Transofmrar uma cadeia de caracteres em elementos de um array
let word3 = 'manipulacao'
console.log(Array.from(word3))

let techs = ['html', 'css', 'js']

//adicionar um item no fim
console.log(techs.push("nodejs"))
//adicionar no comeco
techs.unshift('sql')
//remover do fim

//techs.pop()

//remover do comeco

//techs.shift()

//pegar somente alguns elementos do array

//console.log(techs.slice(1, 3))

//remover 1 ou mais items em qualquer posicao do array

//techs.splice(1, 2)

//encontrar a posicao de um elemento no array
let index = techs.indexOf('css')
techs.splice(index, 1)

console.log(index)

console.log(techs)