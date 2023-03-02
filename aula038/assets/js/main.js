const paragrafo = document.querySelector('.paragrafo');
const ps = paragrafo.querySelectorAll('p');

const estiloBody = getComputedStyle(document.body);
const backgroundColor = estiloBody.backgroundColor;
console.log(backgroundColor)

for (let p of ps) {
    p.style.backgroundColor = "rgba(35, 68, 99, 0.835)"
    p.style.color = "#ffff"
};
