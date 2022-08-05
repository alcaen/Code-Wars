function gordon(a) {
    a = a + ' ';
    a = a.toUpperCase();
    a = a.replace(/\s/g, '!!!! ');
    a = a.replace(/['A']/g, '@');
    a = a.replace(/[A,E,I,O,U]/g, '*');
    return (a.trim());
}
console.log(gordon('What feck damn cake'))