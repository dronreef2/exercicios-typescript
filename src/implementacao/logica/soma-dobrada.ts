function somaDobrada(umValor, outroValor) {
    if (umValor < 1 || outroValor < 1) {
        return -1;
    }


    const soma = umValor + outroValor;

    if (umValor === outroValor) {
        return soma * 2;
    }


    return soma;
}

module.exports = somaDobrada;