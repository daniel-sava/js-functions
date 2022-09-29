function sum(a, b) {
    return a + b;
}

let sum1 = sum(5, 20);
console.log(sum1);

console.log(sum(7, 3));
console.log(sum(12, 3));
console.log(sum(7, 7));
console.log(sum(7, 21));

let sumAnonim = function (a, b) {
    return a + b;
};

console.log(sumAnonim(21, 21));
console.log(sumAnonim(31, 21));

let getLastCharacterFromString = (text) => {
    if (typeof text != 'string') {
        return 'Wrong type!';
    }

    return text[text.length - 1];
};

console.log(getLastCharacterFromString('Ultimul caracter'));
console.log(getLastCharacterFromString(21));
