var altura = document.getElementById("altura")
var peso = document.getElementById("peso")
var exibe = document.getElementById("exibe")
var enviar = document.getElementById("enviar")

function capturaValor() {
    var imc = peso.value / (altura.value * altura.value)
    exibe.innerHTML = "Seu IMC é: " + imc.toFixed(1)
    if(imc <18.5){
        exibe.innerHTML = "Seu IMC é: " + imc.toFixed(1) + " Classificação: Magreza"
    }
    else if(imc >= 18.5 && imc <= 24.9){
        exibe.innerHTML = "Seu IMC é: " + imc.toFixed(1) + " Classificação: Normal"
    }
    else if(imc >= 25 && imc <= 29.9){
        exibe.innerHTML = "Seu IMC é: " + imc.toFixed(1) + " Classificaçãoa: Sobrepeso"
    }
    else if(imc >= 30 && imc <= 39.9){
        exibe.innerHTML = "Seu IMC é: " + imc.toFixed(1) + " Classificação: Obesidade"
    }
    else if(imc >= 40){
        exibe.innerHTML = "Seu IMC é: " + imc.toFixed(1) + " Classificação: Obesidade Grave"
    }
}

enviar.addEventListener("click", capturaValor)
