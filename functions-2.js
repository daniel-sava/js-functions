let ticketsAvailable = 100;
let ticketsSold = 0;

function sellTicket() {
    if (ticketsAvailable > 0) {
        ticketsAvailable--;
        ticketsSold += 1;
    }
}

function printCurrentTicketsSold() {
    console.log(ticketsSold + ' bilete vandute');
}

function areTicketsAvailable() {
    ticketsAvailable++;
    return ticketsAvailable;
}

for (let index = 0; index <= 400; index++) {
    if (index % 2 === 0) {
        sellTicket();
        printCurrentTicketsSold();
    } else {
        areTicketsAvailable();
    }
}

let usersOnline = 100;

let disconnectUser = () => {
    usersOnline--;
    console.log(usersOnline + ' utilizatori online');
};

let checkUsersNumber = () => {
    if (usersOnline === 50) {
        usersOnline = undefined;
    }
};

while (usersOnline) {
    disconnectUser();
    checkUsersNumber();
}
