Function.prototype.myBind = function(context, ...args1) {
	const outerThis = this;
	const cb = function (...args2) {
		const isNew = !!new.target; // 该函数是否被实例化
		return outerThis.call(isNew ? this : context, ...args1, ...args2);
	}
	cb.prototype = outerThis.prototype; // 继承构造函数原型
	return cb;
}