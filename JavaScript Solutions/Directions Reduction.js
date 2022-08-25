function dirReduc(arr) {

	const vert = arr.filter(element => {
		return element === 'NORTH' || element === 'SOUTH' ? element : false
	}).map(direction => {
		return direction === 'NORTH' ? 1 : -1;
	}).reduce((a, b) => {
		return a + b
	}, 0);
	const vertical = [];
	for (let index = 0; index < Math.abs(vert); index++) {

		vertical.push(vert >= 1 ? 'NORTH' : 'SOUTH')

	}


	const horz = arr.filter(element => {
		return element === 'EAST' || element === 'WEST' ? element : false
	}).map(direction => {
		return direction === 'EAST' ? 1 : -1;
	}).reduce((a, b) => {
		return a + b
	}, 0);
	const horizontal = [];
	for (let index = 0; index < Math.abs(horz); index++) {

		horizontal.push(horz >= 1 ? 'EAST' : 'WEST')

	}
	const finalDirection = [...vertical, ...horizontal]

	return finalDirection;
}


console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "NORTH", "SOUTH", "NORTH", "EAST", "WEST", "EAST", "NORTH", "SOUTH", "EAST", "WEST"]));