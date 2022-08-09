function firstNonRepeatingLetter(s) {
    const array = s.toLowerCase().split('');
    var len = array.length;
    for (let index1 = 0; index1 < array.length; index1++) {
        const element1 = array[index1];
        for (let index2 = 0; index2 < array.length; index2++) {
            const element2 = array[index2];
            if (element1 == element2) {
                len = len - 1;
            };
        }
        if (len == array.length - 1) {
            return (s.split('')[index1]);
        } else {
            len = array.length;
        }
    }
    return ('');
}
console.log(firstNonRepeatingLetter('sTreSS'));
// T