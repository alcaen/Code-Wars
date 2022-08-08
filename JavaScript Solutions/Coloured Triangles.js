function triangle(row) {
    function create_array(array) {
        let sec_array = [];
        let color = '';
        for (let index = 1; index < array.length; index++) {
            if (array[index] === array[index - 1]) {
                color = array[index];
            } else {
                if ((array[index] === 'R' && array[index - 1] === 'G') || (array[index] === 'G' && array[index - 1] === 'R')) {
                    color = 'B';
                } else if ((array[index] === 'R' && array[index - 1] === 'B') || (array[index] === 'B' && array[index - 1] === 'R')) {
                    color = 'G';
                } else {
                    color = 'R';
                }
            }
            sec_array.push(color);
        }
        return (sec_array);
    };
    let arr = row;
    while (arr.length != 1) {
        arr = create_array(arr);
    }
    return (arr[0]);
}

console.log(triangle('RRGBRGBB'));
// R R G B R G B B
//  R B R G B R B
//   G G B R G G
//    G R G B G
//     B B R R
//      B G R
//       R B
//        G