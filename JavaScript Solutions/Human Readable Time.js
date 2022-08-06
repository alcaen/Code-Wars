function humanReadable(seconds) {
    let res = NaN;
    if (seconds <= 59) {
        res = (`00:00:${seconds}`);
    } else {
        let s = seconds % 60;
        let min = Math.floor(seconds / 60);
        if (min < 60) {
            res = (`00:${min}:${s}`);
        } else {
            let h = Math.floor(min / 60);
            min = min % 60;
            res = (`${h}:${min}:${s}`);

        }
    }
    if (res.length == 8) {
        return (res);
    } else {
        let arr = res.split(':');
        let arr2 = [];

        arr.forEach(element => {
            if (element.length != 2) {
                element = '0' + element;
                arr2.push(element);
            } else {
                arr2.push(element);
            }
        });
        return arr2.join(':');
    }
}
console.log(humanReadable(59))
//12:34:56
// 45296
