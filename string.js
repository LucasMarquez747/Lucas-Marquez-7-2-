let numero = prompt("PALABRA");

function esGrito(n) {
    let Signo ="!";
    let palabra = n.toString().split('');
    let suma = 0;
    let letras = 0;
    let resta = 0;
    for (let i = 0; i < palabra.length; i++) {
        if ( palabra[i] == Signo) {
            suma ++;
        }
        letras++;
    }
    
        resta = letras - suma;  
    if (resta < suma) {
        document.write("ESGRITO <br>")
    } else {
        document.write("escrito <br>")
        
    }
document.write("cantidad de letras : "+resta+"<br>")
 document.write("hay "+ suma +" signos en la array") 
}
esGrito(numero);        
