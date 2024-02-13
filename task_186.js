rl.question('������� ����������� �����: ', (input) => {
    const number = parseInt(input);
    if (isNaN(number) || number <= 0) {
        console.log('����������, ������� ���������� ����������� �����.');
    } else {
        const a = BigNumber(number);
        console.log(`���������� ����� � ����� ${number} ����� ${a}.`);
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