/**
 * Filtro & Letras - Cafetería Literaria & Maridaje de Lectura y Café Casero
 * Cátedra: Laboratorio de Programación I (Tecnicatura en Desarrollo de Software - Prof. Yésica Ponce)
 * Desarrollado por Ramiro Curimá & Sebastián Gauna
 * Asistencia: Gemini & Antigravity
 */

// ==========================================
// 1. CONSIGNAS OFICIALES DEL TP (LÓGICA BASE)
// ==========================================

// Array de objetos con 20 frases literarias extraídas exclusivamente de los libros del catálogo
const frasesLiterarias = [
  {
    texto: "“He aquí mi secreto, que no puede ser más simple: solo con el corazón se puede ver bien; lo esencial es invisible a los ojos.”",
    autor: "Antoine de Saint-Exupéry (El Principito)"
  },
  {
    texto: "“Una mañana, tras un sueño intranquilo, Gregorio Samsa se despertó convertido en un monstruoso insecto.”",
    autor: "Franz Kafka (La metamorfosis)"
  },
  {
    texto: "“El número de páginas de este libro es exactamente infinito. Ninguna es la primera; ninguna, la última.”",
    autor: "Jorge Luis Borges (El libro de arena)"
  },
  {
    texto: "“¡Dios mío! ¡Un minuto entero de felicidad! ¿Acaso es poco para toda una vida humana?”",
    autor: "Fyodor Dostoyevsky (Noches blancas)"
  },
  {
    texto: "“De lo que sea que estén hechas nuestras almas, la suya y la mía son iguales.”",
    autor: "Emily Brontë (Cumbres Borrascosas)"
  },
  {
    texto: "“Pero yo no quiero la comodidad. Quiero la poesía, quiero el peligro verdadero, quiero la libertad, quiero la bondad.”",
    autor: "Aldous Huxley (Un mundo feliz)"
  },
  {
    texto: "“El mar no pertenece a los déspotas. En su superficie todavía pueden ejercer derechos inicuos, pero a treinta pies por debajo su poder cesa.”",
    autor: "Julio Verne (20.000 leguas de viaje submarino)"
  },
  {
    texto: "“El hombre no es verdaderamente uno, sino verdaderamente dos.”",
    autor: "Robert Louis Stevenson (El extraño caso del Dr. Jekyll y Mr. Hyde)"
  },
  {
    texto: "“Y mi alma, del fondo de esa sombra que yace flotando en el suelo, no podrá elevarse nunca más... ¡Nunca más!”",
    autor: "Edgar Allan Poe (El cuervo y otros poemas)"
  },
  {
    texto: "“El amor es lo único que nos hace mirar al futuro con esperanza y al pasado sin remordimientos.”",
    autor: "Alexandre Dumas hijo (La dama de las camelias)"
  },
  {
    texto: "“Cuando se ha eliminado todo lo imposible, lo que queda, por improbable que parezca, debe ser la verdad.”",
    autor: "Arthur Conan Doyle (Estudio en escarlata)"
  },
  {
    texto: "“No hay nada más difícil de emprender, ni más dudoso de hacer triunfar, que introducir un nuevo orden de cosas.”",
    autor: "Nicolás Maquiavelo (El Príncipe)"
  },
  {
    texto: "“¿No es maravilloso pensar que mañana es un nuevo día en el que todavía no se han cometido errores?”",
    autor: "Lucy Maud Montgomery (Ana de las Tejas Verdes)"
  },
  {
    texto: "“No hay diferencia entre el Tiempo y las dimensiones del Espacio, salvo que nuestra conciencia se mueve a lo largo de él.”",
    autor: "H.G. Wells (La máquina del tiempo)"
  },
  {
    texto: "“Esta penumbra es lenta y no duele; fluye por una mansa pendiente y se parece a la eternidad.”",
    autor: "Jorge Luis Borges (Elogio de la sombra)"
  },
  {
    texto: "“Podía sentir mi corazón latiendo. Podía sentir el corazón de todos. Podía sentir la vulnerabilidad humana flotando en la habitación.”",
    autor: "Raymond Carver (De qué hablamos cuando hablamos de amor)"
  },
  {
    texto: "“Por la mañana era de mañana y yo todavía estaba vivo. Quizá escribiría una novela, pensé. Y luego lo hice.”",
    autor: "Charles Bukowski (Cartero)"
  },
  {
    texto: "“Dondequiera que las cosas se juzguen por el dinero, difícilmente podrá conseguirse que la república se administre con justicia.”",
    autor: "Tomás Moro (Utopía)"
  },
  {
    texto: "“Como el linaje de las hojas, tal es el de los hombres. El viento las esparce por el suelo, y el bosque vuelve a brotar en primavera.”",
    autor: "Homero (La Ilíada)"
  },
  {
    texto: "“La mente humana es como una pequeña buhardilla vacía: hay que llenarla con los muebles que uno elija con cuidado.”",
    autor: "Arthur Conan Doyle (El signo de los cuatro)"
  }
];

// Enlace de los elementos del DOM mediante document.getElementById()
const tarjeta = document.getElementById("tarjeta");
const textoFrase = document.getElementById("texto-frase");
const autorFrase = document.getElementById("autor-frase");
const btnNuevaFrase = document.getElementById("btn-nueva-frase");
const btnCambiarTema = document.getElementById("btn-cambiar-tema");

// Evento click para inyectar una cita literaria aleatoria usando Math.random()
if (btnNuevaFrase && textoFrase && autorFrase) {
  btnNuevaFrase.addEventListener("click", () => {
    const indiceAleatorio = Math.floor(Math.random() * frasesLiterarias.length);
    const citaSeleccionada = frasesLiterarias[indiceAleatorio];

    textoFrase.style.opacity = "0.3";
    autorFrase.style.opacity = "0.3";

    setTimeout(() => {
      textoFrase.textContent = citaSeleccionada.texto;
      autorFrase.textContent = `— ${citaSeleccionada.autor}`;
      textoFrase.style.opacity = "1";
      autorFrase.style.opacity = "1";
    }, 150);
  });
}

// Evento click para alternar la clase .modo-oscuro en el body usando classList.toggle()
if (btnCambiarTema) {
  // Restaurar preferencia previa si existe
  try {
    const temaGuardado = localStorage.getItem("filtro-letras-tema");
    if (temaGuardado === "oscuro") {
      document.body.classList.add("modo-oscuro");
    }
  } catch (_) {}

  btnCambiarTema.addEventListener("click", () => {
    document.body.classList.toggle("modo-oscuro");
    const esOscuro = document.body.classList.contains("modo-oscuro");
    try {
      localStorage.setItem("filtro-letras-tema", esOscuro ? "oscuro" : "claro");
    } catch (_) {}
  });
}

// Actualización automática del año en el pie de página
const yearCopy = document.getElementById("year-copy");
if (yearCopy) {
  yearCopy.textContent = new Date().getFullYear();
}

