const numero = Number(prompt('Digite um numero: '));
const numeroTitulo = document.getElementById('titulo-numero');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML= numero;
texto.innerHTML = '';
texto.innerHTML += `<p>Raiz Quadrada: ${Math.sqrt(numero)}</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)} </p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)} </p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)} </p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}`;