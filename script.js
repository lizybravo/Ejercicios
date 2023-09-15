/*Calcular el área de un triángulo*/

function calcularArea() {
  var base = parseFloat(document.getElementById("base").value);
  var altura = parseFloat(document.getElementById("altura").value);

  var area = (base * altura) / 2;

  document.getElementById("area").textContent = area;
}

/*Celsius a Fahrenheit*/
function hacerConversion() {
  var celsius = parseFloat(document.getElementById("celsius").value);

  var conversion = celsius * 1.8 + 32;

  document.getElementById("c").textContent = celsius;
  document.getElementById("conversion").textContent = conversion;
}

/*Encontrar el maximo de dos numeros
 */

function calcularMaximo() {
  var primero = parseFloat(document.getElementById("primero").value);
  var segundo = parseFloat(document.getElementById("segundo").value);

  if(primero === segundo) {
    alert("Los numeros ingresados son iguales");
    return;
  }
  if(primero > segundo) {
    var maximo = primero;
  }
  if(primero < segundo) {
    var maximo = segundo;
  }

  document.getElementById("p").textContent = primero;
  document.getElementById("s").textContent = segundo;
  document.getElementById("maximo").textContent = maximo;
}
  /*comento todo este codigo porque entendi primero que tenia que encontrar el maximo, pero comun divisor de dos numeros dados y po'es me estaba quemando el coco, hasta que luego lei bien y solo decia el maximo, asi que entonces asumi que solo se tenia que encontrar cual era el maximo pero de los dos numeros, es decir, cual es mayor...
  
  var primero = parseFloat(document.getElementById("primero").value);
  var segundo = parseFloat(document.getElementById("segundo").value);

  var factoresPrimero = [];
  var factoresSegundo = [];

  function encontrarFactores(primero, factoresPrimero) {
    while (primero > 1) {
      if (primero % 2 === 0) {
        factoresPrimero.push(2);
        primero = primero / 2;
      } else {
        let i;
        for (i = 3; i <= primero; i++) {
          function esPrimo(i) {
            if (i <= 1) {
              return false;
            }
            for (let j = 2; j <= i; j++) {
              if (i % j === 0) {
                return false;
              }
            }
            return true;
          }
        }
        if (esPrimo(i) && primero % i === 0) {
          factoresPrimero.push(i);
          primero = primero / i;
          break;
        }
      }
    }
  }

  function encontrarFactores(segundo, factoresSegundo) {
    while (segundo > 1) {
      if (segundo % 2 === 0) {
        factoresSegundo.push(2);
        segundo = segundo / 2;
      } else {
      }
    }
  }

  console.log("Factores del primer numero", factoresPrimero);
  console.log("Factores del segundo numero", factoresSegundo);

  encontrarFactores(primero, factoresPrimero);
  encontrarFactores(segundo, factoresSegundo);

  document.getElementById("p").textContent = primero;
  document.getElementById("s").textContent = segundo;
  document.getElementById("maximo").textContent = primero;
}/***/


/*Calcular el factorial de un numero*/

function encontrarFactorial() {
  var numeroIngresado = parseFloat(
    document.getElementById("numeroFactorial").value
  );
  var factorial = 1;
  if (numeroIngresado === 0) {
    factorial = 1;
  } else {
    for (var i = 1; i <= numeroIngresado; i++) {
      factorial = factorial * i;
    }
  }
  document.getElementById("numeroIngresado").textContent = numeroIngresado;
  document.getElementById("factorial").textContent = factorial;
}

/* Verificar sí un numero es primo*/

function verificarDivisores() {
  var numeroVerificar = parseFloat(
    document.getElementById("numeroVerificar").value
  );
  var verificacionPrimo;

  document.getElementById("numeroVerificado").textContent = numeroVerificar;
  if (numeroVerificar <= 1) {
    verificacionPrimo = "No es un numero primo";
    document.getElementById("verificacionPrimo").textContent =
      verificacionPrimo;
  }
  for (let i = 2; i <= Math.sqrt(numeroVerificar); i++) {
    if (numeroVerificar % i === 0) {
      verificacionPrimo = "No es un numero primo";
      document.getElementById("verificacionPrimo").textContent =
        verificacionPrimo;
    } else {
      verificacionPrimo = "es un numero primo";
      document.getElementById("verificacionPrimo").textContent =
        verificacionPrimo;
    }
  }
}
/*Revertir una cadena de texto*/

