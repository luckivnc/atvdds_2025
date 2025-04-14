function receita_de_bolo(){
 let ovo = confirm('tem ovos em casa?');
 let farinha = confirm('tem farinha em casa?');
 let fermento = confirm('tem fermento em casa?')
 let acucar = confirm('tem açúcar em casa?')
 let chocolate = confirm('tem chocolate em casa?')
 
if (ovo === false ){
    alert('comprar ovos')
    
}
if(farinha === false){
    alert('comprar farinha')
    
}
if( fermento === false ){
    alert('comprar fermento')
    
}
if(acucar === false){
    alert('comprar açúcar')
    
}
if( chocolate === false ){
    alert('comprar chocolate')
}
if(chocolate)
if (ovo == true && farinha == true && fermento == true && acucar == true && chocolate == true){
    alert("você pode fazer o bolo ")
} 
}
window.onload = receita_de_bolo()