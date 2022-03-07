/**
 * @description Out-of-the-box math utilities.
 * @author <a href="andylovesapple666@icloud.com">Andy Fang</a>
 * @version 1.0.0
 * @since 1.0.0
 * @license MPL-2.0
 */
export const mathUtils = {
    /**
     * @description This method returns a random number in the range [min, max].
     * @param {number} min A small number.
     * @param {number} max A big number.
     * @param {number} decimalPlaces The number of decimal places to retain.
     * @return {number} A random number.
     */
    random: function (min = 0, max = 0, decimalPlaces = 0) {
        let temp;
        if (min > max) {
            temp = min;
            min = max;
            max = temp;
        }
        switch (arguments.length) {
            case 1:
            case 2:
                return Math.floor(Math.random() * (max + 1 - min) + min);
            case 3:
                let result = (Math.random() * (max + 1 - min) + min).toFixed(decimalPlaces);
                while (result > max) {
                    result = (Math.random() * (max + 1 - min) + min).toFixed(decimalPlaces);
                }
                return Number.parseInt(result);
            default:
                return Math.random();
        }
    },

    /**
     * @description This method calculates the factorial of a number.
     * @param {number} number A natural number.
     * @return {number} Factorial result.
     * */
    factorial: function (number) {
        let result = 1;
        while (number) {
            result *= number;
            number--;
        }
        return result;
    },

    /**
     * @description This method returns the corresponding Fibonacci sequence.
     * @param {number} number The number of Fibonacci numbers.
     * @return {number} An array of Fibonacci numbers.
     * @throws {Error} The entered number cannot be less than 0
     */
    fibonacci: function (number) {
        let numbers = [0, 1, 1];
        if (number < 0) throw new Error("The entered number cannot be less than 0");
        if (number >= 3) {
            for (let i = 3; i <= number; i++) {
                numbers[i] = numbers[i - 1] + numbers[i - 2];
            }
        }
        return numbers;
    }
}