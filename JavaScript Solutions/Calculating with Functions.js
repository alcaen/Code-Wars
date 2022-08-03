function zero(a = null) {
    if (a === null) {
        return '0'
    } else {
        var b = '0' + a;
        return read(b)
    }
}

function one(a = null) {
    if (a === null) {
        return '1'
    } else {
        var b = '1' + a;
        return read(b)
    }
}

function two(a = null) {
    if (a === null) {
        return '2'
    } else {
        var b = '2' + a;
        return read(b)
    }
}

function three(a = null) {
    if (a === null) {
        return '3'
    } else {
        var b = '3' + a;
        return read(b)
    }
}

function four(a = null) {
    if (a === null) {
        return '4'
    } else {
        var b = '4' + a;
        return read(b)
    }
}

function five(a = null) {
    if (a === null) {
        return '5'
    } else {
        var b = '5' + a;
        return read(b)
    }
}

function six(a = null) {
    if (a === null) {
        return '6'
    } else {
        var b = '6' + a;
        return read(b)
    }
}

function seven(a = null) {
    if (a === null) {
        return '7'
    } else {
        var b = '7' + a;
        return read(b)
    }

}

function eight(a = null) {
    if (a === null) {
        return '8'
    } else {
        var b = '8' + a;
        return read(b)
    }
}

function nine(a = null) {
    if (a === null) {
        return '9'
    } else {
        var b = '9' + a;
        return read(b)
    }
}

function plus(a) {
    return '+' + a

}

function minus(a) {
    return '-' + a

}

function times(a) {
    return '*' + a
}

function dividedBy(a) {
    return '/' + a

}

function read(b) {
    const splitted = b.split(/[*+-/]/);
    const op = b.match(/[^\d]/)[0];
    switch (op) {
        case '*':
            return parseInt(splitted[0]) * parseInt(splitted[1])
        case '+':
            return parseInt(splitted[0]) + parseInt(splitted[1])
        case '/':
            return parseInt(parseInt(splitted[0]) / parseInt(splitted[1]))
        case '-':
            return parseInt(splitted[0]) - parseInt(splitted[1])
    }
}