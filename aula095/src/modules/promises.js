const { resolve, reject } = require("core-js/fn/promises");
const { async } = require("regenerator-runtime");

function promise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Ei! Eu sou sua promise');
            resolve();
        },2000);
    })
}

export default async function () {
    await promise
    console.log('terminou')
}