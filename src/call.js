Function.prototype.myCall = function(context=window, ...args){
	let fn = Symbol();
	context[fn] = this;
	const result = context[fn](...args);
	delete context[fn];
	fn = null;
	return result;
}