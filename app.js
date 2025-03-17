// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    if (amigos.includes(nombre)) {
        alert('Este nombre ya ha sido agregado.');
        return;
    }

    amigos.push(nombre);
    input.value = '';

    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Necesitas al menos 2 amigos para realizar el sorteo.');
        return;
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    const amigosSorteados = [...amigos];
    const asignaciones = {};

    for (let i = 0; i < amigosSorteados.length; i++) {
        let j = i;
        while (j === i) {
            j = Math.floor(Math.random() * amigosSorteados.length);
        }
        asignaciones[amigosSorteados[i]] = amigosSorteados[j];
        amigosSorteados.splice(j, 1);
    }

    for (const [amigo, amigoSecreto] of Object.entries(asignaciones)) {
        const li = document.createElement('li');
        li.textContent = `${amigo} -> ${amigoSecreto}`;
        resultado.appendChild(li);
    }
}