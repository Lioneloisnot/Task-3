const day = 15;
function Decade(day) {
    if (day >= 1 && day <= 10) {
        return "ïåğâàÿ äåêàäà";
    } else if (day >= 11 && day <= 20) {
        return "âòîğàÿ äåêàäà";
    } else if (day >= 21 && day <= 31) {
        return "òğåòüÿ äåêàäà";
    } else {
        return "Îøèáêà: Ââåäåíî íåïğàâèëüíîå çíà÷åíèå!";
    }
}
console.log(`×èñëî ${day} ïîïàäàåò â ${Decade(day)} ìåñÿöà.`);