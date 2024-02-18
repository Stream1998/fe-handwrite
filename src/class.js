// 将 class 转换为 function
function Example(name) {
	// 必须在严格模式下使用
	'use strict';
	// 只能被 new 创建实例
	// !(this instanceof Example)
	if(!new.target) {
		throw new TypeError('Class constructor Example cannot be invoked without `new`');
	}
	this.name = name;
}

// 定义 constructor 属性，constructor 不可枚举
Object.defineProperty(Example.prototype, 'constructor', {
	value: Example,
	enumerable: false,
})

// 原型上的方法不可被枚举
Object.defineProperty(Example.prototype, 'log', {
	value: function () {
		// 必须在严格模式下使用
		'use strict';
		// 类上的方法不能作为构造函数, 也就是不能使用 new 
		if(new.target) {
			throw new TypeError('this function is not a constructor');
		}
		console.log(this.name);
	},
	enumerable: false,
});

// Example:

const e = new Example('lihua');
console.log(Example === e.constructor);
new e.log();