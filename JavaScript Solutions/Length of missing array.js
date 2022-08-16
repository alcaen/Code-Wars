function getLengthOfMissingArray(arrayOfArrays) {
    if (!arrayOfArrays) {
        return 0;
    } else {
        const numarr = [];
        arrayOfArrays.forEach(element => {
            if (!element) {
                return 0;
            }
            numarr.push(element.length);
        });
        if (numarr.includes(0)) {
            return 0;
        }
        numarr.sort(function (a, b) {
            return a - b;
        });
        for (let index = (Math.min(...numarr)); index < (Math.max(...numarr)); index++) {
            if (!numarr.includes(index)) {
                return index;
            }
        }
        return 0;
    }

}

console.log(getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]));
console.log(!null)