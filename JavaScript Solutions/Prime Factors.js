function prime_factors(n) {
    let div = 2;
    let a = [];
    while (n != 1) {
        if (n % div == 0) {
            a.push(div);
            n = n / div;
        } else {
            div++
        }
    }
    return (a)
}