/**Analisis
 * Solicite por teclado 4 números enteros.
 * En la salida muestre el número que resulta de la concatenación de los
mismos y la suma de estos.
 */

import Cl_Sumar from "./Cl_Sumar.js";
import Cl_ISumar from "./Cl_ISumar.js";

let ISuma = new Cl_ISumar(),
    nume1 = ISuma.leernum1(),
    nume2 = ISuma.leernum2(),
    nume3 = ISuma.leernum3(),
    nume4 = ISuma.leernum4();

let reporteSumar = ISuma.reporteSumar();

let Suma = new Cl_Sumar(nume1, nume2, nume3, nume4),

    salida = document.getElementById("salida");

    salida.innerHTML = (ISuma.reporteSumar(),Suma.sumar());