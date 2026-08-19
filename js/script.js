import { buscarDados } from "./script2.js"

let url = "https://fakestoreapi.com/users"

// primeira versão
let resp = await fetch(url)
let dados = await resp.json()
console.log(dados)


console.log('--------')
let trs = document.querySelectorAll('tr')

for (let i = 1; i < trs.length; i++) {
   let linha = trs[i].children
   let index = i - 1
   linha[0].textContent = dados[index].id
   linha[1].textContent = dados[index].address.city
   linha[2].textContent = dados[index].name.firstname
   linha[3].textContent= dados[index].email
}


// // segunda versão
// let dados2 = await buscarDados('https://fakestoreapi.com/carts')
// console.log(dados2)






