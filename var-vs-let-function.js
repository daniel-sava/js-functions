// var vs let - functions

/*
    LET - block scoped
*/

/*
    VAR - function scoped
*/

function sumOfFirstNNumbers(n) {
    console.log(sum);

    if (n <= 0) {
        return 0;
    } else {
        var sum = 0;
        const constantVar = '20';
        console.log(constantVar);

        for (let index = 1; index <= n; index++) {
            sum = sum + index;
        }

        return sum;
    }
}

console.log(sumOfFirstNNumbers(10));
