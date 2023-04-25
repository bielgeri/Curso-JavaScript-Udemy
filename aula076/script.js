// Produto -> Aumento, desconto
// Camiseta = cor, caneca = material
function Produto (nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function (valor) {
    this.preco += valor
};
Produto.prototype.desconto = function (valor) {
    this.preco -= valor
};

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco)
    this.cor = cor
}
Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.contructor = Camiseta;

Camiseta.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual/100))
};

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco)
    this.material = material;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function () {
            return estoque
        },
        set: function(valor) {
            if (typeof valor !== 'number') return;
            estoque = valor
        }
    })
};
Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.contructor = Caneca     

const produto = new Produto('Gen', 5)
const camiseta = new Camiseta ('regata', 20, 'branca')
const caneca = new Caneca ('Canequinha', 20, 'Plástico', 5)
caneca.estoque = 100
console.log(camiseta)
console.log(produto)
console.log(caneca)