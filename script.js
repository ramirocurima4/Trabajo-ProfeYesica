// Array de 5 objetos con frases literarias y sus respectivos autores
const frasesLiterarias = [
  {
    texto: "“Siempre imaginé que el Paraíso sería algún tipo de biblioteca.”",
    autor: "Jorge Luis Borges"
  },
  {
    texto: "“Andábamos sin buscarnos, pero sabiendo que andábamos para encontrarnos.”",
    autor: "Julio Cortázar"
  },
  {
    texto: "“Uno no es lo que es por lo que escribe, sino por lo que ha leído.”",
    autor: "Jorge Luis Borges"
  },
  {
    texto: "“La memoria del corazón elimina los malos recuerdos y magnifica los buenos.”",
    autor: "Gabriel García Márquez"
  },
  {
    texto: "“Escribir es una manera de hablar sin ser interrumpido.”",
    autor: "Jules Renard"
  }
];

// Enlace de los elementos del DOM mediante document.getElementById()
const tarjeta = document.getElementById("tarjeta");
const textoFrase = document.getElementById("texto-frase");
const autorFrase = document.getElementById("autor-frase");
const btnNuevaFrase = document.getElementById("btn-nueva-frase");
const btnCambiarTema = document.getElementById("btn-cambiar-tema");

// Evento click para inyectar una cita literaria aleatoria usando Math.random()
btnNuevaFrase.addEventListener("click", () => {
  const indiceAleatorio = Math.floor(Math.random() * frasesLiterarias.length);
  const citaSeleccionada = frasesLiterarias[indiceAleatorio];

  textoFrase.textContent = citaSeleccionada.texto;
  autorFrase.textContent = `— ${citaSeleccionada.autor}`;
});

// Evento click para alternar la clase .modo-oscuro en el body usando classList.toggle()
btnCambiarTema.addEventListener("click", () => {
  document.body.classList.toggle("modo-oscuro");
});
