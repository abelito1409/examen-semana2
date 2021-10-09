//--------------------------------------Ejercicios-----------------------------------

//1- Escribe una función que reciba un parámetro y lo imprima en consola.

function oneParam(num1) {
    console.log("Parámetro ingresado: " + num1);
}
oneParam("Dato");

//------------------------------------------------------------
//2- Escribe una función que reciba dos parámetros, los sume e imprima en consola el resultado de la operación.

function sumTwoParam(num1,num2) {
    let result = 0;
    if (typeof num1 === 'number' && typeof num2 === 'number') {        
        result = num1 + num2;
        console.log("El resultado de la suma es: " + result);        
    } else {
        console.log("Favor ingresar sólo números");
    }
}
sumTwoParam(1,5)

//------------------------------------------------------------
//3- Escribe una función que reciba dos parámetros, los reste e imprima en consola el resultado de la operación..

function subtractTwoParam(num1,num2) {
    let result = 0;
    if (typeof num1 != 'number' && typeof num2 != 'number') {  
        console.log("Favor ingresar sólo números");              
    } else {
        result = num1 - num2;
        console.log("El resultado de la resta es: " + result);
    }
}
subtractTwoParam(6,2);

//------------------------------------------------------------
//4- Escribe una función que reciba dos parámetros, los multiplique e imprima en consola el resultado de la operación.

function multiplyTwoParam(num1,num2) {
    let result = 0;
    if (typeof num1 === 'number' && typeof num2 === 'number') {        
        result = num1 * num2;
        console.log("El resultado de la multiplicación es: " + result);        
    } else {
        console.log("Favor ingresar sólo números");
    }
}
multiplyTwoParam(8,856);

//------------------------------------------------------------
//5 -Escribe una función que reciba dos parámetros, los divida e imprima en consola el resultado de la operación. 

function divideTwoParam(num1,num2) {
    let result = 0;
    if (typeof num1 != 'number' && typeof num2 != 'number') {  
        console.log("Favor ingresar sólo números");             
    } else if(num2 == 0){
        console.log("No es posible dividor por 0 (cero), ingrese números diferentes");
    } else {
        result = num1 / num2;
        console.log("El resultado de la división es: " + result);
    }
}
divideTwoParam(855645,56);

//------------------------------------------------------------
//6- Escribe una función que reciba el radio de un círculo como parámetro, calcule el área del círculo e imprima en consola.

function radioCircle(radio) {
    const pi = 3.1416;
    let area;
    if (typeof radio == 'number') {        
        area = pi * radio * radio;
        console.log("El área del círculo es: " + area);        
    } else {
        console.log("Favor ingresar sólo valores númericos");
    }
}
radioCircle(45);

//------------------------------------------------------------
//7- Escribe una función que reciba como parámetro un valor en metros e imprima en consola su equivalente en kilómetros, con máximo dos decimales.

function metersKilometres(meters) {
    let kilometres = 0;
    if (typeof meters == 'number') {        
        kilometres = meters / 1000;
        console.log(meters + " mts ingresados. Su valor en kilometros es de " + kilometres.toFixed(2) + " kms.");
    } else {
        console.log("Favor ingresar sólo valores númericos");
    }
}
metersKilometres(750);

//------------------------------------------------------------
//8- Escribe una función que reciba como parámetro un valor en grados Celsius e imprima en consola su equivalente en grados Farenheit, con máximo dos decimales.

function celsiusToFarenheit(celsius) {
    let farenheit = 0;
    if (typeof celsius == 'number') {        
        farenheit = ((celsius*9)/5)+32;
        console.log(celsius + " °C ingresados. Su valor en °F Farenheit es de " + farenheit.toFixed(2) + "F");
    } else {
        console.log("Favor ingresar sólo valores númericos");
    }
}
celsiusToFarenheit(56);

//------------------------------------------------------------
//9- Escribe una función que reciba las siguientes listas de números como parámetro y encuentre el valor más alto y más bajo en la lista. Lista1 = [10,4,2,20,5] Lista2=[0,0,0,1,0] Lista3=[-13,10,9,8,0,2000,-1]

function highAndLow(lists) {
    let high = 0;
    let low = 0; 
    for (let i = 0; i < lists.length; i++) {
        if(lists[i] >= high){
            high = lists[i];
        }else if(lists[i] <= low){
            low = lists[i];
        }
    }
    console.log("El número más alto es: " + high);
    console.log("El número más bajo es: " + low);
}
highAndLow([10,4,2,20,5]);
highAndLow([0,0,0,1,0]);
highAndLow([-13,10,9,8,0,2000,-1]);

//------------------------------------------------------------
//10- Escribe una función que reciba dos parámetros con los que se calculará el valor exponencial de una base. El primer parámetro será la base y el segundo será el exponente. Imprimir el resultado del valor exponencial de la base en consola.

function exponentialToBase(bas,exp) {
    let exponential = 0;
    if (typeof bas == 'number' && typeof exp == 'number') {        
        exponential = bas ** exp;
        console.log("El exponencial de "+bas+" es: " + exponential);
    } else {
        console.log("Favor ingresar sólo valores númericos");
    } 
}
exponentialToBase(8,4);

//------------------------------------------------------------
//11- Escribe una función que reciba un número como parámetro. Este número será la cantidad de veces que se debe solicitar, con la función prompt, que el usuario ingrese el nombre de un país diferente. Después de que el usuario ingrese el nombre de los países, el sistema debe mostrar un mensaje en pantalla indicando el nombre del país y cuántas letras tiene el nombre del país.

function countries(amount) {
    let listCountries = [];
    let countryName = "";
    if (typeof amount == 'number') {        
        for (let i = 0; i < amount-1; i++) {
            countryName = prompt("Ingrese el país "+(i+1)+": ");
            if(typeof(countryName) == 'string'){
                listCountries.push(countryName);
            }else {
                console.log("Sólo se acepta texto");
            }
            console.log(listCountries);
        }
        
    } else {
        console.log("Favor ingresar sólo valores númericos");
    }
}

//countries(2);-> Pendiente por terminar

//------------------------------------------------------------
//Debes validar en todas las funciones, que los parámetros de entrada sean válidos para el objetivo de cada función, y en //caso de que al menos un parámetro no lo sea, imprimir en consola que no es posible realizar la operación.

