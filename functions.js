let num = document.querySelector('#tn1')
let lista = document.querySelector('#tx')
let res = document.querySelector('#div1')
let valores = []

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    }else {
        return false
    }
}

function inlista(n, l){
    if(l.indexOf(Number(n)) == -1){
       return true 
    }else{
        return false}
    }

function adicionar(){

    if(isNumero(num.value) && inlista(num.value, valores)){
       valores.push(Number(num.value))
       let item = document.createElement('option')
       item.text = `Valor adicionado ${num.value}`
       lista.appendChild(item)
       res.innerHTML = " "

    }else{ 
        window.alert("valores inválidos ou existêntes")
    }
    num.value = ""
    num.focus()
}

 function finalizar(){

    if(valores.length == 0){
    window.alert(' Adicione valores')}
    else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0 
        for(let pos in valores){
            
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
            soma += valores[pos]
        }
        media = soma / total
        res. innerHTML = ""
        res.innerHTML += `<p> Ao todo temos ${total} números cadastrados </p>`
        res.innerHTML += `<p> O maior valor é ${maior} </p>`
        res.innerHTML += `<p> O menor valor é ${menor} </p>`
        res.innerHTML += `<p> A soma é o ${soma} </p>`
        res.innerHTML += `<p> A média é o ${media} </p>`


    }
 }