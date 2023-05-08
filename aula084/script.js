function teste() {
    console.log('Este é  teste;')
}

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
        teste();
    }
    // Método de instância
    aumentarVolume() {
        this.volume += 2;
    }

    diminuirVolume() {
        this.volume -= 2;
    }

    // Método de estático
    static soma(x, y) {
        console.log(this);
    }
}

const controle1 = new ControleRemoto('LG')
ControleRemoto.soma()
