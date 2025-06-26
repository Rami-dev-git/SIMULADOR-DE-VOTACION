// VARIABLES PRINCIPALES: ARRAY DE CANDIDATOS Y ARRAY PARA ALMACENAR SUS VOTOS //
const candidatos = ["Sergio Massa", "Javier Milei", "Patricia Bullrich"]
let votos = [0, 0, 0]

// ARRAYS PARA GUARDAR DATOS ADICIONALES DE CADA CANDIDATO, SE MOSTRARÁN SI RESULTAN GANADORES //
const edades = [52, 53, 67]
const profesiones = ["Economista", "Licenciado en Administración", "Abogada"]
const partidos = ["Unión por la Patria", "La Libertad Avanza", "Juntos por el Cambio"]

// FUNCIÓN PARA REGISTRAR EL VOTO SEGÚN LA OPCIÓN INGRESADA POR EL USUARIO, AL INGRESAR 5 SE CIERRA EL CICLO. UTILIZO ADEMAS UN -1 AL NUMERO REGISTRADO YA QUE JS COMIENZA DESDE 0 //
function votar(numero) {
    if (numero >= 1 && numero <= 3) {
        votos[numero - 1]++
        alert("Voto registrado para " + candidatos[numero - 1])
        return true
    } else if (numero === 5) {
        return false
    } else {
        alert("Ingrese 1, 2, 3 para votar, o 5 para salir.")
        return true
    }
}

// FUNCIÓN PARA MOSTRAR LA CANTIDAD DE VOTOS OBTENIDOS POR CADA CANDIDATO //
function mostrarResultados() {
    console.log("Resultados de la votación:")
    console.log("Sergio Massa: " + votos[0] + " votos")
    console.log("Javier Milei: " + votos[1] + " votos")
    console.log("Patricia Bullrich: " + votos[2] + " votos")
}

// FUNCIÓN PARA MOSTRAR AL CANDIDATO GANADOR Y SUS DATOS (EDAD, PROFESIÓN Y PARTIDO) //
function mostrarGanador() {
    let a = votos[0]
    let b = votos[1]
    let c = votos[2]

    if (a > b && a > c) {
        console.log("Ganador: " + candidatos[0])
        console.log("Edad: " + edades[0])
        console.log("Profesión: " + profesiones[0])
        console.log("Partido: " + partidos[0])
    } 
    else if (b > a && b > c) {
        console.log("Ganador: " + candidatos[1])
        console.log("Edad: " + edades[1])
        console.log("Profesión: " + profesiones[1])
        console.log("Partido: " + partidos[1])
    } 
    else if (c > a && c > b) {
        console.log("Ganador: " + candidatos[2])
        console.log("Edad: " + edades[2])
        console.log("Profesión: " + profesiones[2])
        console.log("Partido: " + partidos[2])
    }
}

// EN ESTE CICLO SIMULO LA VOTACIÓN MIENTRAS FUNCIONAMIENTO SEA TRUE, UTILIZO UN PARSEINT PARA PODER ALMACENAR UN NUMERO Y NO UN STRING //
let funcionamiento = true

while (funcionamiento) {
    let numero = prompt("Bienvenido a la votación. Ingrese el número del candidato: 1 - Sergio Massa 2 - Javier Milei 3 - Patricia Bullrich 5 - Finalizar");

    if (numero === "1" || numero === "2" || numero === "3") {
        votar(parseInt(numero))
    } 
    else if (numero === "5") {
        funcionamiento = false
        alert("Votación finalizada.")
    } 
    else {
        alert("Ingrese 1, 2, 3 o 5.")
    }
}

// MOSTRAR LOS RESULTADOS Y EL GANADOR AL FINALIZAR LA VOTACIÓN //
mostrarResultados();
mostrarGanador();