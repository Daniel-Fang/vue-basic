const arrayProto = Array.prototype;
export const arrayMethods = Object.create(arrayProto);

['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(method => {
    const original = arrayMethods[method];
    Object.defineProperty(arrayMethods, method, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: function mutator(...args) {
            const ob = this.__ob__; // Observer 实例
            const result = original.apply(this, args); // this 指向 arrayMethods 执行原始方法 返回结果
            let inserted;
            switch (method) {
                case 'push':
                case 'unshift': 
                    inserted = args;
                    break;
                case 'splice':
                    inserted = args.slice(2);
                    break;
            }
            if (inserted) ob.observeArray(inserted);
            ob.dep.notify();
            return result;
        }
    });
});

export function protoAugment (target, src, keys) {
    target.__proto__ = src;
}

/**
 * 当 __proto__ 不存在时，直接将方法设置在 target 上
 */
export function copyAugment (target, src, keys) {
    keys.forEach(key => {
        Object.defineProperty(target, key, src[key]);
    })
}