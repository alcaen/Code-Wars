var hanoi = function (disks) {
    return (Math.pow(2, disks) - 1);
};
//  2n − 1
console.log(hanoi(3));