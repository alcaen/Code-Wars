function add(a, b) {
    const a_lst = a.split('').reverse();
    const b_lst = b.split('').reverse();
    var res = [];
    var acc = 0;
    var larger = a_lst.length >= b_lst.length ? larger = [...a_lst] : larger = [...b_lst];
    while (a_lst.length != b_lst.length) {
        if (a_lst.length > b_lst.length) {
            b_lst.push('0');
        } else {
            a_lst.push('0');
        }
    }
    for (let index = 0; index < larger.length; index++) {
        if ((Number(a_lst[index]) + Number(b_lst[index]) + acc) < 10) {
            res[index] = Number(a_lst[index]) + Number(b_lst[index]) + acc;
            acc = 0;
        } else {
            if (index == larger.length - 1) {
                res[index] = String(Number(a_lst[index]) + Number(b_lst[index]) + acc).split('')[0] + String(Number(a_lst[index]) + Number(b_lst[index]) + acc).split('')[1];
            } else {
                res[index] = String(Number(a_lst[index]) + Number(b_lst[index]) + acc).split('')[1];
                acc = Number(String(Number(a_lst[index]) + Number(b_lst[index]) + acc).split('')[0]);
            }
        }

    }
    return res.reverse().join('')
}