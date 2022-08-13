var uniqueInOrder = function (iterable) {
    const array2 = [];
    array = iterable;
    let piv = 'NONE';
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element != piv) {
            piv = element;
            array2.push(piv);
        }
    }
    return (array2);
}

uniqueInOrder([1, 2, 2, 3, 3]);