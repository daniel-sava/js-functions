let globalNumber = 10;
let globalString = 'Sunt un string';

console.log(globalNumber);
console.log(globalString);

let printGlobalNumber = () => {
    console.log(globalNumber);
};

printGlobalNumber();

if (globalNumber > 5) {
    globalNumber--;

    if (globalNumber < 10) {
        globalString += '!';
    }
}

console.log(globalNumber);
console.log(globalString);

{
    console.log('Sunt block scoped');

    let users = ['Andrei', 'Ioana', 'Marius'];
    {
        console.log(users);
    }
}

while (globalNumber > 0) {
    let currentIteration = 1;
    console.log(currentIteration + ' current iteration');

    globalNumber--;
    currentIteration++;
}
