function isSolved(board) {
    // let win = Object.assign({}, board);
    let arr0 = [];
    let arr1 = [];
    let arr2 = [];
    let arr3 = [];
    let arr4 = [];
    for (let index1 = 0; index1 < board.length; index1++) {
        for (let index2 = 0; index2 < board[index1].length; index2++) {
            const element = board[index1][index2];
            // console.log(index1, index2);
            if (index2 == 0) {
                arr0.push(element);
                if (index2 == index1) {
                    arr3.push(element);
                } else if (index1 == 2) {
                    arr4.push(element);
                }
            }
            else if (index2 == 1) {
                arr1.push(element);
                if (index2 == index1) {
                    arr3.push(element);
                    arr4.push(element);
                }
            }
            else if (index2 == 2) {
                arr2.push(element);
                if (index2 == index1) {
                    arr3.push(element);
                } else if (index1 == 0) {
                    arr4.push(element);
                }
            }
        }
    }

    board.push(arr0, arr1, arr2, arr3, arr4);
    let win = Object.assign({}, board);
    function arraysEqual(a, b) {
        if (a === b) return true;
        if (a == null || b == null) return false;
        if (a.length !== b.length) return false;
        for (var i = 0; i < a.length; ++i) {
            if (a[i] !== b[i]) return false;
        }
        return true;
    }

    for (const property in win) {
        if (arraysEqual(win[property], [1, 1, 1])) {
            return (1);
        } else if (arraysEqual(win[property], [2, 2, 2])) {
            return (2);
        }
    }

    for (const property in win) {
        console.log(win[property]);
        if (win[property].includes(0)) {
            return (-1);
        }
    }
    return (0);
    // console.log(win);
}
console.log(isSolved(
    [[1, 2, 1], [1, 1, 2], [2, 2, 0]]))