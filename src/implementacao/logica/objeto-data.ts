function criaObjeto(data: string) {
    if (!data || !data.includes('/')) return null;

    const [dia, mes, ano] = data.split ('/').map(Number);

    if (isNaN(dia) || isNaN(mes) || isNaN(ano)) return null;
    

    return null;
}
module.exports = criaObjeto;