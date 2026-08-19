
function gerarHtml(textoTag){
    let novaTag = document.createElement(textoTag)
    return novaTag
}

function gerarLinha(dados){
    let tr = gerarHtml('tr')
    let td1 = gerarHtml('td')
    let td2 = gerarHtml('td')
    let td3 = gerarHtml('td')

    td1.textContent = dados.id
    td2.textContent = dados.date
    td3.textContent = dados.products[0].productsId

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)

    return tr
}

export {gerarLinha}