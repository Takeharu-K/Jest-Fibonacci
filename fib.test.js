const fib = require('./fib');

const arr = [[0, 0], [1, 1], [2, 1], [3, 2]];
test('check Fibonacci' , () => {
	for (let i = arr[0][0]; i < arr.length; i++){
		expect(fib(arr[i][0])).toBe(arr[i][1]);
	}
});

