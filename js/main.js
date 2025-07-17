// LISTA DE VARIALES CON LOS CANDIDATOS, INFORMACION Y LOCALSTORAGE PARA VOLVER A 0 CADA VEZ QUE ACTUALIZA LA PAGINA
const candidatos = ["Sergio Massa", "Javier Milei", "Patricia Bullrich"];
const edades = [52, 53, 67];
const profesiones = ["Economista", "Licenciado en Administración", "Abogada"];
const partidos = [
    "Unión por la Patria",
    "La Libertad Avanza",
    "Juntos por el Cambio",
];
localStorage.removeItem("votos");

// VARIABLE PARA OBTENER VOTOS DESDE LOCALSTORAGE
let votos = JSON.parse(localStorage.getItem("votos")) || [0, 0, 0];

// FUNCION PARA VOTAR
function votar(numero) {
    votos[numero - 1]++;
    localStorage.setItem("votos", JSON.stringify(votos));
    mostrarMensaje("Voto registrado para " + candidatos[numero - 1]);
}

// FUNCION QUE MUESTA EL MENSAJE EN PANTALLA
function mostrarMensaje(texto) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<p>${texto}</p>`;
}

// FUNCION PARA PODER MOSTRAR LOS RESULTADOS
function mostrarResultados() {
    let resultadoHTML = "<h3>Resultados de la votación:</h3><ul>";
    for (let i = 0; i < candidatos.length; i++) {
        resultadoHTML += `<li>${candidatos[i]}: ${votos[i]} votos</li>`;
    }
    resultadoHTML += "</ul>";
    return resultadoHTML;
}

// FUNCIONES PARA PODER MOSTRAR GANADOR Y SUS DATOS
function finalizarVotacion() {
    mostrarGanador();
}

function mostrarGanador() {
    const maxVotos = Math.max(...votos);
    const ganadores = [];

    for (let i = 0; i < votos.length; i++) {
        if (votos[i] === maxVotos) {
            ganadores.push(i);
        }
    }

    let resultado = mostrarResultados();

    if (ganadores.length === 1) {
        const idx = ganadores[0];
        resultado += `<p><strong>Ganador:</strong> ${candidatos[idx]}</p>`;
        resultado += `<p>Edad: ${edades[idx]}</p>`;
        resultado += `<p>Profesión: ${profesiones[idx]}</p>`;
        resultado += `<p>Partido: ${partidos[idx]}</p>`;
    } else {
        let nombres = ganadores.map((i) => candidatos[i]).join(" y ");
        resultado += `<p><strong>Empate entre:</strong> ${nombres}</p>`;
    }

    document.getElementById("resultado").innerHTML = resultado;
}