function invertirTexto() {
  var textoDeEntrada = document.getElementById("textoDeEntrada").value;
  var cadenaDeTexto = textoDeEntrada.split("");
  var caracteres = cadenaDeTexto.length;
  var ordenInverso = [];

  for (let i = caracteres - 1; i >= 0; i--) {
    ordenInverso.push(cadenaDeTexto[i]);
  }

  var textoInvertido = ordenInverso.join("");

  document.getElementById("textoInicial").textContent = textoDeEntrada;
  document.getElementById("textoInvertido").textContent = textoInvertido;

  console.log(cadenaDeTexto);
  console.log(textoInvertido);
}

/*Calcular la suma de los primeros n numeros naturales*/
function sumarNaturales() {
  var rangoSuma = parseFloat(document.getElementById("rangoSuma").value);
  var sumaConsecutiva = (rangoSuma * (rangoSuma + 1)) / 2;

  document.getElementById("sumaConsecutiva").textContent = sumaConsecutiva;
  document.getElementById("limiteSuma").textContent = rangoSuma;
}

/*Encontrar el elemento mas grande de un arreglo*/
function EncontrarMasGrande() {
  var inputArreglo = document.getElementById("inputArreglo").value;

    if(inputArreglo === "") {
    alert("No se han ingresado numeros para comparar");
    }

  var arregloNumeros = inputArreglo.split(",");
  var numeroMasGrande = parseFloat(arregloNumeros[0]);
  
  for (let i = 0; i < arregloNumeros.length; i++){
    var numeroActual = parseFloat(arregloNumeros[i]);

    if (numeroActual > numeroMasGrande) {
      numeroMasGrande = numeroActual;
    }
  }

  console.log(arregloNumeros);
  console.log(numeroMasGrande);

  document.getElementById("numeroMasGrande").textContent = numeroMasGrande;
  document.getElementById("arregloNumeros").textContent = arregloNumeros;
}

/*Verificar que una palabra sea un palindromo*/
function quitarAcentos(texto) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function seraPalindromo() {
  var inputPalindromo = document.getElementById("inputPalindromo").value;
    if(inputPalindromo === "") {
    alert("No se han ingresado numeros para comparar");
    return;
      }
  var textoSinAcentos = quitarAcentos(inputPalindromo); 
  var textoLimpio = textoSinAcentos.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  var arregloPalindromo = textoLimpio.split("");
  console.log(arregloPalindromo);

  var esPalindromo;

  for (let i = 0; i < textoLimpio.length / 2; i++){
      if (textoLimpio[i] !== textoLimpio[textoLimpio.length - 1 - i]) {
        esPalindromo = ("NO es palíndromo");
        break;
        
      }
      else {
        esPalindromo = ("SI es palíndromo");
        break;
      }
  } 
  
       
  document.getElementById("esPalindromo").textContent = esPalindromo;
}

/*Generar un numero aleatorio en un rango dado*/

function conseguirAleatorio() {

  var inputIntervaloInf = document.getElementById("inputIntervaloInf").value;
  var inputIntervaloSup = document.getElementById("inputIntervaloSup").value;
    if (inputIntervaloInf === "" || inputIntervaloSup === "") {
      alert("No se ha ingresado el rango deseado");
      return;
        }
  if(inputIntervaloInf < inputIntervaloSup) {
    var numeroAleatorio = Math.floor(Math.random() * (inputIntervaloSup - inputIntervaloInf + 1));
  }
  console.log("Número aleatorio: " + numeroAleatorio);        
  document.getElementById("resultadoAleatorio").textContent = numeroAleatorio;
}