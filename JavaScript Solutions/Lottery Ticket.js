function bingo(ticket, win) {
    var aciertos = new Array(ticket.length).fill(0);
    for (let index = 0; index < ticket.length; index++) {
        for (let i = 0; i < ticket[index][0].length; i++) {
            if (ticket[index][0].charCodeAt(i) === ticket[index][1] && aciertos[index] == 0) {
                aciertos[index] = 1;
            }
        }
    }
    console.log(aciertos);
    if (aciertos.reduce((a, b) => a + b, 0) >= win) {
        return ('Winner!');
    } else {
        return ('Loser!');
    }
}