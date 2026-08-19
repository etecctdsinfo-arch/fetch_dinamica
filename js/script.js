import { buscarDados } from "./script2.js"
import { gerarLinha } from "./script3.js"

let url = "https://fakestoreapi.com/users"

// primeira versão
let resp = await fetch(url)
let dados = await resp.json()
console.log(dados)


console.log('--------')
let trs = document.querySelectorAll('tr')

for (let i = 1; i < trs.length - 1; i++) {
   let linha = trs[i].children
   let index = i - 1
   linha[0].textContent = dados[index].id
   linha[1].textContent = dados[index].address.city
   linha[2].textContent = dados[index].name.firstname
   linha[3].textContent= dados[index].email
}


// segunda versão
let dados2 = await buscarDados('https://fakestoreapi.com/carts')

let table2 = document.querySelector('#table2')
for (let i = 0; i < dados2.length; i++) {
    let l = gerarLinha(dados2[i])
    table2.append(l)
    console.log(dados2[i])
}


// console.log(dados2)






