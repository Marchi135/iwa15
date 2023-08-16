const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below
const result = [];
const extractBiggest = () => {
	let max = -Infinity;
	let maxIndex = -1;

	data.lists.forEach(([_, list], index) => {
		if (list.length > 0 && list[list.length - 1] > max) {
			max = list[list.length - 1];
			maxIndex = index;
		}
	});

	if (maxIndex !== -1) {
		const [_, list] = data.lists[maxIndex];
		return list.pop();
	} else {
		return 1; // Default value if all lists are empty
	}
};

// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

/*for (let i = 0; i < 15; i++) {
	result.push(extractBiggest());
}*/
console.log(result)