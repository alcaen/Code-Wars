function solveIt(excel) {

    var excel2 = excel.map(function (arr) {
        return arr.slice();
    });

    let fila = 0;
    let col = 0;

    function transpose(matrix) {
        let [row] = matrix
        return row.map((value, column) => matrix.map(row => row[column]))
    };

    function finderror(matrix) {
        let err = 0;
        let result = [];
        for (let index = 0; index < matrix.length; index++) {
            const element = matrix[index];
            result.push(element.pop());
        };

        for (let index1 = 0; index1 < matrix.length; index1++) {
            const elementt = matrix[index1];
            const initialValue = 0;
            const sumWithInitial = elementt.reduce(
                (previousValue, currentValue) => previousValue + currentValue,
                initialValue
            );
            if (sumWithInitial !== result[index1]) {
                err = index1;
                return (err);
            };
        };
    };


    let transpuesta = transpose(excel)


    col = finderror(transpuesta);

    fila = finderror(excel2);

    let suma = 0;
    for (let index = 0; index < excel[fila].length - 1; index++) {
        suma += excel[fila][index];
    }
    if (col == 3) {
        return (suma)
    } else {
        return (Math.abs(excel[fila][col] + (excel[fila][3] - suma)));
    }
};


var excel = [
    [2, 2, 3, 6],
    [4, 5, 6, 15],
    [7, 8, 9, 24],
    [12, 15, 18, 45]
];
console.log(solveIt(excel));
// 1 is correct instead
// 2 is not correct