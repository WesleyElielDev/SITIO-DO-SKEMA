var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 3000)

function proximaImg(){
    cont++
    if(cont > 3){
        cont = 1
    }
    document.getElementById('radio'+cont).checked = true
}

//ABRIR MENU MOBILE
const navegarMobile = document.querySelector('.navegarMobile')

function openNav() {
    navegarMobile.classList.add('active')
}

function closeMenu(){
    navegarMobile.classList.remove('active')
}

