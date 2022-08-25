function findUniq(arr) {
	let uniqueItems = [...new Set(arr)]
	let count1 = 0;
	let count2 = 0;
	for (const element of arr) {
		element === uniqueItems[0] ? count1++ : count2++;
	}
	return (count1 > count2 ? uniqueItems[1] : uniqueItems[0])
}

console.log(findUniq([1, 0, 0]));
