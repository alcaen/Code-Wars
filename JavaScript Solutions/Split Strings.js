function solution(str) {
    const array = [];
    const cantidad = 2;
    if ((str.length / cantidad) % 1 !== 0) {
        str += ('_');
    }
    for (let index = 0; index < str.length; index++) {
        if (index / cantidad % 1 !== 0) {
            array.push((str.slice(index - 1, index + 1)));
        }
    }
    return (array);
}

console.log(solution('abc'));


