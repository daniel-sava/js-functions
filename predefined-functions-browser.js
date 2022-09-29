let alertUser = function (message) {
    // functia alert este functie specifica browser-ului
    alert(message);
};

alertUser('Maine este vineri!');

let promptUser = function (message) {
    // functia prompt este functie specifica browser-ului
    let promptResult = prompt(message);

    if (!isNaN(promptResult)) {
        console.log(parseFloat(promptResult));
    } else {
        console.log('Valoare invalida');
    }
};

promptUser('Cat costa produsul?');

function printWebPage() {
    print();
}

print();
