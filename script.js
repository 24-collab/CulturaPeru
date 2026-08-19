let preguntas = [];
let preguntaActual = 0;
let puntaje = 0;
let categoriaActual = "";

const preguntasPeru = {

    historia: [
        {
            pregunta: "¿Quién proclamó la independencia del Perú?",
            respuestas: [
                "Simón Bolívar",
                "José de San Martín",
                "Miguel Grau",
                "Túpac Amaru II"
            ],
            correcta: 1
        },
        {
            pregunta: "¿En qué año se proclamó la independencia del Perú?",
            respuestas: ["1810", "1821", "1830", "1845"],
            correcta: 1
        },
        {
            pregunta: "¿Quién fue conocido como el Caballero de los Mares?",
            respuestas: [
                "Francisco Bolognesi",
                "Andrés Avelino Cáceres",
                "Miguel Grau",
                "Ramón Castilla"
            ],
            correcta: 2
        },
        {
            pregunta: "¿Quién fue Túpac Amaru II?",
            respuestas: [
                "Un virrey",
                "Un líder indígena que encabezó una rebelión",
                "Un presidente",
                "Un explorador"
            ],
            correcta: 1
        },
        {
            pregunta: "¿Qué civilización construyó Machu Picchu?",
            respuestas: [
                "Nazca",
                "Moche",
                "Inca",
                "Paracas"
            ],
            correcta: 2
        }
    ],

    geografia: [
        {
            pregunta: "¿Cuál es la capital del Perú?",
            respuestas: ["Cusco", "Arequipa", "Lima", "Puno"],
            correcta: 2
        },
        {
            pregunta: "¿Cuál es el lago navegable más alto del mundo?",
            respuestas: [
                "Lago Titicaca",
                "Lago Junín",
                "Lago Poopó",
                "Lago Superior"
            ],
            correcta: 0
        }
    ],

    economia: [
        {
            pregunta: "¿Cuál es la pricipal actividad economica de exportacion del Peru en 2025-2026?",
            respuestas: ["Pesca y harina de pescado", "Agroexportacion: arandanos, uvas y paltas", "Mineria: cobre, oro y zinc", "Textiles y confecciones"],
            correcta: 2
        },
        {
            pregunta: "¿Que institucion es la encargada de emitir billites y controlar la influencia en el Peru?",
            respuestas: ["Ministerio de Economia y Finanzas-MEF", "Superintendencia de Bancay Seguros-SBS", "Banco Central de Reserva del Peru-BCRP", "SUNAT"],
            correcta: 2
        }
    ],

    etica: [
        {
            pregunta: "¿Que valor etico se muestra cuando devuelves un celular que encontrastes en la calle?",
            respuestas: ["Responsabilidad", "Honestidad", "Tolerancia", "Empatia"],
            correcta: 1
        },
        {
            pregunta: "En el trabajo, un compañero hace mal su tarea. ¿Que actitud etica es la mas correcta?",
            respuestas: [
                "Burlarse de el con los demas",
                "Ignorarlo y dejar que lo despidan",
                "Ayudarlo y explicarlo como mejorar",
                "Hacer su trabajo tu para que no lo regañen"
            ],
            correcta: 2
        }
    ],

    arqueologia: [
        {
            pregunta: "¿Dónde se encuentra Machu Picchu?",
            respuestas: ["Cusco", "Lima", "Tacna", "Piura"],
            correcta: 0
        },
        {
            pregunta: "¿Qué cultura es famosa por las Líneas de Nazca?",
            respuestas: ["Nazca", "Inca", "Chavín", "Wari"],
            correcta: 0
        }
    ],

    simbolos: [
        {
            pregunta: "¿De qué colores es la bandera del Perú?",
            respuestas: [
                "Rojo y blanco",
                "Azul y blanco",
                "Verde y blanco",
                "Rojo y amarillo"
            ],
            correcta: 0
        },
        {
            pregunta: "¿Cuál es el ave nacional del Perú?",
            respuestas: [
                "Cóndor andino",
                "Gallito de las rocas",
                "Águila",
                "Pelícano"
            ],
            correcta: 1
        }
    ]
};

function iniciarJuego(categoria) {
    categoriaActual = categoria;
    preguntas = preguntasPeru[categoria];
    preguntaActual = 0;
    puntaje = 0;

    document.getElementById("inicio").style.display = "none";
    document.getElementById("juego").style.display = "block";
    document.getElementById("puntaje").textContent = puntaje;

    mostrarPregunta();
}

function mostrarPregunta() {

    const pregunta = preguntas[preguntaActual];

    document.getElementById("pregunta").textContent =
        pregunta.pregunta;

    const contenedor =
        document.getElementById("respuestas");

    contenedor.innerHTML = "";

    document.getElementById("resultado").textContent = "";

    document.getElementById("siguiente").style.display = "none";

    pregunta.respuestas.forEach((respuesta, indice) => {

        const boton = document.createElement("button");

        boton.textContent = respuesta;

        boton.onclick = function () {
            comprobarRespuesta(indice);
        };

        contenedor.appendChild(boton);
    });
}

function comprobarRespuesta(indice) {

    const pregunta = preguntas[preguntaActual];

    const resultado =
        document.getElementById("resultado");

    if (indice === pregunta.correcta) {

        resultado.textContent = "✅ ¡Correcto! +10 puntos";

        puntaje += 10;

        document.getElementById("puntaje").textContent =
            puntaje;

    } else {

        resultado.textContent =
            "❌ Incorrecto. La respuesta correcta era: " +
            pregunta.respuestas[pregunta.correcta];
    }

    const botones =
        document.querySelectorAll("#respuestas button");

    botones.forEach(boton => {
        boton.disabled = true;
    });

    document.getElementById("siguiente").style.display =
        "block";
}

function siguientePregunta() {

    preguntaActual++;

    if (preguntaActual < preguntas.length) {
        mostrarPregunta();
    } else {
        terminarJuego();
    }
}

function terminarJuego() {

    document.getElementById("pregunta").textContent =
        "🎉 ¡Juego terminado!";

    document.getElementById("respuestas").innerHTML =
        "<h2>🏆 Tu puntaje fue: " + puntaje + " puntos</h2>";

    document.getElementById("resultado").textContent =
        "🇵🇪 ¡Gracias por jugar Cultura General del Perú!";

    document.getElementById("siguiente").textContent =
        "🔄 Volver a jugar";

    document.getElementById("siguiente").style.display =
        "block";

    document.getElementById("siguiente").onclick =
        function () {
            location.reload();
        };
}
