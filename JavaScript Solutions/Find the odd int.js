function findOdd(A) {
    var arr = [...new Set(A)]
    var b = arr.reduce((acc, curr) => (acc[curr] = 0, acc), {});
    A.forEach(element => {
        b[element.toString()]++;
    });
    Object.keys(b).forEach(item => {
        if (b[item] % 2 === 0) {
            delete b[item];
        }
    });
    return parseInt(Object.keys(b))
}