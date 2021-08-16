/*
	ROSAS POLARES

	Este es un algoritmo de prueba para practicar el uso de canvas y la conversión 
	de coordenadas cartecianas a polares. 
	
	Se crea la variable cuadro que se relaciona con el canvas que esta nombrado
    con el id="dibujito. Esto permite manipular el elemento canvas de html desde 
    este archivo javascript. "

	Hecho por IG: @leoperez.x
*/

// constantes para manipular los valores que ingresa el usuario por los slides
const rangoB = document.querySelector("#rangeB"); // Amplitud de la rosa
const textoB = document.querySelector("#textoB");

const rangoK = document.querySelector("#rangeK"); // forma de la rosa
const textoK = document.querySelector("#textoK");


// listo lienzo para javascript
const cuadro = document.querySelector("#dibujito"); 

// se obtiene el ancho y el alto en pixeles del canvas.
const ancho = cuadro.width;
const alto = cuadro.height;

/* es la configuracion de lo que se quiere plasmar en canvas, que en este
   caso es un dibujo en 2D. (Es la sección de lo que se va manipular). */
const lienzo = cuadro.getContext("2d");

// Traslada el punto de origen al centro del lienzo
lienzo.translate(ancho / 2, alto / 2);
// Algo de teoria
/* formula general r = b * cos (k * theta)
   donde 
			x = r * cos (theta)
			y = r * sin (theta)
			
			0 < theta < 2pi*Omega 
			
			(Omega depende de k para generar la imagen completa)
*/


/**
 * funcion dibujar lineas rectas con las cordenadas iniciales x1, y1 y las finales x2, y2.
 */
function dibujarLinea(color, x1, y1)
{
	// define el color a usar en el canvas
	lienzo.fillStyle=color;
	// realiza cuadrados de 2x2 pixeles
	lienzo.fillRect(x1,y1,2,2)

}


/**
 * Realiza el dibujo realizando un trazo entre puntos generados
 */
function makeDraw (b,k) {
	
	lienzo.clearRect(-400,-400,800,800) // limpia el lienzo
	
	var j = 0; // variable muda para el ciclo while
	
	/*
	* Por alguna razón que no comprendo aún, debo crear dos momentos 
	* para el ciclo. Uno cuando 'k' es menor a 1 y otro cuando es mayor a 1.
	* Además, a punta de prueba y error, encontre que multiplicando por 20
	* el limite de la iteración del "while", la mayoria de rosas polares 
	* se cierran. 	
	*/

	const ciclo = (20*Math.PI); // limite de una revolucion (cierre de la rosa)
	let period = 0;

	if (k>1){
		period = ciclo*k;
	}else{
		period = ciclo*(1/k);
	}
	
		while (j < period) 
		{
				r = (b) * Math.cos (k * j);
	
				x1 = r * Math.cos(j);
				y1 = r * Math.sin(j);
				
				j += 0.01;
	
				dibujarLinea ("#00A", x1, y1);
				
		}

}

/**
 * Actualiza los textos arriba de los sliders
 */
 function updateText() {
	textoB.innerText = rangeB.value;
	textoK.innerText = rangeK.value;
}

/**
 * Actualiza todos los elementos del DOM
 */
function update() {
	updateText()
	makeDraw(rangeB.value, rangeK.value)
}

rangeB.oninput = () => update()
rangeK.oninput = () => update()

/**
 * Al terminar de cargar todos los elementos de la pagina se puede
 * generar un evento que dispara una función, en este caso update().
 * Esto se hace con el fin de que la pagina muestre un dibujo al 
 * iniciar.
 */
document.addEventListener('DOMContentLoaded', (e) => {
  update()});
