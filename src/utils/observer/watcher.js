export default class Watcher {

    constructor (vm, expOrFn, cb) {
        this.vm = cm;
        this.deps = []; // +
        this.depIds = new Set(); // +

        if (typeof expOrFn === 'function') {
            this.getter = expOrFn; // watcher 对象支持 computed 函数
        } else {
            this.getter = parsePath(expOrFn);
        }
        this.cb = cb;
    }

    /**
     * 设置 window.target 为当前 watcher 实例
     * 执行 属性的 get 方法
     * return 新的值
     */
    get () {
        window.target = this; // 将 window.target 设置为 当前 watcher 实例
        let value = this.getter.call(this.vm, this.vm);
        window.target = undefined;
        return value;
    }

    update () {
        const oldValue = this.value;
        this.value = this.get();
        this.cb.call(this.vm, this.value, oldValue);
    }

    addDep (dep) {
        const id = dep.id;
        if (!this.depIds.has(id)) {
            this.depIds.add(id);
            this.deps.push(dep);
            dep.addSubs(this); // 将自己加入 dep 中
        }
    }
}

/**
 * path 监听变量的路径
 * return 一个函数获取路径变量
 */
function parsePath (path) {
    const segments = path.split('.');
    return function (obj) {
        segments.forEach(segment => {
            if (!obj) return;
            obj = obj[segment];
        })
        return obj;
    }
}