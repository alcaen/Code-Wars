function overTheRoad(address, n) {
    if (address % 2 == 0) {
        var op = -1 * (-(n * 2) - 1 + address);
    } else {
        var op = (n * 2) + 1 - address;
    }
    return op;
}