/*
705.484.450-52 070.987.729-03

7x 0x 5x 4x 8x 4x 4x 5x 0x
10 9  8  7  6  5  4  3  2 
70 0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro digito)
Se o número digitado for maior que 0, consideramos 0.

7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10 9  8  7  6  5  4  3  2
77 0  45 32 56 24 20 20 0 10 = 284

11 - (284 % 11) = 2 (Primeiro digito)
*/

function ValidaCPF(cpfEnviado) {
 Object.defineProperty(this, 'cpfLimpo', {
    enumerable: true,
    get: function() {
        return cpfEnviado.replace(/\D+/g, '');
    }
 })
}

ValidaCPF.prototype.valida = function() {
    if (typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
    
    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    console.log(digito1)

    return true;
};

ValidaCPF.prototype.criaDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    
    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val));
        regressivo --;
        return ac;
    }, 0);
    const digito = 11 - (total % 11);
    console.log(digito)
    return digito > 9 ? 0 : digito
}

const cpf = new ValidaCPF('705.484.450-52');
//console.log(cpf.cpfLimpo)
console.log(cpf.valida());
