function apuraVotacao(votos) {

    const contagem = {
        1: 0,
        2: 0,
        3: 0
    };

    for (const voto of votos) {
        contagem[voto]++;
    }

    const maxVotos = Math.max(contagem[1], contagem[2], contagem[3]);

    const vencedores = Object.entries(contagem).filter(([_, votos]) => votos === maxVotos).map(([candidato]) => candidato);

    if (vencedores.length > 1) {
        return 'Empate';
}
    return `Vencedor: ${vencedores[0][0]}`;
}
module.exports = apuraVotacao;