/**
 * What is the 15th element of the sequent?
 * 1220
 *
 * What is your solution time and space complexity, regarding for the n(th) element of the sequent?
 * Time complexity: O(N)
 * Space complexity: Constant
 *
 * What clean code principles you have been used, and why?
 * In this algorithm, we cannot apply a lot of clean codes. I can say
 * that the function is simple and  importantly speed performance is better than the recursive.
 * I also prefer to use arrow function(es6).
 *
 * Bonus: can you make your code recursive? If yes, what would be your time and space complexity?
 * Yes, but I think the Time Complexity will be bad for our algorithm.
 * Time complexity: O(2^N)
 * Space complexity: O(n)
 *
 *
 */

const fibonacci = num => {
	let x = 2,
		y = 2,
		temp;

	while (num > 1) {
		temp = x;
		x = x + y;
		y = temp;
		num--;
	}

	return y;
};

console.log(fibonacci(15));