// ==========================================
// 2. AMPLIACIÓN: BASE DE DATOS DE 23 LIBROS (librosBD)
// ==========================================
const librosBD = [
  // 💥 1. GOLPE DE REALIDAD
  {
    id: "cartero",
    titulo: "Cartero",
    autor: "Charles Bukowski",
    categoria: "golpe-de-realidad",
    categoriaNombre: "💥 Golpe de Realidad",
    resumenCorto: "La cruda, cínica y directa rutina de Henry Chinaski en las oficinas de correo de Los Ángeles.",
    sinopsis: "Novela autobiográfica que retrata la monotonía, la calle, la bohemia y el desencanto en las oficinas del servicio postal con el inconfundible estilo del realismo sucio.",
    pdfRuta: "./libros/Cartero-Charles Bukowski.pdf",
    cafes: [
      {
        nombre: "Espresso Doble de Jarrito",
        notas: "Fuerte, directo y sin rodeos, ideal para la aspereza de Bukowski.",
        ingredientes: ["2 cucharadas colmadas de café molido fino", "1/2 taza de agua hirviendo"],
        pasoAPaso: [
          "Calienta el agua en un jarrito hasta justo antes de romper el hervor (90°C).",
          "Coloca el café molido en un colador de tela o papel sobre tu taza.",
          "Vierte el agua en chorro fino de forma lenta sin remover.",
          "Sirve bien caliente sin agregar azúcar ni leche."
        ]
      },
      {
        nombre: "Americano Amargo Casero",
        notas: "Largo e intenso para acompañar lecturas prolongadas.",
        ingredientes: ["2 cucharadas de café molido", "1 taza de agua hirviendo"],
        pasoAPaso: [
          "Prepara un café negro concentrado en colador o cafetera moka.",
          "Calienta media taza de agua pura aparte.",
          "Diluye el café concentrado en el agua caliente para suavizar el cuerpo pero mantener el amargor.",
          "Bebe despacio mientras avanzas los capítulos."
        ]
      },
      {
        nombre: "Cold Brew de Heladera",
        notas: "Café en frío, seco y directo para días calurosos.",
        ingredientes: ["3 cucharadas de café molienda gruesa", "1 vaso de agua fría", "Hielo"],
        pasoAPaso: [
          "Coloca el café molido en un frasco de vidrio y añade el agua fría.",
          "Tapa el frasco y déjalo reposar en la heladera entre 8 y 12 horas.",
          "Filtra la mezcla con colador de tela y sirve en un vaso con cubos de hielo."
        ]
      }
    ]
  },
  {
    id: "mujeres",
    titulo: "Mujeres",
    autor: "Charles Bukowski",
    categoria: "golpe-de-realidad",
    categoriaNombre: "💥 Golpe de Realidad",
    resumenCorto: "Bohemia, literatura y relaciones tumultuosas vistas con ácida ironía.",
    sinopsis: "Henry Chinaski reflexiona sobre el éxito literario tardío, la bohemia urbana y sus complejas e intensas relaciones afectivas.",
    pdfRuta: "./libros/Mujeres-Charles Bukowski.pdf",
    cafes: [
      {
        nombre: "Café de Olla con Canela",
        notas: "Aroma tradicional con carácter y especias.",
        ingredientes: ["2 tazas de agua", "2 cucharadas de café", "1 rama de canela", "1 cucharada de azúcar mascabo o rubia"],
        pasoAPaso: [
          "En un jarrito, hierve el agua junto con la rama de canela y el azúcar por 5 minutos.",
          "Agrega el café molido, apaga el fuego y remueve con una cuchara.",
          "Deja reposar tapado durante 3 minutos para que decante.",
          "Cuela en tu taza favorita y disfruta el aroma a canela."
        ]
      },
      {
        nombre: "Cortado de Cacao Amargo",
        notas: "Toque oscuro de chocolate amargo que resalta el grano.",
        ingredientes: ["1 taza de café negro caliente", "1 cucharadita de cacao amargo 100%", "Un chorrito de leche caliente"],
        pasoAPaso: [
          "En la base de la taza, mezcla el cacao amargo en polvo con el chorrito de leche tibia hasta formar una crema.",
          "Vierte el café negro bien caliente por encima mientras revuelves.",
          "Obtendrás un café con cuerpo espeso y notas de chocolate amargo."
        ]
      },
      {
        nombre: "Black Coffee Iced",
        notas: "Refrescante, directo y crujiente.",
        ingredientes: ["1 taza de café negro recién filtrado", "Abundante hielo"],
        pasoAPaso: [
          "Prepara un café negro de filtro un poco más cargado de lo habitual.",
          "Llena un vaso de vidrio alto hasta el borde con cubos de hielo.",
          "Vierte el café caliente directamente sobre el hielo para un enfriamiento instantáneo."
        ]
      }
    ]
  },
  {
    id: "de-que-hablamos",
    titulo: "De qué hablamos cuando hablamos de amor",
    autor: "Raymond Carver",
    categoria: "golpe-de-realidad",
    categoriaNombre: "💥 Golpe de Realidad",
    resumenCorto: "Relatos secos y cotidianos sobre la fragilidad de las relaciones humanas.",
    sinopsis: "Cuentos breves que exploran la soledad, los silencios y la complejidad de las relaciones humanas en la vida cotidiana estadounidense.",
    pdfRuta: "./libros/De-que-hablamos-cuando-hablamos-Raymond Carver.pdf",
    cafes: [
      {
        nombre: "Café en Prensa Francesa",
        notas: "Sabor denso y limpio sin complicar la preparación.",
        ingredientes: ["2 cucharadas de café de molienda gruesa", "1 taza de agua caliente (no hirviendo)"],
        pasoAPaso: [
          "Agrega el café molido al fondo de la jarra de la prensa francesa.",
          "Vierte el agua caliente lentamente y revuelve suavemente con una cuchara de madera.",
          "Coloca la tapa con el émbolo arriba y deja infusionar por 4 minutos exactos.",
          "Baja el émbolo lentamente hasta el fondo y sirve."
        ]
      },
      {
        nombre: "Café Filtrado Tradicional",
        notas: "Taza limpia, honesta y ligera para una lectura tranquila.",
        ingredientes: ["Café molienda media", "Filtro de tela o papel con portafiltro", "Agua caliente"],
        pasoAPaso: [
          "Humedece el filtro de papel con agua caliente para eliminar sabores de papel.",
          "Coloca el café molido en el filtro y realiza un primer vertido corto de agua para preinfusionar (30 segundos).",
          "Vierte el resto del agua en círculos suaves hacia afuera.",
          "Deja que termine de gotear completamente antes de beber."
        ]
      },
      {
        nombre: "Café Negro con Pizca de Miel",
        notas: "Un toque de dulzura natural para contrastar la sequedad del texto.",
        ingredientes: ["1 taza de café negro filtrado", "1 cucharadita de miel pura"],
        pasoAPaso: [
          "Prepara tu café negro habitual.",
          "Agrega la cucharadita de miel mientras el café esté bien caliente.",
          "Mezcla hasta disolver por completo. La miel suavizará la acidez natural del grano."
        ]
      }
    ]
  },
  {
    id: "historia-amor-turbio",
    titulo: "Historia de un amor turbio",
    autor: "Horacio Quiroga",
    categoria: "golpe-de-realidad",
    categoriaNombre: "💥 Golpe de Realidad",
    resumenCorto: "Obsesiones y dilemas sentimentales trágicos en una narrativa profunda.",
    sinopsis: "Novela corta que explora la psicología del amor, la duda y las pasiones destructivas en la juventud.",
    pdfRuta: "./libros/Historia-de-un-amor-turbio-Horacio Quiroga.pdf",
    cafes: [
      {
        nombre: "Moka con Chocolate Oscuro",
        notas: "Intenso y pasional para historias trágicas.",
        ingredientes: ["1 taza de café fuerte", "2 barritas de chocolate amargo (o cacao)", "Leche tibia"],
        pasoAPaso: [
          "Trocea el chocolate amargo en el fondo de la taza.",
          "Vierte el café negro hirviendo sobre el chocolate y revuelve hasta que se derrita por completo.",
          "Completa con un chorrito de leche caliente para darle cremosidad."
        ]
      },
      {
        nombre: "Café con Pimienta y Canela",
        notas: "Toque picante y exótico que despierta el paladar.",
        ingredientes: ["Café negro caliente", "1 pizca de pimienta negra molida", "1 pizca de canela"],
        pasoAPaso: [
          "Al preparar el café en el filtro o jarro, añade la pizca de pimienta y canela directamente junto con el grano molido.",
          "Filtra como de costumbre.",
          "El resultado es un café con retrogusto picante y cálido."
        ]
      },
      {
        nombre: "Café Doble Especiado",
        notas: "Cuerpo robusto para mantener la atención en la trama.",
        ingredientes: ["2 shots de café cargado", "Nuez moscada rallada"],
        pasoAPaso: [
          "Extrae un café doble cargado.",
          "Ralla una micro cantidad de nuez moscada fresca en la superficie.",
          "Bebe de inmediato mientras desprende los aceites esenciales."
        ]
      }
    ]
  },

  // 🌀 2. LABERINTOS MENTALES
  {
    id: "libro-de-arena",
    titulo: "El libro de arena",
    autor: "Jorge Luis Borges",
    categoria: "laberintos-mentales",
    categoriaNombre: "🌀 Laberintos Mentales",
    resumenCorto: "Relatos sobre libros infinitos, espejos y laberintos de la imaginación.",
    sinopsis: "Una de las obras cumbre de Borges con cuentos acerca de objetos imposibles, la memoria y el infinito.",
    pdfRuta: "./libros/El-libro-de-arena-Jorge-Luis-Borges.pdf",
    cafes: [
      {
        nombre: "Cold Brew Tónico efervescente",
        notas: "Complejo, burbujeante y estimulante para la mente.",
        ingredientes: ["1/2 vaso de Cold Brew (café frío)", "1/2 vaso de Agua Tónica", "Hielo y rodaja de limón"],
        pasoAPaso: [
          "Llena un vaso con cubos de hielo y la rodaja de limón.",
          "Vierte el agua tónica hasta la mitad del vaso.",
          "Agrega lentamente el Cold Brew por encima para crear dos capas de color antes de mezclar."
        ]
      },
      {
        nombre: "Café Especiado con Cardamomo",
        notas: "Sabor místico y profundo al estilo oriental.",
        ingredientes: ["Café molido", "1 semilla de cardamomo abierta", "Agua"],
        pasoAPaso: [
          "Pisa la semilla de cardamomo para extraer los granos internos.",
          "Mezcla el cardamomo con el café molido en tu filtro o cafetera.",
          "Infusiona con agua caliente. El cardamomo aportará un aroma cítrico y mentolado único."
        ]
      },
      {
        nombre: "Café Negro con Piel de Naranja",
        notas: "Los aceites del cítrico abren la complejidad del café.",
        ingredientes: ["1 taza de café negro cargado", "1 tira de cáscara de naranja limpia"],
        pasoAPaso: [
          "Corta una tira fina de cáscara de naranja evitando la parte blanca amarga.",
          "Dobla la cáscara sobre la taza de café caliente para liberar sus aceites cítricos.",
          "Suelta la cáscara dentro de la taza mientras lees."
        ]
      }
    ]
  },
  {
    id: "elogio-sombra",
    titulo: "Elogio de la sombra",
    autor: "Jorge Luis Borges",
    categoria: "laberintos-mentales",
    categoriaNombre: "🌀 Laberintos Mentales",
    resumenCorto: "Poesía y prosa introspectiva sobre el tiempo, la ceguera y la memoria.",
    sinopsis: "Reflexiones sobre la ceguera, los años transcurridos, los libros leídos y el paso del tiempo.",
    pdfRuta: "./libros/Elogio-de-la-sombra-Jorge-Luis-Borges.pdf",
    cafes: [
      {
        nombre: "Flat White Casero",
        notas: "Textura sedosa con un centro firme de café.",
        ingredientes: ["1 shot de café cargado", "1/2 taza de leche tibia espumada"],
        pasoAPaso: [
          "Prepara un café corto e intenso en la base de la taza.",
          "Calienta la leche y bátela dentro de un frasco de vidrio hermético durante 30 segundos hasta generar microespuma.",
          "Vierte la leche tibia con cuidado sobre el café."
        ]
      },
      {
        nombre: "Café Filtrado Gota a Gota",
        notas: "Extracción lenta para saborear la pausa.",
        ingredientes: ["Café molienda media", "Agua a 90°C"],
        pasoAPaso: [
          "Vierte el agua en chorros pausados cada 20 segundos sobre el café.",
          "Disfruta la meditación visual mientras el café cae gota a gota a la jarra."
        ]
      },
      {
        nombre: "Café con Hilo de Miel y Canela",
        notas: "Cálida serenidad para la poesía.",
        ingredientes: ["Café negro", "1 cucharadita de miel", "Espolvoreado de canela"],
        pasoAPaso: [
          "Endulza el café negro caliente con miel pura.",
          "Espolvorea canela en la superficie antes de cada sorbo."
        ]
      }
    ]
  },
  {
    id: "la-metamorfosis",
    titulo: "La metamorfosis",
    autor: "Franz Kafka",
    categoria: "laberintos-mentales",
    categoriaNombre: "🌀 Laberintos Mentales",
    resumenCorto: "Gregorio Samsa despierta transformado en un monstruoso insecto.",
    sinopsis: "Obra maestra del absurdo y la alienación existencialista: Gregorio Samsa amanece transformado en un insecto sufriendo la soledad y el aislamiento.",
    pdfRuta: "./libros/La-metamorfosis-Franz-Kafka.pdf",
    cafes: [
      {
        nombre: "Espresso Concentrado Extra",
        notas: "Despertar absurdo y punzante de alta intensidad.",
        ingredientes: ["2 cucharadas colmadas de café molido fino", "1/3 taza de agua hirviendo"],
        pasoAPaso: [
          "Extrae en filtro o moka en 20 segundos para capturar máxima acidez.",
          "Sirve en taza pequeña y bébelo solo de inmediato."
        ]
      },
      {
        nombre: "Café Vienés Oscuro",
        notas: "Contraste entre amargura profunda y crema blanca.",
        ingredientes: ["1 taza de café negro filtrado", "2 cucharadas de crema batida sin azúcar"],
        pasoAPaso: [
          "Sirve el café bien oscuro en una taza.",
          "Corona con la crema batida fría flotando sobre la superficie."
        ]
      },
      {
        nombre: "Café Irlandés Casero",
        notas: "Calidez reconfortante ante el desconcierto.",
        ingredientes: ["Café negro caliente", "1 cucharada de azúcar negra", "Gotas de esencia de vainilla", "Crema"],
        pasoAPaso: [
          "Disuelve el azúcar y la esencia en el café caliente.",
          "Cubre suavemente con crema espesa."
        ]
      }
    ]
  },
  {
    id: "el-desaparecido",
    titulo: "El desaparecido (América)",
    autor: "Franz Kafka",
    categoria: "laberintos-mentales",
    categoriaNombre: "🌀 Laberintos Mentales",
    resumenCorto: "Las desventuras de Karl Rossmann en una América surrealista y caótica.",
    sinopsis: "Un joven inmigrante europeo desembarca en Nueva York enfrentando un laberinto de maquinarias, rascacielos y situaciones absurdas.",
    pdfRuta: "./libros/El-desaparecido-Franz-Kafka.pdf",
    cafes: [
      {
        nombre: "Americano de Filtro Fuerte",
        notas: "Largo e incierto, para beber despacio durante el viaje.",
        ingredientes: ["2 cucharadas de café molido", "1 taza y media de agua caliente"],
        pasoAPaso: [
          "Filtra lentamente el café en jarra tradicional.",
          "Sirve en taza grande para beber pausadamente mientras lees."
        ]
      },
      {
        nombre: "Café Bombón Casero",
        notas: "Contraste dulce y denso en capas visuales.",
        ingredientes: ["2 cucharadas de leche condensada", "1 taza de café fuerte"],
        pasoAPaso: [
          "Vierte la leche condensada en la base de un vaso de vidrio.",
          "Añade el café negro caliente suavemente con el dorso de una cuchara."
        ]
      },
      {
        nombre: "Dirty Chai Latte",
        notas: "Mezcla de especias orientales y café occidental.",
        ingredientes: ["1 saquito de té especiado o chai", "1/2 taza de leche caliente", "1 shot de café fuerte"],
        pasoAPaso: [
          "Infusiona el té en la leche caliente durante 3 minutos.",
          "Retira el saquito y añade el shot de café caliente."
        ]
      }
    ]
  },
  {
    id: "estudio-en-escarlata",
    titulo: "Estudio en escarlata",
    autor: "Arthur Conan Doyle",
    categoria: "laberintos-mentales",
    categoriaNombre: "🌀 Laberintos Mentales",
    resumenCorto: "La primera aparición de Sherlock Holmes y la ciencia de la deducción.",
    sinopsis: "El Dr. Watson conoce al singular Sherlock Holmes y juntos investigan un misterioso asesinato en una casa deshabitada de Londres.",
    pdfRuta: "./libros/Sherlock-Holmes-01-Estudio-en-Conan DoyleArthur.pdf",
    cafes: [
      {
        nombre: "Earl Grey Coffee Blend",
        notas: "Aroma victoriano con notas de bergamota londinense.",
        ingredientes: ["1/2 taza de café filtrado", "1/2 taza de té negro infusionado", "Gotas de limón"],
        pasoAPaso: [
          "Prepara el té negro y el café por separado.",
          "Combínalos en partes iguales en una taza de té inglesa.",
          "Agrega una gota de limón para resaltar la bergamota."
        ]
      },
      {
        nombre: "Espresso Romano",
        notas: "Agudeza mental rápida con twist de limón.",
        ingredientes: ["1 shot de café concentrado", "1 rodaja de limón"],
        pasoAPaso: [
          "Frota el borde de la taza con el limón.",
          "Vierte el café hirviendo y deja reposar la rodaja 30 segundos."
        ]
      },
      {
        nombre: "Café Filtrado con Clavos de Olor",
        notas: "Aroma especiado y clásico del Londres de 1880.",
        ingredientes: ["Café molido", "2 clavos de olor enteros", "Agua caliente"],
        pasoAPaso: [
          "Coloca los clavos de olor en el filtro junto al café molido.",
          "Filtra con agua a 90°C y retira los clavos."
        ]
      }
    ]
  },
  {
    id: "signo-de-los-cuatro",
    titulo: "El signo de los cuatro",
    autor: "Arthur Conan Doyle",
    categoria: "laberintos-mentales",
    categoriaNombre: "🌀 Laberintos Mentales",
    resumenCorto: "Aventura clásica de Sherlock Holmes: tesoros de la India, pactos secretos y un enigma fascinante.",
    sinopsis: "Mary Morstan recurre al detective Sherlock Holmes y al Dr. John Watson tras recibir misteriosas perlas vinculadas al tesoro de Agra, arrastrándolos a un laberinto de venganza y pactos secretos.",
    pdfRuta: "./libros/Sherlock-Holmes-02-El-signo-d-Conan-Doyle-Arthur.pdf",
    cafes: [
      {
        nombre: "Café con Especias de la India",
        notas: "Exótico, aromático y misterioso como el tesoro de Agra.",
        ingredientes: ["Café", "Pizca de canela, jengibre y cardamomo", "Leche tibia"],
        pasoAPaso: [
          "Mezcla las especias secas en el café molido antes de filtrar.",
          "Vierte el café infusionado y corta con un toque de leche tibia."
        ]
      },
      {
        nombre: "Capuchino de Canela Molida",
        notas: "Clásico reconfortante para una noche de niebla.",
        ingredientes: ["Café caliente", "Leche espumada", "Abundante canela"],
        pasoAPaso: [
          "Espuma la leche caliente en un frasco con tapa agitándolo.",
          "Vierte sobre el café y decora generosamente con canela."
        ]
      },
      {
        nombre: "Moka Oscuro Intenso",
        notas: "Profundidad de cacao amargo con retrogusto persistente.",
        ingredientes: ["Café negro", "1 cucharada de cacao puro", "1 cucharadita de azúcar mascabo"],
        pasoAPaso: [
          "Disuelve el cacao en el café hirviendo.",
          "Bate rápidamente con cuchara para integrar."
        ]
      }
    ]
  },

  // ☕ 3. REFUGIO CÁLIDO
  {
    id: "principito",
    titulo: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    categoria: "refugio-calido",
    categoriaNombre: "☕ Refugio Cálido",
    resumenCorto: "Una fábula poética sobre el amor, la amistad y lo esencial invisible a los ojos.",
    sinopsis: "Fábula poética universal que recuerda el valor de la amistad, la inocencia, el cuidado de la rosa y el verdadero amor.",
    pdfRuta: "./libros/Libro-el-Principito.pdf",
    cafes: [
      {
        nombre: "Latte Dulce de Vainilla",
        notas: "Suave, cremoso y reconfortante.",
        ingredientes: ["1/2 taza de café suave", "1/2 taza de leche tibia", "1/2 cucharadita de esencia de vainilla", "1 cucharadita de azúcar"],
        pasoAPaso: [
          "Calienta la leche junto con la vainilla y el azúcar.",
          "Bate la leche con un batidor de mano o tenedor para espumar.",
          "Mezcla con el café suave en una taza grande."
        ]
      },
      {
        nombre: "Capuchino Casero de Espuma Nube",
        notas: "Espuma esponjosa como una nube dulce.",
        ingredientes: ["Café caliente", "Leche entera", "Cacao en polvo o canela"],
        pasoAPaso: [
          "Calienta la leche en el microondas o jarro.",
          "Bátela en un frasco con tapa hasta que la espuma duplique su tamaño.",
          "Sirve el café y coloca la espuma de leche arriba con una cuchara. Decora con cacao."
        ]
      },
      {
        nombre: "Café con Leche y Miel de Campo",
        notas: "Sabor dulce y acogedor para tardes de descanso.",
        ingredientes: ["Café de filtro", "Leche tibia", "1 cucharada de miel de abeja"],
        pasoAPaso: [
          "Disuelve la miel en el café bien caliente.",
          "Añade la leche tibia y revuelve suavemente."
        ]
      }
    ]
  },
  {
    id: "ana-tejas-verdes",
    titulo: "Ana de las Tejas Verdes",
    autor: "Lucy Maud Montgomery",
    categoria: "refugio-calido",
    categoriaNombre: "☕ Refugio Cálido",
    resumenCorto: "Las alegres y poéticas aventuras de la huérfana pelirroja Ana Shirley.",
    sinopsis: "La historia de la imaginativa huérfana Ana Shirley al llegar al pintoresco pueblo de Avonlea transformando la vida de los hermanos Cuthbert.",
    pdfRuta: "./libros/Ana_de_las_tejas_verdes.pdf",
    cafes: [
      {
        nombre: "Café de Caramelo Casero",
        notas: "Nostalgia de hogar con hilos de caramelo.",
        ingredientes: ["Café caliente", "Leche tibia", "Salsa de caramelo o azúcar quemada"],
        pasoAPaso: [
          "Cubre las paredes internas de tu taza con hilos de caramelo líquido.",
          "Vierte el café con leche caliente y revuelve lentamente."
        ]
      },
      {
        nombre: "Café Moka de Chocolate Blanco",
        notas: "Dulzura suave y textura cremosa.",
        ingredientes: ["30g de chocolate blanco picado", "1 taza de café caliente", "Leche tibia"],
        pasoAPaso: [
          "Disuelve el chocolate blanco dentro del café hirviendo.",
          "Agrega leche tibia para equilibrar."
        ]
      },
      {
        nombre: "Café de Campo con Crema",
        notas: "Sencillo, tradicional y reconfortante.",
        ingredientes: ["Café filtrado", "1 cucharada de crema de leche"],
        pasoAPaso: [
          "Servir café negro y dejar caer suavemente la crema de leche para que flote antes de beber."
        ]
      }
    ]
  },
  {
    id: "noches-blancas",
    titulo: "Noches blancas",
    autor: "Fyodor Dostoyevsky",
    categoria: "refugio-calido",
    categoriaNombre: "☕ Refugio Cálido",
    resumenCorto: "Un romántico soñador encuentra a una joven en las mágicas noches de San Petersburgo.",
    sinopsis: "Historia sentimental sobre un joven solitario que conoce a Nástenka a orillas del canal durante cuatro noches mágicas e iluminadas.",
    pdfRuta: "./libros/NochesBlancas.pdf",
    cafes: [
      {
        nombre: "Café Vienés con Crema Batida",
        notas: "Elegante y romántico para lecturas nocturnas.",
        ingredientes: ["1 taza de café negro filtrado", "Abundante crema batida con un toque de azúcar"],
        pasoAPaso: [
          "Sirve el café negro bien caliente en una taza o vaso de vidrio.",
          "Corona la superficie con un copete generoso de crema batida.",
          "Bebe el café caliente a través de la crema fría."
        ]
      },
      {
        nombre: "Café con Canela y Malvaviscos",
        notas: "Dulce fantasía para soñadores.",
        ingredientes: ["Café con leche caliente", "Canela", "Mini malvaviscos"],
        pasoAPaso: [
          "Prepara un café con leche espumoso.",
          "Coloca los malvaviscos arriba para que se derritan con el calor.",
          "Espolvorea canela."
        ]
      },
      {
        nombre: "Latte de Leche Condensada",
        notas: "Cuerpo espeso y dulzura reconfortante.",
        ingredientes: ["2 cucharadas de leche condensada", "1 shot de café", "Leche tibia"],
        pasoAPaso: [
          "Coloca la leche condensada en la base del vaso.",
          "Agrega la leche tibia y termina con el shot de café caliente."
        ]
      }
    ]
  },

  // 🚀 4. ESCAPE DE LA REALIDAD
  {
    id: "mundo-feliz",
    titulo: "Un mundo feliz",
    autor: "Aldous Huxley",
    categoria: "escape-de-la-realidad",
    categoriaNombre: "🚀 Escape de la Realidad",
    resumenCorto: "Una sociedad futurista tecnológicamente avanzada pero deshumanizada.",
    sinopsis: "Distopía visionaria donde la tecnología y el acondicionamiento genético mantienen el orden sacrificando la libertad y las emociones genuinas.",
    pdfRuta: "./libros/Aldous-Huxley-Un Mundo-Feliz.pdf",
    cafes: [
      {
        nombre: "Espresso Corto de Alta Concentración",
        notas: "Dosis limpia de energía sin distracciones.",
        ingredientes: ["2 cucharadas de café fino", "Muy poca agua hirviendo"],
        pasoAPaso: [
          "Extrae un shot concentrado en jarrito o moka.",
          "Bébelo de un solo trago para un estímulo rápido."
        ]
      },
      {
        nombre: "Espresso Tónico con Helado/Hielo",
        notas: "Refrescante, moderno y efervescente.",
        ingredientes: ["Café concentrado", "Agua tónica fría", "Hielo"],
        pasoAPaso: [
          "Llena un vaso con hielo y agua tónica.",
          "Agrega el café por encima."
        ]
      },
      {
        nombre: "Nitro Iced Coffee Casero",
        notas: "Textura sedosa creada batiendo café frío.",
        ingredientes: ["Café filtrado frío", "Hielo"],
        pasoAPaso: [
          "Coloca el café frío y hielo en una coctelera o frasco con tapa.",
          "Agita enérgicamente durante 30 segundos hasta crear espuma densa."
        ]
      }
    ]
  },
  {
    id: "maquina-tiempo",
    titulo: "La máquina del tiempo",
    autor: "H.G. Wells",
    categoria: "escape-de-la-realidad",
    categoriaNombre: "🚀 Escape de la Realidad",
    resumenCorto: "Un científico viaja al lejano año 802.701 y descubre el destino de la humanidad.",
    sinopsis: "Un científico viaja a través del tiempo al año 802.701 y descubre a los pacíficos Eloi y a los subterráneos e inquietantes Morlocks.",
    pdfRuta: "./libros/La-Maquina-del-Tiempo-H-G-Wells.pdf",
    cafes: [
      {
        nombre: "Affogato (Helado con Espresso)",
        notas: "Choque térmico entre el pasado frío y el presente caliente.",
        ingredientes: ["1 bocha de helado de vainilla", "1 shot de café espresso caliente"],
        pasoAPaso: [
          "Coloca la bocha de helado en una copa.",
          "Vierte el shot de café hirviendo directo sobre el helado justo antes de probar."
        ]
      },
      {
        nombre: "Café con Jengibre y Miel",
        notas: "Sabor picante e intemporal.",
        ingredientes: ["Café negro caliente", "1/2 cucharadita de jengibre rallado", "1 cucharadita de miel"],
        pasoAPaso: [
          "Infusiona el jengibre rallado en el café caliente.",
          "Cuela y endulza con miel."
        ]
      },
      {
        nombre: "Cold Brew de Maceración Lenta",
        notas: "El sabor del tiempo paciente.",
        ingredientes: ["Café molienda gruesa", "Agua fría"],
        pasoAPaso: [
          "Macera el café en agua fría por 24 horas en heladera.",
          "Filtra y sirve bien frío."
        ]
      }
    ]
  },
  {
    id: "veinte-mil-leguas",
    titulo: "20.000 leguas de viaje submarino",
    autor: "Julio Verne",
    categoria: "escape-de-la-realidad",
    categoriaNombre: "🚀 Escape de la Realidad",
    resumenCorto: "El Capitán Nemo explora las profundidades del océano en el Nautilus.",
    sinopsis: "El enigmático Capitán Nemo capitanea el submarino Nautilus navegando por las profundidades secretas de los océanos del planeta.",
    pdfRuta: "./libros/veinte_mil_leguas.pdf",
    cafes: [
      {
        nombre: "Café Marino con Pizca de Sal",
        notas: "La pizca de sal neutraliza el amargor y potencia la dulzura del grano.",
        ingredientes: ["1 taza de café negro", "Una micro pizca de sal marina"],
        pasoAPaso: [
          "Añade una pequeñísima pizca de sal al café molido antes de filtrar.",
          "El resultado es un café redondo sin asperezas."
        ]
      },
      {
        nombre: "Cold Brew de Menta Fresca",
        notas: "Fresco como la brisa del océano.",
        ingredientes: ["Café frío", "Hojas de menta fresca", "Hielo"],
        pasoAPaso: [
          "Presiona las hojas de menta en el vaso.",
          "Agrega hielo y vierte el café frío."
        ]
      },
      {
        nombre: "Moka con Leche de Coco",
        notas: "Aventura exótica submarina.",
        ingredientes: ["Café", "Leche de coco", "Cacao"],
        pasoAPaso: [
          "Calienta la leche de coco con cacao.",
          "Mezcla con el café bien cargado."
        ]
      }
    ]
  },

  // 🌙 5. SOMBRAS Y MEDIANOCHE
  {
    id: "el-cuervo",
    titulo: "El cuervo y otros poemas",
    autor: "Edgar Allan Poe",
    categoria: "sombras-y-medianoche",
    categoriaNombre: "🌙 Sombras y Medianoche",
    resumenCorto: "Poesía oscura, melancolía, pérdida y la inmortal visita del cuervo.",
    sinopsis: "Inmortal poema sobre el luto, la memoria, la culpa y la siniestra visita del cuervo a la medianoche.",
    pdfRuta: "./libros/Cuervo-ed-allan-poe.pdf",
    cafes: [
      {
        nombre: "Moka Midnight Chocolate 80%",
        notas: "Oscuro, denso y misterioso.",
        ingredientes: ["Café negro cargado", "Chocolate amargo 80%", "Leche"],
        pasoAPaso: [
          "Derrite el chocolate amargo en el café caliente.",
          "Agrega un chorrito de leche tibia."
        ]
      },
      {
        nombre: "Café Negro 'Nevermore'",
        notas: "Pureza gótica sin endulzantes.",
        ingredientes: ["Doble shot de café de tueste oscuro"],
        pasoAPaso: [
          "Extrae un café doble cargado y bébelo solo para sentir la fuerza del grano."
        ]
      },
      {
        nombre: "Café con Anís Estrella",
        notas: "Aroma herbal de medianoche.",
        ingredientes: ["Café negro caliente", "1 anís estrella"],
        pasoAPaso: [
          "Coloca el anís estrella en la taza y vierte el café hirviendo.",
          "Deja reposar 3 minutos antes de retirar el anís."
        ]
      }
    ]
  },
  {
    id: "jekyll-hyde",
    titulo: "El extraño caso del Dr. Jekyll y Mr. Hyde",
    autor: "Robert Louis Stevenson",
    categoria: "sombras-y-medianoche",
    categoriaNombre: "🌙 Sombras y Medianoche",
    resumenCorto: "La doble naturaleza del hombre: la lucha eterna entre el bien y el mal.",
    sinopsis: "El respetable Dr. Jekyll formula una poción química que libera a su lado más oscuro, salvaje e incontrolable: Mr. Hyde.",
    pdfRuta: "./libros/Stevenson-Robert-El extraño-caso-del-DrJekyllyMrHyde.pdf",
    cafes: [
      {
        nombre: "Café Dual (Dos capas)",
        notas: "Visualmente dividido entre luz y sombra.",
        ingredientes: ["Café concentrado", "Espuma de leche densa"],
        pasoAPaso: [
          "Sirve la leche espumada en el vaso.",
          "Vierte el café despacio por el centro para que flote creando dos capas."
        ]
      },
      {
        nombre: "Cortado de Avellanas",
        notas: "Sabor transformador con gotas de esencia.",
        ingredientes: ["Café cortado", "Gotas de esencia de avellana"],
        pasoAPaso: [
          "Añade la esencia al café antes de cortar con leche."
        ]
      },
      {
        nombre: "Espresso con Cacao Amargo Espolvoreado",
        notas: "La superficie oscura oculta la calidez interna.",
        ingredientes: ["Espresso caliente", "Cacao en polvo amargo"],
        pasoAPaso: [
          "Cubre la parte superior del café con una capa tupida de cacao."
        ]
      }
    ]
  },

  // 📜 6. ECOS DEL PASADO
  {
    id: "iliada",
    titulo: "La Ilíada",
    autor: "Homero",
    categoria: "ecos-del-pasado",
    categoriaNombre: "📜 Ecos del Pasado",
    resumenCorto: "La épica cólera de Aquiles durante la legendaria Guerra de Troya.",
    sinopsis: "Poema épico griego sobre la ira del héroe Aquiles, el asedio a Troya y el destino de dioses y mortales.",
    pdfRuta: "./libros/Homero-La-Ilíada.pdf",
    cafes: [
      {
        nombre: "Café de Jarro estilo Griego",
        notas: "Método tradicional antiguo cargado de cuerpo.",
        ingredientes: ["Café molienda extra fina", "Agua", "Azúcar al gusto"],
        pasoAPaso: [
          "Hierve el agua con el café fino en un jarrito.",
          "Retira cuando suba la espuma y deja decantar el poso antes de servir."
        ]
      },
      {
        nombre: "Café con Miel y Canela",
        notas: "Ingredientes ancestrales de banquete.",
        ingredientes: ["Café caliente", "1 cucharada de miel", "Canela"],
        pasoAPaso: [
          "Disuelve la miel en el café caliente y espolvorea canela."
        ]
      },
      {
        nombre: "Frappé Casero Bacio",
        notas: "Espuma densa y helada.",
        ingredientes: ["Café soluble", "Agua fría", "Hielo"],
        pasoAPaso: [
          "Bate el café soluble con un hilo de agua hasta hacer una crema espesa y sirve con hielo."
        ]
      }
    ]
  },

  // ⚡ 7. CHISPAZO DE CONOCIMIENTO
  {
    id: "el-principe",
    titulo: "El Príncipe",
    autor: "Nicolás Maquiavelo",
    categoria: "chispazo-de-conocimiento",
    categoriaNombre: "⚡ Chispazo de Conocimiento",
    resumenCorto: "Tratado clásico sobre política, estrategia, poder y naturaleza del liderazgo.",
    sinopsis: "Análisis lúcido y pragmático sobre el poder, el mantenimiento del principado y la psicología del liderazgo táctico.",
    pdfRuta: "./libros/EL-PRINCIPE-NICOLAS-MAQUIAVELO.pdf",
    cafes: [
      {
        nombre: "Espresso Corto Estratégico",
        notas: "Para mentes enfocadas y calculadoras.",
        ingredientes: ["Café molido fuerte"],
        pasoAPaso: [
          "Extrae un shot rápido y sin endulzar para máxima alerta mental."
        ]
      },
      {
        nombre: "Americano Helado con Limón",
        notas: "Frío, cítrico y estimulante.",
        ingredientes: ["Café negro", "Hielo", "Rodaja de limón"],
        pasoAPaso: [
          "Mezcla el café frío con hielo y la rodaja de limón."
        ]
      },
      {
        nombre: "Café con Pizca de Chile/Ají",
        notas: "Audacia y temperamento.",
        ingredientes: ["Café caliente", "Pizca mínima de ají molido", "Cacao"],
        pasoAPaso: [
          "Disuelve el ají y el cacao en el café hirviendo."
        ]
      }
    ]
  },
  {
    id: "utopia",
    titulo: "Utopía",
    autor: "Tomás Moro",
    categoria: "chispazo-de-conocimiento",
    categoriaNombre: "⚡ Chispazo de Conocimiento",
    resumenCorto: "La descripción de una sociedad e instituciones perfectas en una isla remota.",
    sinopsis: "Obra humanista y filosófica que describe una comunidad isleña regida por la razón, la justicia social y el bien común.",
    pdfRuta: "./libros/Tomas-MORO-Utopía.pdf",
    cafes: [
      {
        nombre: "Café de Prensa Francesa Balanceado",
        notas: "Equilibrio perfecto de tiempos y sabor.",
        ingredientes: ["Café molienda media", "Agua a 90°C"],
        pasoAPaso: [
          "Infusiona 4 minutos exactos y filtra suavemente."
        ]
      },
      {
        nombre: "Chai Coffee de Especias",
        notas: "Armonía comunitaria de especias.",
        ingredientes: ["Café", "Leche", "Canela, cardamomo y clavo"],
        pasoAPaso: [
          "Cocina las especias en la leche antes de mezclar con el café."
        ]
      },
      {
        nombre: "Café Filtrado Puro",
        notas: "Simplicidad e idealismo.",
        ingredientes: ["Café molienda fina", "Agua purificada"],
        pasoAPaso: [
          "Filtrado artesanal lento."
        ]
      }
    ]
  },

  // 🔥 8. PASIÓN Y TENSIÓN
  {
    id: "cumbres-borrascosas",
    titulo: "Cumbres Borrascosas",
    autor: "Emily Brontë",
    categoria: "pasion-y-tension",
    categoriaNombre: "🔥 Pasión y Tensión",
    resumenCorto: "La tormentosa, destructiva y apasionada historia entre Heathcliff y Catherine.",
    sinopsis: "Novela clásica del romanticismo inglés sobre amores obsesivos, desamores destructivos y venganza en los páramos de Yorkshire.",
    pdfRuta: "./libros/Cumbres_borrascosas-Bronte_Emily.pdf",
    cafes: [
      {
        nombre: "Moka con Crema de Avellana",
        notas: "Intenso, dulce y apasionado.",
        ingredientes: ["Espresso caliente", "1 cucharada de crema de avellanas/nutella", "Leche"],
        pasoAPaso: [
          "Unta la crema de avellanas en el fondo de la taza.",
          "Vierte el café hirviendo y revuelve con leche tibia."
        ]
      },
      {
        nombre: "Espresso Amargo con Pimienta Negra",
        notas: "Conflicto y fuerza emocional.",
        ingredientes: ["Shot de café", "Pizca de pimienta negra molida"],
        pasoAPaso: [
          "Espolvorea pimienta sobre el espresso recién hecho."
        ]
      },
      {
        nombre: "Café de Chocolate Amargo con Escamas de Sal",
        notas: "Contraste dulce-salado apasionado.",
        ingredientes: ["Café", "Chocolate fundido", "Pizca de sal"],
        pasoAPaso: [
          "Mezcla el chocolate en el café y termina con una pizca de sal."
        ]
      }
    ]
  },
  {
    id: "dama-camelias",
    titulo: "La dama de las camelias",
    autor: "Alexandre Dumas (hijo)",
    categoria: "pasion-y-tension",
    categoriaNombre: "🔥 Pasión y Tensión",
    resumenCorto: "El trágico y apasionado amor entre el joven Armand y la cortesana Margarita.",
    sinopsis: "Historia de amor conmovedora y trágica en el París del siglo XIX entre el joven Armand Duval y la cortesana Margarita Gautier.",
    pdfRuta: "./libros/DumasAlejandro-La-dama-de-las camelias.pdf",
    cafes: [
      {
        nombre: "Latte Aromatizado con Azahar / Vainilla",
        notas: "Romántico, trágico y elegante.",
        ingredientes: ["Café suave", "Leche tibia", "Gotas de esencia de vainilla o agua de azahar"],
        pasoAPaso: [
          "Perfuma la leche tibia con la esencia antes de juntar con el café."
        ]
      },
      {
        nombre: "Capuchino París con Espuma de Cacao",
        notas: "Elegancia parisina.",
        ingredientes: ["Espresso", "Espuma de leche", "Cacao espolvoreado"],
        pasoAPaso: [
          "Sirve en taza fina con abundante espuma de leche y cacao."
        ]
      },
      {
        nombre: "Café au Lait Francés",
        notas: "Partes iguales de tradición y amor.",
        ingredientes: ["1/2 taza de café fuerte", "1/2 taza de leche hirviendo"],
        pasoAPaso: [
          "Vierte simultáneamente el café y la leche caliente en un tazón amplio."
        ]
      }
    ]
  }
];

