// (condição) ? 'Valor para verdadeiro' : 'Valor para falso.'
const pontuação = 400;
const nivelUsuario = pontuação >= 1000 ? 'Usuário vip' : 'Usuário normal'

const corUsuario = null;
const corPadrao  = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao)

