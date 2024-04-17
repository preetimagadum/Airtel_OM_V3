// Write a program to check if a given number is an Armstrong number or not.

function isArmstrong(number) {

    // Create an array of digits from the number

    let digits = Array.from(number.toString(), Number);

    let order = digits.length;

    const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, order), 0);

    if (sum === number) {

        console.log(`${number} is an Armstrong Number`);

    } else {

        console.log(`${number} is not an Armstrong Number`);

    }

}
