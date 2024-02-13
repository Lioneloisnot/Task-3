function MinMaxWords(str) {
    const words = str.split(/\s+/);
    let maxLength = 0;
    let minLength = 0;
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > words[maxLength].length) {
            maxLength = i;
        }
        if (words[i].length < words[minLength].length) {
            minLength = i;
        }
    }

    const temp = words[minLength];
    words[minLength] = words[maxLength];
    words[maxLength] = temp;

    return words.join(" ");
}
const str = "Jnoibh kn oklkm bbosinv d  ojnlkno ooooooooo hh.";
console.log(MinMaxWords(str));
