function bigPrimefacDiv(n) {
    function prime(n) {
        var i = 2;
        while (i <= n) {
            if (n % i == 0) {
                n /= i;
            } else {
                i++;
            }
        }
        return (i);
    }
    if (n % 1 != 0) {
        return ('The number has a decimal part.')
    } else {
        n = Math.trunc(Math.abs(n));
    }
    const Long_Prime = prime(n)
    if (Long_Prime == n) {
        return ([]);
    } else {

        for (let index = 2; index < Math.ceil(n / 2); index++) {
            if ((n / index) % 1 == 0) {
                return ([Long_Prime, n / index]);
            }

        }
    }
}
console.log(bigPrimefacDiv(788674423));

// for (let index = Math.ceil(n / 2); index != 2; index--) {
//     if ((n / index) % 1 == 0) {
//         return ([Long_Prime, index]);
//     }
// }
// return [maxPrimeFac, maxFac]
