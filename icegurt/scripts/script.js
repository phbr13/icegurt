const input = document.querySelector('.inputCodigo')
const button = document.querySelector('.button')
const raridade = document.querySelector('.raridade')
const corrara = document.querySelector('.corrara')

const mascotes = ['coruja do artico', 'lebre do artico', 'foca harpa', 'raposa polar', 'urso polar', 'pinguins imperadores']

button.addEventListener('click', () => {
    input.value = ''
    const resultado = mascotes[Math.floor(Math.random() * 6)]
    document.querySelector('.gay2').style.backgroundColor = '#000'
    console.log(resultado)
    switch(resultado) {
        case 'coruja do artico':
            document.querySelector(".gay").src = 'images/mascotes/coruja.jpg'
            document.querySelector(".gay3").innerHTML = 'coruja do ártico'
            corrara.style.backgroundColor = '#009CFF'
            raridade.innerHTML = 'Comum'
            break
        case 'lebre do artico':
            document.querySelector(".gay").src = 'images/mascotes/lebre.webp'
            document.querySelector(".gay3").innerHTML = 'lebre do ártico'
            corrara.style.backgroundColor = '#002AFF'
            raridade.innerHTML = 'Incomum'
            break
        case 'foca harpa':
            document.querySelector(".gay").src = 'images/mascotes/foca.jpg'
            document.querySelector(".gay3").innerHTML = 'foca harpa'
            corrara.style.backgroundColor = '#FFA800'
            raridade.innerHTML = 'Raro'
            break
        case 'raposa polar':
            document.querySelector(".gay").src = 'images/mascotes/raposa.jpg'
            document.querySelector(".gay3").innerHTML = 'raposa polar'
            corrara.style.backgroundColor = '#FF5400'
            raridade.innerHTML = 'Muito Raro'
            break
        case 'urso polar':
            document.querySelector(".gay").src = 'images/mascotes/ursopolar.webp'
            document.querySelector(".gay3").innerHTML = 'urso polar'
            corrara.style.backgroundColor = '#9000FF'
            raridade.innerHTML = 'Épico'
            break
        case 'pinguins imperadores':
            document.querySelector(".gay").src = 'images/mascotes/pinguins.webp'
            document.querySelector(".gay3").innerHTML = 'Pinguins imperadores'
            corrara.style.backgroundColor = '#FFDE00'
            raridade.innerHTML = 'Lendário'
            break
        default:
            document.querySelector(".gay").src = 'images/mascotes/raposa.jpg'
            document.querySelector(".gay3").innerHTML = 'raposa polar'
            corrara.style.backgroundColor = '#ffc'
            raridade.innerHTML = 'Comum'
    }
})

button.addEventListener('mousedown', () => {
    button.style.backgroundColor = '#3bb6fd'
})

button.addEventListener('mouseup', () => {
    button.style.backgroundColor = '#00A0FF'
})
