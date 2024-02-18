Object.defineProperty(Object.prototype, 'extends', {
	configurable: true,
	writable: true,
	enumerable: false,
	value: function(o) {
		const names = Object.getOwnPropertyNames(o)
		for(let i = 0; i<names.length; i++) {
			// 如果当前对象存在该属性，就跳过
			if(names[i] in this) continue;
			// 获取属性描述符
			const desc = Object.getOwnPropertyDescriptor(o, names[i]);
			// 设置属性描述符
			Object.defineProperty(this, names[i], desc);
		}
	}
});

// Example:

const a = { name: 'ava' };
Object.defineProperty(a, 'age', {
	configurable: true,
	writable: true,
	enumerable: false, // 不可遍历
	value: 18
})
console.log(a); // { name: 'ava' }
const b = {};
console.log(b); // {}
b.extends(a);
console.log(b); // { name: 'ava' }
