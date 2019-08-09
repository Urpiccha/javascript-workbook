// const factorial = n => {
// 	if (n === 1) {
// 		return 1;
// 	} else {
// 		return n * factorial(n - 1);
// 	}
// };
// console.log(factorial(23));

// input : A = {1,2,3,4,5}
// Output : [48]
//          [20,28]
//          [8,12,16]
//          [3,5,7,9]
//          [1,2,3,4,5]

//          Array.length <= 1

//          Array.length - 1

const whiteBoard = arr => {
	if (arr.length === 1) {
		return arr;
	}
	let tempArr = new Array(arr.length - 1);
	for (let i = 0; i <= arr.length; i++) {
		let result = arr[i] + arr[i + 1];
		tempArr[i] = result;
	}
	return "\n" + whiteBoard(tempArr);
};

let arr = [1, 2, 3, 4];
console.log(whiteboard([1, 2, 3, 4]));
