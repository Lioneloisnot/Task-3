let str = "xabcyxabczxabcyabc";
str = str.replace(/x(?=abc)/g, '');
console.log(str);