function numeroPar(){
    let numero = Number(prompt('qual o seu numero?'))

    if(numero < 0){
        alert('somente numeros positivos')
        numeroPar()
    }else if(numero % 2 === 0){
        alert('o numero é par')
    }else{
        alert('o numero é impar')
    }
}
window.onload = numeroPar()