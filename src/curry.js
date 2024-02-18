function curry(fn, ...a) {
	// fn.length 可以获得函数形参的个数，不包括存在默认值的参数以及剩余参数。
	// 只要传入参数的个数能够满足函数形参个数，即传入参数个数大于等于函数形参个数
	// 否则继续返回一个新的函数，接收新的传参
	return a.length >= fn.length 
		? fn(...a)
		: (...b) => curry(fn, ...a, ...b); 
}

// Example:

// const add = (a, b) => a + b;
// const addCurry = curry(add);

// console.log(addCurry(1, 2)); // 3
// console.log(addCurry(1)(2)); // 3