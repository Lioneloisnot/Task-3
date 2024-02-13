rl.question('Введите натуральное число: ', (input) => {
    const number = parseInt(input);
    if (isNaN(number) || number <= 0) {
        console.log('Пожалуйста, введите корректное натуральное число.');
    } else {
        const a = BigNumber(number);
        console.log(`Наибольшая цифра в числе ${number} равна ${a}.`);
    }
});

function BigNumber(number) {
    let a = 0;
    while (number > 0) {
        const digit = number % 10;
        if (digit > a) {
            a = digit;
        }
        number = Math.floor(number / 10);
    }
    return a;
}