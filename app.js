// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}
// declaramos una funcion con el mismo nombre "formDollarToYen"
const formDollarToYen = function(valueInDollar){
    // convertimos el valor a dolares
    let valueInYen = valueInDollar * 106.58333;
    // retornamos el valor
    return parseFloat(valueInYen.toFixed(2));
}
// declaramos una funcion con el mismo nombre "formYenToPound"
const formYenToPound = function(valueInYen){
    // convertimos el valor a dolares
    let valueInPound = valueInYen / 159.875;
    // retornamos el valor
    return valueInPound;
}

// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, formDollarToYen, formYenToPound };