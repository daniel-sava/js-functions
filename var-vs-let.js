// var vs let

/*
    LET - block scoped
*/

/*
    VAR - function scoped
*/

let variableGlobalScopedLet = true;
var variableGlobalScopedVar = 20;

// block-scoped hoisting

console.log(variableBlockScopedVar);

{
    let variableBlockScopedLet = 'I am block scoped';
    var variableBlockScopedVar = { name: 'Andrei', age: 28 };

    console.log(variableBlockScopedLet);
    console.log(variableBlockScopedVar);
}

console.log(variableBlockScopedVar);

console.log(variableBlockScopedVar);

{
    console.log(variableBlockScopedVar);
    {
        let variableBlockScopedLet = 'I am block scoped';
        var variableBlockScopedVar = { name: 'Andrei', age: 28 };
    }
    console.log(variableBlockScopedVar);
}

console.log(variableBlockScopedVar);
