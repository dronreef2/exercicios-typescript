function criaObjeto(data: string) {
   
    if (!data || !data.includes('/')) return null;

    const [dia, mes, ano] = data.split('/');

    if (!dia || !mes || !ano) return null;

    return {
        dia,
        mes,
        ano
    };
}

module.exports = criaObjeto;

console.log("12/06/2012");
