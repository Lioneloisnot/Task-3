const day = 15;
function Decade(day) {
    if (day >= 1 && day <= 10) {
        return "������ ������";
    } else if (day >= 11 && day <= 20) {
        return "������ ������";
    } else if (day >= 21 && day <= 31) {
        return "������ ������";
    } else {
        return "������: ������� ������������ ��������!";
    }
}
console.log(`����� ${day} �������� � ${Decade(day)} ������.`);