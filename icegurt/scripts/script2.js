window.onload=function(){
    const acai = document.querySelector('.acai')
    const chocolate = document.getElementById('chocolate')
    const limao = document.getElementById('limao')
    const morango = document.getElementById('morango')
    const frutas = document.getElementById('frutas')
    const tudo = document.getElementById('tudo')
}

const preco = document.querySelector('.preco')
const produtos = document.querySelector('.produtos2')

let total = 0
let acai1 = 0
let chocolate1 = 0
let limao1 = 0
let morango1 = 0
let frutas1 = 0
let tudo1 = 0

acai.addEventListener('click', () => {
    acai1 += 1
    total += 4.99 
    console.log(total)
    preco.innerHTML = `<div>Total: R$${total.toString().slice(0, 4)}</div><input type="button" value="Pagar">`
    if (acai1 === 1){
        produtos.innerHTML += `<div><img src="images/sabores/acai.png">Açaí R$4,99 <input class="quantacai" type="number" name="" id="" value="1"></div>`
    }
    const quantacai = document.querySelector('.quantacai')
    quantacai.value = acai1
})

chocolate.addEventListener('click', () => {
    chocolate1 += 1
    total += 4.99 
    console.log(total)
    preco.innerHTML = `<div>Total: R$${total.toString().slice(0, 4)}</div><input type="button" value="Pagar">`
    if (chocolate1 === 1){
        produtos.innerHTML += `<div><img src="images/sabores/chocolate.png">Chocolate R$4,99 <input class="quantachoc" type="number" name="" id="" value="1"></div>`
    }
    const quantachoc = document.querySelector('.quantachoc')
    quantachoc.value = chocolate1
})

limao.addEventListener('click', () => {
    limao1 += 1
    total += 4.99 
    console.log(total)
    preco.innerHTML = `<div>Total: R$${total.toString().slice(0, 4)}</div><input type="button" value="Pagar">`
    if (limao1 === 1){
        produtos.innerHTML += `<div><img src="images/sabores/limao.png">Limão R$4,99 <input class="quantalima" type="number" name="" id="" value="1"></div>`
    }
    const quantalima = document.querySelector('.quantalima')
    quantalima.value = limao1
})

morango.addEventListener('click', () => {
    morango1 += 1
    total += 4.99 
    console.log(total)
    preco.innerHTML = `<div>Total: R$${total.toString().slice(0, 4)}</div><input type="button" value="Pagar">`
    if (morango1 === 1){
        produtos.innerHTML += `<div><img src="images/sabores/morango.png">Morango R$4,99 <input class="quantamor" type="number" name="" id="" value="1"></div>`
    }
    const quantamor = document.querySelector('.quantamor')
    quantamor.value = morango1
})

frutas.addEventListener('click', () => {
    frutas1 += 1
    total += 12.99 
    console.log(total)
    preco.innerHTML = `<div>Total: R$${total.toString().slice(0, 4)}</div><input type="button" value="Pagar">`
    if (frutas1 === 1){
        produtos.innerHTML += `<div><img src="images/sabores/frutas.png">Combo Frutas R$12,99 <input class="quantafrut" type="number" name="" id="" value="1"></div>`
    }
    const quantafrut = document.querySelector('.quantafrut')
    quantafrut.value = frutas1
})

tudo.addEventListener('click', () => {
    tudo1 += 1
    total += 15.99
    console.log(total)
    preco.innerHTML = `<div>Total: R$${total.toString().slice(0, 4)}</div><input type="button" value="Pagar">`
    if (tudo1 === 1){
        produtos.innerHTML += `<div><img src="images/sabores/tudo.png">Combo Tudo R$15,99 <input class="quantatudo" type="number" name="" id="" value="1"></div>`
    }
    const quantatudo = document.querySelector('.quantatudo')
    quantatudo.value = tudo1
})