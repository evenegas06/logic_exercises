/*
    Escribir un programa que muestre en consola los números del 1 al 100:
        * si el número es múltiplo de 3 escribir la palabra “Fizz”.
        * si el número es múltiplo de 5 escribir la palabra “Buzz”.
        * si el número es múltiplo de 3 y 5 escribir la palabra “FizzBuzz”.
*/

fizzBuzz();

/**
 * Check if the number is multiple of 3, 5 or both. 
 * 
 * @return {void}
 */
function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if ((i % 3) === 0 && (i % 5) === 0) {
            console.log(`${i} - FizzBuzz`);

        } else if ((i % 3) === 0) {
            console.log(`${i} - Fizz`);

        } else if ((i % 5) === 0) {
            console.log(`${i} - Buzz`);
        }
    }
}