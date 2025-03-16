// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value.trim();

    // Validar que el campo no esté vacío
    if (nombreAmigo === '') {
        alert('Por favor, inserte un nombre');
        return;
    }

    // Evitar nombres repetidos
    if (amigos.includes(nombreAmigo)) {
        alert('Este nombre ya está en la lista');
        return;
    }

    // Agregar el amigo a la lista
    amigos.push(nombreAmigo);
    actualizarListaAmigos();

    // Limpiar el campo de entrada
    document.getElementById('amigo').value = '';
}

function actualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpiar lista antes de actualizar

    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos para sortear, debes agregar a tus amigos para jugar');
        return;
    }

    // Seleccionar un amigo al azar
    let indice = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indice];

    // Mostrar el resultado
    let elementoResultado = document.getElementById('resultado');
    elementoResultado.innerHTML = `<p>🎉 Tu amigo secreto es: <strong>${amigoSecreto}</strong> 🎉</p>`;
}

function reiniciarJuego() {
    amigos = [];  // Vaciar la lista de amigos
    actualizarListaAmigos(); // Limpiar la lista en pantalla
    document.getElementById('resultado').innerHTML = ''; // Borrar el resultado
    document.getElementById('amigo').value = ''; // Limpiar el campo de entrada
}
