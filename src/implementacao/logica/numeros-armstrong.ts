function numerosArmstrong(numero) {
    const digitos = String(numero).split('');
    const numDigitos = digitos.length;
    
    const soma = digitos.reduce((acc, digito) => {
        return acc + Math.pow(parseInt(digito), numDigitos);
    }, 0);
    
    if (soma === numero) {
        return "Este eh um numero de Armstrong!";
    } else {
        return "Este nao eh um numero de Armstrong!";
    }
}

module.exports = numerosArmstrong;