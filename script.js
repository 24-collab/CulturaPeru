let preguntas = [];
let preguntaActual = 0;
let puntaje = 0;

const preguntasPeru = {

    historia: [
        {
            pregunta: "¿Quién proclamó la independencia del Perú?",
            respuestas: ["Simón Bolívar", "José de San Martín", "Miguel Grau", "Túpac Amaru II"],
            correcta: 1
        },
        {
            pregunta: "¿En qué año se proclamó la independencia del Perú?",
            respuestas: ["1810", "1821", "1830", "1845"],
            correcta: 1
        },
        {
            pregunta: "¿Quién fue conocido como el Caballero de los Mares?",
            respuestas: ["Francisco Bolognesi", "Andrés Avelino Cáceres", "Miguel Grau", "Ramón Castilla"],
            correcta: 2
        },
        {
            pregunta: "¿Quién fue Túpac Amaru II?",
            respuestas: ["Un virrey", "Un líder indígena que encabezó una rebelión", "Un presidente", "Un explorador"],
            correcta: 1
        },
        {
            pregunta: "¿Qué civilización construyó Machu Picchu?",
            respuestas: ["Nazca", "Moche", "Inca", "Paracas"],
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
            respuestas: ["Lago Titicaca", "Lago Junín", "Lago Poopó", "Lago Superior"],
            correcta: 0
        },
        {
            pregunta: "¿Cuántas regiones naturales propuso Javier Pulgar Vidal?",
            respuestas: ["3", "5", "8", "10"],
            correcta: 2
        }
    ],

    gastronomia: [
        {
            pregunta: "¿Cuál es un plato tradicional peruano?",
            respuestas: ["Ceviche", "Paella", "Sushi", "Tacos"],
            correcta: 0
        },
        {
            pregunta: "¿Cuál es uno de los ingredientes principales del ají de gallina?",
            respuestas: ["Pollo", "Pescado", "Cerdo", "Cordero"],
            correcta: 0
        }
    ],

    fauna: [
        {
            pregunta: "¿Cuál es un animal representativo de los Andes peruanos?",
            respuestas: ["Llama", "Canguro", "Oso polar", "Cebra"],
            correcta: 0
        },
        {
            pregunta: "¿Qué ave es representativa de la fauna andina?",
            respuestas: ["Cóndor andino", "Pingüino", "Águila calva", "Flamenco"],
            correcta: 0
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
            respuestas: ["Rojo y blanco", "Azul y blanco", "Verde y blanco", "Rojo y amarillo"],
            correcta: 0
        },
        {
            pregunta: "¿Cuál es el ave nacional del Perú?",
            respuestas: ["Cóndor andino", "Gallito de las rocas", "Águila", "Pelícano"],
            correcta: 1
        }
    ],

    etica: [
        {
            pregunta: "¿Qué valor consiste en decir la verdad?",
            respuestas: ["Honestidad", "Egoísmo", "Envidia", "Irresponsabilidad"],
            correcta: 0
        },
        {
            pregunta: "¿Qué significa respetar a los demás?",
            respuestas: ["Ignorar sus derechos", "Reconocer y valorar sus derechos", "Imponer nuestras ideas", "Discriminar"],
            correcta: 1
        },
        {
            pregunta: "¿Qué valor nos ayuda a cumplir nuestras obligaciones?",
            respuestas: ["Responsabilidad", "Envidia", "Orgullo", "Egoísmo"],
            correcta: 0
        },
        {
            pregunta: "¿Qué significa actuar con justicia?",
            respuestas: ["Tratar a las personas de manera justa", "Favorecer a los amigos", "Ignorar las normas", "Buscar solo beneficio propio"],
            correcta: 0
        },
        {
            pregunta: "¿Qué debemos hacer cuando cometemos un error?",
            respuestas: ["Culpar a otra persona", "Ocultarlo", "Reconocerlo y tratar de corregirlo", "Ignorarlo"],
            correcta: 2
        },
        {
            pregunta: "¿Qué valor promueve ayudar a otras personas?",
            respuestas: ["Solidaridad", "Egoísmo", "Envidia", "Desprecio"],
            correcta: 0
        },
        {
            pregunta: "¿Qué es la tolerancia?",
            respuestas: ["Respetar ideas diferentes", "Obligar a todos a pensar igual", "Rechazar a quien piensa diferente", "No escuchar"],
            correcta: 0
        },
        {
            pregunta: "¿Qué acción demuestra responsabilidad?",
            respuestas: ["Cumplir nuestras obligaciones", "Llegar tarde siempre", "No cumplir promesas", "Evitar responsabilidades"],
            correcta: 0
        },
        {
            pregunta: "¿Qué debemos hacer frente a una situación injusta?",
            respuestas: ["Ignorarla", "Buscar una solución justa", "Empeorar el problema", "No escuchar"],
            correcta: 1
        },
        {
            pregunta: "¿Qué valor significa tratar a todas las personas con dignidad?",
            respuestas: ["Respeto", "Envidia", "Egoísmo", "Desconfianza"],
            correcta: 0
        }
    ],

    economia: [
        {
            pregunta: "¿Qué es la economía?",
            respuestas: ["El estudio de cómo se utilizan los recursos para satisfacer necesidades", "El estudio de animales", "Una rama de la medicina", "Una disciplina deportiva"],
            correcta: 0
        },
        {
            pregunta: "¿Qué es la inflación?",
            respuestas: ["Disminución de precios", "Aumento general y sostenido de los precios", "Desaparición del dinero", "Aumento de salarios únicamente"],
            correcta: 1
        },
        {
            pregunta: "¿Qué es el ahorro?",
            respuestas: ["Gastar todo el dinero", "Guardar parte del dinero para utilizarlo posteriormente", "Pedir dinero prestado", "Comprar productos innecesarios"],
            correcta: 1
        },
        {
            pregunta: "¿Qué es un presupuesto?",
            respuestas: ["Un plan de ingresos y gastos", "Una cuenta bancaria", "Un préstamo", "Un impuesto"],
            correcta: 0
        },
        {
            pregunta: "¿Qué es una necesidad?",
            respuestas: ["Algo importante para vivir o desarrollarse", "Un producto de lujo", "Un objeto decorativo", "Un entretenimiento"],
            correcta: 0
        },
        {
            pregunta: "¿Qué es el mercado?",
            respuestas: ["El lugar o sistema donde se encuentran compradores y vendedores", "Solo una tienda", "Una entidad bancaria", "Un impuesto"],
            correcta: 0
        },
        {
            pregunta: "¿Qué es un impuesto?",
            respuestas: ["Un pago obligatorio establecido por el Estado", "Un regalo", "Un préstamo personal", "Un premio"],
            correcta: 0
        },
        {
            pregunta: "¿Qué institución emite billetes y monedas en el Perú?",
            respuestas: ["SUNAT", "Banco Central de Reserva del Perú", "RENIEC", "INDECOPI"],
            correcta: 1
        },
        {
            pregunta: "¿Qué significa invertir?",
            respuestas: ["Destinar recursos buscando obtener un beneficio futuro", "Gastar todo inmediatamente", "Guardar dinero sin objetivo", "Evitar actividades económicas"],
            correcta: 0
        },
        {
            pregunta: "¿Qué puede ocurrir cuando aumenta la demanda de un producto y la oferta permanece igual?",
            respuestas: ["El precio puede aumentar", "El producto desaparece", "El precio siempre baja", "No ocurre ningún cambio"],
            correcta: 0
        }
    ]
};


function iniciarJuego(categoria) {

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

        resultado.textContent =
            "✅ ¡Correcto! +10 puntos";

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
        "<h2>🏆 Tu puntaje fue: " +
        puntaje +
        " puntos</h2>";

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
