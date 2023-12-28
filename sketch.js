let gif;
let frames = 12; // se utiliza para establecer la velocidad de fotogramas (frame rate) en la función frameRate() más adelante.

function preload() {
gif = loadImage("assets/pr.gif"); //Aquí, se carga la imagen GIF y se asigna a la variable gif.
}

//paleta uno
const colors = ["#FFBB35", "#000000", "#FF4654", "#FFFCE3", "#FF7D47", "#3EC7E6", "#AFBE87"]; //Se define una paleta de colores como un array de códigos hexadecimales. Esta paleta se utiliza más adelante para colorear los rectángulos en la animación.
//paleta dos
//const colors = ["#000000", "#FF7D47", "#3EC7E6", "#3aed3f"]; 



function setup() {
  createCanvas(1080, 1080);
  frameRate(frames); // establece la velocidad de fotogramas en x frames por segundo.
  saveGif('mySketch', 30); //indica que se debe guardar la animación como un archivo GIF llamado "mySketch.gif" con una duración de x segundos.
}

function draw() {
  gif.setFrame(frameCount); //establece el fotograma actual del GIF según el número de fotogramas transcurridos.
  noStroke(); //Hace que todos los rectángulos creados no tengán contornos visibles, y solo mostrarán el color de relleno especificado por la paleta de colores.
  var tileW = (width / gif.width); //establece las dimensiones de ancho de cada rectangulo
  var tileH = (height / gif.height); //establece las dimensiones de alto de cada rectangulo
  for (var x = 0; x < gif.width; x++) {
    for (var y = 0; y < gif.height; y++) {
      var c = gif.get(x, y); //obtiene el color del píxel.
      var b = brightness(c); //Se calcula la luminosidad del color.
      var b2 = map(b, 0, 250, 0, 500); //Se ajusta la luminosidad (b2) y se mapea al rango de colores disponibles.
      var index = Math.floor(map(b2, 0, 255, 0, colors.length)); //Estas líneas están asignando un color de la paleta de colores a cada píxel en función de su luminosidad, permitiendo así que la imagen se represente con una paleta específica según la intensidad de brillo de cada píxel.
      var theColor = colors[index];
      fill(theColor);
      rect(x * tileW, y * tileH, tileW, tileH);
    }
  }
}