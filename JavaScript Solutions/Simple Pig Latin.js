function pigIt(str) {
    const array = str.split(' ');
    const array2 = [];
    const array3 = [];
    var yourRegex = /[.,:!?]/g;
    var atLeastOneMatches = '';
    array.forEach(element => {
        array2.push(element.split(''));
    });
    array2.forEach(element => {
        atLeastOneMatches = element.some(e => yourRegex.test(e));
        if (atLeastOneMatches == true) {
            array3.push((element.join('')));
        } else {
            element.push(element.shift());
            element.push('a');
            element.push('y');
            array3.push((element.join('')));
        }
    });
    return (array3.join(' '));
}

console.log(pigIt('Oay emporatay oay oresmay !ay'));