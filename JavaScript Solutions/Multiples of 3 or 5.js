function solution(number) {
    let s = 0;
    let arr = [];
    if (number <= 0) {
        return 0;
    } else {
        for (let index = 1; index < number; index++) {
            arr.push(index);
        }
    }
    arr.forEach(element => {
        if (element % 5 == 0 || element % 3 == 0) {
            s += element;
        }
    });
    return (s);
}
console.log(solution(10));