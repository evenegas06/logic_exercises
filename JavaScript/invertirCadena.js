/*
    Invertir una cadena.
*/

const string = 'hola';

console.log(stringReverseV1(string));
console.log(stringReverseV2(string));

/**
 * Reverse string.
 * 
 * @param {string} string 
 * @returns {string}
 */
function stringReverseV1(string) {
    // split() para devolver un nuevo arreglo
    let split_string = string.split(""); // ["h", "o", "l", "a"]

    // reverse() para invertir el nuevo arreglo creado
    let reverse_array = split_string.reverse(); // ["a", "l", "o", "h"]

    // join() para unir todos los elementos del arreglo en un string
    let join_array = reverse_array.join(""); // "aloh"

    return join_array;
};

/**
 * Reverse string.
 * 
 * @param {string} string 
 * @returns {string}
 */
function stringReverseV2(string) {
    let new_string = "";

    for (let i = string.length - 1; i >= 0; i--) {
        new_string += string[i];
    }
    return new_string;
}
