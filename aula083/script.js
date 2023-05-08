class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome + 'já ligado')
            return
        }

        this.ligado = true
    }

    desligado() {
        if(!this.ligado) {
            console.log(this.nome + 'já desligado')
            return
        }

        this.ligado = false;
    }
};

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablets extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }

    ligar() {
        console.log('Olha, você alterou o metodo ligar')
    }

    falaOi() {
        console.log('Oi')
    }
}

const s1 = new Smartphone('Iphone', 'Preto', 'Pro Max')
console.log(s1);

const t1 = new Tablets('Ipad', true);
t1.ligar();
t1.ligar();
t1.falaOi();