// ==========================================
// 3. UTILIDADES Y FUNCIONES AUXILIARES
// ==========================================
function normalizarTexto(str) {
  if (!str) return "";
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function sanitizarHTML(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ==========================================
// 4. LÓGICA DE LA SECCIÓN CATÁLOGO (catalogo.html)
// ==========================================
function inicializarSeccionCatalogo() {
  const contenedor = document.getElementById("contenedor-catalogo");
  if (!contenedor) return;

  const inputBusqueda = document.getElementById("input-busqueda");
  const btnLimpiar = document.getElementById("btn-limpiar-busqueda");
  const botonesFiltro = document.querySelectorAll(".filtro-btn");
  const cantidadLibros = document.getElementById("cantidad-libros");

  let categoriaActual = "todas";
  let terminoBusqueda = "";

  function renderizarCatalogo(libros) {
    if (cantidadLibros) cantidadLibros.textContent = libros.length;

    if (btnLimpiar) {
      btnLimpiar.style.display = terminoBusqueda.length > 0 ? "flex" : "none";
    }

    if (libros.length === 0) {
      contenedor.innerHTML = `
        <div class="mensaje-vacio">
          <div class="vacio-icono">☕📚</div>
          <h3>No se encontraron lecturas</h3>
          <p>No encontramos libros que coincidan con "<em>${sanitizarHTML(terminoBusqueda)}</em>" en la categoría seleccionada.</p>
          <button id="btn-reset-catalogo" type="button" class="btn-reset">
            Ver todas las obras
          </button>
        </div>
      `;
      const btnReset = document.getElementById("btn-reset-catalogo");
      if (btnReset) {
        btnReset.addEventListener("click", () => {
          categoriaActual = "todas";
          terminoBusqueda = "";
          if (inputBusqueda) inputBusqueda.value = "";
          botonesFiltro.forEach(b => b.classList.toggle("activo", b.dataset.categoria === "todas"));
          aplicarFiltros();
        });
      }
      return;
    }

    // Renderizado de tarjetas compactas y estilizadas (sin details, con modal emergente)
    contenedor.innerHTML = libros.map(libro => {
      const rutaSegura = encodeURI(libro.pdfRuta);

      return `
        <article class="catalogo-card" data-categoria="${sanitizarHTML(libro.categoria)}" data-libro-id="${sanitizarHTML(libro.id)}">
          <!-- Portada e información principal -->
          <div class="card-portada-visual">
            <div class="portada-emblema">
              <span class="emblema-icono">📖</span>
              <span class="emblema-cafe">☕</span>
            </div>
            <span class="card-categoria-tag" title="${sanitizarHTML(libro.categoriaNombre)}">${sanitizarHTML(libro.categoriaNombre)}</span>
          </div>

          <div class="card-info">
            <h3 class="card-titulo" title="${sanitizarHTML(libro.titulo)}">${sanitizarHTML(libro.titulo)}</h3>
            <p class="card-autor">Por <strong>${sanitizarHTML(libro.autor)}</strong></p>
            <p class="card-resumen">${sanitizarHTML(libro.resumenCorto)}</p>
          </div>

          <!-- Botones de Acción de Lectura y Descarga -->
          <div class="card-botones-lectura">
            <a href="${rutaSegura}" target="_blank" rel="noopener noreferrer" class="btn-card-accion btn-leer-online">
              📖 Leer
            </a>
            <a href="${rutaSegura}" download class="btn-card-accion btn-descargar-pdf">
              ⬇️ Descargar
            </a>
          </div>

          <!-- Botón de apertura de Modal de Maridaje (Reemplaza a details) -->
          <button type="button" class="btn-card-maridaje" data-libro-id="${sanitizarHTML(libro.id)}" aria-haspopup="dialog">
            <span class="btn-maridaje-icono">☕</span>
            <span class="btn-maridaje-txt">Ver Maridaje (3 Recetas)</span>
          </button>
        </article>
      `;
    }).join("");
  }

  // ==========================================
  // LÓGICA DE LA VENTANA EMERGENTE DE MARIDAJE (MODAL)
  // ==========================================
  function abrirModalMaridaje(libroId) {
    const libro = librosBD.find(l => l.id === libroId);
    if (!libro) return;

    let modal = document.getElementById("modal-maridaje");
    let contenido = document.getElementById("modal-contenido-dinamico");

    // Creación defensiva si el contenedor no existe en el DOM
    if (!modal) {
      modal = document.createElement("div");
      modal.id = "modal-maridaje";
      modal.className = "modal-maridaje-wrapper";
      modal.setAttribute("aria-hidden", "true");
      modal.setAttribute("role", "dialog");
      modal.setAttribute("aria-modal", "true");
      modal.setAttribute("aria-labelledby", "modal-libro-titulo");
      modal.innerHTML = `
        <div class="modal-backdrop" id="modal-backdrop" tabindex="-1"></div>
        <div class="modal-container">
          <button type="button" id="btn-cerrar-modal" class="modal-btn-cerrar" aria-label="Cerrar ventana de maridaje">&times;</button>
          <div id="modal-contenido-dinamico" class="modal-grid-split"></div>
        </div>
      `;
      document.body.appendChild(modal);
      contenido = document.getElementById("modal-contenido-dinamico");
      vincularEventosModal();
    }

    const rutaSegura = encodeURI(libro.pdfRuta);

    // Renderizado de las 3 recetas minimalistas para la columna derecha
    const recetasMinimalistasHTML = libro.cafes.map((cafe, i) => `
      <div class="receta-minimal-card">
        <div class="receta-minimal-top">
          <span class="receta-minimal-tag">Opción #${i + 1} &bull; Maridaje</span>
          <h4 class="receta-minimal-nombre">${sanitizarHTML(cafe.nombre)}</h4>
          <p class="receta-minimal-notas"><strong>✨ Notas sensoriales:</strong> ${sanitizarHTML(cafe.notas)}</p>
        </div>
        <div class="receta-minimal-body">
          <div>
            <span class="receta-minimal-label">🛒 Ingredientes caseros:</span>
            <ul class="receta-pills-list">
              ${cafe.ingredientes.map(ing => `<li class="receta-pill">${sanitizarHTML(ing)}</li>`).join("")}
            </ul>
          </div>
          <div>
            <span class="receta-minimal-label">👨‍🍳 Preparación en casa:</span>
            <ol class="receta-pasos-list">
              ${cafe.pasoAPaso.map(paso => `<li>${sanitizarHTML(paso)}</li>`).join("")}
            </ol>
          </div>
        </div>
      </div>
    `).join("");

    contenido.innerHTML = `
      <!-- Columna Izquierda: Portada e Información del Libro -->
      <div class="modal-col-libro">
        <div class="modal-libro-badge-row">
          <div class="modal-portada-box">
            <span>📖</span>
          </div>
          <span class="modal-cat-tag">${sanitizarHTML(libro.categoriaNombre)}</span>
        </div>

        <h2 class="modal-libro-titulo" id="modal-libro-titulo">${sanitizarHTML(libro.titulo)}</h2>
        <p class="modal-libro-autor">Por <strong>${sanitizarHTML(libro.autor)}</strong></p>
        
        <div class="modal-libro-divider"></div>
        
        <p class="modal-libro-sinopsis">
          ${sanitizarHTML(libro.sinopsis || libro.resumenCorto)}
        </p>

        <div class="modal-libro-acciones">
          <span class="modal-acciones-label">Lectura de la obra:</span>
          <div class="modal-acciones-grid">
            <a href="${rutaSegura}" target="_blank" rel="noopener noreferrer" class="btn-card-accion btn-leer-online">
              📖 Leer Online
            </a>
            <a href="${rutaSegura}" download class="btn-card-accion btn-descargar-pdf">
              ⬇️ Descargar PDF
            </a>
          </div>
        </div>

        <div class="modal-libro-nota">
          ☕ <em>Cada taza fue seleccionada para complementar la atmósfera emocional, filosófica y estilística de esta obra universal.</em>
        </div>
      </div>

      <!-- Columna Derecha: Tarjetas Minimalistas de las 3 Recetas -->
      <div class="modal-col-recetas">
        <div class="modal-recetas-cabecera">
          <span class="modal-recetas-badge">☕ Carta de Maridajes Caseros</span>
          <h3 class="modal-recetas-titulo">3 Recetas Artesanales</h3>
          <p class="modal-recetas-sub">Preparaciones sencillas para disfrutar en casa con jarrito, prensa o filtro.</p>
        </div>

        <div class="modal-recetas-lista">
          ${recetasMinimalistasHTML}
        </div>
      </div>
    `;

    modal.classList.add("activo");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-abierto");

    const btnCerrar = document.getElementById("btn-cerrar-modal");
    if (btnCerrar) {
      btnCerrar.focus();
    }
  }

  function cerrarModalMaridaje() {
    const modal = document.getElementById("modal-maridaje");
    if (!modal) return;
    modal.classList.remove("activo");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-abierto");
  }

  function vincularEventosModal() {
    const btnCerrar = document.getElementById("btn-cerrar-modal");
    if (btnCerrar) {
      btnCerrar.onclick = cerrarModalMaridaje;
    }
    const backdrop = document.getElementById("modal-backdrop");
    if (backdrop) {
      backdrop.onclick = cerrarModalMaridaje;
    }
  }

  // Delegación de eventos para el botón 'Ver Maridaje' en las tarjetas
  contenedor.addEventListener("click", (e) => {
    const btn = e.target.closest(".btn-card-maridaje");
    if (btn) {
      const libroId = btn.dataset.libroId;
      if (libroId) {
        abrirModalMaridaje(libroId);
      }
    }
  });

  // Cerrar modal al presionar tecla Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      cerrarModalMaridaje();
    }
  });

  vincularEventosModal();

  function aplicarFiltros() {
    const q = normalizarTexto(terminoBusqueda);
    const filtrados = librosBD.filter(libro => {
      const coincideCat = (categoriaActual === "todas" || libro.categoria === categoriaActual);
      if (!q) return coincideCat;

      const tit = normalizarTexto(libro.titulo);
      const aut = normalizarTexto(libro.autor);
      const res = normalizarTexto(libro.resumenCorto);
      const sin = normalizarTexto(libro.sinopsis || "");
      const cat = normalizarTexto(libro.categoriaNombre || "");

      return coincideCat && (tit.includes(q) || aut.includes(q) || res.includes(q) || sin.includes(q) || cat.includes(q));
    });

    renderizarCatalogo(filtrados);
  }

  // Eventos de botones de categoría
  botonesFiltro.forEach(btn => {
    btn.addEventListener("click", () => {
      const cat = btn.dataset.categoria;
      if (categoriaActual === cat) return;
      categoriaActual = cat;
      botonesFiltro.forEach(b => b.classList.remove("activo"));
      btn.classList.add("activo");
      aplicarFiltros();
    });
  });

  // Evento de búsqueda en tiempo real
  if (inputBusqueda) {
    inputBusqueda.addEventListener("input", (e) => {
      terminoBusqueda = e.target.value;
      aplicarFiltros();
    });
  }

  // Limpiar búsqueda
  if (btnLimpiar) {
    btnLimpiar.addEventListener("click", () => {
      if (inputBusqueda) {
        inputBusqueda.value = "";
        inputBusqueda.focus();
      }
      terminoBusqueda = "";
      aplicarFiltros();
    });
  }

  // Ejecución inicial
  aplicarFiltros();
}

// Inicialización tras cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
  inicializarSeccionCatalogo();
});

// Llamada inmediata de seguridad
if (document.readyState === "complete" || document.readyState === "interactive") {
  inicializarSeccionCatalogo();
}
