function sumStrings(a, b) {
	a = a == false ? 0 : parseInt(a, 10);
	b = b == false ? 0 : parseInt(b, 10);
	return ((a + b).toString());
}


console.log(sumStrings('', '456'));