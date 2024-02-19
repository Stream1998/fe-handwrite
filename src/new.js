function newMethod (Constructor, ...rest) {
	// 1.以构造器的 prototype 属性为原型，创建新对象；
	const obj = Object.create(Constructor.prototype);
  // 2.将 this 和调用参数传给构造器执行
  const result = Constructor.apply(obj, rest);
  // 3.如果构造器没有手动返回对象，则返回第一步的对象
  return typeof result  === 'object' ? result : obj;
};