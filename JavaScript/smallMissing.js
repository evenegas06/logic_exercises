/*
    Dado un array de números llamado *numbers*,
    devuelve el primer entero positivo mas pequeño que falte.
*/

const numbers = [0, 5, 1, 2, 3, 4, 6, 7, 9];

console.log(smallMissing(numbers));

/**
 * Return the first missing positive number.
 * 
 * @param {array} numbers
 * @return {int}
 */
function smallMissing(numbers) {
    if (numbers.length === 0) {
        return 1;
    }

    const only_positives = numbers.filter((num) => {
        return num > 0;
    });

    const set = new Set(only_positives); // remove repeated numbers

    for (let i = 1; i <= set.size + 1; i++) {
        if (!set.has(i)) {
            return i;
        }
    }
}